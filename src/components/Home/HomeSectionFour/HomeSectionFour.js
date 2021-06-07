import React, { useState, useEffect } from "react";
import points from "../../../images/tackice.svg";
import dugmeDesno from "../../../images/dugmeDesno.svg";
import dugmeLevo from "../../../images/dugmeLevo.svg";
import { data } from "../../../data/SectionFourData";
import { Link } from "react-router-dom";
import {
  MainContainer,
  BlueContainer,
  Title,
  ContentContainer,
  ImgWrapper,
  Img,
  Content,
  TextOne,
  TextTwo,
  TextThree,
  Button,
  ArrowRight,
  ArrowLeft,
  Arrow,
  Points,
  ContentArticle,
} from "./HomeSectionFourStyled";

const HomeSectionFour = () => {
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

  /* useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]); */

  return (
    <>
      <MainContainer>
        <BlueContainer>
          <Title>our services</Title>
          <Points src={points} />
        </BlueContainer>
        <ContentContainer>
          {service.map((item, itemIndex) => {
            const { img, textone, texttwo, textthree, id, link } = item;
            let position = "NextArticle";
            if (itemIndex === index) {
              position = "ActiveArticle";
            }
            if (index === 0 && itemIndex === service.length - 1) {
              position = "LastArticle";
            }
            return (
              <ContentArticle className={position} key={id}>
                <ImgWrapper>
                  <Img src={img} />
                </ImgWrapper>
                <Content>
                  <TextOne>{textone}</TextOne>
                  <TextTwo>{texttwo}</TextTwo>
                  <TextThree>{textthree}</TextThree>
                  <Link to={link}>
                    <Button>view</Button>
                  </Link>
                </Content>
              </ContentArticle>
            );
          })}
        </ContentContainer>
        <Arrow>
          <ArrowLeft
            src={dugmeLevo}
            onClick={() => setIndex(index - 1)}
          ></ArrowLeft>
          <ArrowRight
            src={dugmeDesno}
            onClick={() => setIndex(index + 1)}
          ></ArrowRight>
        </Arrow>
      </MainContainer>
    </>
  );
};

export default HomeSectionFour;
