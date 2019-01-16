import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment'

import { sendRequests } from './redux/actions/index';


const mapStateToProps = state => {
  return { earthquakeData: state.resData };
};
const mapDispatchToProps = dispatch => {
  return {
    sendRequests: () => dispatch(sendRequests())
  };
};

class App extends Component {
  constructor(props){
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // handleChange(e) {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.sendRequests();
    // console.log("--------props-----------------------------");
    // console.log(this.props.earthquakeData);
    // this.setState({ earthquakeData: ddd.data });
  }
  componentDidUpdate(){
    console.log('***************');
    console.log(this.props.earthquakeData);
  }
  render() {
    const { earthquakeData } = this.props;
    return (
      <div className="app container">
        <div className="form1">
          <form className="form" onSubmit={this.handleSubmit}>
            <p>Earthquake data from api</p>
            <button type="submit" className="btn btn-lg btn-success btn-block">
              Get Data
            </button>
          </form>
        </div>
        <div className="table-data">
          <table className="table table-condensed">
            <thead>
              <tr>
                <th>Magnitude</th>
                <th>Time</th>
                <th>Felt</th>
                <th>Sources</th>
                <th>Longitude, [km]</th>
                <th>Latitude, [km]</th>
                <th>Depth, [km]</th>
              </tr>
            </thead>
            <tbody>
              {
                Object.keys(earthquakeData).map((i_data, _id) => {
                  return(
                    <tr key={_id}>
                      <td>{earthquakeData[i_data].magnitude}</td>
                      <td>{moment(earthquakeData[i_data].time).format('YYYY-MM-DD HH:mm')}</td>
                      <td>{earthquakeData[i_data].felt}</td>
                      <td>{earthquakeData[i_data].sources}</td>
                      <td>{earthquakeData[i_data].longitude}</td>
                      <td>{earthquakeData[i_data].latitude}</td>
                      <td>{earthquakeData[i_data].depth}</td>
                    </tr>
                  );
                })
                // Object.assign({}, this.props.earthquakeData).map((_id, i_data) => {
                //   return(
                //     <tr key={_id}>
                //       <td>{i_data.magnitude}</td>
                //       <td>{i_data.time}</td>
                //       <td>{i_data.felt}</td>
                //       <td>{i_data.sources}</td>
                //       <td>{i_data.longitude}</td>
                //       <td>{i_data.latitude}</td>
                //       <td>{i_data.depth}</td>
                //     </tr>
                //   );
                // })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
