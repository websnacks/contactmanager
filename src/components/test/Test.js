// Class based componend  RCC

import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    body: ''
  };

  // lifecycle method:
  componentDidMount() {
    console.log('did mount');

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(jsonData =>
        this.setState({
          title: jsonData.title,
          userid: jsonData.userId
        })
      );
  }

  // componentWillMount() {
  //   console.log('will mount');
  // }

  // componentDidUpdate() {
  //   console.log('did update');
  // }

  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log('componentWillReceiveProps');
  // }

  render() {
    const { title, userid } = this.state;
    return (
      <div>
        <h1>Test Component</h1>
        <p>{title}</p>
        <br />
        <p>{userid}</p>
      </div>
    );
  }
}

export default Test;
