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
  height: 72vh;
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
            <Center>
              <a href="tel:+2347085704959">+2347085704959</a>
            </Center>
          </Row>
        </motion.div>

        <motion.div variants={fadeInUp()}>
          <Row>
            <Big>
              <MailFilled />
            </Big>
            <Center>
              <a href="mailto:donaldebube@yahoo.com">donaldebube@yahoo.com</a>
            </Center>
            <Center>
              <a href="mailto:donaldkene123@gmail.com">
                donaldkene123@gmail.com
              </a>
            </Center>
          </Row>
        </motion.div>
        <motion.div variants={fadeInUp()}>
          <Row>
            <Big>
              <TwitterCircleFilled />
            </Big>
            <Center>
              <a
                href="https://mobile.twitter.com/manlikeked"
                target="_blank"
                rel="noreferrer"
              >
                manlikeked
              </a>
            </Center>
          </Row>
        </motion.div>
        <motion.div variants={fadeInUp()}>
          <Row>
            <Big>
              <LinkedinFilled />
            </Big>
            <Center>
              <a
                href={"http://www.linkedin.com/in/donald-kenechukwu-ebube"}
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/donald-kenechukwu-ebube/
              </a>
            </Center>
          </Row>
        </motion.div>
      </Body>
    </motion.div>
  );
};

export default Contact;
