import React from 'react';
import Sidebar from '../../Components/Navbar/SideBar/Sidebar';
import {Route,Routes} from "react-router-dom"
import List_Product from '../../Components/Navbar/List_Product/List_Product';
import Add_Product from '../../Components/Navbar/Add_Product/Add_Product';

const Admin = () => {
  return (
    <div className='flex max-md:flex-col'>
      <Sidebar/>

      <Routes>
        <Route path='/addproduct' element ={<Add_Product/>}/>
        <Route path='/listproduct' element ={<List_Product/>}/>
      </Routes>

    </div>
  );
}

export default Admin;
