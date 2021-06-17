import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import emailjs from "emailjs-com";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH3,
  HeroH1,
  HeroSurvey,
  Input,
  Button,
} from "./HeroStyled";

const Hero = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x0zhhen",
        "template_4nqh5yb",
        e.target,
        "user_nRw2IJT8zCwxF2DjRFZ32"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoader(false);
        },
        (error) => {
          console.log(error.text);
          setLoader(false);
        }
      );

    setName("");
    setEmail("");
  };

  return (
    <HeroContainer>
      <HeroContent>
        <Fade cascade>
          <HeroItems>
            <HeroH3>First Creative Marketing Company In Region</HeroH3>
            <HeroH1>
              USE POST-PANDEMIC BOOM
              <br /> TO EXPLODE YOUR SALES
              <br /> IN THE NEXT 90-DAYS
            </HeroH1>
          </HeroItems>
        </Fade>
        <HeroSurvey onSubmit={handleSubmit}>
          <Input
            placeholder="Name*"
            autoComplete="off"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Email*"
            autoComplete="off"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            style={{
              background: loader ? "#ccc" : "#0F72E5",
              color: loader ? "#4d4d4d" : "#fff",
            }}
          >
            Send me 5 ways to grow my business
          </Button>
        </HeroSurvey>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
