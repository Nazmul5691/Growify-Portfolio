/* eslint-disable react-hooks/exhaustive-deps */

const Banner = () => {
  return (
    <div>
      <div
        className="relative lg:h-[110vh] h-full lg:flex items-center justify-center md:px-10 lg:px-20 px-5"
        style={{
          backgroundImage: "url(https://i.ibb.co/zGZ2n89/header-bg1.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div className="relative z-10 w-full">
          <div className="flex flex-col lg:gap-5 lg:flex-row justify-center items-center">
            {/* left div */}
            <div className="w-full lg:w-1/2 animate-fadeInLeft">
             
              <div className="w-full mb-8 lg:pt-0 md:pt-10 pt-10 lg:mb-0 text-center lg:text-left">
  <h3 className="bg-[#D4BFED] rounded-sm text-blue-800 inline-block px-2 py-1">Top #1 SEO & Marketing Agency</h3>
  <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold pt-4 md:mx-auto  lg:pr-10 md:w-[80%] lg:w-[100%]">Elevate Your Brand
With Expert SEO &
Digital Marketing</h1>
  {/* <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold pt-4">Elevate Your Brand</h1>
  <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold pt-3">With Expert SEO &</h1>
  <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold pt-3">Digital Marketing</h1> */}
  <div className="md:flex items-center justify-center">
  <p className="py-3 lg:w-full md:w-[70%]">Welcome to Growify, where we specialize in transforming your online presence with cutting-edge SEO and digital marketing solutions.</p>
  </div>
  <div className="flex  justify-center lg:justify-start">
    <div className="text-blue-700  border-2 border-blue-700 rounded-xl px-10 py-3 mt-4 text-lg">Contact Now</div>
  </div>
</div>

            </div>
            
            {/* right div */}
            <div className="w-full lg:w-1/2 animate-fadeInRight">
              <div className="w-full mb-8 lg:pt-0 md:pt-10 pt-10 lg:mb-0">
                {/* new bg */}
                <div>
                  <div
                    className="relative "
                    style={{
                      backgroundImage: "url(https://i.ibb.co/QkYJXHN/header-imgbg.png)",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      
                    }}
                  >
                    <div className="relative z-10 text-center text-white w-full px-20 lg:py-0 md:px-40 py-9 lg:px-20">
                      <img className="mx-auto" src="https://i.ibb.co/4R7bHG6/header-img1.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;










