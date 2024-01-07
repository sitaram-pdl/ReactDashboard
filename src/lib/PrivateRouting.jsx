import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import { Outlet } from 'react-router-dom';

function PrivateRouting() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-grow max-h-[100vh] overflow-y-auto pb-6 px-20 pt-5'>
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
}

export default PrivateRouting;
