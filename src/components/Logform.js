import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import moment from 'moment';
import { helloColor } from './Home';

const styles = StyleSheet.create({
  space_vertical: {
    paddingTop: '20px'
  },
  space_horizontal: {
    paddingLeft: '20px',
    paddingRight: '20px'
  },
  input: {
    color: helloColor.base,
    fontFamily: 'Fira Mono',
    width: '100%',
    padding: '10px 20px',
    marginTop: '10px',
    marginBottom: '20px',
    border: '0',
    fontSize: '3em',
    lineHeight: '1.5em',
    '-webkit-box-sizing': 'border-box',
    '-moz-box-sizing': 'border-box',
    'box-sizing': 'border-box',
    '::-webkit-input-placeholder': {
        fontFamily: 'Fira Mono',
        color: helloColor.color,
        opacity: '0.3'
    },
    ':-moz-placeholder': { /* Firefox 18- */
       fontFamily: 'Fira Mono',
       color: helloColor.color,
       opacity: '0.3'
    },

    '::-moz-placeholder': {  /* Firefox 19+ */
       fontFamily: 'Fira Mono',
       color: helloColor.color,
       opacity: '0.3'
    },

    ':-ms-input-placeholder': {
       cfontFamily: 'Fira Mono',
       color: helloColor.color,
       opacity: '0.3'
    }
  },
  label: {
    Bottom: '10px'
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
          <label className={css(styles.label)} htmlFor="myRefString">Type your event and press Enter ⏎.</label>
          <input className={css(styles.input)} type="text" id="myRefString" ref="myRefString" placeholder="Added Feature X to Fun Project Y."/>
          <input type="submit" hidden />
        </form>
      </div>


    )
  }
}

export default Logform;
