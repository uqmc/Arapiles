import React from 'react'

//navigate used to redirect
import { navigate } from 'gatsby'

//Authentication services for logging in
import { authenticationService } from '../services/authentication.js'

//Basic Login componnent
//For now just used for testing purposes.
//Based off of: https://www.gatsbyjs.com/tutorial/authentication-tutorial/
class Login extends React.Component {

    //Component State containing provided identifier (username or email) and password
    state = {
        identifier: '',
        password: '',
    }

    //Function to update state when either field is changed
    handleUpdate = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
      })
    }

    //Function to handle login form submission
    handleSubmit = async (event) => {
        //Prevent default form behavior
        event.preventDefault();

        //Attempt to log in with identifier and password provided
        const success = await authenticationService.login(this.state['identifier'], this.state['password']);

        //Check if login was successful
        if (!success) {
            //TODO: Activate alter on login page
            console.log('Failed to login');
        } else {
            //TODO: redirect to user profile
            console.log('Login!');
            navigate('/');
        }
    }

    //Basic Component Renderer
    //TODO: Migrate to components
    //Potentially use Formik
    render() {
        return (
            <>
                <h1>Login</h1>
                <form
                    method='post'
                    onSubmit={event => {
                        this.handleSubmit(event)
                    }}
                >
                    <label>
                        Username/Email
                        <input type='text' name='identifier' onChange={this.handleUpdate} />
                    </label>
                    <br />
                    <label>
                        Password
                        <input type='password' name='password' onChange={this.handleUpdate} />
                    </label>
                    <br />
                    <input type="submit" value = "Log In" />
                    
                </form>
            </>
        )
    }
}

export default Login;