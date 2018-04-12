
const initialState = {
    Employees: [],
  };
  
  export default (state = initialState, action) =>{
    switch(action.type) {
      case 'EMPLOYEES_LOADED':
        return {
          ...state,
          Employees: action.Employees,
        }
      default:
        return state
    }
  }
  
  export const fetchEmployees = () => {
    return dispatch => {
      return fetch("http://alexaskillgorillas.azurewebsites.net/api/Employees")
          .then( (response) => {
              return response.json() })
                  .then( (json) => {
                    dispatch({
                      type: 'EMPLOYEES_LOADED',
                      employees: json,
                    })
                  }).catch((err) => {
                    console.log(err);
                  })
    }
  }