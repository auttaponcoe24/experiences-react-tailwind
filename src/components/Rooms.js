import React from 'react'

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
            <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
            <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, repudiandae non. Similique, perferendis nemo! Voluptatem.</p>

        </div>

        <div className='grid grid-cols-2 col-span-2 gap-2'>
            <img 
                className='object-cover w-full h-full'
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="/" />
            <img 
                className=' row-span-2 object-cover w-full h-full'
                src="https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="/" />
            <img 
                className='object-cover w-full h-full'
                src="https://plus.unsplash.com/premium_photo-1675615649180-045cc3567554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="/" />
        </div>
    </div>
  )
}

export default Rooms