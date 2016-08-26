import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import moment from 'moment';

const styles = StyleSheet.create({
  space_vertical: {
    paddingTop: '20px'
  },
  space_horizontal: {
    paddingLeft: '20px',
    paddingRight: '20px'
  }
});

class Logform extends Component {
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    console.log('submitting this thing!')
    const id = this.props.comments.length + 1
    const text = this.refs.myRefString.value
    const date = moment().format('l');
    this.props.addComment(id, text, date)
    this.refs.myRefString.value = ""
  }
  render() {
    return (
      <div className={css(styles.space_vertical, styles.space_horizontal)}>
        <form ref="commentForm" onSubmit={this.handleSubmit}>
          <input type="text" ref="myRefString" placeholder="Fixed it."/>
          <input type="submit" hidden />
        </form>
      </div>


    )
  }
}

export default Logform;
