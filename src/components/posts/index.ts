import styled from 'styled-components';

export const StyledPost = styled.section`
  width: 100%;
  max-width: 90vw;
  
  @media (min-width: 768px) {
    max-height: 31.6rem;
    max-width: 75.2rem;
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
    border-radius: 0 0 1.6rem 1.6rem;
    padding: 2.4rem;
    overflow-y: hidden;
  }
  
  .text {
    max-height: 100%;
    overflow-y: auto;
    /* scrollbar */
    &::-webkit-scrollbar {
      width: 7px;
      background: none;
      border: none;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--blue);
      border-radius: 4px;
    }
  }

  .infos {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1.6rem;
    color: var(--dark-gray);
  }
`; 