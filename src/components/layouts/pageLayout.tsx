import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Content, Footer, Container, Section } from "react-bulma-components";
import { TopNav } from "../TopNav";

type PageLayoutProps = {
  children: any;
  hero?: any;
};

export const PageLayout = ({ children, hero }: PageLayoutProps) => {
  return (
    <Content>
      <TopNav isAbsolute={true} />
      {hero ? (
        hero
      ) : (
        <StaticImage
          src="../../images/redwood-background.jpeg"
          alt="redwood-background"
          placeholder="tracedSVG"
          layout="fullWidth"
        />
      )}
      <main role="main">
        <Section>
          <Container>{children}</Container>
        </Section>
      </main>
      <Footer>
        <Container>
          <Content>
            <p className="is-pulled-left mb-0">Jamey Gittings</p>
            <p className="is-pulled-right mb-0 is-size-6">
              © Copyright 2021 Jamey Gittings
            </p>
            <span className="is-clearfix" />
          </Content>
        </Container>
      </Footer>
    </Content>
  );
};
