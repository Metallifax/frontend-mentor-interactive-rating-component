import thankYouArt from '../../images/illustration-thank-you.svg';

function ThankYou({ rating }) {
  return (
    <div className='relative top-6 left-6 custom-max-width'>
      <div className='flex justify-center'>
        <img className='w-1/2' src={thankYouArt} alt='Thank you!' />
      </div>
      <p
        className='text-sm text-center text-orange bg-darkBlue mt-6 mx-auto py-1 rounded-full'
        style={{ width: '10.5rem', paddingTop: '7px' }}
      >
        You selected {rating} out of 5
      </p>
      <h1 className='text-2xl text-white font-bold text-center mt-5'>Thank you!</h1>
      <p className='text-lightGrey text-sm text-center mt-2'>
        We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in
        touch!
      </p>
    </div>
  );
}

export default ThankYou;
