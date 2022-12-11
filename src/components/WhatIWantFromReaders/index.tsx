import React from "react";
import {
  Section,
  Container,
  Columns,
  Button,
} from "react-bulma-components/esm";

export const WhatIWantFromReaders = ({ children }) => {
  return (
    <Section className="has-text-centered">
      <Container>
        <Columns className="has-text-left" centered="true">
          <Columns.Column size={10}>
            {children}
            <a href="/what-i-want-from-readers">
              <Button
                color="info"
                css={`
                  margin: 2rem auto 0 auto;
                  display: block;
                `}
              >
                Read More
              </Button>
            </a>
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  );
};
