import React from 'react';
import styled from 'styled-components';
import armbar from '../img/armbar.JPG'
const Container = styled.div`
width: 360px;
margin-bottom: 45px;
cursor: pointer;`

const Img = styled.img`
width: 100%;
height: 202px;
background-color: #999;
cursor: pointer;`



export default function Card(){
    return(
        <Container><Img src={armbar}/></Container>
    )
}