import React from 'react';
import styled from 'styled-components';
import armbar from '../img/armbar.JPG';
import {Link} from 'react-router-dom';


const Container = styled.div`
width: 360px;
margin-bottom: 45px;
cursor: pointer;`

const Img = styled.img`
width: 100%;
height: 202px;
background-color: #999;
cursor: pointer;`

const Details = styled.div`
display: flex;
margin-top: 16px;
gap: 12px;
`

const ChannelImage = styled.img`
width: 36px;
height: 36px;
border-radius: 50%;
background-color: #999;

`
const Texts = styled.div``
const Title = styled.h1`
font-size: 16px;
font-weight: 500;
color: ${({theme})=>theme.textSoft}
`
const ChannelName = styled.h2`
font-size: 14px;
color: ${({theme})=>theme.textSoft};
margin: 9px 0px;`


const Info = styled.div`
font-size: 14px;
color: ${({theme})=>theme.textSoft};
`


export default function Card(){
    return(
        <Link to='/video/test' style={{textDecoration:'none'}}>
        <Container>
            <Img src={armbar}/>
                <Details>
                    <ChannelImage/>
                    <Texts>
                        <Title>Video Title</Title>
                        <ChannelName>DBic</ChannelName>
                        <Info>1111 views 1 Day Ago</Info>
                    </Texts>
                </Details>


        </Container>
        </Link>
    )
}