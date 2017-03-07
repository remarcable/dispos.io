import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  updateFieldGeneral,
  updateFieldActions,
} from '../../actions';

import styles from './EditScreen.css';

import GeneralBox from '../EditBox/GeneralBox';
import ActBox from '../EditBox/ActBox';

const propTypes = {
  general: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
  }).isRequired,
  schedule: PropTypes.shape({
    start: PropTypes.string.isRequired,
    rehearsal: PropTypes.string,
    construction: PropTypes.string,
    deconstruction: PropTypes.string,
  }).isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      fields: PropTypes.shape(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          value: PropTypes.string,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
  onChangeGeneral: PropTypes.func.isRequired,
  onChangeActions: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  general: state.general,
  schedule: state.schedule,
  requirements: state.requirements,
  additionalDetails: state.additionalDetails,
  actions: state.actions,
});

const mapDispatchToProps = dispatch => ({
  onChangeGeneral: (field, value) => dispatch(updateFieldGeneral(field, value)),
  onChangeActions: (id, field, value) => dispatch(updateFieldActions(id, field, value)),
});

const EditScreen = ({ general, actions, onChangeGeneral, onChangeActions }) => (
  <div className={styles.editScreen}>
    <h2 className={styles.title}>{general.title}</h2>
    <div className={styles.editContainer}>
      <GeneralBox
        fields={general}
        onChange={onChangeGeneral}
      />

      {
        actions.map(action => (
          <ActBox
            fields={action.fields}
            key={action.id}
            id={action.id}
            onChange={onChangeActions}
          />
        ))
      }
    </div>
  </div>
);

EditScreen.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditScreen);
