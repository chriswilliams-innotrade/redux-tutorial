export const API_REQUEST_SUCCESS = "users:updateUser";
export const SHOW_ERROR = "users:showError";
export const updateUser = newUser => ({
  type: API_REQUEST_SUCCESS,
  payload: {
    user: newUser
  }
});

export const showError = err => ({
  type: API_REQUEST_ERROR,
  payload: {
    user: err
  }
});

export const requestMade = () => ({
  type: API_REQUEST_REQUESTED,
  payload: {
    user: undefined
  }
});

export function apiRequest() {
  return async dispatch => {
    dispatch(requestMade());

    try {
      const request = await fetch("http://google.com");
      const data = await request.json();
      dispatch(updateUser(data.newUser));
    } catch (err) {
      dispatch(showError(err));
    }

    /* $.ajax({
            url: 'http://google.com',
            success(response) {
               console.log('SUCCESS'); 

               dispatch(updateUser(response.newUser));
            },
            error() {
                console.log('ERROR');

                dispatch(showError());
            }
        }); */
  };
}
