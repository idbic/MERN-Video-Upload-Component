import react from 'react';
import styled from 'styled-components';
import Comment from './Comment';

const Container = styled.div``;
const NewComment = styled.div`
display: flex;
align-items: center;
gap: 10px;

`;
const Avatar = styled.img`
height: 50px;
width: 50px;
border-radius: 50%`;
const Input = styled.input`
border: none;
border-bottom: 1px solid ${({theme})=> theme.soft};
background-color: transparent;
outline: none; 
padding: 5px;
width: 100%;

`;

export default function Comments(){
    return(
   <>
   <Container>
        
        <NewComment>
            <Avatar src='https://i.pinimg.com/280x280_RS/7c/05/d8/7c05d8e738fb012d7133ea8c4139e5c1.jpg'/>
            <Input placeholder='Add a comment...'/>

        </NewComment>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
   </Container>
   </>     
    )
}