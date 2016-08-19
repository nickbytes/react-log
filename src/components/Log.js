import React, { Component } from 'react';
import { Table } from 'rebass';

class Log extends Component {
  render() {

    var tableData = [
      ['1', '8/12/16', 'SF', 'Nothing else here. Excellent job. This is very performant.'], 
      ['2', '8/12/16', 'SF', 'More stuff. Short entry.'],
      ['3', '8/12/16', 'SF', 'Something else here. What do you think this will look like?'],
      ['4', '8/12/16', 'SF', 'This is sample data, it is very important.']
    ].reverse()

    return (
      <div>

        <Table
          data={tableData}
          headings={['No', 'Date', 'Location', 'Description']}
        />

      </div>
    )
  }
}

export default Log;
