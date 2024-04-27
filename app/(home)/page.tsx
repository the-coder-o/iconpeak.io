import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { Input } from '@/components/ui/input'

import HeroIcon1 from '@/images/svgs/hero-icon-bg.svg'
import HeroIcon2 from '@/images/svgs/hero-icon-bg1.svg'

const Home = () => {
  return (
    <div>
      <div className={'container'}>
        <div className={'relative mt-14 flex items-center justify-center gap-5 rounded-lg bg-[#54EABE] p-5 text-[#1A3154] max-md:p-3'}>
          <span className={'absolute -top-4 left-auto right-auto rounded-lg bg-[#183153] px-3 py-1 text-[16px] font-medium text-white max-md:top-[-11px] max-md:text-xs'}>COMING SOON !</span>
          <div className={'flex items-center gap-2 max-md:flex-col max-md:items-center max-md:justify-center'}>
            <i className="fa-solid fa-crown text-4xl text-[#1A3154] max-md:mt-2 max-md:text-2xl"></i>
            <p className={'font-medium max-md:w-full max-md:text-center max-md:text-[15px]'}>We are working very hard on iconpeak.io website, soon you will be able to use our platform completely, thank you for understanding us.</p>
          </div>
        </div>
      </div>
      <div className="relative flex h-[960px] justify-center overflow-hidden max-md:mb-[50px] max-md:h-auto">
        <Image src={HeroIcon1} alt={''} width={540} height={864} className={'absolute left-[-720px] top-[0px] -z-10 !w-[1000px] max-md:hidden'} />
        <Image src={HeroIcon2} alt={''} width={540} height={864} className={'absolute right-[-720px] top-[0px] -z-10 !w-[1000px] max-md:hidden'} />
        <div className={'container'}>
          <div className={'mt-[80px] flex flex-col gap-[35px] max-md:mt-[50px]'}>
            <h1 className={'ml-auto mr-auto w-[650px] text-center text-[50px] font-[500] leading-[55px] max-md:w-full max-md:text-[40px] max-md:leading-[40px]'}>
              Take the hassle out of icons in your <span className={'text-[#63E6BE]'}>website.</span>
            </h1>
            <p className={'ml-auto mr-auto w-[650px] text-center text-[22px] max-md:w-full max-md:text-[18px] max-md:leading-normal'}>
              <span className={'font-medium text-[#63E6BE]'}>Iconpeak.io</span> is the Internet&apos;s icon library and toolkit, used by millions of designers, developers, and content creators.
            </p>
            <div className={'flex items-center justify-center gap-5 max-md:flex-col'}>
              <Link href={'/'} className={'shadow-custom-box flex items-center gap-4 rounded-[0.65rem] border-[0.125rem] border-[#183153] bg-[#63E6BE] px-[35px] py-[15px] text-[18px] font-medium text-[#183153] max-md:w-full max-md:items-center max-md:justify-center'}>
                <i className="fa-solid fa-icons"></i>
                Your Icons
              </Link>
              <Link href={'/'} className={'shadow-custom-box flex items-center gap-4 rounded-[0.65rem] border-[0.125rem] border-[#183153] bg-white px-[35px] py-[15px] text-[18px] font-medium text-[#183153] max-md:w-full max-md:items-center max-md:justify-center'}>
                <i className="fa-solid fa-download"></i>
                Download
              </Link>
            </div>
            <div className={'flex justify-center'}>
              <iframe width="80%" height="500" className={'rounded-[15px] max-lg:!w-full max-md:!h-[220px]'} src="https://www.youtube.com/embed/9yJGLVi9_Fg" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </div>
        </div>
      </div>
      <div className={'bg-[#F0F1F3] py-[100px] max-md:py-[50px]'}>
        <div className={'container'}>
          <div className={'flex items-center justify-center gap-8 max-md:flex-col'}>
            <div className={'relative rounded-[0.65rem] border-[2px] border-[#6741D9] p-4 max-md:w-full'}>
              <span className={'absolute -top-3 right-8 rounded-lg bg-[#B197FC] px-3 py-1 text-xs font-medium'}>SOON !</span>
              <div className={'flex flex-col gap-3'}>
                <h2 className={'font-medium'}>Announcing Subsetting for Kits!</h2>
                <p className={'w-[476px] max-md:w-full'}>Make Iconpeak.io even faster (and even smaller) with our new subsetting options: auto-subsetting, style selection, and per-icon custom subsetting.</p>
                <div className={'flex items-center gap-6'}>
                  <Link href={'/'} className={'text-[#6741D9] underline decoration-dotted hover:text-[#6741D9]/80 max-md:text-[12px]'}>
                    Read More About Subsetting
                  </Link>
                  <Link href={'/'} className={'text-[#6741D9] underline decoration-dotted hover:text-[#6741D9]/80 max-md:text-[12px]'}>
                    Give Subsetting a Try
                  </Link>
                </div>
              </div>
            </div>
            <Link href={'/'} className={'relative flex items-center justify-center max-md:w-full'}>
              <span className={'absolute -top-3 right-8 rounded-lg bg-[#183153] px-3 py-1 text-xs font-medium text-white'}>SOON !</span>
              <div className={'figma-box w-[270px] cursor-pointer rounded-[0.65rem] bg-[#fff] pb-5 max-md:w-full'}>
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
          </div>
          <div className={'max-md: mt-[80px] flex items-center justify-between max-md:flex-wrap max-md:items-center max-md:justify-center max-md:gap-5 max-md:gap-x-10'}>
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
      <div className={'container'}>
        <div className={'mb-20 flex items-center justify-between max-lg:flex-col-reverse max-lg:gap-[50px]'}>
          <div className={'flex flex-col gap-7 max-md:gap-5'}>
            <h2 className={'font-bold tracking-[8px] text-green-400'}>ICONS. EASY. DONE.</h2>
            <h1 className={'text-[32px] font-[500] max-md:text-[25px]'}>1 line of code… 30,000+ icons.</h1>
            <p className={'w-[528px] max-lg:w-[700px] max-md:w-full'}>Iconpeak.io Kits are the place to manage all your icons for a project. With the power of Kits, you get the easiest way to use Font Awesome icons, great performance, easy customization, and you can even upload your own icons!</p>
            <Link href={'/'} className={'shadow-custom-box flex items-center justify-center gap-4 rounded-[0.65rem] border-[0.125rem] border-[#183153] bg-[#63E6BE] px-[35px] py-[15px] text-[18px] font-medium text-[#183153]'}>
              Go to Your Icons
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          <div>
            <Image src={'https://img.fortawesome.com/1ce05b4b/kit-illustration.svg'} width={100} height={100} alt={'bg-image'} className={'!w-[400px]'} />
          </div>
        </div>
        <div className={'mb-[100px] grid grid-flow-col grid-rows-3 justify-between gap-[40px] max-md:mb-[50px] max-md:flex max-md:flex-col'}>
          <div className={'flex gap-6'}>
            <i className="fa-solid fa-earth-americas text-[32px] text-green-500"></i>
            <div className={'flex flex-col gap-3'}>
              <h3 className={'flex items-center gap-3 text-[18px] font-medium text-[#183153]'}>
                <span className={'rounded-lg bg-[#183153] px-3 py-1 text-[12px] font-medium text-white'}>SOON !</span>
                Your Personal CDN
              </h3>
              <p className={'w-[464px] max-lg:w-full'}>Add our super-simple embed code to your site and have instant access to ALL of Font Awesome.</p>
            </div>
          </div>
          <div className={'flex gap-6'}>
            <i className="fa-solid fa-arrows-rotate text-[32px] text-green-500"></i>
            <div className={'flex flex-col gap-3'}>
              <h3 className={'flex items-center gap-3 text-[18px] font-medium text-[#183153]'}>
                <span className={'rounded-lg bg-[#183153] px-3 py-1 text-[12px] font-medium text-white'}>SOON !</span>
                Instant Updates
              </h3>
              <p className={'w-[464px] max-lg:w-full'}>Make changes to your icon configuration on the fly without having to touch or push code.</p>
            </div>
          </div>
          <div className={'flex gap-6'}>
            <i className="fa-solid fa-upload text-[32px] text-green-500"></i>
            <div className={'flex flex-col gap-3'}>
              <h3 className={'flex items-center gap-3 text-[18px] font-medium text-[#183153]'}>
                <span className={'rounded-lg bg-[#183153] px-3 py-1 text-[12px] font-medium text-white'}>SOON !</span>
                Upload Your Own Icons
              </h3>
              <p className={'w-[464px] max-lg:w-full'}>Extend Font Awesome with your own custom icons, logos, and even other icon sets to fit your project perfectly.</p>
            </div>
          </div>
          <div className={'flex gap-6'}>
            <i className="fa-solid fa-heart-circle-check text-[32px] text-green-500"></i>
            <div className={'flex flex-col gap-3'}>
              <h3 className={'flex items-center gap-3 text-[18px] font-medium text-[#183153]'}>
                <span className={'rounded-lg bg-[#183153] px-3 py-1 text-[12px] font-medium text-white'}>SOON !</span>
                Your Own Icons Collections
              </h3>
              <p className={'w-[464px] max-lg:w-full'}>Place icons on your website with a simple, memorable syntax. And easily change styles when the mood suits you.</p>
            </div>
          </div>
          <div className={'flex gap-6'}>
            <i className="fa-solid fa-circle-info text-[32px] text-green-500"></i>
            <div className={'flex flex-col gap-3'}>
              <h3 className={'flex items-center gap-3 text-[18px] font-medium text-[#183153]'}>
                <span className={'rounded-lg bg-[#183153] px-3 py-1 text-[12px] font-medium text-white'}>SOON !</span>
                Auto-Accessibility & More
              </h3>
              <p className={'w-[464px] max-lg:w-full'}>Automate your icons&apos; accessibility, control load timing, ensure Font Awesome Version 4 compatibility, and more.</p>
            </div>
          </div>
          <div className={'flex gap-6'}>
            <i className="fa-solid fa-download text-[32px] text-green-500"></i>
            <div className={'flex flex-col gap-3'}>
              <h3 className={'flex items-center gap-3 text-[18px] font-medium text-[#183153]'}>
                <span className={'rounded-lg bg-[#183153] px-3 py-1 text-[12px] font-medium text-white'}>SOON !</span>
                Download
              </h3>
              <p className={'w-[464px] max-lg:w-full'}>Design on the desktop with our Figma component, icon fonts, and SVGs, or grab the files to self-host.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={'relative bg-[#F0F1F3] py-[100px] max-md:py-[50px]'}>
        <div className={'container'}>
          <div className={'flex flex-col items-center justify-center gap-[20px] max-md:items-start max-md:gap-[10px]'}>
            <h3 className={'text-[18px] font-medium tracking-[8px] text-[#9C36B5]'}>ICON DISCOVERY</h3>
            <h2 className={'text-[32px] font-[500] max-md:text-[25px] max-[465px]:text-[20px]'}>These ARE the icons you&apos;re looking for.</h2>
            <p className={'w-[728px] text-center max-md:mb-3 max-md:w-full max-md:text-start'}>Have you ever squandered hours scanning the dank, skeezy corners of the internet scrounging up the icons you need? Us too. That&apos;s why we re-engineered our icon search from the ground up with ease of icon findability in mind, so you can match your brand with the perfect look and feel.</p>
            <div className={'relative'}>
              <i className="fa-solid fa-magnifying-glass absolute left-[25px] top-[19px] text-[22px] "></i>
              <Input
                style={{
                  boxShadow: 'inset 0 0.25em 0 0 rgb(240, 241, 243)',
                }}
                placeholder={'Search 500+ icons across 9 styles + brands...'}
                className={'w-[650px] rounded-[4em] border-2 border-[#183153] !py-[28px] pl-[60px] text-[18px] !outline-none active:!ring-[3px] active:!ring-[#86BEF7] active:!ring-offset-1 max-md:w-[450px] max-[465px]:w-[350px]'}
              />
            </div>
          </div>
          <div className={'mt-14 flex flex-wrap items-center justify-center gap-7'}>
            <Link href={''} className={'category-1 relative flex h-[136px] w-[160px] flex-col items-center justify-center gap-3 rounded-[15px] bg-[#B197FC] px-[20px]'}>
              <span className={'absolute -top-3 left-auto right-auto rounded-lg bg-[#183153] px-3 py-1 text-xs font-medium text-white'}>SOON!</span>
              <i className="fa-solid fa-face-smile text-4xl text-[#183153]"></i>
              <span className={'font-medium text-[#183153]'}>Emoji</span>
            </Link>
            <Link href={''} className={'category-2 relative flex h-[136px] w-[160px] flex-col items-center justify-center gap-3 rounded-[15px] bg-[#63E6BE] px-[20px]'}>
              <span className={'absolute -top-3 left-auto right-auto rounded-lg bg-[#183153] px-3 py-1 text-xs font-medium text-white'}>SOON!</span>
              <i className="fa-solid fa-apple-whole text-4xl text-[#183153]"></i>
              <span className={'text-center font-medium text-[#183153]'}>Fruits + Vegetables</span>
            </Link>
            <Link href={''} className={'category-3 relative flex h-[136px] w-[160px] flex-col items-center justify-center gap-3 rounded-[15px] bg-[#E599F7] px-[20px]'}>
              <span className={'absolute -top-3 left-auto right-auto rounded-lg bg-[#183153] px-3 py-1 text-xs font-medium text-white'}>SOON!</span>
              <i className="fa-solid fa-font text-4xl text-[#183153]"></i>
              <span className={'font-medium text-[#183153]'}>Alphabet</span>
            </Link>
            <Link href={''} className={'category-4 relative flex h-[136px] w-[160px] flex-col items-center justify-center gap-3 rounded-[15px] bg-[#74C0FC] px-[20px]'}>
              <span className={'absolute -top-3 left-auto right-auto rounded-lg bg-[#183153] px-3 py-1 text-xs font-medium text-white'}>SOON!</span>
              <i className="fa-solid fa-anchor text-4xl text-[#183153]"></i>
              <span className={'font-medium text-[#183153]'}>Maritime</span>
            </Link>
            <Link href={''} className={'category-5 relative flex h-[136px] w-[160px] flex-col items-center justify-center gap-3 rounded-[15px] bg-[#FF8787] px-[20px]'}>
              <span className={'absolute -top-3 left-auto right-auto rounded-lg bg-[#183153] px-3 py-1 text-xs font-medium text-white'}>SOON!</span>
              <i className="fa-solid fa-robot text-4xl text-[#183153]"></i>
              <span className={'font-medium text-[#183153]'}>Science Fiction</span>
            </Link>
            <Link href={''} className={'category-6 relative flex h-[136px] w-[160px] flex-col items-center justify-center gap-3 rounded-[15px] bg-[#F36944] px-[20px]'}>
              <span className={'absolute -top-3 left-auto right-auto rounded-lg bg-[#183153] px-3 py-1 text-xs font-medium text-white'}>SOON!</span>
              <i className="fa-brands fa-wordpress text-4xl text-[#183153]"></i>
              <span className={'font-medium text-[#183153]'}>Brands</span>
            </Link>
            <Link href={''} className={'category-1 relative flex h-[136px] w-[160px] flex-col items-center justify-center gap-3 rounded-[15px] bg-[#B197FC] px-[20px]'}>
              <span className={'absolute -top-3 left-auto right-auto rounded-lg bg-[#183153] px-3 py-1 text-xs font-medium text-white'}>SOON!</span>
              <i className="fa-solid fa-face-smile text-4xl text-[#183153]"></i>
              <span className={'font-medium text-[#183153]'}>Emoji</span>
            </Link>
            <Link href={''} className={'category-2 relative flex h-[136px] w-[160px] flex-col items-center justify-center gap-3 rounded-[15px] bg-[#63E6BE] px-[20px]'}>
              <span className={'absolute -top-3 left-auto right-auto rounded-lg bg-[#183153] px-3 py-1 text-xs font-medium text-white'}>SOON!</span>
              <i className="fa-solid fa-apple-whole text-4xl text-[#183153]"></i>
              <span className={'text-center font-medium text-[#183153]'}>Fruits + Vegetables</span>
            </Link>
            <Link href={''} className={'category-3 relative flex h-[136px] w-[160px] flex-col items-center justify-center gap-3 rounded-[15px] bg-[#E599F7] px-[20px]'}>
              <span className={'absolute -top-3 left-auto right-auto rounded-lg bg-[#183153] px-3 py-1 text-xs font-medium text-white'}>SOON!</span>
              <i className="fa-solid fa-font text-4xl text-[#183153]"></i>
              <span className={'font-medium text-[#183153]'}>Alphabet</span>
            </Link>
            <Link href={''} className={'category-4 relative flex h-[136px] w-[160px] flex-col items-center justify-center gap-3 rounded-[15px] bg-[#74C0FC] px-[20px]'}>
              <span className={'absolute -top-3 left-auto right-auto rounded-lg bg-[#183153] px-3 py-1 text-xs font-medium text-white'}>SOON!</span>
              <i className="fa-solid fa-anchor text-4xl text-[#183153]"></i>
              <span className={'font-medium text-[#183153]'}>Maritime</span>
            </Link>
            <Link href={''} className={'category-5 relative flex h-[136px] w-[160px] flex-col items-center justify-center gap-3 rounded-[15px] bg-[#FF8787] px-[20px]'}>
              <span className={'absolute -top-3 left-auto right-auto rounded-lg bg-[#183153] px-3 py-1 text-xs font-medium text-white'}>SOON!</span>
              <i className="fa-solid fa-robot text-4xl text-[#183153]"></i>
              <span className={'font-medium text-[#183153]'}>Science Fiction</span>
            </Link>
            <Link href={''} className={'category-6 relative flex h-[136px] w-[160px] flex-col items-center justify-center gap-3 rounded-[15px] bg-[#F36944] px-[20px]'}>
              <span className={'absolute -top-3 left-auto right-auto rounded-lg bg-[#183153] px-3 py-1 text-xs font-medium text-white'}>SOON!</span>
              <i className="fa-brands fa-wordpress text-4xl text-[#183153]"></i>
              <span className={'font-medium text-[#183153]'}>Brands</span>
            </Link>
          </div>
        </div>
      </div>
      {/*<div className={'container'}>*/}
      {/*  <div className={'mb-[100px] flex items-center justify-between'}>*/}
      {/*    <div>*/}
      {/*      <Image src={'https://img.fortawesome.com/1ce05b4b/open-source-illustration.svg'} alt={''} width={100} height={100} className={'!w-full'} />*/}
      {/*    </div>*/}
      {/*    <div className={'flex flex-col gap-5'}>*/}
      {/*      <h3 className={'text-[17px] font-[600] tracking-[5px] text-[#B197FC]'}>PROUDLY OPEN SOURCE</h3>*/}
      {/*      <h2 className={'text-[40px] font-[500] text-[#183153]'}>Everyone gets more awesome.</h2>*/}
      {/*      <p className={'w-[528px] text-[16px]'}>We know the pain of wrangling icons on the internet. That&paos;s why in 2012, we created the first version of our open-source icons and toolkit. And with the help of our subscription plan Font Awesome Pro, we&apos;ve built a lean icon-obsessed team who keep cranking out more icons, more styles, and more services for everyone.</p>*/}
      {/*      <Link href={'/'} className={'shadow-custom-box mt-[50px] flex items-center justify-center gap-4 rounded-[0.65rem] border-[0.125rem] border-[#183153] bg-[#B197FC] px-[65px] py-[12px] text-[18px] font-medium text-[#183153]'}>*/}
      {/*        <i className="fa-solid fa-icons"></i>*/}
      {/*        All icons for free*/}
      {/*      </Link>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className={'grid grid-cols-3 items-center gap-[30px]'}>*/}
      {/*    <div className={'relative rounded-[16px] bg-[#F0F1F3] p-5'}>*/}
      {/*      <span className={'absolute -top-3 right-8 rounded-lg bg-[#183153] px-3 py-1 text-xs font-medium text-white'}>SOON !</span>*/}
      {/*      <div className={'flex flex-col gap-4'}>*/}
      {/*        <i className="fa-solid fa-handshake text-center text-5xl text-[#6741D9]"></i>*/}
      {/*        <h3 className={'text-xl text-[#183153]'}>Iconpeak Free: Always Free</h3>*/}
      {/*        <p className={'text-[#183153]'}>From the beginning, Font Awesome has offered free and open source icons. And since we&apos;re creator owned and operated, we&apos;ll make sure Font Awesome Free stays that way.</p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className={'relative rounded-[16px] bg-[#F0F1F3] p-5'}>*/}
      {/*      <span className={'absolute -top-3 right-8 rounded-lg bg-[#183153] px-3 py-1 text-xs font-medium text-white'}>SOON !</span>*/}
      {/*      <div className={'flex flex-col gap-4'}>*/}
      {/*        <i className="fa-solid fa-shield-heart text-center text-5xl text-[#6741D9]"></i>*/}
      {/*        <h3 className={'text-xl text-[#183153]'}>No Shenanigans</h3>*/}
      {/*        <p className={'text-[#183153]'}>We have more icons, services, and support in Pro. If you want them, you subscribe. No shenanigans. We won&apos;t sell your data, because we don&apos;t want to live in that world, and we don&apos;t want to run that company.</p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className={'relative rounded-[16px] bg-[#F0F1F3] p-5'}>*/}
      {/*      <span className={'absolute -top-3 right-8 rounded-lg bg-[#183153] px-3 py-1 text-xs font-medium text-white'}>SOON !</span>*/}
      {/*      <div className={'flex flex-col gap-4'}>*/}
      {/*        <i className="fa-solid fa-rocket text-center text-5xl text-[#6741D9]"></i>*/}
      {/*        <h3 className={'text-xl text-[#183153]'}>Support Open Source</h3>*/}
      {/*        <p className={'text-[#183153]'}>Give back to the open-source community by subscribing to Font Awesome Pro. In fact, Pro subscribers helped grow Font Awesome Free icons by over 250% since version 4.</p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className={'mb-[100px] mt-[50px] flex items-center justify-center'}>*/}
      {/*    <div className={'flex items-center gap-3'}>*/}
      {/*      <i className="fa-brands fa-github text-2xl"></i>*/}
      {/*      <Link href={'https://github.com/the-coder-o/iconpeak.io'} target={'_blank'} className={'text-xl font-[500] underline decoration-dotted hover:text-[#6741D9]'}>*/}
      {/*        Iconpeak.io is one of the top open source projects on GitHub.*/}
      {/*      </Link>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className={'bg-[#183153] p-10'}>*/}
      {/*  <div className={'container'}>*/}
      {/*    <div>*/}
      {/*      <p className={'text-center font-medium tracking-[5px] text-[#fff]'}>FINE-TUNED FOR PERFORMANCE</p>*/}
      {/*      <div className={'mt-[50px] grid grid-cols-4 gap-[60px]'}>*/}
      {/*        <div className={'flex flex-col items-center gap-3'}>*/}
      {/*          <i className="fa-solid fa-feather text-5xl text-[#fff]"></i>*/}
      {/*          <p className={'text-center font-medium text-[#63E6BE]'}>Light-as-a-feather on Page Loads</p>*/}
      {/*        </div>*/}
      {/*        <div className={'flex flex-col items-center gap-3'}>*/}
      {/*          <i className="fa-solid fa-truck-ramp-box text-5xl text-[#fff]"></i>*/}
      {/*          <p className={'text-center font-medium text-[#63E6BE]'}>Reliable Uptime and Loading</p>*/}
      {/*        </div>*/}
      {/*        <div className={'flex flex-col items-center gap-3'}>*/}
      {/*          <i className="fa-solid fa-earth-asia text-5xl text-[#fff]"></i>*/}
      {/*          <p className={'text-center font-medium text-[#63E6BE]'}>Global-friendly CDN Network</p>*/}
      {/*        </div>*/}
      {/*        <div className={'flex flex-col items-center gap-3'}>*/}
      {/*          <i className="fa-solid fa-gauge-high text-5xl text-[#fff]"></i>*/}
      {/*          <p className={'text-center font-medium text-[#63E6BE]'}>Auto and Custom Subsetting Options</p>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className={'container'}>*/}
      {/*  <div className={'mb-[60px] mt-[40px] flex items-center justify-between'}>*/}
      {/*    <div className={'flex flex-col gap-5'}>*/}
      {/*      <h3 className={'text-[17px] font-[500] tracking-[5px] text-[#09A778]'}>THE RIGHT TOOL FOR THE JOB</h3>*/}
      {/*      <h2 className={'text-[40px] font-[500] text-[#183153]'}>Works Where You Work</h2>*/}
      {/*      <p className={'w-[520px] text-[16px] text-[#183153]'}>Whatever you&apos;re working on, we&apos;ve got a set of tools that work how and where you do.</p>*/}
      {/*      <div className={'flex items-center gap-5'}>*/}
      {/*        <Link href={'/'} className={'shadow-custom-box flex items-center gap-4 rounded-[0.65rem] border-[0.125rem] border-[#183153] bg-[#63E6BE] px-[65px] py-[15px] text-[18px] font-medium text-[#183153]'}>*/}
      {/*          <i className="fa-solid fa-icons"></i>*/}
      {/*          Your Icons*/}
      {/*        </Link>*/}
      {/*        <Link href={'/'} className={'shadow-custom-box flex items-center gap-4 rounded-[0.65rem] border-[0.125rem] border-[#183153] bg-white px-[65px] py-[15px] text-[18px] font-medium text-[#183153]'}>*/}
      {/*          <i className="fa-solid fa-download"></i>*/}
      {/*          Download*/}
      {/*        </Link>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <Image src={'https://img.fortawesome.com/1ce05b4b/frameworks-content-creator.svg'} alt={''} width={100} height={100} className={'-z-10 mt-[-41px] !w-[520px]'} />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className={'mb-[100px] grid grid-cols-3 items-center gap-[30px]'}>*/}
      {/*    <div className={'relative rounded-[16px] bg-[#146EBE] p-5'}>*/}
      {/*      <span className={'absolute -top-3 right-8 rounded-lg bg-[#183153] px-3 py-1 text-xs font-medium text-white'}>SOON !</span>*/}
      {/*      <div className={'flex flex-col gap-4'}>*/}
      {/*        <i className="fa-solid fa-user-tie text-5xl text-white"></i>*/}
      {/*        <h3 className={'text-xl text-white'}>Great for Developers</h3>*/}
      {/*        <p className={'text-white'}>We&apos;ve got frameworks and toolkits for the most popular plugins and packages that already work the way you expect.</p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className={'relative rounded-[16px] bg-[#9C36B5] p-5'}>*/}
      {/*      <span className={'absolute -top-3 right-8 rounded-lg bg-[#183153] px-3 py-1 text-xs font-medium text-white'}>SOON !</span>*/}
      {/*      <div className={'flex flex-col gap-4'}>*/}
      {/*        <i className="fa-solid fa-user-ninja text-5xl text-white"></i>*/}
      {/*        <h3 className={'text-xl text-white'}>Great for Designers</h3>*/}
      {/*        <p className={'text-white'}>Use your own designs alongside thousands of matching Font Awesome icons in each of 9 unique styles.</p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className={'relative rounded-[16px] bg-[#09A778] p-5'}>*/}
      {/*      <span className={'absolute -top-3 right-8 rounded-lg bg-[#183153] px-3 py-1 text-xs font-medium text-white'}>SOON !</span>*/}
      {/*      <div className={'flex flex-col gap-4'}>*/}
      {/*        <i className="fa-solid fa-user-secret text-5xl text-white"></i>*/}
      {/*        <h3 className={'text-xl text-white'}>Great for Content Creators</h3>*/}
      {/*        <p className={'text-white'}>With oodles of free icons — including brands + social icons — our syntax is easy to use in authoring tools like WordPress.</p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className={'bg-[#F0F1F3]'}>*/}
      {/*  <div className={'container'}>*/}
      {/*    <div className={'mb-20 flex items-center justify-between gap-[40px]'}>*/}
      {/*      <div className={'flex flex-col gap-7'}>*/}
      {/*        <h2 className={'font-bold tracking-[8px] text-[#09A778]'}>CREATIVE CUSTOMIZATION</h2>*/}
      {/*        <h1 className={'text-[32px] font-[500]'}>Add to the Iconpeak</h1>*/}
      {/*        <p className={'w-[528px] text-[17px]'}>Never be without an icon you need! Extend Font Awesome with your own custom icons, logos, and even other icon sets to fit your project perfectly. The best part, all icons you add are used just as easily as official ones.</p>*/}
      {/*        <Link href={'/'} className={'shadow-custom-box flex items-center justify-center gap-4 rounded-[0.65rem] border-[0.125rem] border-[#183153] bg-[#63E6BE] px-[65px] py-[12px] text-[18px] font-medium text-[#183153]'}>*/}
      {/*          <i className="fa-solid fa-rocket"></i>*/}
      {/*          Add you own icons*/}
      {/*        </Link>*/}
      {/*      </div>*/}
      {/*      <div>*/}
      {/*        <Image src={'https://img.fortawesome.com/1ce05b4b/other-sets-illustration.svg'} width={100} height={100} alt={'bg-image'} className={'!w-[100%]'} />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className={'mt-[50px] grid grid-flow-col grid-rows-2 gap-5 pb-[100px]'}>*/}
      {/*      <div className={'flex gap-6 rounded-[15px] bg-[#74C0FC] p-5'}>*/}
      {/*        <i className="fa-solid fa-cloud-arrow-up text-4xl text-[#183153]"></i>*/}
      {/*        <div className={'flex flex-col gap-3'}>*/}
      {/*          <h3 className={'text-[20px] font-medium'}>It&apos;s B.Y.O.I. (Bring Your Own Icons)</h3>*/}
      {/*          <p className={'w-[450px]'}>Add the icons and symbols your project needs that aren&apos;t in Font Awesome… yet. Now with Duotone support!</p>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*      <div className={'flex gap-6 rounded-[15px] bg-[#63E6BE] p-5'}>*/}
      {/*        <i className="fa-solid fa-boxes-stacked text-4xl text-[#183153]"></i>*/}
      {/*        <div className={'flex flex-col gap-3'}>*/}
      {/*          <h3 className={'text-[20px] font-medium'}>Game. Other Sets. Match.</h3>*/}
      {/*          <p className={'w-[450px]'}>Bring in your other favorite icon sets to supplement Font Awesome icons - and use all of them with one easy and familiar syntax.</p>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*      <div className={'flex gap-6 rounded-[15px] bg-[#FFD43B] p-5'}>*/}
      {/*        <i className="fa-solid fa-check-double text-4xl text-[#183153]"></i>*/}
      {/*        <div className={'flex flex-col gap-3'}>*/}
      {/*          <h3 className={'text-[20px] font-medium'}>Add Your Logo</h3>*/}
      {/*          <p className={'w-[450px]'}>Upload your project&apos;s logo and use it just as easily as one of our Brand icons.</p>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*      <div className={'flex gap-6 rounded-[15px] bg-[#E599F7] p-5'}>*/}
      {/*        <i className="fa-solid fa-folder-tree text-4xl text-[#183153]"></i>*/}
      {/*        <div className={'flex flex-col gap-3'}>*/}
      {/*          <h3 className={'text-[20px] font-medium'}>Fine-Tune Any Icon</h3>*/}
      {/*          <p className={'w-[450px]'}>With our Icon Wizard, magically add modifiers to any icon to make its meaning crystal ball-clear and perfect for your project.</p>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  )
}

export default Home
