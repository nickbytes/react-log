import React, { Component } from 'react';
import TableLog from './TableLog';
import { StyleSheet, css } from 'aphrodite';
import LogForm from './Logform';
import NoEntries from './NoEntries';

const styles = StyleSheet.create({
  table: {
      fontSize: '14px',
      fontFamily: 'Fira Mono',
      lineHeight: 1.25,
      borderCollapse: 'separate',
      borderSpacing: 0,
      width: '100%',
      margin: '0 auto',
      padding: '0 20px'
  },
  thead: {
    textAlign: 'center'
  },
  th: {
    textAlign: 'left',
    verticalAlign: 'bottom',
    padding: '20px',
    paddingLeft: 0,
    borderBottomStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: 'inherit'
  }
});



class Log extends Component {
  render() {

    return (
      <div>
        <LogForm />

        {/* need and if statement here that says 'if there are comments, render this table' */}

        <table className={css(styles.table)}>
          <thead className={css(styles.thead)}>
            <tr>
              <th className={css(styles.th)}>ID</th>
              <th className={css(styles.th)}>Date</th>
              <th className={css(styles.th)}>Location</th>
              <th className={css(styles.th)}>Text</th>
            </tr>
          </thead>
          <tbody>
            { this.props.comments.map((comment, i) => <TableLog {...this.props} key={i} i={i} comment={comment} /> ) }
          </tbody>
        </table>

        {/* else, render this NoEntries component with instructions to get started */}

        <NoEntries />

        {/* end if */}
      </div>
    )
  }
}

export default Log;
