import styled from "styled-components";
import contactbg from "../../images/contact.jpg";

export const ContactSection = styled.div`
  background: url(${contactbg});
  height: 93vh;
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    height: 100%;
  }

  @media screen and (max-width: 425px) {
    height: 100%;
  }
`;
export const Form = styled.form`
  display: flex;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    margin-right: 180px;
  }
  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
`;
export const ContainerLeft = styled.div`
  width: 900px;

  @media screen and (max-width: 425px) {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const Title = styled.h3`
  font-size: 55px;
  padding-left: 50px;
  padding-top: 50px;

  @media screen and (max-width: 425px) {
    padding-left: 0;
    font-size: 35px;
    text-align: center;
  }
`;
export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0 0 150px;

  @media screen and (max-width: 425px) {
    padding: 0;
  }
`;
export const Input = styled.input`
  margin: 40px 0;
  padding: 20px 20px;
  box-sizing: border-box;
  border: 4px solid #0f72e5;
  border-radius: 30px;
  background: rgba(15, 114, 229, 0.1);
  outline: none;
  font-size: 20px;

  &::placeholder {
    color: #000;
  }

  @media screen and (max-width: 425px) {
    padding: 20px 10px;
    margin: 20px 0;
  }
`;
export const ContainerRight = styled.div`
  width: 900px;

  @media screen and (max-width: 425px) {
    width: 300px;
    margin-right: auto;
    margin-left: auto;
  }
`;
export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 166px 0 0 120px;

  @media screen and (max-width: 425px) {
    padding: 50px 0 0 0;
  }
`;
export const TextArea = styled.textarea`
  max-width: 834px;
  height: 406px;
  box-sizing: border-box;
  border: 4px solid #0f72e5;
  border-radius: 30px;
  background: rgba(15, 114, 229, 0.1);
  outline: none;
  font-size: 30px;
  padding: 20px 20px;

  &::placeholder {
    color: #000;
  }

  @media screen and (max-width: 425px) {
    font-size: 20px;
    height: 220px;
  }
`;
export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;

  @media screen and (max-width: 425px) {
    padding-bottom: 50px;
  }
`;
export const Button = styled.button`
  width: 50%;
  height: 60px;
  background: #0f72e5;
  border: 4px solid #0f72e5;
  box-sizing: border-box;
  border-radius: 30px;
  color: #fff;
  font-size: 30px;
  cursor: pointer;

  @media screen and (max-width: 1280px) {
    width: 30%;
  }

  @media screen and (max-width: 425px) {
    width: 80%;
  }
`;
