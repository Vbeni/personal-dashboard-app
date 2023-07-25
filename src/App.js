import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

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

function App() {
  const [theme, setTheme] = React.useState(lightTheme);
//theme provider to provide theme properties to components 
return (
  <Provider store={store}>
  <ThemeProvider theme={theme}>
    <Router>
      <Container>
        <Header>
          Personal Dashboard
          <nav>
            <Link to="/">Home</Link>
            <Link to="/notes">Notes</Link>
          </nav>
        </Header>
        <Sidebar>Sidebar</Sidebar>
        <Main>
          <Routes>
          <Route path="/" element={<div>Home Content</div>} />
          <Route path="/notes" element={<div>Notes Content</div>} />
          </Routes>
        </Main>
        <Footer>Footer</Footer>
      </Container>
    </Router>
  </ThemeProvider>
  </Provider>
);
}

export default App