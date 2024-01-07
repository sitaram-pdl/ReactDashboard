import { SidebarContext } from '@/context/SidebarContext';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronRight, IceCream } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

function SidebarMenu({ menuItem }) {
  const location = useLocation();

  const [selectedMenu, setSelectedMenu] = useState('');
  const { isSidebarOpen } = useContext(SidebarContext);
  const navigate = useNavigate();
  const [selectedSubMenu, setSelectedSubMenu] = useState('');

  useEffect(() => {
    navigate(decodeURIComponent(location?.pathname)?.slice(1) || 'Profile');
    setSelectedMenu(
      decodeURIComponent(location?.pathname)?.slice(1) || 'Profile'
    );
  }, []);

  return (
    <div className=' flex flex-col mt-7 '>
      {menuItem.map((item, i) => (
        <>
          <SingleMenu
            onnClick={() => {
              !item.subMenu && setSelectedMenu(item.text);
              item.subMenu &&
                setSelectedMenu(item.text === selectedMenu ? '' : item.text);
              !item.subMenu && navigate(item.text);
            }}
            selected={item.text === selectedMenu}
            key={i}
            setSelectedSubMenu={setSelectedSubMenu}
            selectedSubMenu={selectedSubMenu}
            className={cn(
              'flex items-center gap-2',
              item.text === selectedMenu && 'text-green-500'
            )}
          >
            {!isSidebarOpen && (
              <Tooltip>
                <TooltipTrigger>{item?.icon}</TooltipTrigger>
                <TooltipContent>{item.text}</TooltipContent>
              </Tooltip>
            )}

            {isSidebarOpen && item?.icon}

            {isSidebarOpen && item.text}

            {item.subMenu && (
              <ChevronDown
                size={!isSidebarOpen ? 15 : 19}
                className={cn(
                  'absolute right-0 top-2 ',
                  item.text === selectedMenu && '-rotate-180',
                  isSidebarOpen ? 'right-2 top-2' : ''
                )}
              />
            )}
            {/* {menuItem.subMenu && 'v'} */}
          </SingleMenu>
          <div>
            {item.subMenu &&
              selectedMenu === item.text &&
              item.subMenu.map((subMenuItem, key) => (
                <SingleMenu
                  onnClick={() => {
                    setSelectedMenu(item.text);
                    navigate(subMenuItem.text);
                    setSelectedSubMenu(subMenuItem.text);
                  }}
                  selected={subMenuItem.text === selectedSubMenu}
                  key={key}
                  className={cn(
                    'flex items-center gap-2',
                    subMenuItem.text === selectedSubMenu && 'text-green-500'
                  )}
                  isSubMenu={!!item.subMenu}
                >
                  {!isSidebarOpen && (
                    <Tooltip>
                      <TooltipTrigger>{subMenuItem?.icon}</TooltipTrigger>
                      <TooltipContent>{subMenuItem.text}</TooltipContent>
                    </Tooltip>
                  )}
                  {isSidebarOpen && item?.icon}
                  {isSidebarOpen && subMenuItem.text}
                </SingleMenu>
              ))}
          </div>
        </>
      ))}
    </div>
  );
}

export default SidebarMenu;

const SingleMenu = ({ children, selected, onnClick, className, isSubMenu }) => {
  const [hover, setHover] = useState(false);

  const { isSidebarOpen } = useContext(SidebarContext);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onnClick}
      className={cn(
        ' py-2 flex cursor-pointer   gap-2 text-white/70 relative  animatefadeInOut',
        isSidebarOpen ? 'pl-9' : 'pl-7',
        isSubMenu ? 'pl-11' : '',
        !isSidebarOpen && isSubMenu && 'pl-8',

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
