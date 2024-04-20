import React from 'react';
import './index.scss';

/**
 * * Pseudo -
 * * could target child comps with descendant p-inner > header ...
 * * although we'd have to make sure any child elements were the correct html all the time
 * * OR just pass child items as props headerSection={} mainSection={} footerSection={}
 * * might be limiting by restricting the props this way but will keep for now
 */
export function ParallaxScroller({ headerSection, mainSection, footerSection }: Props) {
  return (
    <div className='parallax-outer'>
      <div className='parallax-inner'>
        {/* These components come from parent*/}
        {headerSection && <header className='parallax-area'>{headerSection}</header>}
        {mainSection && <main className='no-parallax-area'>{mainSection}</main>}
        {footerSection && <footer className='fixedFooter'>{footerSection}</footer>}
      </div>
    </div>
  );
}

export default ParallaxScroller;

type Props = {
  headerSection: React.ReactNode;
  mainSection: React.ReactNode;
  footerSection?: React.ReactNode;
};
