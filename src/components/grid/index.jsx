import React from 'react';
import { connect } from 'react-redux';
import '../../styles/grid.css';

import { fetchProjects } from '../../modules/projects';

class Grid extends React.Component {

  componentWillMount() {
    this.props.fetchProjects();
  }

  render() {
    return (
      <div className="grid-container">
        {/*
          this.props.projects.map((i) => {
            return(
              <div className="grid-item" key={i._id}>
                  <Link to={`/item/${i._id}`}><img src="http://placehold.it/150x150" className="grid-img" alt="img"/></Link>
                <h3 className="item-name">{i.name}</h3>
                <span className="item-price">{i.price}</span>
              </div>
            )
          })
        */
          console.log(this.props)
        }
        <h1>Projects</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.data.projects,
})

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => {
    dispatch(fetchProjects())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid)
