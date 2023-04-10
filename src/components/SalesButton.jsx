import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import style from '../styles/Botao.module.css'

  const Button = styled(motion.button)`
    margin-top: 25px;
    background-color: #075c1a; /* updated color value */
    padding: 5px;
    color: #fff; /* updated color value */
    border-radius: 6px;
    box-shadow: 0 0 26px #25f113;
  `;

const SalesButton = ({ text }) => {
  return (
    <Button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
      style={style.button}
    >
      {text}
    </Button>
  );
};

export default SalesButton;
