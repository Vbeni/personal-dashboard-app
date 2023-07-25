import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';

//container to set up grid layout 
//grid temp areas for readability 
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr auto;  
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  height: 100vh;
`;
//individually styled components 
const Header = styled.header`
  grid-area: header;
  background-color: ${props => props.theme.headerBg};
  color: ${props => props.theme.textColor};
  padding: 1rem;
  text-align: center;
`;

const Sidebar = styled.aside`
  grid-area: sidebar;
  background-color: #666;
  padding: 1rem;
`;

const Main = styled.main`
  grid-area: main;
  background-color: #f4f4f4;
  padding: 1rem;
`;

const Footer = styled.footer`
  grid-area: footer;
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
`;

//theme provider to provide theme properties to components 
function App() {
  const [theme, setTheme] = React.useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>Personal Dashboard</Header>
        <Sidebar>Sidebar</Sidebar>
        <Main>Main Content</Main>
        <Footer>Footer</Footer>
      </Container>
    </ThemeProvider>
  )
}

export default App