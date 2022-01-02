import React from "react";
import styled from "styled-components";
import {
  LinkedinFilled,
  MailFilled,
  PhoneFilled,
  RightOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "~/utilities/animations";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 90vh;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const AboutMe = styled.div``;

const BoxContainer = styled.div`
  width: 320px;
  border-top: 0.1rem solid gray;
  border-bottom: 0.1rem solid gray;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  margin-bottom: 2rem;
  gap: 1rem;

  @media only screen and (min-width: 768px) {
    width: 250px;
    height: 180px;
    justify-content: center;
  }
`;
const FirstName = styled.span`
  font-size: 2.5rem;
  font-weight: lighter;
  margin-right: 0.5rem;

  @media only screen and (min-width: 768px) {
    font-size: 1.9rem;
  }
`;
const LastName = styled.span`
  font-size: 2.5rem;
  font-weight: bold;

  @media only screen and (min-width: 768px) {
    font-size: 1.9rem;
  }
`;

const Divider = styled.div`
  @media only screen and (min-width: 768px) {
    border: 1px solid gray;
    height: 150px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Home = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      <Body>
        <motion.div variants={fadeInUp}>
          <AboutMe>
            <BoxContainer>
              <motion.div variants={fadeInUp}>
                <FirstName>DONALD</FirstName>
                <LastName>EBUBE</LastName>
              </motion.div>
              <motion.div variants={fadeInUp}>
                Product <b>Designer</b>
              </motion.div>
              <br />
              <motion.div variants={fadeInUp}>
                Freelance visual product designer based in Lagos, Nigeria.
              </motion.div>
            </BoxContainer>
            <motion.div variants={fadeInUp}>
              <Row>
                <Link href="https://mobile.twitter.com/manlikeked" passHref>
                  <TwitterOutlined />
                </Link>

                <Link
                  passHref
                  href={"http://www.linkedin.com/in/donald-kenechukwu-ebube"}
                >
                  <LinkedinFilled />
                </Link>
                <Link passHref href={"+2347085704959"}>
                  <PhoneFilled />
                </Link>
                <a href="mailto:donaldebube@yahoo.com">
                  <MailFilled />
                </a>
              </Row>
            </motion.div>
          </AboutMe>
        </motion.div>

        <Divider />

        <motion.div variants={fadeInUp}>
          <BoxContainer>
            <motion.div variants={fadeInUp}>
              <Link href="/services" passHref>
                <a>
                  <Row>
                    Services
                    <RightOutlined />
                  </Row>
                </a>
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link href="/designs" passHref>
                <a>
                  <Row>
                    <span>Designs</span>
                    <RightOutlined />
                  </Row>
                </a>
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link href="/contact" passHref>
                <a>
                  <Row>
                    Contact
                    <RightOutlined />
                  </Row>
                </a>
              </Link>
            </motion.div>
          </BoxContainer>
        </motion.div>
      </Body>
    </motion.div>
  );
};

export default Home;
