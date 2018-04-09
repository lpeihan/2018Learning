import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class UserAdd extends Component {
    static contextTypes = {
        history: PropTypes.object
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let username = this.username.value;
        let user = { id: Date.now(), username };
        let usersStr = localStorage.getItem('users');
        let users = usersStr ? JSON.parse(usersStr) : [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        this.context.history.push('/user/list');
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>用户名</label>
                    <input ref={input => this.username = input} className="form-control" />
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary" />
                </div>
            </form>
        )
    }
}