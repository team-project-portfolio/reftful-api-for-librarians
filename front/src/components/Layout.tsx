import { Outlet } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React, { useState } from 'react';
import BookList from './BookList';
import Modal from './../utils/modal';
import { useDispatch } from 'react-redux';
import { open, close } from '../utils/slices/modalSlice';
import { Header} from '../utils/styled';

const Layout = () => {
  const [value, setValue] = useState(0);

  const dispatch = useDispatch();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Header>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="전체 조회" onClick={() => { dispatch(close()) }} />
          <Tab label="ID로 검색" onClick={() => { dispatch(close()) }} />
          {/* <Tab label="등록"  /> */}
          <Tab label="등록" onClick={() => { dispatch(open()) }} />
          <Modal />
        </Tabs>
      </Header>
      <main>
        <BookList />
        {/* <Outlet /> */}
      </main>
    </div>
  )


}

export default Layout;