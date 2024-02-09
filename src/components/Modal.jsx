import { useState } from 'react';
import { GoX } from 'react-icons/go';

const Modal = ({title,setModal,children}) => {
    const [modalBottom , setModalBottom] = useState(false);
  return (
    <div className='w-full h-screen backdrop-blur-md fixed left-0 top-0 z-[999999] bg-[rgba(0,0,0,0.06)]' onClick={(e) => {
        e.stopPropagation(); setModal(false)}
         }>
        <div className={`w-full rounded-tl-2xl rounded-tr-2xl -bottom-[600px] bg-white p-4 absolute min-h-[10vh] transition-all drop-shadow-lg ${modalBottom ? " -bottom-[600px] " : " !bottom-0 "} `} onClick={(e)=> e.stopPropagation()}>
            <div className=' max-w-maxContentTab mx-auto'>

         <div className='flex justify-between px-2 items-center' >
            <div className='select-none text-sm'>
                {title}
            </div>
            <div className='relative before:w-full before:h-full before:rounded-full before:absolute before:top-0 before:left-0  before:hover:bg-[rgba(0,0,0,0.04)] rounded-full p-2 -mr-2 cursor-pointer' onClick={() =>{
                setModalBottom(true);
                setTimeout(() => {
                    setModal(false);
                }, 100);
                 }}>
                <GoX className='text-lg text-richblack-900'></GoX>
            </div>
         </div>
         <div>
            {children}
         </div>
         </div>

        </div>
    </div>
  )
}

export default Modal;