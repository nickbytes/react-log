import React, { Component } from 'react';
import { Link } from 'react-router';
import { StyleSheet, css } from 'aphrodite';
import { Toolbar, NavItem, Space, Section } from 'rebass';
import hello from 'hello-color';
import bikeshed from '@jxnblk/bikeshed';
import '../App.css';

const origColor = bikeshed()
const helloColor = hello(origColor)

const styles = StyleSheet.create({
    app: {
        fontSize: '14px',
        fontFamily: 'Fira Mono',
        color: helloColor.base,
        backgroundColor: helloColor.color
    },
    space_vertical: {
      padding: '20px 0'
    }
});

class Home extends Component {
  render() {
    return (
      <div className={css(styles.app)}>

          <Toolbar color={helloColor.color} backgroundColor={helloColor.base}>
            <NavItem is={Link} to="/">01–Log</NavItem>

            <Space auto x={1} />

            <NavItem is={Link} to="/about">About</NavItem>
          </Toolbar>

          <div className={css(styles.space_vertical)}>
            { React.cloneElement(this.props.children, this.props) }
          </div>
      </div>
    )
  }
}

export default Home;
