import React, { useState } from "react";
import {
  Block,
  Container,
  Content,
  Footer,
  Section,
} from "react-bulma-components";
import styled from "styled-components";
import { BookLayout } from "../layouts/bookLayout";
import { useStaticQuery, graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { LeftIcon, RightIcon } from "../Icons/rightArrow";

const StyledLink = styled(Link)`
  display: block;
  margin: 2.5rem 1rem;
  color: initial;
`;

const Chapter = styled.span`
  display: block;
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.5);
`;

const TextContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const NextItem = styled.p`
  text-align: center;
  margin: 5rem auto;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 3rem;
  padding-bottom: 3rem;
  text-indent: 0;
`;

export const MeatOfHorseChapter = ({ children, page }) => {
  const images = useStaticQuery(graphql`
    query {
      horse: file(relativePath: { regex: "/meat-of-the-horse-cover.jpg/" }) {
        childImageSharp {
          gatsbyImageData(
            width: 600
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  const getNextLink = () => {
    switch (page) {
      case 1:
        return {
          link: "/meat-of-the-horse/chapter-one",
          text: "Chapter One",
        };
      case 2:
        return {
          link: "/meat-of-the-horse/chapter-two",
          text: "Chapter Two",
        };
      case 3:
        return {
          link: "/buy-book",
          text: "Buy Book",
        };
      default:
        return {};
    }
  };

  const cover = getImage(images.horse);

  console.log("cover", cover);

  const NavbarContent = () => {
    return (
      <>
        <StyledLink to="/meat-of-the-horse/chapter-one">
          <Chapter>Chapter One</Chapter> A Meal Called Horse
        </StyledLink>
        <StyledLink to="/meat-of-the-horse/chapter-two">
          <Chapter>Chapter Two</Chapter> Okapi Woman and the Lemon Guy
        </StyledLink>
        <StyledLink to="/">
          <Chapter>
            <LeftIcon />
          </Chapter>
          Back to Main Site
        </StyledLink>
      </>
    );
  };

  const { link, text } = getNextLink();

  return (
    <BookLayout
      cover={cover}
      title="Meat of the Horse"
      navbarContent={<NavbarContent />}
      leftColumnBackground=""
    >
      <Section>
        <Content>
          <TextContainer>
            {children}
            {link && (
              <NextItem>
                <Link to={link}>
                  <RightIcon />
                  <Block>{text}</Block>
                </Link>
              </NextItem>
            )}
          </TextContainer>
        </Content>
      </Section>
    </BookLayout>
  );
};
