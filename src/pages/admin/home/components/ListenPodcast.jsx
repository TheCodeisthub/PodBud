import React, { Component } from 'react'

export default class ListenPodcast extends Component {
  render() {
    return (
      <div>
        <h2>Listen Podcasts</h2>
        <div>
          <button>Recent</button>
          <button>Topics</button>
          <button>Authors</button>
          <button>Episodes</button>
        </div>
      </div>
    )
  }
}
