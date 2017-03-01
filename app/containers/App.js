import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import 'typeface-space-mono';

import HeaderLogo from '../components/Logo/HeaderLogo';
import DragBar from '../components/DragBar';

const propTypes = {
  children: PropTypes.element.isRequired,
  currentPage: PropTypes.string.isRequired,
};

const App = ({ children, currentPage }) => (
  <div>
    <DragBar />
    <HeaderLogo shouldShow={currentPage === 'edit'} />
    {children}
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
