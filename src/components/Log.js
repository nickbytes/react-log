import React, { Component } from 'react';
import TableLog from './TableLog';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  table: {
      fontSize: '14px',
      fontFamily: 'Fira Mono',
      lineHeight: 1.25,
      borderCollapse: 'separate',
      borderSpacing: 0,
      width: '100%'
  }
});

class Log extends Component {
  render() {

    return (
      <div>
        <table className={css(styles.table)}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Location</th>
              <th>Text</th>
            </tr>
          </thead>
          <tbody>
            { this.props.comments.map((comment, i) => <TableLog {...this.props} key={i} i={i} comment={comment} /> ) }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Log;
