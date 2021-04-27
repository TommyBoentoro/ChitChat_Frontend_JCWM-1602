import { render } from '@testing-library/react';
import React from 'react'
import Chat from './Pages/Chat';
import LoginForm from './Pages/LoginForm';

class App extends React.Component{

  state = {
    name : null,
    room : null
  }

  onChangeState = (name, room) => {
    this.setState({name : name, room : room})
  }

  render(){
    if(this.state.name === null){
      return (
        <LoginForm onSubmitButton={this.onChangeState} />
      );
    }

    return(
      <Chat username={this.state.name} />
    )
  }
}

export default App;
