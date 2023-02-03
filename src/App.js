import logo from './logo.svg';
import './App.css';
import styled, {ThemeProvider}from 'styled-components';
import Menu from './components/Menu';
import NavBar from './components/Navbar';
import { darkTheme } from './Utils/Theme';
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
    <ThemeProvider theme={darkTheme}>
    <Container>
      <Menu/>
      <Main>
      <NavBar/>
      <Wrapper>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
    
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
    
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>

      </Wrapper>
      </Main>
    </Container>
    </ThemeProvider>
  );
}

export default App;
