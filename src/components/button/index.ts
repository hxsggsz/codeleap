import styled from 'styled-components';

type ButtonTipes = {
  isActive: boolean
}

export const StyledButton = styled.button<ButtonTipes>`
  cursor: pointer;
  background: var(--blue);
  border: none;
  transform-origin: left right;
  transition: all 0.5s ease-out;
  color: var(--white);
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