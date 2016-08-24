import React, { Component } from 'react';
import TableLog from './TableLog';
import _ from 'lodash';

class Log extends Component {
  render() {

    return (
      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Location</th>
            <th>Text</th>
          </tr>
            {   this.props.comments.map((comment, i) => <TableLog {...this.props} key={i} i={i} comment={comment} /> ) }
        </table>
      </div>
    )
  }
}

export default Log;
