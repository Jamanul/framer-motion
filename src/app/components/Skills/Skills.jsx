import Image from 'next/image';
import React from 'react';

const Skills = () => {
    return (
        <div>
            <div className="text-center">
        <h2 className="text-5xl mt-40 mb-10 font-bold text-primary bg-gradient-to-r from-primary to-slate-400 text-transparent inline-block bg-clip-text">
          My Skills
        </h2>
        <h2 className="text-2xl text-text mb-10">
          Here is the skill I have acquired over the year to build dynamic and user-friendly website.
        </h2>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-6'>
        <div className='border-primary bg-[#140C1C] border-2 mb-4 flex flex-col rounded-3xl p-4 h-36 w-36'>
            <Image src="/js2.png" width={100} height={100} className='pl-2 h-24 w-24 filter grayscale hover:transition hover:grayscale-0 hover:duration-1000 hover:ease-in-out hover:scale-110' alt="" srcset="" />
            <h2 className=' text-primary text-center'>Javascript</h2>
        </div>
        <div className='border-primary bg-[#140C1C] border-2 flex mb-4 flex-col rounded-3xl p-4 h-36 w-36'>
            <Image width={100} height={100} src="/react.png" className='pl-2 h-24 w-24 filter grayscale hover:transition hover:grayscale-0 hover:duration-1000 hover:ease-in-out hover:scale-110' alt="" srcset="" />
            <h2 className=' text-primary text-center'>React</h2>
        </div>
        <div className='border-primary bg-[#140C1C] border-2 flex mb-4 flex-col rounded-3xl p-4 h-36 w-36'>
            <Image width={100} height={100} src="/tailwind2.png" className='pl-2 h-24 w-24 filter grayscale hover:transition hover:grayscale-0 hover:duration-1000 hover:ease-in-out hover:scale-110' alt="" srcset="" />
            <h2 className=' text-primary text-center'>Tailwind</h2>
        </div>
        <div className='border-primary bg-[#140C1C] border-2 mb-4 flex flex-col rounded-3xl p-4 h-36 w-36'>
            <Image width={100} height={100} src="/mongo.png" className='pl-2 h-24 w-24 filter grayscale hover:transition hover:grayscale-0 hover:duration-1000 hover:ease-in-out hover:scale-110' alt="" srcset="" />
            <h2 className=' text-primary text-center'>MongoDb</h2>
        </div>
        <div className='border-primary bg-[#140C1C] border-2 mb-4 flex flex-col rounded-3xl p-4 h-36 w-36'>
            <Image width={100} height={100} src="/node.png" className='pl-2 h-24 w-24 filter grayscale hover:transition hover:grayscale-0 hover:duration-1000 hover:ease-in-out hover:scale-110' alt="" srcset="" />
            <h2 className=' text-primary text-center'>Node JS</h2>
        </div>
        <div className='border-primary bg-[#140C1C] border-2 mb-4 flex flex-col rounded-3xl p-4 h-36 w-36'>
            <Image width={100} height={100} src="/next.svg" className='pl-2 h-24 w-24 filter grayscale hover:transition hover:grayscale-0 hover:duration-1000 hover:ease-in-out hover:scale-110' alt="" srcset="" />
            <h2 className=' text-primary text-center'>Next JS</h2>
        </div>
        
      </div>
        </div>
    );
};

export default Skills;