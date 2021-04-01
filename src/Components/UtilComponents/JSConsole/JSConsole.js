import React from 'react'
import { Hook, Console, Decode } from 'console-feed'

export default class JSConsole extends React.Component {
  state = {
    logs: []
  }

  componentDidMount() {
    Hook( console, log => {
      this.setState(({ logs }) => ({ logs: [...logs, Decode(log)] }))
    })

    console.log(`Hello world!`)
  }

  render() {
    return (
      <div style={{ backgroundColor: '#242424' }}>
        <Console logs={this.state.logs} variant="dark" />
      </div>
    )
  }
}