import styled from 'styled-components';

export const StyledPost = styled.section`
  width: 100%;
  max-width: 90vw;
  background: var(--white);
  border-radius: 1.6rem;
  box-shadow: 2px 2px 10px 5px rgba(119,119,119,0.66);

  @media (min-width: 768px) {
    /* max-height: 31.6rem; */
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
      z-index: 9;
    }
  }
  
  .content {
    max-height: 24.6rem;
    cursor: pointer;
    border: .1rem solid var(--gray);
    border-radius: 0 0 1.6rem 1.6rem;
    padding: 2.4rem;
    overflow: auto;
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
  
  .text {
    max-height: 100%;
    overflow-y: auto;
  }

  .infos {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1.6rem;
    color: var(--dark-white);
  }
`; 