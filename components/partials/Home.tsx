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
import Image from "next/image";

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

const Location = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  font-weight: lighter;
  gap: 0.3rem;

  -webkit-animation: flickerAnimation 1.5s infinite;
  -moz-animation: flickerAnimation 1.5s infinite;
  -o-animation: flickerAnimation 1.5s infinite;
  animation: flickerAnimation 1.5s infinite;

  @keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: .3;
    }
    100% {
      opacity: 1;
    }
  }
  @-o-keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: .3;
    }
    100% {
      opacity: 1;
    }
  }
  @-moz-keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: .3;
    }
    100% {
      opacity: 1;
    }
  }
  @-webkit-keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: .3;
    }
    100% {
      opacity: 1;
    }
  }
`;

const BoxContainer = styled.div`
  width: 320px;
  border-top: 0.1rem solid gray;
  border-bottom: 0.1rem solid gray;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  margin-bottom: 2rem;

  @media only screen and (min-width: 768px) {
    width: 280px;
    height: 170px;
    justify-content: center;
  }
`;
const BoxNavigationContainer = styled.div`
  width: 320px;
  border-top: 0.1rem solid gray;
  border-bottom: 0.1rem solid gray;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  margin-bottom: 2rem;
  gap: 1rem;

  @media only screen and (min-width: 768px) {
    width: 280px;
    height: 170px;
    justify-content: center;
    font-size: 1.3rem;
  }
`;
const FirstName = styled.span`
  font-size: 2.5rem;
  font-weight: lighter;
  margin-right: 0.5rem;

  @media only screen and (min-width: 768px) {
    font-size: 2.2rem;
  }
`;
const LastName = styled.span`
  font-size: 2.5rem;
  font-weight: bold;

  @media only screen and (min-width: 768px) {
    font-size: 2.2rem;
  }
`;
const Role = styled.div`
  margin-bottom: 1rem;
`;
const Divider = styled.div`
  @media only screen and (min-width: 768px) {
    border: 1px solid gray;
    height: 200px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Home = () => {
  return (
    <motion.div initial="initial" animate="animate" variants={stagger}>
      <Body>
        <motion.div variants={fadeInUp}>
          <AboutMe>
            <Location>
              <Image
                src="/images/location.png"
                alt="Location Marker"
                width="15"
                height="15"
              />
              Lagos, Nigeria
            </Location>
            <BoxContainer>
              <motion.div variants={fadeInUp}>
                <FirstName>DONALD</FirstName>
                <LastName>EBUBE</LastName>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Role>
                  Product <b>Designer</b>
                </Role>
              </motion.div>
              <motion.div variants={fadeInUp}>
                Freelance visual product designer based in Lagos, Nigeria.
              </motion.div>
            </BoxContainer>
            <motion.div variants={fadeInUp}>
              <Row>
                <a>
                  <Link href="https://mobile.twitter.com/manlikeked" passHref>
                    <motion.div
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 0.75 }}
                    >
                      <TwitterOutlined />
                    </motion.div>
                  </Link>
                </a>
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.75 }}
                >
                  <Link
                    passHref
                    href={"http://www.linkedin.com/in/donald-kenechukwu-ebube"}
                  >
                    <LinkedinFilled />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.75 }}
                >
                  <Link passHref href={"+2347085704959"}>
                    <PhoneFilled />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.75 }}
                >
                  <a href="mailto:donaldebube@yahoo.com">
                    <MailFilled />
                  </a>
                </motion.div>
              </Row>
            </motion.div>
          </AboutMe>
        </motion.div>

        <Divider />

        <motion.div variants={fadeInUp}>
          <BoxNavigationContainer>
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
          </BoxNavigationContainer>
        </motion.div>
      </Body>
    </motion.div>
  );
};

export default Home;
