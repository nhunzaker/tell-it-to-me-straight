// Import modules CommonJS style. In this case, it'll see that
// React exists in the `node_modules` directory.
let React = require('react')

// It also supports relative paths
let message = require('./message')

let Component = React.createClass({
  render() {
    return (<p>{ message }</p>)
  }
})

React.render(<Component />, document.getElementById('app'))
