import React, { useState } from 'react';
import { Button } from './ui/button';
import { useLocation } from 'react-router-dom';

function Topbar() {
  const location = useLocation();
  const [selected, setSelected] = useState('Portfolio');

  const array = ['Portfolio', 'History', 'Analytics'];

  return (
    <div className='flex justify-between border-b-[0.5px] border-[#9a969692] pb-3'>
      <div className='text-2xl'>
        {decodeURIComponent(location?.pathname)?.slice(1)}{' '}
      </div>
      <div className='flex gap-3'>
        {array.map((item) => (
          <Button
            onClick={() => setSelected(item)}
            key={item}
            variant={item === selected ? '' : 'ghost'}
          >
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Topbar;
