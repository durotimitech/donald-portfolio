import React from "react";
import styled from "styled-components";
import { allCertifications } from "~/utilities/data";
import { Body } from "../Services/Services";
import CertificationCard from "./CertificationCard";

const Heading = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const Title = styled.div`
  border-bottom: 2px solid white;
  font-size: 1.4rem;
  width: 130px;
`;

const Certifications = () => {
  return (
    <div>
      <Heading>
        <Title>Certifications</Title>
      </Heading>

      <Body>
        {allCertifications.map((certification) => (
          <CertificationCard
            key={certification.title}
            certification={certification}
          />
        ))}
      </Body>
    </div>
  );
};

export default Certifications;
