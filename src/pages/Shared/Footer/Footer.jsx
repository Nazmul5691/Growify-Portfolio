import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="bg-[#F1F1F8]">
      <footer className="">
        
        <div>
          <div className="px-5 md:px-10 lg:px-20 py-10  text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-7">
            <div className="w-full col-span-1 lg:col-span-2">
              <h1 className="font-bold text-blue-900 text-2xl lg:text-3xl pb-3">Growify</h1>
              <p className="text-sm lg:text-base">Growify Ltd is a company registered in Poland.</p>
              <p className="pt-1 text-sm lg:text-base">Registered number: 1848277. <br /> Registered office: Nowy Świat 22, Warsaw, 00-497 Poland.</p>
              <div className="flex gap-5 pt-4 text-blue-700 text-xl">
                <div className="">
                  <FaFacebookSquare />
                </div>
                <div>
                  <FaInstagramSquare />
                </div>
                <div>
                  <FaLinkedin />
                </div>
                <div>
                  <FaSquareYoutube />
                </div>

              </div>
            </div>
            <div className="w-full text-sm">
              <h1 className="text-xl lg:text-2xl pb-3">Services</h1>
              <div><a className="link link-hover">SEO Optimization</a></div>
              <div><a className="link link-hover">Content Marketing</a></div>
              <div><a className="link link-hover">Social Media Management</a></div>
              <div><a className="link link-hover">PPC Advertising</a></div>
              <div><a className="link link-hover">Email Marketing</a></div>
            </div>
            <div className="w-full text-sm pl-0 lg:pl-5">
              <h1 className="text-xl lg:text-2xl pb-3">Company</h1>
              <div><a className="link link-hover">About us</a></div>
              <div><a className="link link-hover">Contact us</a></div>
            </div>
            <div className="w-full text-sm">
              <h1 className="text-xl lg:text-2xl pb-3">Legal</h1>
              <div><a className="link link-hover">Terms of use</a></div>
              <div><a className="link link-hover">Privacy policy</a></div>
              <div><a className="link link-hover">Cookie policy</a></div>
            </div>
          </div>

          <div className="pb-10 text-black">
            <p className="text-center">
              <span className="text-blue-800">
                <a href="https://www.growify.com">Growify</a>
              </span>
              &nbsp; © 2024 - All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;




