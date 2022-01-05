import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, FontBold, FontLight } from "../styles/Globals.styled";
import Head from "next/head";
import Image from "next/image";

interface IProps {
  children: JSX.Element;
}

interface DesignDetails {
  categoryName: string;
  project: { title: string };
}

const NavigationBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
`;

const NavLink = styled.span`
  opacity: 0.5;
`;

const PageTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const Title = styled.div`
  border-bottom: 2px solid white;
  font-size: 1.4rem;
`;

const Footer = styled.footer`
  text-align: center;
  font-size: 0.5rem;
  margin-top: 3rem;
`;

const Layout: React.FC<IProps> = ({ children }) => {
  const [pageTitle, setPageTitle] = useState("Home");
  let details: DesignDetails;

  if (typeof window !== "undefined") {
    details = JSON.parse(localStorage.getItem("designDetails") || "{}");
  } else {
    details = { categoryName: "", project: { title: "" } };
  }

  const router = useRouter();
  const path = router.pathname;

  useEffect(() => {
    switch (path) {
      case "/":
        setPageTitle("Home");
        break;
      case "/services":
        setPageTitle("Services");
        break;
      case "/contact":
        setPageTitle("Contact");
        break;
      case "/designs":
        setPageTitle("Designs");
        break;
      case "/designs/[designName]":
        setPageTitle(details.categoryName);
        break;
      default:
        break;
    }
  }, [path, details.categoryName]);

  return (
    <Container>
      <Head>
        <title>{pageTitle} | Donald Ebube</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {path === "/" ? null : (
        <>
          <NavigationBar>
            <Link href="/" passHref>
              <a>
                <NavLink>
                  <FontLight>DONALD</FontLight>
                  <FontBold> EBUBE</FontBold>
                </NavLink>
              </a>
            </Link>
            <Link href="/" passHref>
              <a>
                <NavLink>
                  <FontLight>Product</FontLight>
                  <FontBold> Designer</FontBold>
                </NavLink>
              </a>
            </Link>
          </NavigationBar>
          <PageTitle>
            {path == "/designs/[designName]" ? (
              <Link href="/designs" passHref>
                <Image
                  src="/images/back-arrow.svg"
                  width={25}
                  height={25}
                  alt="Twitter"
                />
              </Link>
            ) : (
              <Link href="/" passHref>
                <a>
                  <Image
                    src="/images/back-arrow.svg"
                    width={25}
                    height={25}
                    alt="Twitter"
                  />
                </a>
              </Link>
            )}
            <Title>{pageTitle}</Title>
            <div></div>
          </PageTitle>
        </>
      )}

      {children}

      <Footer>&copy; 2021 DONALD EBUBE ALL RIGHT RESERVED</Footer>
    </Container>
  );
};

export default Layout;
