import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {


  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    console.log('My component was rendered to the screen');

    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude}),
      err => this.setState({ errorMessage: err.message }),
    );
  }

  componentDidUpdate() {
    console.log('My component was just updated - it rerendered');
  }

  componentWillUnmount() {
    console.log('My component will be unmoumted')
  }


  // React says we have to define render!! It's called unconditionally. It's called again when the state is changed. 
  render() {
    console.log("render was called")
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>
          Error: {this.state.errorMessage}
        </div>
      );
    } else if (!this.state.errorMessage && this.state.lat) {
      console.log(this.state.lat);
      return (

        <SeasonDisplay lat={this.state.lat} />
      );
    }
    // return means return. It doesn't go below it. therefore it comes when nothing above is corret. so there is no need to put else statement here
    return (
      <div>
        Loading!
      </div>
    )



  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);