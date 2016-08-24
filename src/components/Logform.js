import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  form: {
    margin: '0 auto',
    padding: '0 20px'
  },
  input: {
    border: '0',
  }
});

class Logform extends Component {
  render() {

    return (
      <form className={css(styles.form)}>
        <input className={css(styles.input)} type="text" placeholder="Fixed X in fun project"></input>
      </form>
    )
  }
}

export default Logform;
