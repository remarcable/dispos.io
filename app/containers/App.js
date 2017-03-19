import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'typeface-space-mono/index.css';

import IpcReciever from './IpcReciever';

import HeaderLogo from '../components/Logo/HeaderLogo';
import DragBar from '../components/DragBar/DragBar';

import StartScreen from '../components/StartScreen/StartScreen';
import EditScreen from '../components/EditScreen/EditScreen';
import PrintScreen from '../components/PrintScreen/PrintScreen';

import transitions from './AppTransitions.css';

const propTypes = {
  editMode: PropTypes.bool.isRequired,
  printMode: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  editMode: state.editMode,
  printMode: state.printMode,
});

const App = ({ editMode, printMode }) => {
  const Body = () => {
    if (editMode) {
      return (
        <div key="editScreen" style={{ width: '100%', height: '100%' }}>
          <EditScreen />
        </div>
      );
    } else if (printMode) {
      return (
        <div key="printScreen" style={{ width: '100%', height: '100%' }}>
          <PrintScreen />
        </div>
      );
    }

    return (
      <div key="startScreen" style={{ width: '100%', height: '100%' }}>
        <StartScreen />
      </div>
    );
  };

  return (
    <div>
      <IpcReciever />
      <DragBar />
      <HeaderLogo shouldShow={editMode} />
      <ReactCSSTransitionGroup
        transitionAppear
        transitionName={transitions}
        transitionAppearTimeout={800}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {Body()}
      </ReactCSSTransitionGroup>
    </div>
  );
};

App.propTypes = propTypes;

export default connect(
  mapStateToProps,
  null,
)(App);
