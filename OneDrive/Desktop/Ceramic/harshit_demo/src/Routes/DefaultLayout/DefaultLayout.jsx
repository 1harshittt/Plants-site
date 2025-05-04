import React from 'react';
import Header from '../../Shared/Common/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Common/Footer';

export default function DefaultLayout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  );
}
