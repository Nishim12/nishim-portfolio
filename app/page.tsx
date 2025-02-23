import Navbar from '@/components/Navbar';
import { Inter, Montserrat } from 'next/font/google';
import Head from 'next/head';
import LeftSide from '@/components/LeftSide';
import RightSide from '@/components/RightSide';
import Banner from '@/components/Banner';
import About from '@/components/About';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function Page() {
  return (
    <div>
    <main className={`${montserrat.variable} font-montserrat w-full h-screen bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll`}>
      <Navbar />
      <div className="w-full h-screen xl:flex items-center gap-20 justify-between">
        <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
          <LeftSide />
        </div>
        <div className="h-[88vh] mx-auto px-12 w-full mdl:pl-16 xl:pl-40">
          <Banner />
          <About />
        </div>
        <div className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
          <RightSide />
        </div>
      </div>
    </main>
    </div>
  );
}