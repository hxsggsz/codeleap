import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledButtonTop = styled(motion.button)`
  cursor: pointer;
  position: fixed;
  right: 5rem;
  bottom: 5rem;
  padding: 1.5rem;
  color: var(--white);
  border-radius: 50%;
  border: .2rem solid var(--gray);
  background: var(--blue);
`;