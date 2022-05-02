import Star from '../../images/icon-star.svg';
import {useState} from 'react';
import './RatingContent.css';

function RatingContent() {
  const circleButtonUnselected = 'flex justify-center items-center text-lightGrey font-bold bg-darkBlue rounded-full button-sizing hover:bg-orange hover:text-white'
  const circleButtonSelected = 'flex justify-center items-center font-bold bg-lightGrey text-white rounded-full button-sizing hover:bg-orange'
  const [currentActive, setCurrentActive] = useState(0);

  return (
      <div className="relative top-6 left-6" style={{maxWidth: '85%'}}>
        <button
            className="w-8 h-8 flex justify-center items-center bg-darkBlue
      rounded-full"
        >
          <img className="w-3 h-3" src={Star} alt="A star"/>
        </button>
        <h1 className="text-white font-bold text-xl mt-5">How did we do?</h1>
        <p className="mt-2 text-lightGrey leading-5 tracking-tighter text-sm">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="flex flex-row items-center space-x-4 mt-4">
          <button className={currentActive === 1 ? circleButtonSelected : circleButtonUnselected} onClick={() => setCurrentActive(1)}>1</button>
          <button className={currentActive === 2 ? circleButtonSelected : circleButtonUnselected} onClick={() => setCurrentActive(2)}>2</button>
          <button className={currentActive === 3 ? circleButtonSelected : circleButtonUnselected} onClick={() => setCurrentActive(3)}>3</button>
          <button className={currentActive === 4 ? circleButtonSelected : circleButtonUnselected} onClick={() => setCurrentActive(4)}>4</button>
          <button className={currentActive === 5 ? circleButtonSelected : circleButtonUnselected} onClick={() => setCurrentActive(5)}>5</button>
        </div>
        <button className='bg-orange text-white text-center font-bold text-xs w-full h-9 mt-4 rounded-full leading-10 tracking-widest hover:bg-white hover:text-orange'>SUBMIT</button>
      </div>
  );
}

export default RatingContent;
