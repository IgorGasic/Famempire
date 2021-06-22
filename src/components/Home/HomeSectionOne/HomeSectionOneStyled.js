import styled from "styled-components";
import { Container } from "../../../GlobalStyle";

export const ContainerContent = styled(Container)`
  max-width: 1380px;
`;
export const Text = styled.p`
  font-size: 37px;
  text-align: center;
  padding-bottom: 50px;
  padding-top: ${({ title }) => (title ? "50px" : "0")};

  @media screen and (max-width: 425px) {
    font-size: 25px;
  }
`;
