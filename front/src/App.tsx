import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import TabLogin from './components/tabLogin';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='post/books/:id' element={<Layout />} />
      <Route path='delete/books/:id' element={<Layout />} />
      <Route path='/login' element={<TabLogin />} />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}

export default App;