import React from 'react'
import Link from 'next/link'

import Image from 'next/image'
import Logo from '@/images/logo/iconpeak.svg'

const Header = () => {
  return (
    <header className={'container'}>
      <div className={'flex items-baseline justify-between py-[16px]'}>
        <Link href={'/'}>
          <Image src={Logo} alt={Logo} width={20} height={20} />
        </Link>
        <div className={'flex items-center gap-14'}>
          <Link href={'/'} className={'text-[16px] text-[#616d8a]'}>
            Your Icons
          </Link>
          <Link href={'/'}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
          <Link href={'/'} className={'text-[16px] text-[#616d8a]'}>
            Icons
          </Link>
          <Link href={'/'} className={'text-[16px] text-[#616d8a]'}>
            Support
          </Link>
          <Link href={'/'} className={'text-[16px] text-[#616d8a]'}>
            Plans
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
