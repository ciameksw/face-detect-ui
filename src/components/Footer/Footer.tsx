import styled from "styled-components";

const FooterDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  height: 10vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.4em;
  font-weight: bold;
`;

const Footer = () => {
  return <FooterDiv>by ciamek</FooterDiv>;
};

export default Footer;
