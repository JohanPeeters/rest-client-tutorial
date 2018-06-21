import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import auth0 from 'auth0-js'
import axios from 'axios'

class Friends extends Component {

  constructor(options) {
    super(options)
    this.webAuth = new auth0.WebAuth({
      domain:       `${process.env.REACT_APP_AUTHZ_SRV}`,
      clientID:     `${process.env.REACT_APP_CLIENT_ID}`,
      redirectUri:  'http://localhost:3000'
    })
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentWillMount() {
    (window.location.hash &&
      this.webAuth.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken) {
          axios({
            baseURL: process.env.REACT_APP_API,
            url: '/friends',
                headers: {
                  'Authorization': `Bearer ${authResult.accessToken}`
                }
            })
            .then((res) => {
              this.setState({
                message: res.data
              })
            })
          }
        }
      )
    )
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.webAuth.authorize({
      responseType: 'token id_token',
      audience: 'backend',
      scope: 'read:friends'
    })
  }
  render() {
    return(
        <div>
          {this.state.message && this.state.message}
          {!this.state.message &&
            <form onSubmit={this.handleSubmit}>
              <Button type="submit">
                Get my friends
              </Button>
            </form>
          }
        </div>
    )}
}

export default Friends
