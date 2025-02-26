/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import ReviewCard from "./ReviewCard";

const Review = () => {
  const reviewRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, observerOptions);

    if (reviewRef.current) {
      observer.observe(reviewRef.current);
    }

    return () => {
      if (reviewRef.current) {
        observer.unobserve(reviewRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={reviewRef}
      className="fade-in-up text-center items-center py-[50px] bg-[#FFFFFF]"
    >
      
      <h1 className="py-3 text-2xl lg:text-4xl font-bold text-gray-800 mt-2">What Our Client Say</h1>
      <p className='lg:w-[40%] w-[80%] mx-auto'>Don't just take our word for it. Hear what our satisfied clients
      have to say about their experience partnering with Growify.</p>
      <ReviewCard />
    </div>
  );
};

export default Review;




