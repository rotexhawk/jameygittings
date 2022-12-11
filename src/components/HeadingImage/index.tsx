import React from "react";
import { Heading } from "react-bulma-components";
import styled from "styled-components";

const Wrapper = styled(({ renderAs, ...rest }) => <div {...rest} />)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

type HeadingImage = {
  background?: React.ReactNode;
  children: React.JSX;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  weight?: "light" | "normal" | "semibold" | "bold";
  subtitle?: boolean;
  heading?: boolean;
  spaced?: boolean;
  renderAs?: any;
};

export const HeadingImage = ({
  background,
  children,
  ...rest
}: HeadingImage) => {
  return (
    <Wrapper {...rest} className="mb-5">
      {background ? <img src={background} /> : null}
      <Heading {...rest} className="mt-3">
        {children}
      </Heading>
    </Wrapper>
  );
};
