import React from "react";
import styled from "styled-components";
import { Content, Footer, Container } from "react-bulma-components/esm";
import { TopNav } from "../TopNav";
require("../../styles/app.scss");

const PageLayout = styled.div`
  z-index: 3;
  position: relative;
`;

export const HomeLayout = ({ children, hero }) => {
  return (
    <Content>
      <TopNav />
      {hero}
      <main role="main">
        <PageLayout>{children}</PageLayout>
      </main>
      <Footer>
        <Container>
          <Content>
            <p className="is-pulled-left mb-0">JameyGittings</p>
            <p className="is-pulled-right mb-0 is-size-6">
              © Copyright 2021 JameyGittings
            </p>
            <span className="is-clearfix" />
          </Content>
        </Container>
      </Footer>
    </Content>
  );
};
