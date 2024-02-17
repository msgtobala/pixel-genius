import React from 'react';

import SideBar from '@/components/shared/Sidebar';
import MobileNav from '@/components/shared/MobileNav';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = (props) => {
  const { children } = props;

  return (
    <main className="root">
      <SideBar />
      <MobileNav />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
