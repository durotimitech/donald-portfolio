import { Rate } from "antd";
import React from "react";
import styled from "styled-components";

interface IProps {
  service: {
    title: string;
    experience: number;
    tools: string[];
    rating: number;
  };
}

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  padding: 0.5rem 1rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Divider = styled.div`
  border: 1px solid white;
`;

const Title = styled.span``;

export const Small = styled.span`
  font-size: 0.8rem;
  color: gray;
`;

const ServiceCard: React.FC<IProps> = ({
  service: { title, experience, tools, rating },
}) => {
  return (
    <Card>
      <Column>
        <Title>{title}</Title>
        <Small>{experience} year(s) experience</Small>

        <Rate disabled defaultValue={rating} />
      </Column>

      <Divider />

      <Column>
        <Title>Tools</Title>
        {tools.map((tool) => (
          <Small key={tool}>{tool}</Small>
        ))}
      </Column>
    </Card>
  );
};

export default ServiceCard;
