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
       <meta
        name='description'
        content='IT QUIZ'
      />
      <meta
        name='keywords'
        content='swyg, it, quiz, game'
      />
      <meta
        name='og:site_name'
        content='itquiz'
      />
      <meta
        name='og:title'
        content='quiz'
      />
      <meta
        name='og:description'
        content='IT 용어 퀴즈를 풀어봅시다'
      />
      <meta
        name='og:type'
        content='website'
      />
      <meta
        name='og:url'
        content='https://itquiz.swygbro.com'
      />
      </Head>
      <div className='h-screen flex flex-col space-y-8 items-center justify-center bg-black'>
        {children}
      </div>
   </div>
 );
}

export default Layout;