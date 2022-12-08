import React, { useRef, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { close, checkImg } from '../utils/slices/modalSlice';
import { submitEtc, upCheck } from '../utils/slices/submitSlice';
import { RootState } from '../store';
import axios from 'axios';
import { Liink } from '../utils/styled';
import { useNavigate, useParams } from 'react-router-dom';
import { Book } from '../interface/interface';

import { validateLength } from '../utils/validation/modal';

const Modal = () => {
  const door = useSelector((state: RootState) => state.modalSlice.door);
  const useImg = useSelector((state: RootState) => state.modalSlice.useImg);
  const submitData = useSelector((state: RootState) => state.submitSlice.submitData);
  const dispatch = useDispatch();
  const titleRefer = useRef<TextFieldProps>(null);
  const authorRefer = useRef<TextFieldProps>(null);
  const countryRefer = useRef<TextFieldProps>(null);
  const priceRefer = useRef<TextFieldProps>(null);
  const ISBNRefer = useRef<TextFieldProps>(null);
  const dateRefer = useRef<any>(null);
  const mounted = useRef<boolean>(false);
  const mountedTwo = useRef<boolean>(false);
  const [value, setValue] = useState<Dayjs | null>(null);
  const [gender, setGender] = useState<string>('');
  const [presignedUrl, setPresignedUrl] = useState('');
  const [file, setFile] = useState<File | null>(); //변수로 바꿔도 됨
  const [data, setData] = useState<Book | null>(null);//변수로 바꿔도 됨
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (!mountedTwo.current) {
      mountedTwo.current = true;
    } else {
      //parmas를 통해 id가 있으면 모달을 수정용으로 보여주기 위해 최초 설정
      if (id) {
        const getIdData = async () => {
          try {
            const res = await axios.get(`http://localhost:8000/api/books/${id}`);
            setData(res.data);
            setValue(res.data?.year);
            setGender(res.data?.gender)
          } catch (err) {
            alert('id UseEffect');
          }
        }
        getIdData();
      }
      else {
        setValue(null);
      }
    }
  }, [id]);

  useEffect(() => {
    if (!mounted.current) {
      //최초 렌더링 시에 실행. 마운트 때의 실행 방지
      mounted.current = true;
    } else {
      //parmas에 id가 있으면 모달은 수정용으로 작동
      if (id) {
        const putBooks = async () => {
          try {
            await axios.put(`http://localhost:8000/api/books/${id}`, submitData);
            alert('도서가 정상적으로 수정되었습니다');
            dispatch(close());
            dispatch(upCheck());
            navigate('/');
          } catch (err) {
            alert('수정에 실패하였습니다. 잠시 후 다시 시도해 주세요.');
          }
        }
        putBooks();

      } else {
        const fetchBooks = async () => {
          try {
            await axios.post('http://localhost:8000/api/books', submitData);
            alert('도서가 정상적으로 등록되었습니다');
            dispatch(close());
            dispatch(upCheck());
            setValue(null);
          } catch (err) {
            alert('등록에 실패하였습니다. 잠시 후 다시 시도해 주세요.');
          }
        }
        fetchBooks();
      }
    }
  }, [submitData]);

  const addFile = async (event: { target: HTMLInputElement }) => {
    //파일 change 됐을 때 S3 url 추출/ 파일 상태를 state에 저장
    try {
      const { data } = await axios.post('http://localhost:8000/api/image-upload');
      setPresignedUrl(data);
      setFile(event.target.files?.[0]);
    } catch (err) {
      alert('S3 Url 요청에 실패하였습니다.')
    }
  }

  const onSubmit = async () => {
    let tmpData;
    try {
      //모달 수정에서 기존 이미지 사용 여부에 따라 thumbnailUrl이 유동적 
      let imageUrl: string | undefined = '';
      if (useImg) {
        imageUrl = data?.imageUrl;
      }
      else {
        //S3에 이미지 등록
        try {
          await axios.put(presignedUrl, file, {
            headers: {
              'Content-Type': file?.type,
            },
          });
        } catch (err) {
          throw '이미지 파일을 첨부해 주세요';
        }
        imageUrl = presignedUrl.split('?')[0];
      }
      const title: string | any = titleRefer.current?.value;
      const author: string | any = authorRefer.current?.value;
      const country: string | any = countryRefer.current?.value;
      const ISBN: string | any = ISBNRefer.current?.value;
      const price: string | any = priceRefer.current?.value;
      const year: string | any = dateRefer.current?.value;

      tmpData = {
        title: title,
        author: author,
        country: country,
        ISBN: ISBN,
        price: price,
        gender: gender,
        year: year,
        imageUrl: imageUrl,
      }

      validateLength(tmpData);
      dispatch(submitEtc(tmpData));
      //임시 데이터 먼저 올림. 이 데이터에 썼던 몇몇 state는 초기화
      setPresignedUrl('');
      setGender('');
      setFile(null);
    } catch (err) {
      alert(err);
    }
    console.log(tmpData);
    console.log(submitData)
  }

  return (
    <div>
      <Dialog open={door} onClose={() => { dispatch(close()); navigate('/'); }} >
        <DialogTitle>도서 등록하기</DialogTitle>
        <DialogContent>
          <DialogContentText>
            아래 양식에 맞춰 작성해 주십시오.
          </DialogContentText>
          {/* 제목-text */}
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 2, width: '58ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              defaultValue={id && data?.title}
              inputRef={titleRefer}
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="text"
              variant="standard"
            />
          </Box>
          {/* 작가-text,  성별-Radio */}
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 2, width: '27ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              defaultValue={id && data?.author}
              inputRef={authorRefer}
              margin="dense"
              id="name"
              label="Author"
              type="text"
              variant="standard"
            />

            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                defaultValue={id && data?.gender}
                onChange={(e) => { setGender(e.target.value) }}
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
              </RadioGroup>
            </FormControl>
            {/* 국가-text, 연도-text */}
            <TextField
              defaultValue={id && data?.country}
              inputRef={countryRefer}
              margin="dense"
              label="Country"
              type="text"
              variant="standard"
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                inputRef={dateRefer}
                label="Year"
                views={['year']}
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            {/* ISBN-text, 가격-text */}
            <TextField
              defaultValue={id && data?.price}
              inputRef={priceRefer}
              margin="dense"
              label="Price"
              type="number"
              variant="standard"
            />
            <TextField
              defaultValue={id && data?.ISBN}
              inputRef={ISBNRefer}
              margin="dense"
              label="ISBN"
              type="text"
            />
          </Box>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 2, width: '58ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              disabled={useImg && true}
              margin="dense"
              type="file"
              onChange={addFile.bind(this)}
            />
          </Box>

          {id && <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <img src={data?.imageUrl} style={{ width: '100px', height: '100px' }} />
            <div style={{ margin: '3px 4px' }}>
              <p>본 이미지는 등록된 도서의 썸네일입니다. 하단의 버튼을 통해 이미지 사용 여부를
                결정해 주세요.
              </p>
              {
                useImg ?
                  <Button onClick={() => { dispatch(checkImg(false)) }}>새 이미지 등록</Button>
                  : <Button onClick={() => { dispatch(checkImg(true)) }}>기존 이미지 사용</Button>
              }
            </div>
          </div>}

        </DialogContent>
        <DialogActions>
          <Liink to='/'> <Button onClick={() => { dispatch(close()) }}>취소</Button></Liink>
          <Button onClick={onSubmit}>등록</Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}

export default Modal;