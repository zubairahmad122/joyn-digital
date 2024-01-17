import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='max-w-[1500px] h-full mx-auto'>
          {/* ---- --- text-section  */}
    <section className='w-full mt-[80px] h-full px-[20px] xsm:px-[40px] py-[2rem] mx-auto'>
      <h2 className=' text-[14px] ssm:text-[19px] xsm:text-[25px] md:text-[40px] mdd:text-[55px] w-full text-[#2E2E2E] font-Montserrat font-[500]'>
      <span className='font-bold'>Accelerating Innovation:</span> <br /> Where your business goals <br /> transform into exceptional <br /> products.
      </h2>
      <div className='w-full flex-col my-[30px] flex items-end justify-start sm:justify-end'>
      <div className=' sm:w-auto w-full flex justify-end'>
      <p className='text-[#7f7f7f] font-Noto  text-[10px] ssm:text-[12px] xsm:text-[14px] sm:text-[16px] '>Revolutionizing product delivery with AI Precision: <br /> From  Development to Data-Driven Market Validation.</p>
      </div>
      </div>
    </section>


    {/* ---------- about section text ---------  */}
    <section className='w-full mt-[40px] h-full flex items-center justify-center px-[20px] xsm:px-[40px] py-[2rem] mx-auto'>

      <div className=' w-full mdd:w-[90%] lg:w-[80%] px-[20px] mdd:px-[40px] lg:px-[80px] py-[3rem] mdd:py-[4rem] rounded-[30px] bg-white'>
          <h2 className='text-[#2E2E2E] font-[400] text-center font-Montserrat text-[30px] xsm:text-[50px]'>About us</h2>
          <p className='text-[#7f7f7f]  text-[9px] ssm:text-[10px] xsm:text-[12px] sm:text-[14px] md:text-[16px] leading-[20px] ssm:leading-[30px] mt-[10px] tracking-[0.5px] font-[400] font-Noto'>We at the Joyn Group are proud to be at the forefront of the technology revolution. Our core purpose is to provide our clients with the best possible solutions in shape of products, solutions, services and consultancies to keep pace with technology.</p>
      </div>
    </section>

 
      {/* ---------- decision Maker---------  */}
      <section className='w-full mt-[20px] h-full flex flex-col items-center justify-center px-[20px] xsm:px-[40px] py-[2rem] mx-auto'>
          <h2 className='text-[20px] xsm:text-[30px] sm:text-[40px] my-[30px] text-center sm:text-left w-full font-Montserrat text-[#2E2E2E] font-normal'>The <span className='font-semibold'>decision makers</span></h2>
        <div className=' w-full grid grid-cols-1f  sm:grid-cols-2f mdd:grid-cols-3f gap-[20px] lg:gap-[80px] place-content-center place-items-center justify-center items-center'>

          <div className=" w-full xsm:w-[70%] sm:w-full">
            <Image src="/assets/wajidProfile.png" width={1000} className='w-full h-auto sm:h-[350px] mdd:h-[300px] lg:h-[330px] object-top rounded-[20px] object-cover' height={1000} />
            <h5 className='text-[#2E2E2E] mt-[5px] font-Montserrat font-[600]  text-[20px] xsm:text-[25px]'>Syed Wajid</h5>
            <p className='text-[#2957A7] text-[12px] xsm:text-[16px] font-Noto font-[600] uppercase'>Group CEO</p>
          </div>
          <div className=" w-full xsm:w-[70%] sm:w-full">
            <Image src="/assets/ammadprofile.png" width={1000} className='w-full h-auto sm:h-[350px] mdd:h-[300px] lg:h-[330px] rounded-[20px] object-top  object-cover' height={1000} />
            <h5 className='text-[#2E2E2E] mt-[5px] font-Montserrat font-[600]  text-[20px] xsm:text-[25px]'>Ammad Ali</h5>
            <p className='text-[#2957A7] text-[12px] xsm:text-[16px] font-Noto font-[600] uppercase'>Chief Digital Officer</p>
          </div>
          <div className=" w-full xsm:w-[70%] sm:w-full">
            <Image src="/assets/Kazmi.png" width={1000} className='w-full object-top  h-auto sm:h-[350px] mdd:h-[300px] lg:h-[330px] rounded-[20px] object-cover' height={1000} />
            <h5 className='text-[#2E2E2E]  mt-[5px] font-Montserrat font-[600]  text-[20px] xsm:text-[25px]'>Syed Kazmi</h5>
            <p className='text-[#2957A7] text-[12px] xsm:text-[16px] font-Noto font-[600] uppercase'>Country Head Australia</p>
          </div>

        </div>
      </section>




      {/* ---------- our team work ---------  */}

      <section className='w-full my-[2rem] mt-[20px] h-full flex flex-col items-center justify-center px-[20px] xsm:px-[40px] py-[2rem] mx-auto'>
          <h2 className='text-[20px] xsm:text-[30px] sm:text-[40px] my-[30px] text-center sm:text-left w-full font-Montserrat text-[#2E2E2E] font-normal'>The <span className='font-semibold'>team at work</span></h2>

          <div className='w-full flex gap-[20px] flex-col items-center justify-center'>
            <div className='w-full h-auto sm:h-[300px] md:h-[300px] mdd:h-[400px] lg:h-[450px] flex flex-col sm:flex-row gap-3'>
            <Image src='/assets/teamwork1.png' alt="team work img" width={1000} height={1000} className=' w-full sm:w-[35%] h-full object-cover object-center rounded-[10px] sm:rounded-[30px]' />
            <Image src='/assets/teamwork2.png' alt="team work img" width={1000} height={1000} className=' w-full sm:w-[65%] h-full object-cover rounded-[0px] sm:rounded-[30px]' />
            </div>
            <div className='w-full  h-auto md:h-[300px] mdd:h-[400px] lg:h-[500px] flex gap-3'>
  
            <Image src='/assets/teamwork3.png' alt="team work img" width={1000} height={1000} className='w-full h-full object-cover object-bottom rounded-0 sm:rounded-[30px]' />
            </div>
            <div className='w-full h-auto sm:h-[300px] md:h-[300px] mdd:h-[400px] lg:h-[450px] flex flex-col sm:flex-row gap-3'>
            <Image src='/assets/teamwork4.png' alt="team work img" width={1000} height={1000} className=' w-full sm:w-[65%] h-full object-cover rounded-[0px] sm:rounded-[30px]' />
            <Image src='/assets/teamwork5.png' alt="team work img" width={1000} height={1000} className=' w-full sm:w-[35%] h-full object-top object-cover rounded-[0px] sm:rounded-[30px]' />
            </div>
          </div>
      </section>

  </div>
  )
}

export default page