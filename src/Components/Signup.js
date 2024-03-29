import React, {Component} from 'react'
import axios from 'axios'

class Signup extends Component {
	// Data
	state = {
		name: '',
		email: '',
		password: ''
	}
	// Functions
	changeName = (e) => {
		this.setState({name: e.target.value})
	}

	changeEmail = (e) => {
		this.setState({email: e.target.value})
	}

	changePassword = (e) => {
		this.setState({password: e.target.value})
	}

	signup = (e) => {
		e.preventDefault()
		axios.post('http://localhost:4000/api/signup', this.state).then((res) => {
			localStorage.setItem('token', res.data.token)
		}).catch((err) => {
			console.log('err', err)
		})
	}

	// Render
	render() {
		return (
			<div className="row">
				<div className="col-4 offset-4">
					<div className="card signup">
						<div className="card-body">
							<form onSubmit={(e) => this.signup(e)}>
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Full Name..." value={this.state.name} onChange={(e) => this.changeName(e)} />
								</div>
								<div className="form-group">
									<input type="email" className="form-control" placeholder="Email..." onChange={(e) => this.changeEmail(e)} />
								</div>
								<div className="form-group">
									<input type="password" className="form-control" placeholder="Password..." onChange={(e) => this.changePassword(e)} />
								</div>
								<button type="submit" className="btn btn-success">Signup</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Signup
