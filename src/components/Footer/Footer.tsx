import styled from "styled-components";

const FooterDiv = styled.div`
  background-color: #cccccc;
  height: 10vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.6em;
  font-weight: bold;
`;

const Footer = () => {
  return <FooterDiv>by ciamek</FooterDiv>;
};

export default Footer;
