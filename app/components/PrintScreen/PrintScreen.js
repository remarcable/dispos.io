import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Logo from '../Logo/Logo';
import PrintCard from './PrintCard/PrintCard';
import PrintLayout from './PrintLayout/PrintLayout';

import FrontPage from './FrontPage/FrontPage';

import './print.global.css';


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
};

const mapStateToProps = state => ({
  general: state.general,
  schedule: state.schedule,
  requirements: state.requirements,
  additionalDetails: state.additionalDetails,
  actions: state.actions,
});

const PrintScreen = ({
  general,
  schedule,
  requirements,
  additionalDetails,
  actions }) => (
    <PrintLayout
      headerLeft={general.date}
      headerMiddle={<Logo isTiny style={{ fontSize: 12 }} />}
      footer={general.title}
      pageNumberCount={Math.ceil(actions.length / 4)}
    >
      <div>
        <FrontPage
          general={general}
          schedule={schedule}
          requirements={requirements}
          additionalDetails={additionalDetails}
        />
        {
          actions.map((action) => (
            <PrintCard
              key={action.id}
              title={action.fields.title}
              description={action.fields.description}
              length={action.fields.length}
              artist={action.fields.artist}
              requirements={action.fields.requirements}
            />
          ))
        }
      </div>
    </PrintLayout>
);

PrintScreen.propTypes = propTypes;

export default connect(
  mapStateToProps,
  null,
)(PrintScreen);
