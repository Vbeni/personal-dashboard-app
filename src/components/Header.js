import React, { useState, useContext } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`

`;

const ThemeToggle = styled.button`
  
`;

const Header = () => {
  // Use useState to manage the theme state (dark/light mode)
  const [theme, setTheme] = useState('light');

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <HeaderContainer>
      <h1>Personal Dashboard</h1>
      <ThemeToggle onClick={toggleTheme}>Toggle Theme</ThemeToggle>
    </HeaderContainer>
  );
};

export default Header;
