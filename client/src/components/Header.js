import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, BrowserRouter } from 'react-router-dom';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li><a href="/auth/google">One click Sign-up / Sign-In with Google!</a></li>
				);
			default: 
				return (
					<div>
						<li><a href="/api/logout">Logout</a></li>
					</div>
				);
		}
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<BrowserRouter>
						<Link
						to={this.props.auth ? '/surveys' : '/'} 
						className="left brand-logo"
						>
							tellMe
						</Link>
					</BrowserRouter>
					<ul className="right">
						{this.renderContent()}
					</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);