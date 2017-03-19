import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  updateFieldGeneral,
  updateFieldSchedule,
  updateFieldActions,
  addAction,
  removeAction,
} from '../../actions';

import styles from './EditScreen.css';

import GeneralCard from './EditCard/GeneralCard';
import ScheduleCard from './EditCard/ScheduleCard';
import ActCard from './EditCard/ActCard';

import AddCard from './EditCard/AddCard';

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
      id: PropTypes.string.isRequired,
      fields: PropTypes.shape(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          value: PropTypes.string,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
  onChangeGeneral: PropTypes.func.isRequired,
  onChangeSchedule: PropTypes.func.isRequired,
  onChangeActions: PropTypes.func.isRequired,
  handleAddAction: PropTypes.func.isRequired,
  onRemoveAction: PropTypes.func.isRequired,
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
  onChangeSchedule: (field, value) => dispatch(updateFieldSchedule(field, value)),
  onChangeActions: (id, field, value) => dispatch(updateFieldActions(id, field, value)),
  handleAddAction: () => dispatch(addAction()),
  onRemoveAction: (index) => dispatch(removeAction(index)),
});

const EditScreen = ({
  general,
  schedule,
  actions,
  onChangeGeneral,
  onChangeSchedule,
  onChangeActions,
  handleAddAction,
  onRemoveAction }) => (
    <div className={styles.editScreen}>
      <h2 className={styles.title}>{general.title || 'My Dispo'}</h2>
      <div className={styles.editContainer}>
        <GeneralCard
          fields={general}
          onChange={onChangeGeneral}
        />
        <ScheduleCard
          fields={schedule}
          onChange={onChangeSchedule}
        />

        {
          actions.map((action, index) => (
            <ActCard
              fields={action.fields}
              key={action.id}
              id={action.id}
              index={index}
              onChange={onChangeActions}
              removeCard={() => onRemoveAction(index)}
            />
          ))
        }

        <AddCard handleOnClick={handleAddAction} />
      </div>
    </div>
);

EditScreen.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditScreen);
