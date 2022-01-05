import styled, { createGlobalStyle } from "styled-components";

interface IProps {}

interface DefaultTheme {
  colors: {
    background: string;
  };
}

export const theme: DefaultTheme = {
  colors: {
    background: "#000000",
  },
};

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap');

*{
    margin:0; 
}

body{
    background-color:${theme.colors.background};
    color: white;
    font-family: 'Poppins', sans-serif;
    background-image: url("/images/background.png");
    background-repeat: no-repeat;
    background-size: cover;
}

a{
    text-decoration: none;
    color: white;
}

a:hover{
    color: gray;
}
`;

export const FontLight = styled.span`
  font-weight: 100;
`;

export const FontBold = styled.span`
  font-weight: 700;
`;

export const Container = styled.div`
  max-width: 350px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 1200px) {
    max-width: 900px;
  }
`;
