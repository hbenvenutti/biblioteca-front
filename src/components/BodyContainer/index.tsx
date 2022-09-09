import React from 'react';
import { Banner } from '../Banner';
import { Container } from './styles';

export function BodyContainer() {
  return (
    <Container>
      <Banner />
      <h1>Hello World</h1>
    </Container>
  );
}
