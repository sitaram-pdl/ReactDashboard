import Notice from '@/Section/Notice';
import DataTable from '@/components/Table';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Table } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import {
  BedIcon,
  Bitcoin,
  CarIcon,
  FireExtinguisher,
  HandIcon,
  IceCreamIcon,
  Menu,
  PiIcon,
  QrCode,
  RssIcon,
  Tv2Icon,
  Wallet,
} from 'lucide-react';
import React, { useState } from 'react';

function Dashboard() {
  const defaultIcon = <HandIcon size={'15px'} />;

  const wordsArray = [
    { text: 'All', icon: <QrCode size={'15px'} /> },
    { text: 'Cosmos', icon: <PiIcon size={'15px'} /> },
    { text: 'Secret', icon: defaultIcon },
    { text: 'BNB', icon: <Bitcoin size={'15px'} /> },
    { text: 'Harmony', icon: defaultIcon },
    { text: 'Aurora', icon: <IceCreamIcon size={'15px'} /> },
    { text: 'Thor', icon: defaultIcon },
    { text: 'Bitcoin', icon: <Bitcoin size={'15px'} /> },
    { text: 'Cardano', icon: defaultIcon },
    { text: 'Ethereum', icon: <FireExtinguisher size={'15px'} /> },
    { text: 'Terra', icon: defaultIcon },
    { text: 'Solana', icon: <BedIcon size={'15px'} /> },
    { text: 'Polygon', icon: <CarIcon size={'15px'} /> },
    { text: 'Binance', icon: <Tv2Icon size={'15px'} /> },
    { text: 'Ava', icon: <RssIcon size={'15px'} /> },
  ];

  const [select, setSelect] = useState('All');

  const [checked, setChecked] = useState(false);

  const capitalizeFirstThree = (inputString) => {
    return inputString.slice(0, 3).toUpperCase();
  };

  const capitalizeFirstTwo = (inputString) => {
    return inputString.slice(0, 1).toUpperCase();
  };

  const columns = [
    {
      accessorKey: 'assets',
      header: 'Assets',

      cell: ({ row }) => (
        <div className='flex gap-2 text-white/80'>
          <div className='relative w-fit'>
            <div className='h-9 w-9 bg-white rounded-full flex items-center justify-center text-black font-bold  '>
              {capitalizeFirstTwo(row.assets)}
            </div>
            <div className='bg-green-400 h-4 w-4 absolute -right-1 -top-1 rounded-full'></div>
          </div>
          <div className='flex flex-col gap-1'>
            <div>{row.assets}</div>
            <div>{capitalizeFirstThree(row.assets)}</div>
          </div>
        </div>
      ),
    },
    { accessorKey: 'balance', header: 'Balance' },
    { accessorKey: 'price', header: 'Price' },
    { accessorKey: 'value', header: 'Value' },
  ];

  const data = [
    { assets: 'Bmw car', balance: '1000', price: '$50', value: '$50,000' },
    { assets: 'lamborghini', balance: '500', price: '$30', value: '$15,000' },
    { assets: 'Tesla', balance: '800', price: '$70', value: '$56,000' },
    { assets: 'Toyota', balance: '300', price: '$25', value: '$7,500' },
    { assets: 'Honda', balance: '600', price: '$40', value: '$24,000' },
    { assets: 'Ford', balance: '750', price: '$60', value: '$45,000' },
    { assets: 'Chevrolet', balance: '450', price: '$35', value: '$15,750' },
    { assets: 'Mercedes', balance: '900', price: '$80', value: '$72,000' },
    { assets: 'Audi', balance: '200', price: '$20', value: '$4,000' },
    { assets: 'Nissan', balance: '550', price: '$45', value: '$24,750' },
  ];

  return (
    <div className='pt-6'>
      {/**tab section */}

      <div className='flex flex-wrap gap-2'>
        {wordsArray.map((item) => (
          <div
            className={cn(
              'text-[13px] font-medium cursor-pointer  flex gap-1 justify-center  items-center bg-[#ffffff1b] text-[#ffffffc0] border-solid border-[#ffffff89] border-[1px] rounded-full px-2 py-[2px]',
              select === item.text
                ? 'bg-[#13f287] hover:bg-opacity-90 text-black'
                : 'hover:bg-[#13f287] hover:bg-opacity-80 '
            )}
            key={item.text}
            onClick={() => setSelect(item.text)}
          >
            {item.icon} {item.text}
          </div>
        ))}
        <div className='text-[13px] font-medium  cursor-pointer  flex gap-0  items-center bg-[#ffffff1b] text-[#ffffffc0] border-solid border-[#ffffff89] border-[1px] rounded-full px-2 py-[0.5px]'>
          Show All {`(${25})`}
        </div>
      </div>
      {/**notice section */}
      <Notice />
      <div className='flex justify-between mt-5 gap-4'>
        <div className='flex divide-x-2 gap-6'>
          <div className='flex gap-2 items-center'>
            <Wallet size={15} /> Wallet
          </div>
          <div
            className={cn(
              'flex gap-4 items-center',
              checked === false ? 'opacity-80' : ''
            )}
          >
            <Checkbox
              checked={checked}
              onClick={() => setChecked(!checked)}
              // onChange={() => setChecked(!checked)}
              className='ml-3'
            />{' '}
            Hide small balances
          </div>
        </div>

        <div>$529569</div>
      </div>
      {/**Table section */}
      {/* <Table data={data} column={columns} /> */}

      <DataTable data={data} columns={columns} />
    </div>
  );
}

export default Dashboard;
