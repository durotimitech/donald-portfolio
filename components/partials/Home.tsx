import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { fadeInUp, stagger } from "~/utilities/animations";
import { FontBold, FontLight } from "../styles/Globals.styled";

const transitionAnimationDelay = 5;

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

const Role = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
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
      opacity: 0.3;
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
      opacity: 0.3;
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
      opacity: 0.3;
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
      opacity: 0.3;
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
    height: 230px;
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
    height: 230px;
    justify-content: center;
    font-size: 1.3rem;
  }
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 2rem;
  font-weight: lighter;
  margin-right: 0.5rem;

  @media only screen and (min-width: 768px) {
    font-size: 1.7rem;
  }
`;

const HelloText = styled.span`
  position: relative;

  &::before,
  &&::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  &::before {
    background-color: black;
    /* Steps is the number of characters, including spaces */
    animation: typewriter 3s steps(9) 1s forwards;
  }

  &::after {
    width: 0.07em;
    background: white;
    animation: typewriter 3s steps(9) 1s forwards, blink 750ms steps(9) infinite;
  }

  @keyframes typewriter {
    to {
      left: 100%;
    }
  }

  @keyframes blink {
    to {
      background: transparent;
    }
  }
`;

const NameText = styled.div`
  position: relative;
  width: max-content;

  &::before,
  &&::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  &::before {
    background-color: black;
    /* Steps is the number of characters, including spaces */
    animation: typewriter 4s steps(13) 4s forwards;
  }

  &::after {
    width: 0.07em;
    background: white;
    animation: typewriter 4s steps(13) 4s forwards,
      blink 750ms steps(13) 4s infinite;
  }

  @keyframes typewriter {
    to {
      left: 100%;
    }
  }

  @keyframes blink {
    to {
      background: transparent;
    }
  }
`;

const Description = styled.div`
  font-size: 1.2rem;
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

const NavLink = styled.span`
  font-size: 1.5rem;
`;

const Home = () => {
  return (
    <motion.div initial="initial" animate="animate" variants={stagger}>
      <Body>
        <motion.div variants={fadeInUp()}>
          <AboutMe>
            <motion.div variants={fadeInUp(transitionAnimationDelay)}>
              <Role>
                <FontLight>Product</FontLight>
                <FontBold>Designer</FontBold>
              </Role>
            </motion.div>
            <BoxContainer>
              <motion.div variants={fadeInUp()}>
                <Intro>
                  <Name>
                    <HelloText>
                      <FontLight>Hi There!</FontLight>
                    </HelloText>

                    <NameText>
                      <FontLight>I&apos;m</FontLight>
                      <FontBold> DONALD EBUBE</FontBold>
                    </NameText>
                  </Name>
                </Intro>
              </motion.div>
              <br />
              <br />
              <motion.div variants={fadeInUp(transitionAnimationDelay)}>
                <Description>
                  <FontLight>A visual product designer based in</FontLight>
                  <FontBold> Lagos, Nigeria.</FontBold>
                </Description>
              </motion.div>
            </BoxContainer>
            <motion.div variants={fadeInUp(transitionAnimationDelay + 3)}>
              <Row>
                <a>
                  <Link href="https://mobile.twitter.com/manlikeked" passHref>
                    <motion.div
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 0.75 }}
                    >
                      <Image
                        src="/images/socials/twitter.svg"
                        width={25}
                        height={25}
                        alt="Twitter"
                      />
                    </motion.div>
                  </Link>
                </a>
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.75 }}
                >
                  <a>
                    <Link
                      passHref
                      href={
                        "http://www.linkedin.com/in/donald-kenechukwu-ebube"
                      }
                    >
                      <Image
                        src="/images/socials/linkedin.svg"
                        width={25}
                        height={25}
                        alt="Twitter"
                      />
                    </Link>
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.75 }}
                >
                  <a>
                    <Link passHref href={"+2347085704959"}>
                      <Image
                        src="/images/socials/whatsapp.svg"
                        width={25}
                        height={25}
                        alt="Twitter"
                      />
                    </Link>
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.75 }}
                >
                  <a href="mailto:donaldebube@yahoo.com">
                    <Image
                      src="/images/socials/email.svg"
                      width={25}
                      height={25}
                      alt="Twitter"
                    />
                  </a>
                </motion.div>
              </Row>
            </motion.div>
          </AboutMe>
        </motion.div>

        <Divider />

        <motion.div variants={fadeInUp()}>
          <BoxNavigationContainer>
            <motion.div variants={fadeInUp()}>
              <Link href="/services" passHref>
                <a>
                  <Row>
                    <NavLink>Services</NavLink>
                    <Image
                      src="/images/right-arrow.svg"
                      width={25}
                      height={25}
                      alt="Right Arrow"
                    />
                  </Row>
                </a>
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp()}>
              <Link href="/designs" passHref>
                <a>
                  <Row>
                    <NavLink>Designs</NavLink>
                    <Image
                      src="/images/right-arrow.svg"
                      width={25}
                      height={25}
                      alt="Right Arrow"
                    />
                  </Row>
                </a>
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp()}>
              <Link href="/contact" passHref>
                <a>
                  <Row>
                    <NavLink>Contact</NavLink>
                    <Image
                      src="/images/right-arrow.svg"
                      width={25}
                      height={25}
                      alt="Right Arrow"
                    />
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
