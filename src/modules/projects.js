
const initialState = {
  Projects: [],
};

export default (state = initialState, action) =>{
  switch(action.type) {
    case 'PROJECTS_LOADED':
      return {
        ...state,
        Projects: action.Projects,
      }
    default:
      return state
  }
}

export const fetchProjects = () => {
  return dispatch => {
    return fetch("http://alexaskillgorillas.azurewebsites.net/api/projects")
        .then( (response) => {
            return response.json() })
                .then( (json) => {
                  dispatch({
                    type: 'PROJECTS_LOADED',
                    projects: json,
                  })
                }).catch((err) => {
                  console.log(err);
                })
  }
}
