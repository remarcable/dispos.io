import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'typeface-space-mono/index.css';

import HeaderLogo from '../components/Logo/HeaderLogo';
import DragBar from '../components/DragBar/DragBar';

import StartScreen from '../components/StartScreen/StartScreen';
import EditScreen from '../components/EditScreen/EditScreen';

import transitions from './AppTransitions.css';

const propTypes = {
  editMode: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  editMode: state.editMode,
});

const App = ({ editMode }) => (
  <div>
    <DragBar />
    <HeaderLogo shouldShow={editMode} />
    <ReactCSSTransitionGroup
      transitionAppear
      transitionName={transitions}
      transitionAppearTimeout={800}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
    >
      {editMode
      ? <div key="editScreen" style={{ width: '100%', height: '100%' }}>
          <EditScreen />
        </div>
      : <div key="startScreen" style={{ width: '100%', height: '100%' }}>
          <StartScreen />
        </div>
    }
    </ReactCSSTransitionGroup>
  </div>
);

App.propTypes = propTypes;

export default connect(
  mapStateToProps,
  null,
)(App);
