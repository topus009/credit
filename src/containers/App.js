import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import * as appActionsTypes from '../actions/AppActions';

class App extends Component {
  constructor(props) {
    super(props);
    // this.selectDay = this.selectDay.bind(this);
    this.state = {
      // step: 0,
    }
  }

  // componentDidMount() {

  // }

  render() {
    const {
      step,
      appActions,
    } = this.props;
    // const {} = this.state;
    const {
      check_step_1,
    } = appActions;

    return (
      <div>
        <Header step={step}/>
        <div className='wrapper'>
          <SideBar
            step={step}
            check_step_1={check_step_1}
          />
          <div className='content'>BLOCK</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {
    step,
  } = state.app;
  return {
    step,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    appActions: bindActionCreators(appActionsTypes, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
