import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
color: white;
background-color: red;
align-items: center;
display: flex;
justify-content: center;`;


const Wrapper = styled.div`
width: 400px;
height: 800px;
border-color: green;
border-width: 20px;`;
const Input = styled.div``;
const Button = styled.div``;

export default function SignIn() {
  return (
    <Container>
        <Wrapper>    
        <h1>SignIn</h1>
        <Input><input placeholder='username'/>
               <input placeholder='password'/>
               </Input>
        <Button><button>Submit</button></Button>
        </Wrapper>
    </Container>
  )
}
