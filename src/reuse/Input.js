import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as InputActionsTypes from '../actions/InputActions';

class Input extends Component {
  constructor(props) {
    super(props);
    // this.handle_input = this.handle_input.bind(this);
    this.state = {
      // select: '',
    }
  }

  // handle_input(input_name,event) {

  // }

  render() {
    const {
      type,
      placeholder,
      input_name,
      values,
      input,
      credit,
      InputActions,
    } = this.props;
    // const {
    //   price,
    //   time,
    // } = credit;

    const {
      toggle_select,
      select_type,
      handle_input,
    } = InputActions;

    const inputBlock =
      <input
        name={input_name}
        className={type}
        placeholder={placeholder}
        onChange={(event) => {handle_input(input_name,event)}}
        value={credit[input_name] !== '' ? credit[input_name] : ''}
      />;

    const selectBlock =
      <div
        className={type + (input.visible ? ' select_border' : '')}
        onClick={() => {
          toggle_select();
        }}
      >
        {input.text}
        {values && values.map((e,i) => {
          return (
            <div
              key={`${type}_${i}`} 
              className={type + '_li ' + (!input.visible ? 'hidden' : '')}
              onClick={(event) => {
                event.stopPropagation();
                event.preventDefault();
                select_type(e);
                toggle_select();
              }}
            >
            {e}
            </div>
          )
        })}
        <div className={type + '_placeholder ' + (input.text.length !== 0 ? 'hidden' : '')}>Программа</div>
      </div>;

    return type === 'input' ? inputBlock : selectBlock
  }
}

const mapStateToProps = (state) => {
  const {
    input,
    credit,
  } = state.app;
  return {
    input,
    credit,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    InputActions: bindActionCreators(InputActionsTypes, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
