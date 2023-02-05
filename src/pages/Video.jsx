import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
gap: 24px;`;

const Content = styled.div`
flex: 5;`;
const VideoWrapper = styled.div`
`;

const Details = styled.div``;
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
              Content  
            </VideoWrapper>
            </Content>
            <Recommended>
                Recommended
            </Recommended>
        </Container>
    )
}