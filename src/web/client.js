import ReactDOM from 'react-dom'
import React from 'react'
import h from 'react-hyperscript'

import { HelloRequest } from './proto/helloworld_pb'
import { GreeterPromiseClient } from './proto/helloworld_grpc_web_pb'

class GreeterApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      message: ''
    }
  }

  async requestSayHello () {
    const greeterService = new GreeterPromiseClient('http://'+window.location.hostname+':8080', null, null);

    const request = new HelloRequest()
    request.setName(this.state.name)
    const response = await greeterService.sayHello(request)

    this.setState({
      message: response.getMessage()
    })
  }

  handleInputForm(e) {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return h('div', [
      h('input', { placeholder: 'name', value: this.state.name, onChange: (e) => this.handleInputForm(e) }),
      h('button', { onClick: () => this.requestSayHello() }, 'say hello'),
      h('div', this.state.message),
    ])
  }
}

ReactDOM.render(
  h('div', [
    h('h1', 'grpc-web greeter sample'),
    h(GreeterApp)
  ]),
  document.getElementById('root')
)
