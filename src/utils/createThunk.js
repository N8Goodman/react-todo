export const createThunk = ({ apiCall, type }) => {
  return requestPayload => (dispatch, getState) => {
    dispatch({ payload: requestPayload, type });

    return apiCall({ getState, payload: requestPayload }).then(
      payload => dispatch({ type: `${type}_SUCCESS`, payload, requestPayload }),
      payload => dispatch({ type: `${type}_FAILURE`, payload, requestPayload }),
    );
  };
};