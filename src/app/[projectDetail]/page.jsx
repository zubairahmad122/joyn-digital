'use client'
import {projectData} from '@/app/constant/ProjectDetails'
import Image from 'next/image';
import Link from 'next/link';
import { FaPython,FaAws } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiGoogleanalytics } from "react-icons/si";
import { useEffect, useState } from 'react';

const page = ({params}) => {
const id = params.projectDetail;
const [projectContent,setProjectContent] = useState({})

useEffect(() =>{
  const data = projectData.find((project) => project.id === parseInt(id));
  setProjectContent(data)
},[])

const { name, heading, heroP, sec2img, sec3p1, sec3p2, sec3p3, sec4img, logo,headinbr1,headinbr2,heroPbr1,heroPbr2,sec4headingB,sec4headingM,sec4headingM1,npid} = projectContent;

const bg = {
  backgroundImage: `url(${sec2img})`,
}
const blueGradient = {
  background: 'linear-gradient(63deg, #163160 0%, #2957A7 98.38%)'
}


  return (
    <div className='max-w-[1500px] h-full mx-auto'>
             {/* ---- --- text-section  */}
    <section className='w-full mt-[80px] h-full px-[20px] xsm:px-[40px] py-[2rem] mx-auto'>
      <h5 className='text-[#2958A5] text-[20px] xsm:text-[30px] font-[500] font-Noto'>{name}</h5>
      <h2 className=' text-[14px] ssm:text-[19px] xsm:text-[25px] md:text-[40px] mdd:text-[60px] w-full text-[#2E2E2E] font-Montserrat font-semibold'>{heading} <br />{headinbr1} <br /> {headinbr2}</h2>
      <div className='w-full flex-col my-[30px] flex items-end justify-start sm:justify-end'>
      <div className=' sm:w-auto w-full flex justify-end'>
      <p className='text-[#7f7f7f] font-Noto  text-[10px] ssm:text-[12px] xsm:text-[14px] sm:text-[16px]'>{heroP} <br />{heroPbr1} <br />{heroPbr2}</p>
      </div>
      </div>
    </section>

    <section className='w-full my-[40px] h-full flex items-center justify-center px-[20px] xsm:px-[40px] py-[2rem] mx-auto'>

      <div style={bg} className='bg-cover w-full h-[200px] ssm:h-[250px] xsm:h-[300px] md:h-[400px] mdd:h-[500px]  lg:h-[120vh] xl:h-[800px] object-cover rounded-[10px] xsm:rounded-[30px]'></div>

    </section>



    <section className='w-full my-[80px] h-full flex items-center justify-center flex-col gap-[40px] px-[20px] xsm:px-[40px] py-[2rem] mx-auto'>
    
      <div className='w-full flex flex-col sm:flex-row  gap-[10px] mdd:gap-[30px] items-center justify-center sm:items-start'>
        <h5 className='text-[#2E2E2E] font-Montserrat font-[500] flex-1 text-[20px] xsm:text-[30px] sm:text-[25px] mdd:text-[30px] lg:text-[45px] mt-[-10px] lg:mt-[-20px]  xll:text-[54px]'>
    The <span className='font-bold'>challenge</span>
        </h5>

        <p className='text-[#7F7F7F] text-[10px] xsm:text-[14px] mdd:text-[16px] xll:text-[18px] font-normal w-full text-center sm:text-left sm:w-[65%]  lg:w-[60%] xll:w-[65%] font-Noto'>{sec3p1}</p>
      </div>


      <div className='w-full flex flex-col sm:flex-row  gap-[10px] mdd:gap-[30px] items-center justify-center sm:items-start'>
        <h5 className='text-[#2E2E2E] font-Montserrat font-[500] flex-1 text-[20px] xsm:text-[30px] sm:text-[25px] mdd:text-[30px] lg:text-[45px] mt-[-10px] lg:mt-[-20px]  xll:text-[54px]'>
    The <span className='font-bold'>solution</span>
        </h5>

        <p className='text-[#7F7F7F] text-[10px] xsm:text-[14px] mdd:text-[16px] xll:text-[18px] font-normal w-full text-center sm:text-left sm:w-[65%]  lg:w-[60%] xll:w-[65%] font-Noto'>{sec3p2}</p>
      </div>



      <div className='w-full flex flex-col sm:flex-row  gap-[10px] mdd:gap-[30px] items-center justify-center sm:items-start'>
        <h5 className='text-[#2E2E2E] font-Montserrat font-[500] flex-1 text-[20px] xsm:text-[30px] sm:text-[25px] mdd:text-[30px] lg:text-[45px] mt-[-10px] lg:mt-[-20px]  xll:text-[54px]'>
    The <span className='font-bold'>results</span>
        </h5>

        <p className='text-[#7F7F7F] text-[10px] xsm:text-[14px] mdd:text-[16px] xll:text-[18px] font-normal w-full text-center sm:text-left sm:w-[65%]  lg:w-[60%] xll:w-[65%] font-Noto'>{sec3p3}</p>
      </div>

      <div className='flex flex-wrap mt-[40px] py-[30px] items-center justify-center gap-[70px] lg:gap-[130px] w-full'>
      <p><FaPython className=' text-[50px] lg:text-[70px] xll:text-[90px] text-[#494747]' /></p>
      <p><FaAws className=' text-[50px] lg:text-[70px] xll:text-[90px] text-[#494747]' /></p>
      <p><BiLogoPostgresql className=' text-[50px] lg:text-[70px] xll:text-[90px] text-[#494747]' /></p>
      <p><SiGoogleanalytics className=' text-[50px] lg:text-[60px] xll:text-[90px] text-[#494747]' /></p>
      </div>
    </section>




    <section className='w-full py-[80px] h-full flex items-center justify-center flex-col gap-[0px] px-[20px] bg-[#FFFAFA] xsm:px-[40px] mx-auto'>
   <div className='w-full'>
   <h5 className='text-[#2E2E2E] text-[20px] xsm:text-[30px] my-[20px] font-[500] font-Noto'>Up Next</h5>
   </div>
    <div style={blueGradient}  className='flex flex-col mdd:flex-row  overflow-hidden rounded-[30px] min-h-[40vh] h-full mdd:h-[75vh] w-full relative place-content-center items-center justify-start'>


<div  className=' rounded-[20px] mdd:rounded-e-[0px] rounded-s-[20px] mdd:rounded-s-[30px] h-full w-full my-[40px] items-center mdd:items-start justify-center pl-0 mdd:pl-[7rem] mdd:w-[40%]  flex flex-col gap-[20px] px-[20px] ssm:px-[30px] py-[20px] ssm:py-[30px]  '>
    <Image src={logo} width={100} height={100} className='w-[140px]' alt='Logo image' />
    <h3 className=' text-[15px] ssm:text-[18px] xsm:text-[22px] text-center mdd:text-left lg:text-[25px] font-Montserrat font-[500] text-white'><span className='font-bold'>{sec4headingB}</span> <br /> {sec4headingM} <br /> {sec4headingM1}</h3>
    <hr className='border-[1px] w-[90px]  border-[#2957A7]' />

    <Link className="text-[#ffffff]  text-[14px] xsm:text-[16px] font-semibold flex items-center gap-[4px]" href={`/${npid}`} > View case <Image src={'/assets/Arrow.svg'} width={100} height={100} alt='arrow' className=' w-[14px] xsm:w-[18px]' /> </Link>

    
</div>
<div  className='overflow-hidden flex items-center justify-center h-full rounded-[20px] rounded-s-[20px] mdd:rounded-s-[0px]  rounded-e-[30px]  px-[5px] ssm:px-[20px] py-[20px] ssm:py-[10px]   bg-l flex-1 '>
    <Image src={sec4img} width={1000} height={1000} className=' w-full h-full ssm:w-[90%] ssm:h-[90%] object-contain' alt='product image' />
</div>
</div>

    </section>

    </div>
    
  )
}

export default page