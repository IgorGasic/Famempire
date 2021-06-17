import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import dugmeDesno from "../../../images/dugmeDesno.svg";
import dugmeLevo from "../../../images/dugmeLevo.svg";
import "./player1.css";
import points from "../../../images/tackice.svg";
import { videoData, imgData } from "../../../data/3dVisualisation";
import {
  MainContainer,
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
  Points,
  Proba,
  NekiNaslov,
  NekiText,
  Nesto,
  ImgWrapper,
  Img,
  Proba1,
  Video,
} from "./VisualisationStyled";

const Visualisation = () => {
  const [service] = useState(videoData);
  const [imgService] = useState(imgData);
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(0);

  useEffect(() => {
    const lastIndex = service.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, service]);

  useEffect(() => {
    const lastIndex1 = imgService.length - 1;
    if (index1 < 0) {
      setIndex1(lastIndex1);
    }
    if (index1 > lastIndex1) {
      setIndex1(0);
    }
  }, [index1, imgService]);

  return (
    <>
      <MainContainer>
        <BlueContainer>
          <Title>3D visualisation</Title>
          <Text>
            Is video advertasing where we replace the real life products with 3D
            models, which will open new possibilities to us in terms of video
            editing.
          </Text>
          <Text>
            3D also enhances product quaility and creates better conditions for
            making representive video animation.
          </Text>
          <Points src={points} />
        </BlueContainer>
        <ContentContainer>
          <TitleDiv>
            <MainTitle>Portfolio</MainTitle>
          </TitleDiv>
          <Proba>
            {videoData.map((item, itemIndex) => {
              const { id, url } = item;
              let position = "NextVideo";
              if (itemIndex === index) {
                position = "ActiveVideo";
              }
              if (index === 0 && itemIndex === service.length - 1) {
                position = "LastVideo";
              }
              return (
                <VideoWrapper className={position} key={id}>
                  <Video>
                    <ReactPlayer url={url} className="react-player1" />
                  </Video>
                </VideoWrapper>
              );
            })}
            <Nesto gornji>
              <NekiNaslov>3D Animations</NekiNaslov>
              <NekiText>
                Video commercials with a touch of 3D magick. Unlimited
                possibilities. Anything can be created.
              </NekiText>
            </Nesto>
            <ArrowContainer dugme>
              <ArrowLeft
                src={dugmeLevo}
                onClick={() => setIndex(index - 1)}
              ></ArrowLeft>
              <ArrowRight
                src={dugmeDesno}
                onClick={() => setIndex(index + 1)}
              ></ArrowRight>
            </ArrowContainer>
          </Proba>
          <Proba1>
            {imgData.map((item, lastIndex1) => {
              const { id, img } = item;
              let position = "NextPicture";
              if (lastIndex1 === index1) {
                position = "ActivePicture";
              }
              if (index1 === 0 && lastIndex1 === imgService.length - 1) {
                position = "LastPicture";
              }
              return (
                <ImgWrapper className={position} key={id}>
                  <Img src={img} />
                </ImgWrapper>
              );
            })}
            <Nesto>
              <NekiNaslov>3D Rendering</NekiNaslov>
              <NekiText>
                The real world conditions are never perfect, but to
                berepresentative we need our product to shine.
                <br /> This is where 3D steps in.
              </NekiText>
            </Nesto>
            <ArrowContainer>
              <ArrowLeft
                src={dugmeLevo}
                onClick={() => setIndex1(index1 - 1)}
              ></ArrowLeft>
              <ArrowRight
                src={dugmeDesno}
                onClick={() => setIndex1(index1 + 1)}
              ></ArrowRight>
            </ArrowContainer>
          </Proba1>
        </ContentContainer>
      </MainContainer>
    </>
  );
};

export default Visualisation;
