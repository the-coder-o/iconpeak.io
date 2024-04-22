import React from 'react'

import Image from 'next/image'

import UpgradeBgImage from '@/images/svgs/pro-upgrade-bg.svg'

const Footer = () => {
  return (
    <footer className={'relative'}>
      <div className={'bg-[#63E6BE] py-14'}>
        <Image src={UpgradeBgImage} alt={UpgradeBgImage} className={'absolute bottom-0 left-0 right-0 top-0 h-full w-full'} />
        <div className={'container'}>
          <div className={'flex items-center justify-between'}>
            <div>
              <h2 className={'text-[20px] font-medium tracking-[8px]'}>UPGRADE TO ICONPEAK PRO</h2>
              <p className={'mt-3 w-[621px] text-[16px] text-[#183153]'}>Iconpeak Pro gives you 30,199 icons in 68 categories across 9 styles + brands. Plus, Actual Human™ tech support, Icon Upload, hosted Pro Kits, Pro npm, the Icon Wizard, and more!</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
