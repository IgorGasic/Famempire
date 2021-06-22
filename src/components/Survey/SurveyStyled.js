import styled from "styled-components";
import { AiOutlineUser } from "react-icons/ai";

export const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
`;
export const TitleH2 = styled.h2`
  text-align: center;
  color: #0f72e5;
  font-size: 40px;
  padding-bottom: 20px;
  font-weight: 200;

  @media screen and (max-width: 425px) {
    font-size: 34px;
  }
  @media screen and (max-width: 415px) {
    font-size: 32px;
  }
  @media screen and (max-width: 400px) {
    font-size: 30px;
  }
`;
export const TitleH1 = styled.h1`
  text-align: center;
  font-size: 80px;
  font-weight: 200;
  padding-bottom: 30px;

  @media screen and (max-width: 425px) {
    font-size: 60px;
  }
  @media screen and (max-width: 415px) {
    font-size: 55px;
  }

  @media screen and (max-width: 400px) {
    font-size: 50px;
  }
`;
export const Text = styled.p`
  text-align: center;
  font-size: 30px;
  padding-bottom: 30px;

  @media screen and (max-width: 425px) {
    font-size: 25px;
    padding-left: 5px;
    padding-right: 5px;
  }

  @media screen and (max-width: 415px) {
    font-size: 20px;
    padding-left: 5px;
    padding-right: 5px;
  }

  @media screen and (max-width: 400px) {
    font-size: 20px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h2`
  text-align: center;
  font-size: 60px;
  padding-top: 120px;

  @media screen and (max-width: 425px) {
    font-size: 43px;
  }

  @media screen and (max-width: 415px) {
    font-size: 33px;
  }

  @media screen and (max-width: 400px) {
    font-size: 30px;
  }
`;
export const Icon = styled(AiOutlineUser)`
  margin-top: 15px;
  margin-left: 20px;
  height: 40px;
  width: 40px;

  @media screen and (max-width: 425px) {
    margin-top: 20px;
    width: 30px;
    height: 30px;
  }

  @media screen and (max-width: 415px) {
    margin-top: 25px;
    width: 25px;
    height: 25px;
  }

  @media screen and (max-width: 400px) {
    margin-top: 25px;
    width: 25px;
    height: 25px;
  }
`;
export const InputTop = styled.input`
  width: 702px;
  height: 72px;
  margin-bottom: 35px;
  border: 4px solid #0f72e5;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 47.5px;
  outline: none;
  padding-left: 60px;
  font-size: 30px;

  &::placeholder {
    font-size: 30px;
    color: #000;
  }

  @media screen and (max-width: 425px) {
    width: 360px;
    font-size: 20px;
    padding-left: 50px;

    &::placeholder {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 415px) {
    width: 340px;
    font-size: 20px;
    padding-left: 45px;

    &::placeholder {
      font-size: 15px;
    }
  }

  @media screen and (max-width: 400px) {
    width: 300px;
    font-size: 20px;
    padding-left: 45px;

    &::placeholder {
      font-size: 15px;
    }
  }
`;
export const InputContainer = styled.div`
  & > ${Icon} {
    position: absolute;
  }
`;
export const Label = styled.label`
  font-size: 40px;
  text-align: center;
  padding-top: ${({ first }) => (first ? "80px" : "50px")};
  padding-bottom: 50px;

  @media screen and (max-width: 425px) {
    font-size: 25px;
    padding-bottom: 20px;
    padding-left: 5px;
    padding-right: 5px;
  }

  @media screen and (max-width: 400px) {
    font-size: 20px;
    padding-bottom: 20px;
    padding-left: 5px;
    padding-right: 5px;
  }
`;
export const Input = styled.input`
  background: #ffffff;
  border: 4px solid #0f72e5;
  box-sizing: border-box;
  height: 70px;
  width: 600px;
  font-size: 30px;
  padding-left: 10px;
  border-radius: 20px;
  outline: none;

  &::placeholder {
    font-size: 20px;
  }

  @media screen and (max-width: 425px) {
    width: 360px;
    font-size: 20px;

    &::placeholder {
      font-size: 15px;
    }
  }

  @media screen and (max-width: 415px) {
    width: 340px;
    font-size: 20px;

    &::placeholder {
      font-size: 15px;
    }
  }

  @media screen and (max-width: 400px) {
    width: 300px;
    font-size: 20px;

    &::placeholder {
      font-size: 15px;
    }
  }
`;
export const Button = styled.button`
  margin-top: 50px;
  color: #fff;
  background: #0f72e5;
  border: none;
  padding: 20px 100px;
  font-size: 30px;
  margin-bottom: 150px;
  border-radius: 20px;
  cursor: pointer;
`;
