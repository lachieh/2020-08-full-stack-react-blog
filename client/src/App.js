import './App.css';
import Posts from './components/Posts';
import { Container, Segment } from 'semantic-ui-react'

function App() {

  return (
    <Container>
      <Segment vertical>
        <Posts />
      </Segment>
    </Container>
  );
}

export default App;
