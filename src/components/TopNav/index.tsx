import React from "react";
import { Container, Navbar } from "react-bulma-components";
import styled from "styled-components";

const StyledNav = styled(({ isAbsolute, ...rest }) => <Navbar {...rest} />)`
  ${props =>
    props.isAbsolute &&
    `
  position: absolute;
  left: 0;
  right: 0;`}
`;

const TextLogo = styled.span`
  font-size: 1.5rem;
`;

export const TopNav = ({ isAbsolute }) => {
  return (
    <StyledNav isAbsolute={isAbsolute}>
      <Container>
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="/">
            <TextLogo>Jamey Gittings</TextLogo>
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container align="right">
            <Navbar.Item href="/what-i-care-about" key="home">
              What I Care About
            </Navbar.Item>
            <Navbar.Item href="/what-i-want-from-readers" key="what-i-want">
              What I Want From Readers
            </Navbar.Item>
            <Navbar.Item href="#books" key="books">
              Books
            </Navbar.Item>
            <Navbar.Item href="/contact">
              <span className="button is-primary">Contact</span>
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Container>
    </StyledNav>
  );
};
