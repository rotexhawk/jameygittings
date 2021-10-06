import React from "react";
import { Heading } from "react-bulma-components/esm";
import styled from "styled-components";

const Wrapper = styled(({ background, ...rest }) => <div {...rest} />)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const HeadingImage = ({ background, children, ...rest }) => {
  return (
    <Wrapper background={background} {...rest} className="mb-5">
      <img src={background} />
      <Heading {...rest} className="mt-3">
        {children}
      </Heading>
    </Wrapper>
  );
};
