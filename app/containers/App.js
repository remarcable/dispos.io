import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import 'typeface-space-mono/index.css';

import HeaderLogo from '../components/Logo/HeaderLogo';
import DragBar from '../components/DragBar';

import StartScreen from '../components/StartScreen';
import EditScreen from '../components/EditScreen';

const propTypes = {
  currentPage: PropTypes.string.isRequired,
};

const App = ({ currentPage }) => (
  <div>
    <DragBar />
    <HeaderLogo shouldShow={currentPage === 'edit'} />
    {currentPage === 'edit' ? <EditScreen /> : <StartScreen />}
  </div>
);

App.propTypes = propTypes;

const mapStateToProps = state => ({
  currentPage: state.page.current,
});

export default connect(
  mapStateToProps,
  null,
)(App);
