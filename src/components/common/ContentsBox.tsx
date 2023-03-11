import { motion } from 'framer-motion';
import styled from 'styled-components';

const ContentsBox = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  padding: 20px;
`;

export default ContentsBox;
