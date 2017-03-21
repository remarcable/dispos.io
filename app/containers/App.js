import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import 'typeface-space-mono/index.css';

import IpcReciever from './IpcReciever';

import HeaderLogo from '../components/Logo/HeaderLogo';
import DragBar from '../components/DragBar/DragBar';
import Controls from '../components/Controls/Controls';

import StartScreen from '../components/StartScreen/StartScreen';
import EditScreen from '../components/EditScreen/EditScreen';
import PrintScreen from '../components/PrintScreen/PrintScreen';

const propTypes = {
  editMode: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  editMode: state.editMode,
});

const App = ({ editMode }) => {
  const Body = () => (
    editMode ? (
      <div key="editScreen" style={{ width: '100%', height: '100%' }}>
        <HeaderLogo shouldShow={editMode} />
        <Controls />
        <EditScreen />
        <PrintScreen />
      </div>
    )
    : (
      <div key="startScreen" style={{ width: '100%', height: '100%' }}>
        <StartScreen />
      </div>
    )
  );

  return (
    <div>
      <IpcReciever />
      <DragBar />
      {Body()}
    </div>
  );
};

App.propTypes = propTypes;

export default connect(
  mapStateToProps,
  null,
)(App);
