import React from 'react';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = (props) => {
  const { children } = props;

  return <main className="auth">{children}</main>;
};

export default Layout;
