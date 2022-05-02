import { useContext } from 'react';
import { ContextContainer } from '../../App';
import RatingButton from './rating-button/RatingButton';
import SubmitButton from './submit-button/SubmitButton';
import starIcon from '../../images/icon-star.svg';
import './RatingContent.css';

function RatingContent() {
  const { appState, setAppState } = useContext(ContextContainer);

  return (
    <div className='relative top-6 left-6 custom-max-width'>
      <button className='w-10 h-10 flex justify-center items-center bg-darkBlue rounded-full hover:cursor-default'>
        <img className='star-sizing' src={starIcon} alt='A star icon' />
      </button>
      <h1 className='text-white font-bold text-xl mt-5'>How did we do?</h1>
      <p className='mt-2 text-lightGrey leading-5 tracking-tighter text-sm'>
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our
        offering!
      </p>
      <div className='flex flex-row items-center space-x-4 mt-5'>
        <RatingButton rating={appState.rating} ratingNumber={1} onClick={() => setAppState({ rating: 1 })} />
        <RatingButton rating={appState.rating} ratingNumber={2} onClick={() => setAppState({ rating: 2 })} />
        <RatingButton rating={appState.rating} ratingNumber={3} onClick={() => setAppState({ rating: 3 })} />
        <RatingButton rating={appState.rating} ratingNumber={4} onClick={() => setAppState({ rating: 4 })} />
        <RatingButton rating={appState.rating} ratingNumber={5} onClick={() => setAppState({ rating: 5 })} />
      </div>
      <SubmitButton
        onClick={() => (appState.rating > 0 ? setAppState({ rating: appState.rating, submitted: true }) : null)}
      />
    </div>
  );
}

export default RatingContent;
