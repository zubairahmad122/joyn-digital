'use client'
import Link from 'next/link'
import { protData } from '@/app/constant/NavLink'
import ProtfolioCardReverse from '@/components/ProtCardReverse'
import ProtfolioCard from '@/components/ProtfolioCard'
import Image from 'next/image'

const page = () => {
  return (
    <div className='max-w-[1500px] mt-[60px] h-full mx-auto'>
    {/* ------- hero --------  */}
    <section className='w-full h-[100vh] px-[20px] py-[2rem] mx-auto'>
    <div className='bg-[#333] w-full h-full rounded-[48px]'>

    </div>
    </section>

    {/* ---- --- text-section  */}
    <section className='w-full h-full px-[20px] xsm:px-[40px] py-[2rem] mx-auto'>
      <h2 className=' text-[18px] ssm:text-[23px] xsm:text-[40px] md:text-[60px] mdd:text-[70px] w-full text-[#2E2E2E] font-Montserrat font-bold'>We let you build relations <b></b> through our tailored digital <br /> products.</h2>
      <div className='w-full flex-col my-[30px] flex items-end justify-start sm:justify-end'>
      <div className=' sm:w-auto w-full'>
      <p className='text-[#7F7F7F] text-[10px] ssm:text-[12px] font-Noto xsm:text-[14px] sm:text-[16px] '>We create digital products and platforms that drive user <br /> engagement and redefine industries by developing an intimate <br /> knowledge of our clients and their audiences.</p>
      <Link href={'/'} className='my-[30px] inline-block bg-[#2957A7] font-Montserrat text-left font-semibold text-white py-[8px] rounded-[20px] px-[20px]' >Get in touch</Link>
      </div>
      </div>
    </section>

    {/* work-section  */}
    <section className='w-full min-h-[100vh] px-[10px] ssm:px-[20px] xsm:px-[40px] py-[2rem] mx-auto'>
      <h2 className='font-Montserrat text-[60px] font-[500] text-[#2e2e2e]'>Here’s our <span className='font-bold'>work</span> </h2>
      <div className='w-full flex my-[40px] flex-col items-center justify-center gap-[40px] h-full'>
        <ProtfolioCard logo={protData[0].logo} spanTitle={protData[0].spanTitle} title={protData[0].title} desc={protData[0].desc} image={protData[0].image} id={1} />
        <ProtfolioCardReverse logo={protData[0].logo} spanTitle={protData[1].spanTitle} title={protData[1].title} desc={protData[1].desc} image={protData[1].image} id={2} />
        <ProtfolioCard logo={protData[0].logo} spanTitle={protData[0].spanTitle} title={protData[0].title} desc={protData[0].desc} image={protData[0].image} id={3} />
        <ProtfolioCardReverse logo={protData[0].logo} spanTitle={protData[1].spanTitle} title={protData[1].title} desc={protData[1].desc} image={protData[1].image} id={4} />


        <button className='px-[30px] font-Montserrat bg-transparent font-semibold text-[#2957A7] py-[10px] text-[20px] rounded-[40px] border-[#2957A7] border-[1px]'>
          see more work
        </button>
      </div>

    </section>

  </div>
  )
}

export default page