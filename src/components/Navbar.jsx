"use client"
import Image from 'next/image'
import Link from 'next/link'
import { navLinks } from '@/app/constant/NavLink'
import { CiMenuFries } from 'react-icons/ci'
import { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [navOpen,setOpen] = useState(false);


  return (
    <nav style={{ backdropFilter: "blur(20px)" }} className='min-h-[80px] px-[40px] py-[10px] backdrop-blur-[20px] z-50 opacity-[0.8] left-0 fixed w-full top-0 mx-auto flex items-center justify-between'>
      <Link href={'/'} >
        <Image
          src="/assets/logo.png"
          width={1000}
          height={1000}
          alt="Picture of the author" className='w-[60px] xsm:w-[100px] h-auto object-cover'
        />
      </Link>

      <ul className={`flex  items-center flex-col absolute top-0 left-0 transition-all duration-[0.6s] sm:static sm:flex-row w-full h-[100vh] bg-[#F2EEEE] sm:bg-transparent sm:h-auto 
       sm:w-auto justify-center gap-[40px] ${navOpen ? 'top-0' : 'top-[-9000px]'}`}>
    <div>
    <Link onClick={() => setOpen(false)} className='cursor-pointer  inline-block absolute top-[20px] left-[20px] sm:hidden' href={'/'} >
        <Image
          src="/assets/logo.png"
          width={1000}
          height={1000}
          alt="Picture of the author" className='w-[60px] xsm:w-[100px] h-auto object-cover'
        />
      </Link>
         <AiOutlineClose onClick={() => setOpen(false)} className="text-[30px] cursor-pointer inline-block absolute top-[20px] right-[20px] sm:hidden" />
    </div>
        {
          navLinks.map((i) => {
            return <Link onClick={() => setOpen(false)}   className='font-Noto text-[18px] lg:text-[20px] text-[#202020] xl:text-[22px] font-[400]' href={i.id} key={i.id} >{i.title}</Link>

          })
        }
      
      </ul>
      <CiMenuFries onClick={() => setOpen(true)} className="text-[30px] cursor-pointer inline-block sm:hidden" />
    </nav>
  )
}

export default Navbar