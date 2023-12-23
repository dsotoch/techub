import { Attention } from '@/components/home/attention';
import { Blog } from '@/components/home/blog';
import { Clients } from '@/components/home/clients';
import { OurServices } from '@/components/home/ourServices';
import { Services } from '@/components/home/services';
import { SuccessStories } from '@/components/home/successStories';
import { TecHub } from '@/components/home/techub';

import React from 'react';
const Home = () => {
  return (
    <div className='container bg-white mx-auto'>
      <div className="mx-auto">
        <div className="max-w-1/3"><Services /></div>
      </div>
      {/*<div className='mx-auto grid justify-center'>
        <div className=''><Clients /></div>
      </div> */}

      <div className='mx-auto flex justify-center mt-10'>
        <TecHub />
      </div>
      <div className='mx-auto grid justify-center mt-10'>
        <OurServices />
      </div>
      <div className='mx-auto grid justify-center mt-10'>
        <Attention />
      </div>
      <div className='mx-auto flex justify-center  mt-10'>
        <SuccessStories />
      </div>
      <div className='mx-auto flex justify-center  mt-10'>
        <Blog />
      </div>

    </div>





  );
};

export default Home;