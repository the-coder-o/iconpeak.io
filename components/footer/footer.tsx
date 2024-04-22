import React from 'react'

import Logo from '@/images/logo/iconpeak.svg'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div
        className={'bg-[#63E6BE] py-14'}
        style={{
          backgroundImage: 'url(https://iconpeak-io.vercel.app/_next/static/media/pro-upgrade-bg.3385a4f8.svg)',
          backgroundPosition: '66% -50%',
          overflow: 'hidden',
          zIndex: '-20',
        }}
      >
        <div className={'container'}>
          <div className={'flex items-center justify-between'}>
            <div>
              <h2 className={'text-[20px] font-medium tracking-[8px]'}>UPGRADE TO ICONPEAK PRO</h2>
              <p className={'mt-3 w-[621px] text-[16px] text-[#183153]'}>Iconpeak Pro gives you 30,199 icons in 68 categories across 9 styles + brands. Plus, Actual Human™ tech support, Icon Upload, hosted Pro Kits, Pro npm, the Icon Wizard, and more!</p>
            </div>
            <Link href={'/'} className={'shadow-custom-box flex items-center gap-4 rounded-[0.65rem] border-[0.125rem] border-[#183153] bg-white px-[35px] py-[15px] text-[18px] font-medium text-[#183153]'}>
              <i className="fa-solid fa-rocket"></i>
              Get iconpeak Pro
            </Link>
          </div>
        </div>
      </div>
      <div className={'bg-[#183153] py-[40px]'}>
        <div className={'container'}>
          <Image src={Logo} alt={Logo} width={20} height={20} />
          <div className={'flex justify-between'}>
            <div className={'flex flex-col gap-2'}>
              <p className={'mt-5 font-medium text-white'}>Go Make Something Awesome</p>
              <p className={'w-[434px] font-[300] text-white'}>Iconpeak.io is the internet&apos;s icon library and toolkit used by millions of designers, developers, and content creators.</p>
              <p className={'w-[434px] font-[300] text-white'}>Made with and in Bentonville, Boston, Chicago, Grand Rapids, Joplin, Kansas City, Seattle, Tampa, and Vergennes.</p>
            </div>
            <div className={'flex justify-between gap-[50px]'}>
              <ul className={'flex flex-col gap-2'}>
                <li className={'text-[19px] font-medium text-[#616d8a]'}>Project</li>
                <li className={'text-white'}>Download</li>
                <li className={'text-white'}>Changelog</li>
                <li className={'text-white'}>Commission Icons</li>
                <li className={'text-white'}>All Versions</li>
              </ul>
              <ul className={'flex flex-col gap-2'}>
                <li className={'text-[19px] font-medium text-[#616d8a]'}>Community</li>
                <li className={'text-white'}>GitHub</li>
                <li className={'text-white'}>Icon Requests</li>
                <li className={'text-white'}>Twitter</li>
                <li className={'text-white'}>Blog Awesome</li>
              </ul>
              <ul className={'flex flex-col gap-2'}>
                <li className={'text-[19px] font-medium text-[#616d8a]'}>Help</li>
                <li className={'text-white'}>Support</li>
                <li className={'text-white'}>Troubleshooting</li>
                <li className={'text-white'}>Contact Us</li>
                <li className={'text-white'}>Status</li>
              </ul>
            </div>
          </div>
          <div className={'mt-10 flex items-center justify-between'}>
            <div className={'flex items-center justify-between'}>
              <div className={'mt-4 flex items-center gap-4'}>
                <Link href={'/'} className={'font-medium text-white hover:text-[#538DD7]'}>
                  License
                </Link>
                <Link href={'/'} className={'font-medium text-white hover:text-[#538DD7]'}>
                  Terms of Service
                </Link>
                <Link href={'/'} className={'font-medium text-white hover:text-[#538DD7]'}>
                  Privacy Policy
                </Link>
                <Link href={'/'} className={'font-medium text-white hover:text-[#538DD7]'}>
                  Refunds
                </Link>
                <Link href={'/'} className={'font-medium text-white hover:text-[#538DD7]'}>
                  Cookie Preference
                </Link>
              </div>
            </div>
            <p className={'flex items-center gap-2 font-medium text-white'}>
              <i className="fa-regular fa-copyright mt-1"></i> created by:
              <Link href={'/'} className={'hover:underline'}>
                a-bd.me
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
