import React, { Component } from 'react';
import { Link } from 'react-router';
import { StyleSheet, css } from 'aphrodite';
import { Toolbar, NavItem, Space } from 'rebass';

const styles = StyleSheet.create({
    app: {
        fontSize: '14px',
        fontFamily: 'Fira Mono'
    }
});

class Home extends Component {
  render() {
    return (
      <div className={css(styles.app)}>

          <Toolbar>
            <NavItem is="a">
              <Link to="/">01–Log</Link>
            </NavItem>

            <Space
              auto
              x={1}
            />
            <NavItem is="a">
              <Link to="/about">About</Link>
            </NavItem>
          </Toolbar>

        {this.props.children}
      </div>
    )
  }
}

export default Home;
