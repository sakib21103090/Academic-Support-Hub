

const Banner = () => {
    return (
        <div className="relative">
        <img 
          src={`https://i.ibb.co/Mc8GQ7h/backcollage.jpg`}
          alt="Banner background"
          className="w-full h-[600px] object-cover "
        />
  
        {/* Overlay with text */}
         <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center">
        <div className="text-white text-left p-8">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Welcome To</h1>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Academic SupportHub</h1>
          <p className="mt-4 text-xl md:text-2xl lg:text-3xl">Maximize Your College Journey Today!</p>
          <p className="mt-4 text-xl md:text-xl lg:text-2xl">Sign up now and embark on an unparalleled  experience <br />that  enhances every aspect of your college life.<br /> Were here to make your dreams a reality. <br />Lets get started!</p>
        </div>
      </div>
      </div>
    );
};

export default Banner;