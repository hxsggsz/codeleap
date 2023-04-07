import styled from 'styled-components';

export const StyledPost = styled.section`
  width: 100%;
  @media (min-width: 768px) {
    max-width: 50vw;
  }
  .header {
    display: flex;
    justify-content: space-between;
    padding: 2.4rem;
    color: var(--white);
    background: var(--blue);
    border-radius: 1.6rem 1.6rem 0 0;

    .icons {
      display: flex;
      gap: 1.4rem;
    }
  }

  .content {
    height: 100%;
    border: .1rem solid var(--gray);
  }
`; 