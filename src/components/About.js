import React, { Component } from 'react';
import { Container, Heading, SectionHeader } from 'rebass';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  narrow: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px'
  }
})

class About extends Component {
  render() {
    return (
      <div className={css(styles.narrow)}>
        <Container>
          <div>
            <SectionHeader>Purpose</SectionHeader>
            <p>The purpose of this project is ⌾. Please contemplate that.</p>
          </div>

          <div>
            <SectionHeader>A bit about your data.</SectionHeader>
            <p>I don't have access to any of your data, it is stored on your computer using the help of your web browser. I don't want all that responsibility.</p>
          </div>
        </Container>
      </div>
    )
  }
}

export default About;
