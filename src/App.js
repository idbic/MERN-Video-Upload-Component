import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Menu from './components/Menu';
import NavBar from './components/Navbar';

const Container = styled.div `

`
const Main = styled.div`

`

const Wrapper = styled.div`

`

function App() {
  return (
    <Container>
      <Menu/>
      <Main>
      <NavBar/>
      <Wrapper>
        video cards
      </Wrapper>
      </Main>
    </Container>
  );
}

export default App;
