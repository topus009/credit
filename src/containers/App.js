import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import * as appActions from '../actions/AppActions';

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
    const {step} = this.props;
    // const {} = this.state;
    // const {} = appActions;

    return (
      <div>
        <Header step={step}/>
        <div className='wrapper'>
          <SideBar step={step}/>
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
    appActions: bindActionCreators(appActions, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
