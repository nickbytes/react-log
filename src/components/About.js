import React, { Component } from 'react';
import { Container, Heading, Section } from 'rebass';

class About extends Component {
  render() {
    return (
      <div>
        <Container>
          <Section>
            <Heading>Purpose</Heading>
            <p>The purpose of this project is ⌾. Please contemplate that.</p>
          </Section>
        </Container>
      </div>
    )
  }
}

export default About;
