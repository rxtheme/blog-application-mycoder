import Header from '@/components/Header/Header';

const Hero = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="m-2 rounded-lg w-[60%] bg-gray-300 h-[500px]"></div>
        <div className="bg-pink-200 w-[35%] h-[200px]"></div>
      </div>
    </div>
  );
};

export default Hero;
