import {
  LinkedinFilled,
  MailFilled,
  PhoneFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { fadeInUp, stagger } from "~/utilities/animations";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Center = styled.span`
  text-align: center;
`;

const Big = styled.span`
  text-align: center;
  font-size: 1.5rem;
`;

const Contact = () => {
  return (
    <motion.div initial="initial" animate="animate" variants={stagger}>
      <Body>
        <motion.div variants={fadeInUp()}>
          <Row>
            <Big>
              <PhoneFilled />
            </Big>
            <Center>+2347085704959</Center>
          </Row>
        </motion.div>

        <motion.div variants={fadeInUp()}>
          <Row>
            <Big>
              <MailFilled />
            </Big>
            <Center>donaldebube@yahoo.com</Center>
            <Center>donaldkene123@gmail.com</Center>
          </Row>
        </motion.div>
        <motion.div variants={fadeInUp()}>
          <Row>
            <Big>
              <TwitterCircleFilled />
            </Big>
            <Center>manlikeked</Center>
          </Row>
        </motion.div>
        <motion.div variants={fadeInUp()}>
          <Row>
            <Big>
              <LinkedinFilled />
            </Big>
            <Center>
              https://www.linkedin.com/in/donald-kenechukwu-ebube/
            </Center>
          </Row>
        </motion.div>
      </Body>
    </motion.div>
  );
};

export default Contact;
