import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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
import { useDispatch, useSelector } from 'react-redux';
import { open, close } from './modalSlice';
import {  RootState } from '../store';


export default function Modal() {
  const {door}=useSelector((state: RootState)=>state.modalSlice);
 const dispatch=useDispatch();
  const [value, setValue] = React.useState<Dayjs | null>(null);

  return (
    <div>
      <Dialog open={door} onClose={()=>{dispatch(close())}} >
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

              margin="dense"
              id="name"
              label="Author"
              type="text"

              variant="standard"
            />

            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
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

              margin="dense"
              id="name"
              label="Country"
              type="text"

              variant="standard"
            />


            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
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

              margin="dense"
              id="name"
              label="Price"
              type="number"
              variant="standard"
            />
            <TextField

              margin="dense"
              id="name"
              label="ISBN"
              type="text"

            />

          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{dispatch(close())}}>취소</Button>
          <Button onClick={()=>{dispatch(close())}}>등록</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}