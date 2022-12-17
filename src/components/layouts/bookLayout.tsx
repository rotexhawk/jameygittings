import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React, { useState } from "react";
import { Columns } from "react-bulma-components";
import styled from "styled-components";

const Bar = styled.header`
  position: fixed;
  top: 0;
  left: -2rem;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 7rem;
  border-right: 1px solid #eee;
  background-color: white;
  z-index: 5;
`;

const Menu = styled.div``;

const MenuButton = styled.a`
  cursor: pointer;
  display: block;
  margin-left: 2px;
  width: 40px;
  height: 40px;
  top: 20px;
  left: 54px;
  position: absolute;
  &:before,
  &:after {
    content: "";
    width: 21px;
    height: 1px;
    background: #333;
    display: block;
    position: absolute;
    left: 5px;
    transition: all 0.2s ease-in-out;
  }
  &:before {
    top: 13px;
    ${props => props.isOpen && `transform: rotate(45deg) translate(3px, 3px);`}
  }
  &:after {
    top: 22px;
    ${props =>
      props.isOpen && `transform: rotate(-45deg) translate(4px, -3px);`}
  }
`;

const VerticalNav = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  left: calc(5rem - 300px);
  margin: 0;
  max-width: 300px;
  z-index: 4;
  transition: all 0.3s ease-in-out;
  border-right: 1px solid #f0f0f0;
  border-top: none;
  border-bottom: none;
  overflow-y: auto;
  text-align: center;
  background-color: white;
  padding: 3rem;
  ${props =>
    props.isOpen &&
    `
  left: 5rem;
  transition: all .3s ease-in-out;`}
`;

const BookTitle = styled.div`
  transform: rotate(90deg);
  transform-origin: top left;
  position: absolute;
  left: 5rem;
  top: calc(50vh - 12rem);
  line-height: 1;
  width: 24rem;
  height: 2em;
`;

const Wrapper = styled.div`
  margin-left: 5rem;
`;

const TableOfContents = styled.h3`
  &:after {
    content: "";
    display: block;
    width: 4rem;
    border-bottom: 1px solid #ddd;
    margin: 2rem auto;
  }
`;

const LeftColumn = styled(Columns.Column)`
  background-color: ${props => props.background ?? "white"};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0;
`;

const LeftColumnContent = styled.div`
  background-color: ${props => props.background ?? "white"};
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  height: 100vh;
`;

const RightColumn = styled(Columns.Column)``;

export const BookBar = ({ title, isOpen, children, onClick }) => {
  return (
    <>
      <Bar>
        <BookTitle>
          <h1>{title}</h1>
        </BookTitle>
        <Menu onClick={onClick}>
          <MenuButton isOpen={isOpen}></MenuButton>
        </Menu>
      </Bar>
      {children}
    </>
  );
};

export const VerticalNavBar = ({ isOpen, children }) => {
  return (
    <VerticalNav isOpen={isOpen}>
      <TableOfContents>TABLE OF CONTENTS</TableOfContents>
      {children}
    </VerticalNav>
  );
};

type BookLayoutProps = {
  cover?: IGatsbyImageData;
  title: string;
  navbarContent: JSX.Element;
  children: JSX.Element;
  leftColumnBackground?: string;
  rightColumnBackground?: string;
};
export const BookLayout = ({
  cover,
  title,
  navbarContent,
  children,
  leftColumnBackground,
  rightColumnBackground,
}: BookLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <div>
      <BookBar title={title} isOpen={isOpen} onClick={onClick}>
        <VerticalNavBar isOpen={isOpen}>{navbarContent}</VerticalNavBar>
      </BookBar>
      <Wrapper>
        <Columns>
          <LeftColumn
            size="two-fifths"
            mobile={{ display: "hidden" }}
            background={leftColumnBackground}
          >
            <LeftColumnContent background={leftColumnBackground}>
              <GatsbyImage image={cover!} alt={title} />
            </LeftColumnContent>
          </LeftColumn>
          <RightColumn background={rightColumnBackground}>
            {children}
          </RightColumn>
        </Columns>
      </Wrapper>
    </div>
  );
};
