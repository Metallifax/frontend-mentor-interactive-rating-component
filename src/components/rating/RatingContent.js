import Star from '../../images/icon-star.svg';
import { useState } from 'react';
import './RatingContent.css';

function RatingContent() {
  const [currentActive, setCurrentActive] = useState(0);
  const commonRatingButtonClasses =
    'flex justify-center items-center font-bold rounded-full button-sizing hover:bg-orange hover:text-white active:bg-lightGrey active:text-white transition';
  const submitButtonClasses =
    'bg-orange text-white text-center font-bold text-xs w-full h-9 mt-5 rounded-full leading-10 tracking-widest hover:bg-white hover:text-orange';
  const ratingButtonUnselectedClasses = `${commonRatingButtonClasses} bg-darkBlue text-lightGrey`;
  const ratingButtonSelectedClasses = `${commonRatingButtonClasses} bg-lightGrey text-white`;

  return (
    <div className='relative top-6 left-6 custom-max-width'>
      <button
        className='w-10 h-10 flex justify-center items-center bg-darkBlue
      rounded-full hover:cursor-default'
      >
        <img className='star-sizing' src={Star} alt='A star' />
      </button>
      <h1 className='text-white font-bold text-xl mt-5'>How did we do?</h1>
      <p className='mt-2 text-lightGrey leading-5 tracking-tighter text-sm'>
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our
        offering!
      </p>
      <div className='flex flex-row items-center space-x-4 mt-5'>
        <button
          className={currentActive === 1 ? ratingButtonSelectedClasses : ratingButtonUnselectedClasses}
          onClick={() => setCurrentActive(1)}
        >
          1
        </button>
        <button
          className={currentActive === 2 ? ratingButtonSelectedClasses : ratingButtonUnselectedClasses}
          onClick={() => setCurrentActive(2)}
        >
          2
        </button>
        <button
          className={currentActive === 3 ? ratingButtonSelectedClasses : ratingButtonUnselectedClasses}
          onClick={() => setCurrentActive(3)}
        >
          3
        </button>
        <button
          className={currentActive === 4 ? ratingButtonSelectedClasses : ratingButtonUnselectedClasses}
          onClick={() => setCurrentActive(4)}
        >
          4
        </button>
        <button
          className={currentActive === 5 ? ratingButtonSelectedClasses : ratingButtonUnselectedClasses}
          onClick={() => setCurrentActive(5)}
        >
          5
        </button>
      </div>
      <button className={submitButtonClasses}>SUBMIT</button>
    </div>
  );
}

export default RatingContent;
