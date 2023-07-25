import React from 'react'
import styled from 'styled-components'

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

const Header = styled.header`
  grid-area: header;
  background-color: #333;
  color: white;
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
  return (
    <Container>
    <Header>Personal Dashboard</Header>
    <Sidebar>Sidebar</Sidebar>
    <Main>Main Content</Main>
    <Footer>Footer</Footer>
    </Container>
  )
}

export default App