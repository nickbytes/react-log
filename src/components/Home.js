import React, { Component } from 'react';
import { Link } from 'react-router';
import { StyleSheet, css } from 'aphrodite';
import { Toolbar, NavItem, Space } from 'rebass';
import hello from 'hello-color';
import bikeshed from '@jxnblk/bikeshed';

const origColor = bikeshed()
const helloColor = hello(origColor)

const styles = StyleSheet.create({
    app: {
        fontSize: '14px',
        fontFamily: 'Fira Mono',
        color: helloColor.base,
        backgroundColor: helloColor.color
    }
});

class Home extends Component {
  render() {
    return (
      <div className={css(styles.app)}>

          <Toolbar>
            <NavItem is={Link} to="/">01–Log</NavItem>

            <Space auto x={1} />

            <NavItem is={Link} to="/about">About</NavItem>
          </Toolbar>

          <p>{helloColor.contrast}</p>

        { React.cloneElement(this.props.children, this.props) }
      </div>
    )
  }
}

export default Home;
