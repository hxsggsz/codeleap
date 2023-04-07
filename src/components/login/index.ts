import styled from 'styled-components';

export const StyledLogin = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--blue);
  display: flex;
  align-items: center;
  justify-content: center;

  .img {
    display: none;

    @media (min-width: 768px) {
      display: flex;
    }
  }

  .card {
    border-radius: .8rem;
    background: var(--white);
    width: 100vw;
    padding: 2.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 768px) {
      max-width: 40vw;
      height: 70vh;
    }
  }

  .button {
    margin-top: 1.6rem;
    width: 100%;
    display: flex;
    justify-content: end;
  }
`;