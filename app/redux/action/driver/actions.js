import {
  DRIVER_LOGIN,
  GET_DRIVER_SHIPMENTS_REQ,
  GET_DRIVER_SHIPMENTS_RES,
} from './types';

export const getDriverShipment = driverId => {
  return {
    type: GET_DRIVER_SHIPMENTS_REQ,
    payload: driverId,
  };
};

export const storeDriverShipment = response => {
  return {
    type: GET_DRIVER_SHIPMENTS_RES,
    payload: response,
  };
};
