import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Menu from './components/Menu';
import NavBar from './components/Navbar';

const Container = styled.div `
  display: flex;
`
const Main = styled.div`
  flex:7
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
