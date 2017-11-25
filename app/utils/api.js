import { CALL_API, getJSON, ApiError } from 'redux-api-middleware';
const get = (url, types, successCallBack, failureCallback) => (dispatch) => {
  const request = {
    [CALL_API]: {
      endpoint: url,
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      types: [
        types[0],
        {
          type: types[1],
          payload: (action, state, res) => (
           getJSON(res).then((json) => successCallBack(json.responseBody))
         ),
        },
        {
          type: types[2],
          payload: (action, state, res) => (
           getJSON(res).then((json) => {
             const errorAction = { type: 'API_ERROR', payload: new ApiError(res.status, '', res) };
             dispatch(errorAction);
             return failureCallback(json);
           })
         ),
        },
      ],
    },
  };
  return dispatch(request);
};

const download = (url, types, filename, failureCallback) => (dispatch) => {
  const request = {
    [CALL_API]: {
      endpoint: url,
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      types: [
        types[0],
        {
          type: types[1],
          payload: (action, state, res) => {
            res.blob().then((blob) => {
              const objUrl = window.URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = objUrl;
              a.download = filename;
              a.click();
              // console.log('successMsg');
            });
          },
        },
        {
          type: types[2],
          payload: (action, state, res) => (
           getJSON(res).then((json) => {
             const errorAction = { type: 'API_ERROR', payload: new ApiError(res.status, '', res) };
             dispatch(errorAction);
             return failureCallback(json);
           })
         ),
        },
      ],
    },
  };
  return dispatch(request);
};

const del = (url, types, successCallBack, failureCallback) => (dispatch) => {
  const request = {
    [CALL_API]: {
      endpoint: url,
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      types: [
        types[0],
        {
          type: types[1],
          payload: (action, state, res) => (
           getJSON(res).then((json) => successCallBack(json.responseBody))
         ),
        },
        {
          type: types[2],
          payload: (action, state, res) => (
           getJSON(res).then((json) => {
             const errorAction = { type: 'API_ERROR', payload: new ApiError(res.status, '', res) };
             dispatch(errorAction);
             return failureCallback(json);
           })
         ),
        },
      ],
    },
  };
  return dispatch(request);
};

const post = (url, body, types, successCallBack, failureCallback) => (dispatch) => {
  const request = {
    [CALL_API]: {
      endpoint: url,
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      body: JSON.stringify(body),
      types: [
        types[0],
        {
          type: types[1],
          payload: (action, state, res) => (
           getJSON(res).then((json) => successCallBack(json.responseBody))
         ),
        },
        {
          type: types[2],
          payload: (action, state, res) => (
           getJSON(res).then((json) => {
             const errorAction = { type: 'API_ERROR', payload: new ApiError(res.status, '', res) };
             dispatch(errorAction);
             return failureCallback(json);
           })
         ),
        },
      ],
    },
  };
  return dispatch(request);
};

const post2 = (url, formData, types, successCallBack, failureCallback) => (dispatch) => {
  const request = {
    [CALL_API]: {
      endpoint: url,
      method: 'POST',
      body: formData,
      types: [
        types[0],
        {
          type: types[1],
          payload: (action, state, res) => (
           getJSON(res).then((json) => successCallBack(json.responseBody))
         ),
        },
        {
          type: types[2],
          payload: (action, state, res) => (
           getJSON(res).then((json) => {
             const errorAction = { type: 'API_ERROR', payload: new ApiError(res.status, '', res) };
             dispatch(errorAction);
             return failureCallback(json);
           })
         ),
        },
      ],
    },
  };
  return dispatch(request);
};

const put = (url, body, types, successCallBack, failureCallback) => (dispatch) => {
  const request = {
    [CALL_API]: {
      endpoint: url,
      method: 'PUT',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      body: JSON.stringify(body),
      types: [
        types[0],
        {
          type: types[1],
          payload: (action, state, res) => (
           getJSON(res).then((json) => successCallBack(json.responseBody))
         ),
        },
        {
          type: types[2],
          payload: (action, state, res) => (
           getJSON(res).then((json) => {
             const errorAction = { type: 'API_ERROR', payload: new ApiError(res.status, '', res) };
             dispatch(errorAction);
             return failureCallback(json);
           })
         ),
        },
      ],
    },
  };
  return dispatch(request);
};

const download2 = (url, types, successCallBack, failureCallback) => (dispatch) => {
  const request = {
    [CALL_API]: {
      endpoint: url,
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      types: [
        types[0],
        {
          type: types[1],
          payload: (action, state, res) => (
           res.blob().then((blob) => successCallBack(blob))
         ),
        },
        {
          type: types[2],
          payload: (action, state, res) => (
           getJSON(res).then((json) => {
             const errorAction = { type: 'API_ERROR', payload: new ApiError(res.status, '', res) };
             dispatch(errorAction);
             return failureCallback(json);
           })
         ),
        },
      ],
    },
  };
  return dispatch(request);
};

export { get, download, post, post2, put, del, download2 };
