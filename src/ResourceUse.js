import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap"
import axios from 'axios'

class ResourceUse extends Component {

  constructor(options) {
    super(options)
    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit = (e) => {
    e.preventDefault()
    axios({
      'baseURL': `https://${process.env.REACT_APP_AUTHZ_SRV}/oauth`,
      'url': '/token',
      'method': 'post',
      'data': {
        audience: 'backend',
        username: this.state.email,
        password: this.state.password,
        grant_type: 'password',
        client_id: process.env.REACT_APP_CLIENT_ID,
        scope: 'read:resourceUse'
      }
    }).then((res) => {
      axios({
          baseURL: process.env.REACT_APP_API,
          url: '/resourceUse',
          headers: {
            'Authorization': `Bearer ${res.data.access_token}`
          }
      })
      .then((res) => {
        this.setState({
          message: res.data,
          authenticated: true
        })
      })
    })
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  render() {
    if(!this.state.authenticated) return(
        <div>
          <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="email">
                <ControlLabel>Email</ControlLabel>
                <FormControl
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="password">
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  value={this.state.password}
                  type="password"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <Button type="submit">
                Get my resource use
              </Button>
            </form>
        </div>
      )
    else return (<p>{this.state.message}</p>)
  }
}

export default ResourceUse
