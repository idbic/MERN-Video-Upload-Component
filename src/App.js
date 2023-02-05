import logo from './logo.svg';
import './App.css';
import styled, {ThemeProvider}from 'styled-components';
import Menu from './components/Menu';
import NavBar from './components/Navbar';
import { darkTheme, lightTheme } from './Utils/Theme';
import { useState } from 'react';
const Container = styled.div `
  display: flex;
`
const Main = styled.div`
  flex:7;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text}
`

const Wrapper = styled.div`

`

function App() {
  const [darkMode, setDarkMode] = useState(true)
  
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container>
      <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
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
