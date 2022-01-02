import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Small } from "../../Services/ServiceCard";
import { Image } from "antd";
import { Divider } from "../DesignCategory";
import { fadeInUp, stagger } from "~/utilities/animations";

interface DesignDetails {
  categoryName: string;
  project: {
    title: string;
    yearExecuted: number;
    fonts: string[];
    colors: string[];
    link: string;
    images: string[];
  };
}

const Center = styled.div`
  text-align: center;
`;

const Overview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  b {
    margin-right: 0.5rem;
  }
`;

const Row = styled.div`
  display: flex;
`;
const Fonts = styled.span`
  display: flex;
  gap: 0.4rem;
`;

const Colors = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const ColorDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const ColorBox = styled.div`
  background-color: ${({ color }) => color};
  width: 40px;
  height: 40px;
`;

const DesignDetails = () => {
  let details: DesignDetails;

  if (typeof window !== "undefined") {
    details = JSON.parse(localStorage.getItem("designDetails") || "");
  } else {
    details = {
      categoryName: "Category Name",
      project: {
        title: "New Design",
        yearExecuted: 2022,
        fonts: ["lato,", "popins,", "Aeriel"],
        colors: ["#354F52", "#AEB4A9", "#E12F2F", "#424B4D", "#FFFFFF"],
        link: "",
        images: ["appli1.png", "appli2.png"],
      },
    };
  }

  const { title, yearExecuted, fonts, colors, link, images } = details.project;

  return (
    <motion.div initial="initial" animate="animate" variants={stagger}>
      <motion.div variants={fadeInUp}>
        <Center>
          <u>
            <b>{title}</b>
          </u>
        </Center>
      </motion.div>
      <br />
      <motion.div variants={fadeInUp}>
        <Center>
          <u>Project Information</u>
        </Center>
      </motion.div>

      <Overview>
        <motion.div variants={fadeInUp}>
          <b>Year of Execution :</b>
          {yearExecuted}
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Row>
            <b>Font(s) Used :</b>
            <Fonts>
              {fonts.map((font) => (
                <span key={font}>{font}</span>
              ))}
            </Fonts>
          </Row>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Row>
            <b>Color Palette:</b>
            <Colors>
              {colors.map((color) => (
                <ColorDiv key={color}>
                  <ColorBox color={color} />
                  <Small>{color}</Small>
                </ColorDiv>
              ))}
            </Colors>
          </Row>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Row>
            <b>Link to Figma prototype: </b>
            <Link passHref href={link}>
              <u>{title}</u>
            </Link>
          </Row>
        </motion.div>
      </Overview>
      <motion.div variants={fadeInUp}>
        <Divider />
      </motion.div>
      <br />
      <motion.div variants={fadeInUp}>
        <Center>
          <u>Project Image</u>
          <br />
          <br />
        </Center>
        <Center>
          {images.map((image) => (
            <>
              <Image key={image} src={`/images/${image}`} alt={title} />
              <br />
              <br />
            </>
          ))}
        </Center>
      </motion.div>

      <Divider />
    </motion.div>
  );
};

export default DesignDetails;
