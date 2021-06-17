import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Container,
  TitleH2,
  TitleH1,
  Title,
  Text,
  Form,
  InputTop,
  Label,
  Input,
  Button,
  Icon,
  InputContainer,
} from "../SurveyStyled";

const SurveyMain = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [marketing, setMarketing] = useState("");
  const [description, setDescription] = useState("");
  const [services, setServices] = useState("");
  const [business, setBusiness] = useState("");
  const [target, setTarget] = useState("");
  const [client, setClient] = useState("");
  const [loader, setLoader] = useState(false);

  const toastMsg = () =>
    toast.info("You have successfully completed the survey!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    emailjs
      .sendForm(
        "service_903db93",
        "template_33g0otl",
        e.target,
        "user_JajU7eKhgR9CQ2FMgGudO"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoader(false);
          toastMsg();
        },
        (error) => {
          console.log(error.text);
          setLoader(false);
        }
      );

    setName("");
    setEmail("");
    setMarketing("");
    setDescription("");
    setServices("");
    setBusiness("");
    setTarget("");
    setClient("");
  };

  return (
    <>
      <Container>
        <TitleH2>SPOTS ARE ALMOST GONE!</TitleH2>
        <TitleH1>FREE STRATEGY SESSION</TitleH1>
        <Text>
          Get your completely FREE Strategy Session Call.
          <br /> Lets talk about your business and find the most creative way{" "}
          <br />
          of winning over your audience.{" "}
        </Text>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Icon />
            <InputTop
              type="text"
              required
              name="name"
              autoComplete="off"
              placeholder="First Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </InputContainer>
          <InputContainer>
            <Icon />
            <InputTop
              type="email"
              required
              name="email"
              autoComplete="off"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </InputContainer>
          <Title>Lest get started!</Title>
          <Label>1) Which type of marketing you currently use?</Label>
          <Input
            type="text"
            required
            name="marketing"
            autoComplete="off"
            placeholder="e.g. Tv, Seo, Radio, Google..."
            onChange={(e) => setMarketing(e.target.value)}
            value={marketing}
          />
          <Label>
            2) Give us closer description on what
            <br /> your business has to offer?
          </Label>
          <Input
            type="text"
            required
            name="description"
            autoComplete="off"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <Label>3) What type of services would you like to get?</Label>
          <Input
            type="text"
            required
            name="services"
            autoComplete="off"
            placeholder="Video Editing, GRID, 3D Visualisation..."
            onChange={(e) => setServices(e.target.value)}
            value={services}
          />
          <Label>4) What is your business goal?</Label>
          <Input
            type="text"
            name="business"
            required
            autoComplete="off"
            onChange={(e) => setBusiness(e.target.value)}
            value={business}
          />
          <Label>
            5) Currently monthly revenue? What is your monthly target?
          </Label>
          <Input
            type="text"
            name="target"
            required
            autoComplete="off"
            onChange={(e) => setTarget(e.target.value)}
            value={target}
          />
          <Label>6) How interested you are of becoming a client?</Label>
          <Input
            type="text"
            name="client"
            required
            placeholder="1 ot 10"
            autoComplete="off"
            onChange={(e) => setClient(e.target.value)}
            value={client}
          />
          <Button
            type="submit"
            style={{
              background: loader ? "#ccc" : "#0F72E5",
              color: loader ? "#4d4d4d" : "#fff",
            }}
          >
            Send
          </Button>
          <ToastContainer />
        </Form>
      </Container>
    </>
  );
};

export default SurveyMain;
