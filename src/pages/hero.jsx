import BlogLayout from '@/components/BlogLayout/BlogLayout';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import HeroSlider from '../components/HeroSlider/HeroSlider';

const Hero = () => {
  return (
    <>
      <div className="container mx-auto px-5">
        <Header />
        <div className="grid grid-cols-4 gap-5 my-3">
          <div className="col-span-3 rounded-lg bg-gray-300 h-[450px]">
            <HeroSlider />
          </div>

          <div className="col-span-1 rounded-lg space-y-5">
            <div className="col-span-1 rounded-lg bg-blue-300 h-[215px]"></div>
            <div className="col-span-1 rounded-lg bg-pink-300 h-[215px]"></div>
          </div>
        </div>
        <BlogLayout />
      </div>
      <Footer />
    </>
  );
};

export default Hero;
