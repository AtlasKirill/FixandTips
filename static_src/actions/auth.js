import { getJSON, RSAA } from 'redux-api-middleware';
import { normalize } from 'normalizr';
import { user } from './../utils/schemas.jsx';
import Cookies from 'js-cookie';
export const START_USER_UPDATING = 'START_USER_UPDATING';
export const SUCCESS_USER_UPDATING = 'SUCCESS_USER_UPDATING';
export const ERROR_USER_UPDATING = 'ERROR_USER_UPDATING';

export const loadUser = () => {
    return (dispatch, getState) => {
      dispatch({type: "USER_LOADING"});
  
      const token = getState().auth.token;
  
      let headers = {
        "Content-Type": "application/json",
      };
  
      if (token) {
        headers["Authorization"] = `Token ${token}`;
      }
      return fetch("/api/auth/user/", {headers, })
        .then(res => {
          if (res.status < 500) {
            return res.json().then(data => {
              return {status: res.status, data};
            })
          } else {
            console.log("Server Error!");
            throw res;
          }
        })
        .then(res => {
          if (res.status === 200) {
            dispatch({type: 'USER_LOADED', user: res.data });
            return res.data;
          } else if (res.status >= 400 && res.status < 500) {
            dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
            throw res.data;
          }
        })
    }
  }

  export const login = (username, password) => {
    return (dispatch, getState) => {
      let headers = {"Content-Type": "application/json"};
      let body = JSON.stringify({username, password});
  
      return fetch("/api/auth/login/", {headers, body, method: "POST"})
        .then(res => {
          if (res.status < 500) {
            return res.json().then(data => {
              return {status: res.status, data};
            })
          } else {
            console.log("Server Error!");
            throw res;
          }
        })
        .then(res => {
          if (res.status === 200) {
            dispatch({type: 'LOGIN_SUCCESSFUL', data: res.data });
            return res.data;
          } else if (res.status === 403 || res.status === 401) {
            dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
            throw res.data;
          } else {
            dispatch({type: "LOGIN_FAILED", data: res.data});
            throw res.data;
          }
        })
    }
  }


  export const register = (username, password, name, surname, flat) => {
    return (dispatch, getState) => {
      let headers = {"Content-Type": "application/json"};
      let body = JSON.stringify({username, password, name, surname, flat});
  
      return fetch("/api/auth/register/", {headers, body, method: "POST"})
        .then(res => {
          if (res.status < 500) {
            return res.json().then(data => {
              return {status: res.status, data};
            })
          } else {
            console.log("Server Error!");
            throw res;
          }
        })
        .then(res => {
          if (res.status === 200) {
            dispatch({type: 'REGISTRATION_SUCCESSFUL', data: res.data });
            return res.data;
          } else if (res.status === 403 || res.status === 401) {
            dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
            throw res.data;
          } else {
            dispatch({type: "REGISTRATION_FAILED", data: res.data});
            throw res.data;
          }
        })
    }
  }

 export const logout = () => {
    return (dispatch, getState) => {
      let headers = {"Content-Type": "application/json"};
  
      return fetch("/api/auth/logout/", {headers, body: "", method: "POST"})
        .then(res => {
          if (res.status === 204) {
            return {status: res.status, data: {}};
          } else if (res.status < 500) {
            return res.json().then(data => {
              return {status: res.status, data};
            })
          } else {
            console.log("Server Error!");
            throw res;
          }
        })
        .then(res => {
          if (res.status === 204) {
            dispatch({type: 'LOGOUT_SUCCESSFUL'});
            return res.data;
          } else if (res.status === 403 || res.status === 401) {
            dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
            throw res.data;
          }
        })
    }
  }
  
  export const updateUser = (url, data, token) => {
    console.log('Update')
    return {
        [RSAA]: {
            credentials: 'include',
            endpoint: url,
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get("csrftoken"),
                'Authorization': `Token ${token}`,
              },
            types: [START_USER_UPDATING, 
                    {
                        type: SUCCESS_USER_UPDATING,
                        payload: (action, state, res) =>{
                            return getJSON(res).then(
                                (json) => {
                                    json = {users: json};
                                    const normalizedData = normalize(json, [user]);
                                    delete json.results;
                                    return Object.assign({}, json, normalizedData);
                                },
                            );
                        },
                       
                    },

                ERROR_USER_UPDATING],
        },
    };
};