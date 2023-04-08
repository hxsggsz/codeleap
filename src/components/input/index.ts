import styled from 'styled-components';

type InputTypes = {
  isContent: boolean | undefined
}

export const StyledInput = styled.div<InputTypes>`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 3rem;

  label {
    cursor: text;
    position: absolute;
    transform-origin: top left;
    transition: all 0.2s ease-out;
    padding-left: .5rem;
  }

  & .active {
    transform: translate(0, -2.5rem);
  }

  &:focus-within label {
    transform: translateY(-2.5rem);
  }

  input {
    border-radius: .8rem;
    height: ${({ isContent }) => isContent ? "7.4rem" : "3.2rem"};
    outline: none;
    font-size: 1.6rem;
    border: .1rem solid var(--dark-white);
    padding-left: .5rem;
  }
`;