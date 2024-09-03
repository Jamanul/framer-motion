import React from 'react';

const Education = () => {
    return (
        <div>
            <div className='text-center'><h2 className="text-5xl mt-40 mb-10 font-bold text-primary bg-gradient-to-r from-primary to-slate-400 text-transparent inline-block bg-clip-text">
          My Education
        </h2></div>
        <div className='space-y-6'>
            <div className='bg-[#140C1C] p-8 space-y-2 rounded-3xl '>
                <h2 className='text-primary text-2xl font-bold'>2021-Present</h2>
                <h2 className='text-text font-bold text-4xl'>Bachelors of science </h2>
                <p>Govt Hazi Muhammad Mohsin College</p>
            </div>
            <div className='bg-[#140C1C] p-8 space-y-2 rounded-3xl '>
                <h2 className='text-primary text-2xl font-bold '>2018-2019</h2>
                <h2 className='text-text font-bold text-4xl'>Higher Secondary Certificate </h2>
                <p>BAF Shaheen College, Chattogram</p>
            </div>
            <div className='bg-[#140C1C] p-8 space-y-2 rounded-3xl '>
                <h2 className='text-primary text-2xl font-bold'>2016-2017</h2>
                <h2 className='text-text font-bold text-4xl'>Secondary School Certificate </h2>
                <p>BN School and College, Chattogram</p>
            </div>
        </div>
        </div>
    );
};

export default Education;