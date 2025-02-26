

import Marquee from 'react-fast-marquee';

const TrustedCompanies = () => {
    return (
        <div>
            <div className=" bg-[#EDEAFB] px-5 md:px-10  lg:px-20 py-8 md:py-12 lg:py-16">
                <div className="flex ">
                    
                    <div className='w-[200px]'>
                        <h1 className='text-lg font-semibold'>Trusted by <br /> Top Companies</h1>
                    </div>
                    <Marquee speed={80} pauseOnHover="true" className='mt-[5px]'>
                     <div className='grid grid-cols-5 gap-8 w-full'>
                     <div>
                    <img src="https://i.ibb.co/rHfx4J6/brand-img1.png" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/zsL7DQM/brand-img2.png" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/Kq5qMv2/brand-img3.png" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/gV6zYwQ/brand-img4.png" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/J2DmBcf/brand-img5.png" alt="" />
                </div>
                     </div>
                        
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default TrustedCompanies;




