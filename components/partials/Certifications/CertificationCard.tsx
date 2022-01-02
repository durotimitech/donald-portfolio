import React from "react";
import styled from "styled-components";
import { Small } from "../Services/ServiceCard";

interface IProps {
  certification: {
    title: string;
    institution: string;
    certifiedAt: string;
  };
}

const Card = styled.div`
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

const CertificationCard: React.FC<IProps> = ({
  certification: { title, institution, certifiedAt },
}) => {
  return (
    <Card>
      <span>{title}</span>
      <Small>{institution}</Small>
      <Small>{certifiedAt}</Small>
    </Card>
  );
};

export default CertificationCard;
