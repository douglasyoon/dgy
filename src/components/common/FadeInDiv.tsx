import { motion } from 'framer-motion';
import styled from 'styled-components';

interface FadeInDivProps {
  children: React.ReactNode;
}

const FadeInDiv = ({ children }: FadeInDivProps) => (
  <Box
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.7 }}
  >
    {children}
  </Box>
);

const Box = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

export default FadeInDiv;
