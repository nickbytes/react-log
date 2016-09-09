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
        <LogForm {...this.props}/>

          {(() => {
            switch (this.props.comments.length) {
              case 0:   return <NoEntries />;
              default:  return (
                <table className={css(styles.table)}>
                  <thead className={css(styles.thead)}>
                    <tr>
                      <th className={css(styles.th)}>Date</th>
                      <th className={css(styles.th)}>Text</th>
                      <th className={css(styles.th)}>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    { this.props.comments.map((comment, i) => <TableLog {...this.props} key={i} i={i} comment={comment} /> ).reverse() }
                  </tbody>
                </table>
              );
            }
          })()}
      </div>
    )
  }
}

export default Log;
