import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledPost = styled(motion.section)`
  width: 100%;
  max-width: 90vw;
  border-radius: 1.6rem;
  overflow: hidden;

  @media (min-width: 768px) {
    max-height: 31.6rem;
    max-width: 75.2rem;
  }
  .header {
    width: 100%;
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
    cursor: pointer;
    background: var(--white);
    width: 100%;
    max-height: 24.6rem;
    border: .1rem solid var(--gray);
    border-radius: 0 0 1.6rem 1.6rem;
    padding: 2.4rem;
    margin-bottom: .5rem;
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
    width: 100%;
    max-height: 100%;
    overflow-y: hidden;
  }

  .infos {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 1.6rem;
    color: var(--dark-white);
  }

  .shadow {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 99;
    background: rgba(0, 0, 0, 0.5);

    & > div {
      width: 100%;
      padding: 0 2rem;
      @media (min-width: 920px) {
        max-width: 90rem;
      }
    }
  }
`; 