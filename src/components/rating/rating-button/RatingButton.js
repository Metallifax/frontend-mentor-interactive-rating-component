function RatingButton({ rating, ratingNumber, onClick }) {
  const commonRatingButtonClasses =
    'flex justify-center items-center font-bold rounded-full button-sizing hover:bg-orange hover:text-white ' +
    'active:bg-lightGrey active:text-white';
  const ratingButtonUnselectedClasses = `${commonRatingButtonClasses} bg-darkBlue text-lightGrey`;
  const ratingButtonSelectedClasses = `${commonRatingButtonClasses} bg-lightGrey text-white`;

  return (
    <button
      className={rating === ratingNumber ? ratingButtonSelectedClasses : ratingButtonUnselectedClasses}
      onClick={onClick}
    >
      {ratingNumber}
    </button>
  );
}

export default RatingButton;
