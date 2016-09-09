import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { X } from 'reline';
import { helloColor } from './Home';

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
      padding: '5px 20px',
      paddingLeft: 0,
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      borderColor: 'inherit'
    },
    closeButton: {
      border: 0,
      background: 'none',
      color: helloColor.base,
      ':hover' : {
        cursor: 'pointer'
      }
    },
});

class TableLog extends Component {
  render() {
    return (
      <tr>
        <td className={css(styles.td)}>
          {this.props.comment.date}
        </td>
        <td className={css(styles.td)}>
          {this.props.comment.text}
        </td>
        <td className={css(styles.td)}>
          <button onClick={this.props.removeComment.bind(null, this.props.comment.id, this.props.i)} className={css(styles.closeButton)}><X className={css(styles.centerIcon)}/></button>
        </td>
      </tr>
    )
  }
}

export default TableLog;
