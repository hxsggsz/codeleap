import styled from 'styled-components';

type ButtonTipes = {
  isActive: boolean
  variant: "green" | "red" | "blue" | "white"
}

// function handleVariants(color: string) {
//   return var(--color)
// }

export const StyledButton = styled.button<ButtonTipes>`
  cursor: pointer;
  background: ${({ variant }) => `var(--${variant})`};
  border: ${({ variant}) => variant === "white" ? "1px solid var(--gray)" : "none"} ;
  transform-origin: left right;
  transition: all 0.5s ease-out;
  color: ${({ variant}) => variant === "white" ? "var(--black)" : "var(--white)"};
  font-weight: 700;
  padding: 1rem 3rem;
  border-radius: .8rem;
  width: 100%;
  
  &:disabled {
    background: var(--gray);
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
    max-width: fit-content;   
  }
`;