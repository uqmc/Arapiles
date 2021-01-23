import React from "react"

//navigate used to redirect
import { Link, navigate } from "gatsby"

//Authentication services for logging in
import { authenticationService } from "../services/authentication.js"

//Basic Login componnent
//For now just used for testing purposes.
//Based off of: https://www.gatsbyjs.com/tutorial/authentication-tutorial/
class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            identifier: "",
            password: "",
            error: ""
        }
    }

    setError = (error) => {
        this.setState({error: error});
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
        const success = await authenticationService.login(this.state["identifier"], this.state["password"]);

        //Check if login was successful
        if (success === true) {
            //TODO: redirect to user profile
            navigate("/");
        } else {
            this.setError(success);
        }
    }

    //Basic Component Renderer
    //TODO: Migrate to components
    //Potentially use Formik
    render() {
        return (
            <>
                <h1>Login</h1>
                <span style={{color: "red"}}>{this.state["error"]}</span>
                <form
                    method="post"
                    onSubmit={event => {
                        this.handleSubmit(event)
                    }}
                >
                    <input type="text" name="identifier" placeholder="Username/Email" onChange={this.handleUpdate} />
                    <br />
                    <input type="password" name="password" placeholder="Password" onChange={this.handleUpdate} />
                    <br />
                    <input className="btn draw-border" type="submit" value = "Login" />
                    <Link to="/signup"><button className="btn draw-border">Sign Up</button></Link>               
                </form>
            </>
        )
    }
}

export default Login;