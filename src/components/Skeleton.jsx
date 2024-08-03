import React from 'react'

const Skeleton = ({ imgSrc, text, Pstyles , Cstyles}) => (
    <div className={`${Pstyles}`}>
        <div className={`w-[200px] h-[200px] rounded-full  shadow flex justify-center items-start overflow-hidden animate-pulse bg-gray-200 dark:text-gray-600`}></div>
        <p className='p-2 h-2 mt-2 bg-slate-200 w-[150px] rounded-full'></p>
        <button className='p-2 h-9 mt-2 bg-slate-200 w-[100px] rounded-full'></button>
    </div>
  )

export default Skeleton
