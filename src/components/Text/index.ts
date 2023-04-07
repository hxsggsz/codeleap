import styled from 'styled-components';

type TextTypes = {
  size?: "sm" | "lg" | undefined;
}

function customSize(size: string | undefined) {
  if (size === "lg") {
    return "min(6vw, 2.2rem)"
  }
  if (size === "sm") {
    return "min(5.5vw, 1.6rem)"
  }
  return "min(5vw, 1.8rem)"
}

export const StyledText = styled.h1<TextTypes>`
  font-size: ${({ size }) => customSize(size)} ;
  font-weight: ${({ size }) => size === "lg" ? 700 : 400};
`;