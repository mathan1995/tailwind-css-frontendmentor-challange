import Head from 'next/head';
import type { NextPage } from 'next';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import Motivation from '../components/home/Motivation';
import Blog from '../components/home/Blog';
import Footer from '../components/layout/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PetroNews</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Navbar />
      <div className="relative overflow-hidden">
        <div className="hidden lg:block w-full h-full absolute">
          <div className="bg-image-mockups absolute z-20 w-full h-full bg-no-repeat bg-auto bg-right-top -right-72 xl:-right-28"></div>
        </div>
        <Hero />
        <Motivation />
      </div>
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
