import Container from './components/container/Container';
import RatingContent from './components/rating/RatingContent';

function App() {
  return (
    <div className='bg-veryDarkBlueLighter grid place-items-center h-screen'>
      <Container>
        <RatingContent />
      </Container>
    </div>
  );
}

export default App;
