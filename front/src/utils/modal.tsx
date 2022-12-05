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
import { close } from './slices/modalSlice';
import { submitEtc } from './slices/submitSlice';
import { RootState } from '../store';
import axios from 'axios';
import { Liink } from './styled';

export default function Modal(this: any) {
  const { door } = useSelector((state: RootState) => state.modalSlice);
  const SubmitData: any = useSelector((state: RootState) => state.submitSlice, shallowEqual);
  const dispatch = useDispatch();
  const titleRefer = useRef<TextFieldProps>(null);
  const authorRefer = useRef<TextFieldProps>(null);
  const countryRefer = useRef<TextFieldProps>(null);
  const priceRefer = useRef<TextFieldProps>(null);
  const ISBNRefer = useRef<TextFieldProps>(null);
  const dateRefer = useRef<any>(null);
  const mounted = useRef(false);
  const [value, setValue] = useState<Dayjs | null>(null);
  const [gender, setGender] = useState('');
  const [presignedUrl, setPresignedUrl] = useState('');
  const [file, setFile] = useState<File>();

  const addFile = async (event: { target: HTMLInputElement }) => {
    //파일 등록되었을 때 S3 url 추출/ 파일 상태를 state에 저장
    try {
      const { data } = await axios.post('http://localhost:8000/api/image-upload');
      setPresignedUrl(data);
      setFile(event.target.files?.[0]);
    } catch (err) {
      alert('S3 Url 요청에 실패하였습니다.')
    }
  }

  const onSubmit = async () => {
    try {
      //S3에 이미지 등록
      await axios.put(presignedUrl, file, {
        headers: {
          'Content-Type': file?.type,
        },
      });

      const thumbnailUrl: string = presignedUrl.split('?')[0];
      const title = titleRefer.current?.value;
      const author = authorRefer.current?.value;
      const country = countryRefer.current?.value;
      const Isbn = ISBNRefer.current?.value;
      const price = priceRefer.current?.value;
      const year = dateRefer.current?.value;

      if (!title || !author || !country || !Isbn || !price || !year || !thumbnailUrl || !gender) {
        alert('누락된 부분이 있습니다!');
        return;
      }
      dispatch(submitEtc({
        title: title,
        author: author,
        country: country,
        ISBN: Isbn,
        price: price,
        gender: gender,
        year: year,
        imageUrl: thumbnailUrl
      }));
    } catch (err) {
      console.log(err);
      alert('등록에 실패하였습니다. 잠시 후 다시 시도해 주세요.');
    }
  }

  useEffect(() => {
    if (!mounted.current) {
      //최초 렌더링 시에 실행. 마운트 시 실행 방지
      mounted.current = true;
    } else {
      const fetchBooks = async () => {
        try {
          await axios.post('http://localhost:8000/api/books', SubmitData);
          alert('도서가 정상적으로 등록되었습니다');
          dispatch(close());
        } catch (err) {
          alert('등록에 실패하였습니다. 잠시 후 다시 시도해 주세요.');
        }
      }
      fetchBooks();
    }

  }, [SubmitData])

  return (
    <div>
      <Dialog open={door} onClose={() => { dispatch(close()); console.log(12); }} >
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
              inputRef={priceRefer}
              margin="dense"
              label="Price"
              type="number"
              variant="standard"
            />
            <TextField
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
              margin="dense"
              type="file"
              onChange={addFile.bind(this)}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Liink to='/'> <Button onClick={() => { dispatch(close()) }}>취소</Button></Liink>
          <Button onClick={onSubmit}>등록</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}