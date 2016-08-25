import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    table: {
        fontSize: '14px',
        fontFamily: 'Fira Mono',
        lineHeight: 1.25,
        borderCollapse: 'separate',
        borderSpacing: 0,
        width: '100%'
    },

    th: {
      textAlign: 'left',
      verticalAlign: 'bottom',
      padding: '5px',
      paddingLeft: 0,
      borderBottomStyle: 'solid',
      borderBottomWidth: 2,
      borderColor: 'inherit'
    },

    td: {
      padding: '5px',
      paddingLeft: 0,
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      borderColor: 'inherit'
    },

    tr: {

    }
});

class TableLog extends Component {
  render() {
    return (
      <tr>
        <td className={css(styles.td)}>
          {this.props.comment.id}
        </td>
        <td className={css(styles.td)}>
          {this.props.comment.date}
        </td>
        <td className={css(styles.td)}>
          {this.props.comment.text}
        </td>
      </tr>
    )
  }
}

export default TableLog;
