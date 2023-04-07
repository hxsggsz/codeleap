import styled from 'styled-components';

export const StyledNewPost = styled.main`
  .card {
    margin-top: 10rem;
    padding: 2.4rem;
    border: .1rem solid var(--gray);
    border-radius: 1.6rem;
    width: 90vw;

    @media (min-width: 768px) {
      max-width: 75.2rem;
      max-height: 31.6rem;
    }
  }

  .button {
    width: 100%;
    display: flex;
    justify-content: end;
    margin-top: 3rem;  
  }
`;