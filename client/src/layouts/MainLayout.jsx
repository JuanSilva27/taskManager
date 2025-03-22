import React from 'react';
import { Header } from '../components/header';
import { SideBar } from '../components/SideBar';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
    return (
        <div className="bg-gray-200">
          <Header />
          <div className="md:flex md:min-h-screen">
            <SideBar />
            <main className="flex-1 p-10">
              <div className='bg-white p-5 shadow mt-10 rounded-md'>
                <Outlet></Outlet>
              </div>
            </main>
          </div>
        </div>
    );
};
