import React, { useState, useEffect } from "react";
import { data } from "../../../data/Web";
import points from "../../../images/tackice.svg";
import {
  MainContainer,
  BlueContainer,
  Title,
  Text,
  ContentContainer,
  MainTitle,
  ImgWrapper,
  Img,
  TitleDiv,
  ShitText,
  Points,
} from "./WebDevelopmentStyled";

const WebDevelopment = () => {
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
          <Title>Web Development</Title>
          <Text>
            Creating a landing page for your brand is one of the essentials for
            online businesses.
          </Text>
          <Text>Aside site development we also cover UI design.</Text>
          <Points src={points} />
        </BlueContainer>
        <ContentContainer>
          <TitleDiv>
            <MainTitle>Portfolio</MainTitle>
          </TitleDiv>
          {service.map((item, itemIndex) => {
            const { id, img } = item;
            let position = "NextPicture";
            if (itemIndex === index) {
              position = "ActivePicture";
            }
            if (index === 0 && itemIndex === service.length - 1) {
              position = "LastPicture";
            }
            return (
              <ImgWrapper className={position} key={id}>
                <Img src={img} />
              </ImgWrapper>
            );
          })}
          <ShitText>
            Web development is hard to show without actually opening the site.
            <br />
            This is one example of a design that can be created.
          </ShitText>
        </ContentContainer>
      </MainContainer>
    </>
  );
};

export default WebDevelopment;
