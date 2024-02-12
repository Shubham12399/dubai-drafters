import { GoSearch, GoX } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Search = () => {
  return (
    <div className='max-w-maxWidthContent mx-auto px-2'>
        <div className='flex gap-x-3 items-center mt-4 md:gap-x-4 px-2'>
        <div className='border border-richblack-900 rounded-md py-2 px-3 w-full flex gap-x-1 items-center'>
            <GoSearch></GoSearch>
            <input type="search" placeholder='Search' className='flex-grow text-sm GTE_light md:text-[15px] cursor-pointer  outline-none border-none text-richblack-900 placeholder:text-richblack-400 pl-2'/>
        </div>
        <Link className='text-richblack-900 text-xs md:text-sm GTE_light md:text-[15px] cursor-pointer'>Cancel</Link>
        </div>


        <div className='mt-8 w-full '>
            <ul className='my-4'>
                <li className='text-sm text-medium md:text-[16px] text-richblack-900 mb-1 px-3'>Recent search</li>
                <li className='px-3 text-sm GTE_light md:text-[15px] cursor-pointer w-full py-1 text-richblack-700 flex gap-y-1 items-center justify-between pr-2 hover:before:bg-[rgba(0,0,0,0.04)] before:block before:px-16 before:w-full before:absolute before:top-0 before:left-0 before:h-full before:rounded-md  relative'><span className='GTE_light'>Dubai</span> <GoX></GoX> </li>
                <li className='px-3 text-sm GTE_light md:text-[15px] cursor-pointer w-full py-1 text-richblack-700 flex gap-y-1 items-center justify-between pr-2 hover:before:bg-[rgba(0,0,0,0.04)] before:block before:px-16 before:w-full before:absolute before:top-0 before:left-0 before:h-full before:rounded-md  relative'><span className='GTE_light'>Dubai</span> <GoX></GoX> </li>
            </ul>
            <ul className='my-4 px-3'>
                <li className='text-sm text-medium md:text-[16px] text-richblack-900 mb-1'>Destination</li>
                <li className='text-sm GTE_light md:text-[15px] cursor-pointer my-1 text-richblack-700'>Dubai</li>
                <li className='text-sm GTE_light md:text-[15px] cursor-pointer my-1 text-richblack-700'>Dubai</li>
                <li className='text-sm GTE_light md:text-[15px] cursor-pointer my-1 text-richblack-700'>Dubai</li>
                <li className='text-sm GTE_light md:text-[15px] cursor-pointer my-1 text-richblack-700'>Dubai</li>
            </ul>
            <ul className='my-4 px-3'>
                <li className='text-sm text-medium md:text-[16px] text-richblack-900 mb-1'>Cateogry</li>
                <li className='text-sm GTE_light md:text-[15px] cursor-pointer my-1 text-richblack-700'>Adventure</li>
                <li className='text-sm GTE_light md:text-[15px] cursor-pointer my-1 text-richblack-700'>City Tour</li>
                <li className='text-sm GTE_light md:text-[15px] cursor-pointer my-1 text-richblack-700'>Water Tour</li>
                <li className='text-sm GTE_light md:text-[15px] cursor-pointer my-1 text-richblack-700'>Luxury Tour</li>
            </ul>
        </div>



    </div>
  )
}

export default Search;