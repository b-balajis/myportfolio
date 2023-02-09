import React from 'react';
import TextField from '@mui/material/TextField';

const Contact = () => {
  return (
    <div className='mx-auto lg:max-w-7xl mb-[30vh]'>
        <h1 className='text-center text-5xl font-bold'>Contact Me</h1>
        <div className='w-1/2 flex flex-col gap-y-4  mt-[10vh]'>
        <TextField required id="outlined-basic" label="Your Name" variant="outlined" />
        <TextField required id="outlined-basic" label="Email ID" variant="outlined" />
        <TextField required id="outlined-basic" label="Subject" variant="outlined" />
        <TextField id="outlined-basic" label="Message" variant="outlined" />
        </div>
    </div>
  )
}

export default Contact
