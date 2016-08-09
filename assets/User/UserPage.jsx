require('vendor/bootstrap.scss');
require('User/User.scss');

var React = require('react')
var UserAddBox = require('User/UserAddBox.jsx');
var UserList = require('User/UserList.jsx');

class UserPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			username: []
			//username: ""
		}
		this.wasChange = this.wasChange.bind(this)
	}

	wasChange(path='') {
		console.log(`user/${path}`)
		$.ajax({
			url: `/user/${path}`,
			success: res => {
				this.setState({username: res})
				//this.setState({username: res[0].name})
			},
			error: error => {
				console.log(error)
			}
		})
	}

	componentWillMount() {
		this.wasChange();
	}

  	render() {
    	return (
		<div>
			<h1>User Page</h1>
			<UserList listData={this.state.username} callback={this.wasChange}/>
			<UserAddBox callback={this.wasChange}/>
	  	</div>
	    );
	}
}

module.exports = UserPage;
