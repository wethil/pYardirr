import React from 'react'
const Hello = React.createClass({
      componentDidMount() {
    // from the path `/inbox/messages/:id`
    const name = this.props.params.name

    fetchMessage(id, function (err, message) {
      this.setState({ message: message })
    })
  },

  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.state.params.name }
      </div>
    )
  }
})

export default Hello;