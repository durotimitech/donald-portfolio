import { RightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { Small } from "../Services/ServiceCard";
import { DesignIProps } from "./DesignCategory";

interface IProps extends DesignIProps {
  project: {
    title: string;
  };
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  border: 1px solid gray;
  padding: 1rem;
  height: 120px;
  cursor: pointer;
`;

const Title = styled.span`
  font-size: 1.2rem;
`;

const Divider = styled.div`
  border: 1px solid gray;
  width: 50px;
  height: 1px;
`;

const DesignCard: React.FC<IProps> = ({
  category,
  project,
  project: { title },
}) => {
  const router = useRouter();

  const changeRoute = () => {
    localStorage.setItem(
      "designDetails",
      JSON.stringify({ categoryName: category.categoryName, project })
    );
    router.push("/designs/design-details");
  };

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.75 }}>
      <Card onClick={changeRoute}>
        <Title>{title}</Title>
        <Divider />
        <Small>
          View
          <RightOutlined />
        </Small>
      </Card>
    </motion.div>
  );
};

export default DesignCard;
