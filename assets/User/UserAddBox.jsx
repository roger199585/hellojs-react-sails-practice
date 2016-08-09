var React = require('react')

class UserAddBox extends React.Component {
	constructor(props) {
		super(props)
		this.addUser = this.addUser.bind(this)
	}

	addUser(e) {
		e.preventDefault();
	    const input = this.refs.account;
	    const newUser = input.value;
	    this.props.callback(`create?name=${newUser}`);
	    input.value = '';
	}

	render() {
		return (
			<div className="useraddbox">
				<h3>UserAddBox</h3>
				<input type="text" ref="account"/>
				<button onClick={this.addUser}> Submiut </button>
			</div>
		)
	}
}

module.exports = UserAddBox;