import './Container.css';

function container({ children }) {
  return <div className='h-80 w-80 rounded-3xl my-background'>{children}</div>;
}

export default container;
