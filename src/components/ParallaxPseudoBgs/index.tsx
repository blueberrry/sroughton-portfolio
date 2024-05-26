import React from 'react';
import './index.scss';

/**
 * * Pseudo -
 * * could target child comps with descendant p-inner > header ...
 * * although we'd have to make sure any child elements were the correct html all the time
 * * OR just pass child items as props headerSection={} mainSection={} footerSection={}
 * * might be limiting by restricting the props this way but will keep for now
 */

type Props = {
  headerSection: () => React.JSX.Element;
  mainSection: () => React.JSX.Element;
  footerSection?: () => React.JSX.Element;
};

// todo: outer may be unnecessary

export function ParallaxScroller({
  headerSection: HeaderSection,
  mainSection: MainSection,
  footerSection: FooterSection,
}: Props) {
  return (
    <div className='prllx-container'>
      {/* These components come from parent*/}
      {HeaderSection && (
        <header className='prllx-section prllx-on'>
          <HeaderSection />
        </header>
      )}
      {MainSection && (
        <div className='prllx-section prllx-off'>
          <MainSection />
        </div>
      )}
      {FooterSection && (
        <footer className='fixedFooter'>
          <FooterSection />
        </footer>
      )}
    </div>
  );
}

export default ParallaxScroller;
