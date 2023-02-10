// import { Title } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import Comments from '../components/Comments';


const Container = styled.div`
display: flex;
gap: 24px;`;

const Content = styled.div`
flex: 5;`;
const VideoWrapper = styled.div`
width: 100%;
`;

const Title = styled.h1`
font-size: 18px;
font-weight: 400;
margin-top: 20px;
margin-bottom: 10px;
color: ${({ theme }) => theme.text};

`
const Details = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;
const Info = styled.span``;
const Buttons = styled.div`
display:flex;
gap: 20px;
color: ${({ theme }) => theme.text}
`;
const Button = styled.div`
display: flex;
align-items: center;
gap: 5px;
cursor: pointer`;

const Hr = styled.hr`
border-radius: 0.5px solid ${({ theme }) => theme.soft};


`


const Recommended = styled.div`
flex: 2;`;

const Channel = styled.div`
display: flex;
justify-content: space-between;`

const ChannelInfo = styled.div`
display: flex;
gap: 20px;`

const Subscribe = styled.button`
background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;`

const Image = styled.img`
border-radius: 50%;
height: 50px;
width: 50px;
`;

const ChannelDetail = styled.div`
display:flex;
flex-direction: column;
color: ${({theme})=> theme.text}`;

const ChannelName = styled.span`
font-weight: 500`;

const ChannelCounter = styled.span`
margin-top: 5px;
margin-botton: 20px;
color: ${({theme})=> theme.textSoft};
font-size: 12px`;

const Description = styled.p`
font-size: 14px;`;


export default function Video() {
    return (
        <Container>
            <Content>
                <VideoWrapper>
                    <iframe width="100%" height="720"
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
                        <Button><ThumbUpOutlinedIcon />Like</Button>
                        <Button><ThumbDownOutlinedIcon />Dislike</Button>
                        <Button><ReplyOutlinedIcon />Reply</Button>
                        <Button><AddTaskOutlinedIcon />Save</Button>
                    </Buttons>

                </Details>
                <Hr />
                <Channel>
                    <ChannelInfo>
                        <Image src='https://i.pinimg.com/280x280_RS/7c/05/d8/7c05d8e738fb012d7133ea8c4139e5c1.jpg'></Image>
                        <ChannelDetail>
                            <ChannelName>DBics Channel</ChannelName>
                            <ChannelCounter>200 people like your shit</ChannelCounter>
                            <Description>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt quisquam magnam quae quos ex pariatur eius consequuntur non voluptatum nam error repellendus possimus at fuga dicta voluptatem omnis, quod nostrum?</Description>
                        </ChannelDetail>
                    </ChannelInfo>
                    <Subscribe>Subscribe</Subscribe>
                </Channel>
                <Hr/>
                <Comments/>
            </Content>
            <Recommended>
                Recommended
            </Recommended>
        </Container>
    )
}