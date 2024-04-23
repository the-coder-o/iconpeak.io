import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import HeroIcon1 from '@/images/svgs/hero-icon-bg.svg'
import HeroIcon2 from '@/images/svgs/hero-icon-bg1.svg'

const Home = () => {
  return (
    <div>
      <div className="relative flex h-[960px] justify-center overflow-hidden">
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
      <div className={'py-[100px]'}>
        <div className={'container'}>
          <Link href={'/'} className={'flex items-center justify-center'}>
            <div className={'figma-box w-[270px] cursor-pointer rounded-[0.65rem] bg-[#F0F1F3] pb-5'}>
              <div className={'rounded-t-[0.65rem] bg-[#E599F7] p-8'}>
                <div className="flex items-center justify-center gap-4">
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="figma" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-12 w-12">
                    <path
                      fill="currentColor"
                      d="M14 95.7924C14 42.8877 56.8878 0 109.793 0H274.161C327.066 0 369.954 42.8877 369.954 95.7924C369.954 129.292 352.758 158.776 326.711 175.897C352.758 193.019 369.954 222.502 369.954 256.002C369.954 308.907 327.066 351.795 274.161 351.795H272.081C247.279 351.795 224.678 342.369 207.666 326.904V415.167C207.666 468.777 163.657 512 110.309 512C57.5361 512 14 469.243 14 416.207C14 382.709 31.1945 353.227 57.2392 336.105C31.1945 318.983 14 289.5 14 256.002C14 222.502 31.196 193.019 57.2425 175.897C31.196 158.776 14 129.292 14 95.7924ZM176.288 191.587H109.793C74.2172 191.587 45.3778 220.427 45.3778 256.002C45.3778 291.44 73.9948 320.194 109.381 320.416C109.518 320.415 109.655 320.415 109.793 320.415H176.288V191.587ZM207.666 256.002C207.666 291.577 236.505 320.417 272.081 320.417H274.161C309.737 320.417 338.576 291.577 338.576 256.002C338.576 220.427 309.737 191.587 274.161 191.587H272.081C236.505 191.587 207.666 220.427 207.666 256.002ZM109.793 351.795C109.655 351.795 109.518 351.794 109.381 351.794C73.9948 352.015 45.3778 380.769 45.3778 416.207C45.3778 451.652 74.6025 480.622 110.309 480.622C146.591 480.622 176.288 451.186 176.288 415.167V351.795H109.793ZM109.793 31.3778C74.2172 31.3778 45.3778 60.2173 45.3778 95.7924C45.3778 131.368 74.2172 160.207 109.793 160.207H176.288V31.3778H109.793ZM207.666 160.207H274.161C309.737 160.207 338.576 131.368 338.576 95.7924C338.576 60.2173 309.737 31.3778 274.161 31.3778H207.666V160.207Z"
                    ></path>
                  </svg>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8text-purple-700 h-8">
                    <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
                  </svg>
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="font-awesome" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-12">
                    <path fill="currentColor" d="M91.7 96C106.3 86.8 116 70.5 116 52C116 23.3 92.7 0 64 0S12 23.3 12 52c0 16.7 7.8 31.5 20 41l0 3 0 352 0 64 64 0 0-64 373.6 0c14.6 0 26.4-11.8 26.4-26.4c0-3.7-.8-7.3-2.3-10.7L432 272l61.7-138.9c1.5-3.4 2.3-7 2.3-10.7c0-14.6-11.8-26.4-26.4-26.4L91.7 96z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h5 className={'mt-5 text-center font-medium text-[#183153]'}>Official Figma Plugin!</h5>
              </div>
            </div>
          </Link>
          <div className={'mt-[80px] flex items-center justify-between'}>
            <Link href={'/'} className={'flex items-center gap-4 text-[16px] font-medium text-[#183153] hover:text-[#1C7ED7]'}>
              <i className="fa-solid fa-hashtag"></i>
              <span className={'underline'}>Version 0.0.1</span>
            </Link>
            <Link href={'/'} className={'flex items-center gap-4 text-[16px] font-medium text-[#183153] hover:text-[#1C7ED7]'}>
              <i className="fa-solid fa-icons"></i>
              <span className={'underline'}>200+ Free Icons</span>
            </Link>
            <Link href={'/'} className={'flex items-center gap-4 text-[16px] font-medium text-[#183153] hover:text-[#1C7ED7]'}>
              <i className="fa-solid fa-folder"></i>
              <span className={'underline'}>5 Categories</span>
            </Link>
            <Link href={'/'} className={'flex items-center gap-4 text-[16px] font-medium text-[#183153] hover:text-[#1C7ED7]'}>
              <i className="fa-solid fa-ranking-star"></i>
              <span className={'underline'}>2,045 Free Icons</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
