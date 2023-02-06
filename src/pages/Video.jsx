// import { Title } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
gap: 24px;`;

const Content = styled.div`
flex: 5;`;
const VideoWrapper = styled.div`
`;

const Title = styled.h1`
font-size: 18px;
font-weight: 400;
margin-top: 20px;
margin-bottom: 10px;
color: ${({theme})=>theme.text};

`
const Details = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;
const Info = styled.span``;
const Buttons = styled.div``;
const Button = styled.div``;



const Recommended = styled.div`
flex: 2;`;
 

export default function Video(){
    return(
        <Container>
            <Content>
            <VideoWrapper>
            <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/GknZcxCyNMM" 
            title="YouTube video player" 
            frameborder="0" allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe> 
            </VideoWrapper>
            <Title>Test Video </Title>
            <Details>
                <Info>400 views - Nov 21 2033</Info>
                <Buttons>
                    <Button>Button</Button>
                </Buttons>
            </Details>
            </Content>
            <Recommended>
                Recommended
            </Recommended>
        </Container>
    )
}