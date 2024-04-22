import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import HeroIcon1 from '@/images/svgs/hero-icon-bg.svg'
import HeroIcon2 from '@/images/svgs/hero-icon-bg1.svg'

const Home = () => {
  return (
    <div>
      <div className="relative flex h-[1200px] justify-center overflow-hidden pb-[100px]">
        <Image src={HeroIcon1} alt={''} width={540} height={864} className={'absolute left-[-720px] top-[50px] -z-10 !w-[1000px]'} />
        <Image src={HeroIcon2} alt={''} width={540} height={864} className={'absolute right-[-720px] top-[50px] -z-10 !w-[1000px]'} />
        <div className={'container'}>
          <div className={'mt-[80px] flex flex-col gap-[35px]'}>
            <h1 className={'ml-auto mr-auto w-[650px] text-center text-[50px] font-[500] leading-[55px]'}>
              Take the hassle out of icons in your <span className={'text-[#63E6BE]'}>website.</span>
            </h1>
            <p className={'ml-auto mr-auto w-[650px] text-center text-[22px]'}>
              <span className={'font-medium text-[#63E6BE]'}>Iconpeak.io</span> is the Internet&apos;s icon library and toolkit, used by millions of designers, developers, and content creators.
            </p>
            <div className={'flex items-center justify-center gap-5'}>
              <Link href={'/'} className={'shadow-custom-box flex items-center gap-4 rounded-[0.65rem] border-[0.125rem] border-[#183153] bg-[#63E6BE] px-[35px] py-[15px] text-[18px] font-medium text-[#183153]'}>
                <i className="fa-solid fa-icons"></i>
                Your Icons
              </Link>
              <Link href={'/'} className={'shadow-custom-box flex items-center gap-4 rounded-[0.65rem] border-[0.125rem] border-[#183153] bg-white px-[35px] py-[15px] text-[18px] font-medium text-[#183153]'}>
                <i className="fa-solid fa-download"></i>
                Download
              </Link>
            </div>
            <div className={'flex justify-center'}>
              <iframe width="80%" height="500" className={'rounded-[15px]'} src="https://www.youtube.com/embed/9yJGLVi9_Fg" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
