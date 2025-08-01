import React from 'react';
import Container from '../../common/Container';

const FiveStar = () => {
  return (
    <div className="bg-slate-800 py-24">
      <Container className="">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          {/* 5 Star Rating */}
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-10 h-10 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          {/* Award Text */}
          <p className="text-white text-4xl font-medium">
            Voted #1 Outreach Software 5 Years in a Row
          </p>
        </div>
      </Container>
    </div>
  );
};

export default FiveStar;