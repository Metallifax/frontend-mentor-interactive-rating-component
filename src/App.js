import Container from './components/container/Container';
import RatingContent from './components/rating/RatingContent';
import { createContext, useEffect, useState } from 'react';
import ThankYou from './components/thank-you/ThankYou';

const ContextContainer = createContext(null);

const initialAppState = {
  rating: 0,
  submitted: false,
};

function App() {
  const [appState, setAppState] = useState(initialAppState);

  useEffect(() => {
    console.log('From APP:', appState);
  }, [appState]);

  return (
    <div className='bg-veryDarkBlueLighter grid place-items-center h-screen'>
      <ContextContainer.Provider value={{ appState, setAppState }}>
        {!appState.submitted ? (
          <Container>
            <RatingContent />
          </Container>
        ) : (
          <Container>
            <ThankYou rating={appState.rating} />
          </Container>
        )}
      </ContextContainer.Provider>
    </div>
  );
}

export default App;
export { ContextContainer };
