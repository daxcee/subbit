const React = require('react')
const { connect } = require('react-redux')
const { changeUser, fetchAccounts } = require('../actions/actions.js')

const Login = ({ users, username, changeUser }) => {
  return username === 'User'
    ? (
      <div id="login">
        <div className="ui fluid inverted blue segment">
          <p className="header">Login</p>
          <div className="ui simple selection dropdown">
            <div className="text">{ username }</div>
            <i className="dropdown icon"></i>
            <div className="menu">
              {
                users.map((user, i) => {
                  return <div key={ i } className="item" onClick={ changeUser }>{ user }</div>
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
    : (
      <div id="login">
        <div className="ui blue message">
          <span className="content">
            <p><i className="notched circle loading icon"></i> Logging you in...</p>
          </span>
        </div>
        <div className="ui fluid inverted blue segment">
          <p className="header">Login</p>
          <p className="welcome">{ "Welcome back, " + username }</p>
        </div>
      </div>
    )
}

const mapProps = state => {
  return {
    username: state.username,
    users: state.users
  }
}

const mapDispatch = dispatch => {
  return {
    changeUser: (event) => {
      const user = event.target.textContent
      dispatch(changeUser(user))
      dispatch(fetchAccounts(user))
    }
  }
}

module.exports = connect(mapProps, mapDispatch)(Login)
