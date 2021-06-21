import React from "react";
import styled from "styled-components";
import { Content, Footer, Container } from "react-bulma-components/esm";
import { TopNav } from "../TopNav";
require("../../styles/app.scss");

const PageLayout = styled.div``;

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
          <Content style={{ textAlign: "center" }}>
            <p>Attila Press</p>
          </Content>
        </Container>
      </Footer>
    </Content>
  );
};
