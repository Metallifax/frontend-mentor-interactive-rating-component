function SubmitButton({ onClick }) {
  return (
    <button
      className='bg-orange text-white text-center font-bold text-xs w-full h-9 mt-5 rounded-full leading-10
                 tracking-widest hover:bg-white hover:text-orange'
      onClick={onClick}
    >
      SUBMIT
    </button>
  );
}

export default SubmitButton;
