import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ContactSection,
  Form,
  ContainerLeft,
  Title,
  LeftContent,
  Input,
  ContainerRight,
  RightContent,
  TextArea,
  ButtonArea,
  Button,
} from "./ContactUsStyled";

const ContactUs = () => {
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [company, setCompany] = useState();
  const [msg, setMsg] = useState();
  const [loader, setLoader] = useState(false);

  const toastMsg = () =>
    toast.info("You successfully send message to us!", {
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
        "service_x0zhhen",
        "template_ycxdyad",
        e.target,
        "user_nRw2IJT8zCwxF2DjRFZ32"
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
    setLastname("");
    setEmail("");
    setCompany("");
    setMsg("");
  };

  return (
    <>
      <ContactSection>
        <Form onSubmit={handleSubmit}>
          <ContainerLeft>
            <Title>Contact us</Title>
            <LeftContent>
              <Input
                placeholder="First Name*"
                name="name"
                autoComplete="off"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                placeholder="Last Name*"
                name="lastname"
                autoComplete="off"
                required
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              <Input
                placeholder="Email*"
                name="email"
                type="email"
                autoComplete="off"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="Company*"
                name="company"
                autoComplete="off"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </LeftContent>
          </ContainerLeft>
          <ContainerRight>
            <RightContent>
              <TextArea
                placeholder="What can we do for you?*"
                autoComplete="off"
                name="msg"
                required
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />
              <ButtonArea>
                <Button
                  type="submit"
                  style={{
                    background: loader ? "#ccc" : "#0F72E5",
                    color: loader ? "#4d4d4d" : "#fff",
                  }}
                >
                  Send
                </Button>
              </ButtonArea>
            </RightContent>
          </ContainerRight>
          <ToastContainer />
        </Form>
      </ContactSection>
    </>
  );
};

export default ContactUs;
