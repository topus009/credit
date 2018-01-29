import React, {Component} from 'react';

// class Input extends Component {
//   constructor(props) {
//     super(props);
//     // this.selectDay = this.selectDay.bind(this);
//     this.state = {
//       // step: 0,
//     }
//   }
//   render() {
//     return (

//     )

//   }
// }


const Input = (props) => {
  const {
    type,
    placeholder,
    values,
  } = props;

  const input =
    <input
      className={type}
      placeholder={placeholder}
    />;

  const select =
    <div className={type}>
      <select>
        <option></option>
        {values && values.map((e,i) => {
          return (
            <option
              key={'select_option_' + i} 
              value={e}
            >
            {e}
            </option>
          )
        })}
      </select>
    </div>;

  return type === 'input' ? input : select
};

export default Input;