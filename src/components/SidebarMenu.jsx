import { SidebarContext } from '@/context/SidebarContext';
import { cn } from '@/lib/utils';
import { IceCream } from 'lucide-react';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

function SidebarMenu({ menuItem }) {
  const [selectedMenu, setSelectedMenu] = useState('Profile');
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);
  const navigate = useNavigate();

  return (
    <div className='mt-4 flex flex-col '>
      {menuItem.map((item, i) => (
        <SingleMenu
          onnClick={() => {
            setSelectedMenu(item.text);
            navigate(item.text);
          }}
          selected={item.text === selectedMenu}
          key={i}
          className='flex  items-center gap-2'
        >
          {!!isSidebarOpen && (
            <Tooltip>
              <TooltipTrigger>{item?.icon}</TooltipTrigger>
              <TooltipContent>{item.text}</TooltipContent>
            </Tooltip>
          )}
          {!isSidebarOpen && item?.icon}
          {isSidebarOpen && item.text}
          {/* {menuItem.subMenu && 'v'} */}
        </SingleMenu>
      ))}
    </div>
  );
}

export default SidebarMenu;

const SingleMenu = ({ children, selected, onnClick, className }) => {
  const [hover, setHover] = useState(false);

  const { isSidebarOpen } = useContext(SidebarContext);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onnClick}
      className={cn(
        ' py-2 flex cursor-pointer  gap-2 text-white/70 relative',
        isSidebarOpen ? 'pl-9' : 'pl-7',
        className
      )}
      style={{
        backgroundImage:
          selected || hover
            ? 'linear-gradient(to right, #00ff0025 , #80808005 30% )'
            : '',
      }}
    >
      {selected && (
        <div
          className={cn(
            'border-l-2 border-[#00ff00]/60 h-[60%] py-1 absolute left-3 top-2',
            isSidebarOpen ? 'left-3' : 'left-1'
          )}
        />
      )}

      {children}
    </div>
  );
};
