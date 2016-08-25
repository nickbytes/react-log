import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  x: {

  },
  y: {
    textAlign: 'center'
  },
  z: {
    textAlign: 'center'
  }
});

class NoEntries extends Component {
  render() {

    return (
      <div className={css(styles.x)}>
        <h3 className={css(styles.y)}>//////// No entries. \\\\\\\\</h3>
        <p className={css(styles.z)}>Create an entry above to get started.</p>
      </div>
    )
  }
}

export default NoEntries;
