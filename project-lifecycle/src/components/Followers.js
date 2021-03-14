import React from 'react';
import axios from 'axios';

class Followers extends React.Component {
  state = {
    followers: []
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/alkaede/followers')
      .then(res => {
        // console.log(res.data)
        this.setState({
          ...this.state,
          followers: res.data,
        })
      })
      .catch(err => console.error('something happened', err.message))
  }

  render(){
    return(
      <div className='f-container'>
        {this.state.followers.map(e => {
          return(
            <div key={e.id} className='f-div'>
              <img src={e.avatar_url} alt='follower avatar' className='f-av'/>
              <h2> {e.login}</h2>
            </div>
          ) 
        })}
      </div>
    )
  }
}

export default Followers