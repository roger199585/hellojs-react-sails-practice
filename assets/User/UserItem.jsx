var React = require('react');

class UserItem extends React.Component {
  constructor(props) {
    super(props);
    this.alertText = this.alertText.bind(this);
  }
  alertText() {
    alert(this.props.text);
  }
  render() {
    return (
      <div>I am {this.props.data}</div>
    );
  }
}

module.exports = UserItem;