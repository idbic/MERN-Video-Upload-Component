import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
gap: 10px;
margin: 30px 0px`;

const Avatar = styled.img`
height: 50px;
width: 50px;
border-radius: 50%`;

const Name = styled.span`
display: flex;
font-size: 13px;
font-weight: 500;`;

const Date = styled.span`
font-size: 12px;
font-weight: 400;
color: ${({theme})=> theme.textSoft};
margin-left: 5px`;

const Details = styled.div`
display: flex;
color:${({theme})=> theme.text} `;

const Text = styled.p``;


export default function Comment() {
  return (
    <><Container>
        <Avatar src='https://i.pinimg.com/280x280_RS/7c/05/d8/7c05d8e738fb012d7133ea8c4139e5c1.jpg'/> 
        <Details>
            <Name>Kambree Hill <Date>2 Days ago</Date></Name>
        
        </Details>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores a accusamus architecto omnis perspiciatis dignissimos, aut ipsum, incidunt nobis labore dolor, recusandae eaque quam maxime exercitationem vitae. Natus, architecto. Deserunt?</Text>
            
        
    </Container></>
  )
}
