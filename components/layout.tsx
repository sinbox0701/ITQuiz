import React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head';

interface LayoutProps {
    title: string;
    children: React.ReactNode;
}

const Layout: NextPage<LayoutProps> = ({title, children}:LayoutProps) => {
 return (
   <div>
     <Head>
       <title>{title}</title>
      </Head>
      <div className='h-screen flex flex-col space-y-8 items-center justify-center bg-black'>
        {children}
      </div>
   </div>
 );
}

export default Layout;