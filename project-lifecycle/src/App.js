import React from 'react';
import axios from 'axios';
import './components/styles.scss'
import Followers from './components/Followers';

class App extends React.Component{
  state = {
    // setting data to array bc github data is object arr
    gitData: [],
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/alkaede')
      .then(res => {
        console.log(res.data)
        // spread operator
        this.setState({
          ...this.state,
          gitData: res.data,
        })
      })
      .catch(err => console.error('something happened', err.message))
  }

  render(){
    return(
      <div className="App">
        <div className='container'>
          <div>
            <h1>{this.state.gitData.login} / {this.state.gitData.name}</h1>
            <img src={this.state.gitData.avatar_url} alt='github avatar' className='avatar'/>
            <h2>Heres a list of my followers:</h2>
          </div>
          <Followers />
        </div>
        <div className='gitContainer'>
          <h1>Chart of my activity!</h1>
          <img src="https://ghchart.rshah.org/alkaede" alt="My Github chart" className='gitChart'/>
        </div>
      </div>

    )
  }
}

export default App;
