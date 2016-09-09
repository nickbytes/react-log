import React, { Component } from 'react';
import { Container, SectionHeader } from 'rebass';
import { StyleSheet, css } from 'aphrodite';
import { helloColor } from './Home';

const styles = StyleSheet.create({
  narrow: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px'
  },
  section: {
    padding: '20px 0'
  },
  link: {
    color: 'inherit'
  },
  sectionHeader: {
    borderBottom: '1px solid ' + helloColor.base,
    paddingBottom: '5px'
  }
})

class About extends Component {
  render() {
    return (
      <div className={css(styles.narrow)}>
        <Container>
          <div className={css(styles.section)}>
            <h3 className={css(styles.sectionHeader)}>Purpose</h3>
            <p>Dead simple event log.</p>
          </div>

          <div className={css(styles.section)}>
            <h3 className={css(styles.sectionHeader)}>A bit about your data.</h3>
            <p>I don't have access to any of your data, it is stored on your computer using the help of your web browser and a feature called <a className={css(styles.link)} href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">localstorage</a>. </p>
          </div>

          <div className={css(styles.section)}>
            <h3 className={css(styles.sectionHeader)}>Bugs/Feature Requests</h3>
            <p>Something wrong? Sorry about that!  Have an idea about how this could be more useful for you? Shoot me an email: nick at nickbytes dot com or DM on <a className={css(styles.link)} href="http://twitter.com/nicktweattie">twitter</a>.</p>
          </div>
        </Container>
      </div>
    )
  }
}

export default About;
