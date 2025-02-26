import { FaUser } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";


const BlogPost = () => {

  const articles = [
    {
      image: 'https://i.ibb.co/nsn3nCC/blog-img1.png',
      title: '10 Essential SEO Tips to Boost Your Website\'s Ranking',
      description: 'Are you looking to improve your website\'s visibility and attract more organic traffic?',
      author: 'Ben Stokes',
      date: '16 August 2024',
    },
    {
      image: 'https://i.ibb.co/FKVSny6/blog-img2.png',
      title: 'The Power of PPC Advertising: How to Maximize Your ROI',
      description: 'Unlock the full potential of your digital marketing strategy with the power of PPC.',
      author: 'Ben Stokes',
      date: '16 August 2024',
    },
    {
      image: 'https://i.ibb.co/9YRLY58/blog-img3.png',
      title: 'The Importance of Responsive Web Design in the Mobile Age',
      description: 'Where mobile devices dominate internet usage, responsive web design is more crucial.',
      author: 'Ben Stokes',
      date: '16 August 2024',
    },
  ];



  return (



    <div className="bg-[#F2F2F8] pb-20 py-10 px-5 md:px-10 lg:px-20">
      <div className="text-center items-center">
        <h1 className="text-2xl lg:text-4xl font-bold">Insights & Innovations:</h1>
        <h1 className="text-2xl lg:text-4xl font-bold pt-2">Our Latest Blog Posts</h1>
        <p className="pt-4 text-sm lg:text-base">
          Explore our blog to discover actionable insights, success stories, and
          <br className="hidden lg:block" />
          expert advice that can help drive growth for your business.
        </p>
      </div>

      <div className="pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-md overflow-hidden shadow-lg">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-56 lg:h-56 object-cover"
              />
              <div className="p-4 lg:p-6">
                <div className="flex flex-row md:flex-row lg:flex-row gap-5 lg:gap-5 items-start lg:items-center text-gray-500 text-xs lg:text-sm mb-2">
                  <div className="text-black flex gap-2 mb-2 lg:mb-0">
                    <div className="pt-[2px]">
                      <FaUser />
                    </div>
                    <div>{article.author}</div>
                  </div>
                  <div className="text-black flex gap-2">
                    <div className="pt-[2px]">
                      <FaCalendarDays />
                    </div>
                    <div>{article.date}</div>
                  </div>
                </div>
                <h3 className="text-lg lg:text-xl py-2 font-semibold">{article.title}</h3>
                <p className="text-gray-700 mb-4 text-sm lg:text-base">{article.description}</p>
                <a href="#" className="text-blue-600 hover:underline flex items-center text-sm lg:text-base">
                  Read More <span className="ml-2">➔</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


  );
};

export default BlogPost;