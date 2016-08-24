import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Input } from 'rebass';

const styles = StyleSheet.create({
  form: {
    margin: '0 auto',
    padding: '0 20px'
  },
  input: {
    fontSize: '3em',
    height: '1.5em'
  },
  space_vertical: {
    paddingTop: '20px'
  },
  space_horizontal: {
    paddingLeft: '20px',
    paddingRight: '20px'
  }
});

class Logform extends Component {
  render() {
    return (
      <div className={css(styles.space_vertical, styles.space_horizontal)}>
        <Input className={css(styles.input)} name='LogInput' label='Please log activity and press Enter.'/>
      </div>
    )
  }
}

export default Logform;
