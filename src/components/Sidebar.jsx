// Sidebar.js
import { SidebarContext } from '@/context/SidebarContext';
import { cn } from '@/lib/utils';
import React, { useContext, useState } from 'react';
import SmallLogo from './../assets/logoHalf.png';
import largeLogo from './../assets/logoFull.png';
import SidebarMenu from './SidebarMenu';

import { sidebarMenu } from '@/lib/SideBarmanu';

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);

  return (
    <div
      className={cn(
        `border-r-[0.5px]  h-[100vh] border-[#9a969692] transition-all duration-300 ease-in-out`,
        isSidebarOpen ? 'w-72' : 'w-20'
      )}
    >
      <div className='flex justify-center w-full '>
        <img
          onClick={() => toggleSidebar()}
          className='h-12 w-fit cursor-pointer'
          src={!isSidebarOpen ? SmallLogo : largeLogo}
        />
      </div>

      {/**side bar menu container */}
      <div className='w-full flex  flex-col items-center mt-7'>
        <div className='text-sm flex gap-2 items-center font-medium text-white/60 bg-slate-500/20 py-1 pr-3 pl-1 rounded-full'>
          <div className='h-4 w-4 bg-black rounded-full' />
          {isSidebarOpen && '0* 55545454.....444'}
        </div>
      </div>
      {/**side bar menu  */}

      <SidebarMenu menuItem={sidebarMenu} />
    </div>
  );
};

export default Sidebar;
