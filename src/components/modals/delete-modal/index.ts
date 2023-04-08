import styled from 'styled-components';

export const StyledDeleteModal = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  z-index:99;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);

  .card {
    background: var(--white);
    padding: 2.4rem;
    border: .1rem solid var(--gray);
    border-radius: 1.6rem;
    width: 66rem;
    
    @media (max-width: 690px) {
      max-width: 80vw;
    }
  }

  .buttons {
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 0 1.6rem;
  }
`;