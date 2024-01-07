import React from 'react';

function Notice() {
  const dataArray = [
    { text: 'Net worth', value: '$4,012.40' },
    { text: 'Total rewards', value: '$0' },
    { text: 'Total assets', value: '$5,249.95' },
    { text: 'Total debts', value: '$100' },
  ];

  return (
    <div className='flex flex-wrap justify-around pt-7'>
      {dataArray.map((item, i) => (
        <div
          className='flex flex-col w-[24%] p-5  items-start border-[#13f287] border-[1px] border-b-4 rounded-lg'
          key={i}
          style={{
            backgroundImage:
              'linear-gradient(to bottom left,transparent 60%, #00ff0027 )',
          }}
        >
          <div className='opacity-75 text-sm'>{item.text}</div>
          <div className='text-2xl font-medium text-[#13f287]'>
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notice;
