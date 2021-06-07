import React, {useState, useEffect} from 'react'
import ReactPlayer from 'react-player';
import points from '../../../images/tackice.svg';
import dugmeDesno from '../../../images/dugmeDesno.svg';
import dugmeLevo from '../../../images/dugmeLevo.svg';
import {data} from '../../../data/VideoEditingData';
import {MainContainer,
        BlueContainer,
        Title,
        Text,
        ContentContainer,
        MainTitle,
        VideoWrapper,
        TitleDiv,
        ArrowContainer,
        ArrowLeft,
        ArrowRight,
        Points} from './VideoEditingStyled';

const VideoEditing = () => {

    const [service] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        const lastIndex = service.length -1;
        if(index < 0){
          setIndex(lastIndex)
        }
        if(index > lastIndex){
          setIndex(0);
        }
      },[index, service]);
    
    return (
        <>
            <MainContainer>
                <BlueContainer>
                    <Title>VIDEO EDITING</Title>
                    <Text>With the use of knowledge of our creative team, we are able to create incredible advertising content for you.</Text>
                    <Text>It’s designed to leave a good first impression witch will lead customers closer to buying your product.</Text>
                    <Points src={points} />
                </BlueContainer>
                <ContentContainer>
                    <TitleDiv>
                        <MainTitle>Portfolio</MainTitle>
                    </TitleDiv>
                    {data.map((item, itemIndex)=>{
                        const {id, url} = item;
                        let position = 'NextVideo'
                        if(itemIndex === index){
                            position = 'ActiveVideo'
                            }
                        if(index === 0 && itemIndex === service.length -1){
                            position = 'LastVideo'
                            }

                        return(
                            <VideoWrapper className={position} key={id}>
                                <ReactPlayer url={url} width="868px" height="492px"/>
                            </VideoWrapper>                        
                            )
                    })}          
                    <ArrowContainer>
                        <ArrowLeft src={dugmeLevo} onClick={()=> setIndex(index-1)}></ArrowLeft>
                        <ArrowRight src={dugmeDesno} onClick={()=> setIndex(index+1)}></ArrowRight>
                    </ArrowContainer>
                </ContentContainer>
            </MainContainer>
        </>
    )
}

export default VideoEditing
