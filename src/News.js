import React, { Component } from 'react'
import axios from 'axios'

class News extends Component {

  constructor(options) {
    super(options)
    this.state = {}
  }
  componentWillMount() {
    axios({
        baseURL: process.env.REACT_APP_API,
        url: '/news',
        headers: {'x-api-key': process.env.REACT_APP_API_KEY}
    }).then(res => {
      this.setState({message: res.data})
    })
  }
  render() {
    return (
      <div>
        {this.state.message &&
          this.state.message
        }
      </div>
    )
  }
}

export default News
