import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { fadeInUp, stagger } from "~/utilities/animations";
import { allServices } from "~/utilities/data";
import Certifications from "../Certifications/Certifications";
import ServiceCard from "./ServiceCard";

export const Container = styled.div`
  height: 70vh;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Services = () => {
  return (
    <motion.div initial="initial" animate="animate" variants={stagger}>
      <Container>
        <motion.div variants={fadeInUp()}>
          <Body>
            {allServices.map((service) => {
              return <ServiceCard key={service.title} service={service} />;
            })}
          </Body>
        </motion.div>
        <motion.div variants={fadeInUp()}>
          <Certifications />
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Services;
