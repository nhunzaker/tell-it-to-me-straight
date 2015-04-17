var React = require('react')
var message = require('./message')

let Component = React.createClass({
  render() {
    return (<p>{ message }</p>)
  }
})

React.render(<Component />, document.getElementById('app'))
