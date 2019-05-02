import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title || 'Hello World!'}</h1>
        <h3>{this.props.title && this.props.subtitle}</h3>
        {
          this.props.title
            ? <button onClick={this.props.close}>Exit</button>
            : <button onClick={() => this.props.activate({ title: 'I am a genius!', subtitle: 'Simple Redux app' })}>Click Me!</button>
        }
      </div>
    )
  }
}

export default App
