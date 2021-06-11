import React from "react";
import styled from "styled-components";
import { Content, Footer, Container } from "react-bulma-components";
import "../../styles/app.scss";

const PageLayout = styled.div`
  display: flex;
  @media only screen and (max-width: 980px) {
    flex-wrap: wrap;
  }
`;

export const HomeLayout = ({ children, hero }) => {
  return (
    <Content>
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
