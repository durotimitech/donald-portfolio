import React, { useEffect } from "react";
import styled from "styled-components";
import DesignCard from "./DesignCard";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { easing, fadeInUp, stagger } from "~/utilities/animations";

export interface DesignIProps {
  category: {
    categoryName: string;
    projects: { title: string }[];
  };
}

const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Title = styled.div`
  text-align: center;
  text-decoration: underline;
  margin: 2rem 0;
`;

export const Divider = styled.div`
  border: 1px solid gray;
  margin-top: 2rem;
`;

const DesignCategory: React.FC<DesignIProps> = ({
  category,
  category: { categoryName, projects },
}) => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          ease: easing,
          duration: 0.8,
          bounce: 0.3,
        },
      });
    } else {
      animation.start({ x: -300, opacity: 0 });
    }
  }, [inView, animation]);

  return (
    <motion.div animate={animation}>
      <div ref={ref}>
        <Title>{categoryName}</Title>
        <motion.div initial="initial" animate="animate" variants={stagger}>
          <Body>
            {projects &&
              projects.map((project) => (
                <motion.div key={project.title} variants={fadeInUp}>
                  <DesignCard category={category} project={project} />
                </motion.div>
              ))}
          </Body>
        </motion.div>
        <Divider />
      </div>
    </motion.div>
  );
};

export default DesignCategory;
