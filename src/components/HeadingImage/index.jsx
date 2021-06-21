import React from "react";
import { Heading } from "react-bulma-components/esm";
import styled from "styled-components";

const Wrapper = styled(({ background, ...rest }) => <div {...rest} />)`
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-position: center;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 500px;
`;

export const HeadingImage = ({ background, children, ...rest }) => {
  return (
    <Wrapper background={background} {...rest} className="mb-5">
      <Heading {...rest}>{children}</Heading>
    </Wrapper>
  );
};
