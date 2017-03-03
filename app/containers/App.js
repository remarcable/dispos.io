import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TransitionGroupStub from './TransitionGroupStub';
import 'typeface-space-mono/index.css';

import HeaderLogo from '../components/Logo/HeaderLogo';
import DragBar from '../components/DragBar/DragBar';

import StartScreen from '../components/StartScreen/StartScreen';
import EditScreen from '../components/EditScreen/EditScreen';

import transitions from './AppTransitions.css';

const propTypes = {
  hasSheet: PropTypes.bool.isRequired,
  sheet: PropTypes.object.isRequired,
};

const App = ({ hasSheet, sheet }) => (
  <div>
    <DragBar />
    <HeaderLogo shouldShow={hasSheet} />
    <TransitionGroupStub
      transitionAppear
      transitionName={transitions}
      transitionAppearTimeout={800}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
    >
      {hasSheet
      ? <div key="editScreen" style={{ width: '100%', height: '100%' }}>
          <EditScreen sheet={sheet} />
        </div>
      : <div key="startScreen" style={{ width: '100%', height: '100%' }}>
          <StartScreen />
        </div>
    }
    </TransitionGroupStub>
  </div>
);

App.propTypes = propTypes;

const mapStateToProps = state => ({
  hasSheet: !!state.sheet.details,
  sheet: state.sheet,
});

export default connect(
  mapStateToProps,
  null,
)(App);
