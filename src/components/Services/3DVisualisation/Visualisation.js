import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import dugmeDesno from "../../../images/dugmeDesno.svg";
import dugmeLevo from "../../../images/dugmeLevo.svg";
import points from "../../../images/tackice.svg";
import { data } from "../../../data/3dVisualisation";
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
} from "./VisualisationStyled";

const Visualisation = () => {
  const [service] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = service.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, service]);

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
          {data.map((item, itemIndex) => {
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
                <ReactPlayer url={url} width="868px" height="492px" />
              </VideoWrapper>
            );
          })}
          <ArrowContainer>
            <ArrowLeft
              src={dugmeLevo}
              onClick={() => setIndex(index - 1)}
            ></ArrowLeft>
            <ArrowRight
              src={dugmeDesno}
              onClick={() => setIndex(index + 1)}
            ></ArrowRight>
          </ArrowContainer>
        </ContentContainer>
      </MainContainer>
    </>
  );
};

export default Visualisation;
