import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';


const Box = styled.div`
  position: absolute;
  right: 1rem;
  top: 3rem;
  z-index: 1;
`

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <Box key={alert.id} className={`${alert.alertType} border  px-4 py-3 rounded relative`} role="alert">
      {alert.msg}
    </Box>
  ));


Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);