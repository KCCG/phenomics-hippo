import React from 'react';
import { Container, Menu } from 'semantic-ui-react';

export default function NavBar() {
  return (
    <Menu inverted>
      <Container>
        <Menu.Item header>Hippo</Menu.Item>
      </Container>
    </Menu>
  );
}
