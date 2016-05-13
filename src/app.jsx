var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function () {
    return (
      <div>
        Hello React 3
      </div>
    );
  }
});

ReactDOM.render(
  <HelloWorld />,
  document.querySelector('.content')
);
