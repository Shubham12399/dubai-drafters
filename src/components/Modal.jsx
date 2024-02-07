import { useState } from 'react';
import { GoX } from 'react-icons/go';

const Modal = ({title,setModal,children}) => {
    const [modalBottom , setModalBottom] = useState(false);
  return (
    <div className='w-full h-screen backdrop-blur-md fixed left-0 top-0 z-[999999] ' onClick={(e) => {
        e.stopPropagation(); setModal(false)}
         }>
        <div className={`w-full rounded-tl-2xl rounded-tr-2xl -bottom-[600px] bg-white p-4 absolute min-h-[50vh] transition-all ${modalBottom ? " -bottom-[600px] " : " !bottom-0 "} `} onClick={(e)=> e.stopPropagation()}>
         <div className='flex justify-between px-2 items-center' >
            <div className='select-none text-sm'>
                {title}
            </div>
            <div className='hover:bg-[rgba(0,0,0,0.04)] rounded-full p-2 cursor-pointer' onClick={() =>{
                setModalBottom(true);
                setTimeout(() => {
                    setModal(false);
                }, 100);
                 }}>
                <GoX className='text-lg text-richblack-900 '></GoX>
            </div>
         </div>
         <div>
            {children}
         </div>
        </div>
    </div>
  )
}

export default Modal;