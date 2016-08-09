var React = require('react')
var UserItem = require('User/UserItem.jsx')

class UserList extends React.Component {
	render() {
		return (
			<div>
				<h3>User list</h3>
				{this.props.listData.map((item) => {
					return <UserItem data={item.name} callback={this.props.callback}/>
				})}
			</div>
		)
	}
}

module.exports = UserList;