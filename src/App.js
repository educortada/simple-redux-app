import React, { Component } from 'react'
import styled from 'styled-components'

class App extends Component {
  render() {
    // Create a Wrapper styled component that'll render a <section> tag with some styles
    const Wrapper = styled.section`
      padding: 1.5rem;
      background: #f2f2f2;
    `
    // Create a Title styled component that'll render an <h1> tag with some styles
    const Title = styled.h1`
      font-size: 2rem;
      color: palevioletred;
      margin: 0;
    `
    // Create a Subtitle styled component that'll render an <h1> tag with some styles
    const Subtitle = styled.h2`
      font-size: 1.25rem;
      color: rgb(243, 182, 97);
      margin: .5rem 0 0 0;
    `
    // Create a Button styled component that'll render a <button> tag with some styles
    const Button = styled.button`
      padding: 0.25em 1em;
      margin-top: 1rem;
      font-size: 1em;
      font-weight: 600;
      color: palevioletred;
      background: inherit;
      border: 2px solid palevioletred;
      border-radius: 3px;
      cursor: pointer;
    `
    return (
      <Wrapper>
        <Title>{this.props.title || 'Redux App!'}</Title>
        {this.props.title && <Subtitle>{this.props.subtitle}</Subtitle>}
        {
          this.props.title
            ? <Button onClick={this.props.close}>Exit</Button>
            : <Button onClick={() => this.props.activate({ title: 'I am a genius!', subtitle: 'Simple Redux app' })}>Click Me!</Button>
        }
      </Wrapper>
    )
  }
}

export default App
