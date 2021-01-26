import React from "react"

//navigate used to redirect
import { navigate } from "gatsby"

//Authentication services for logging in
import { authenticationService } from "../services/authentication.js"

//Basic Sign Up component
class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: "",
            error: ""
        }
    }

    //Function used to set form error
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

        //Attempt to register a new user
        const response = await authenticationService.register(this.state["username"], this.state["email"], this.state["password"]);

        //Check register request was successful 
        if (response === true) {
            //TODO: Redirect to check email page or display check email message.
        } else {
            this.setError(response);
        }
    }

    //Simple Sign Up form
    render() {
        return (
            <>
                <h1>Sign Up</h1>
                <span style={{color: "red"}}>{this.state["error"]}</span>
                <form
                    method="post"
                    onSubmit={event => {
                        this.handleSubmit(event)
                    }}
                >
                    <input type="text" name="username" placeholder="Username" onChange={this.handleUpdate} />
                    <br />
                    <input type="text" name="email" placeholder="Email" onChange={this.handleUpdate} />
                    <br />
                    <input type="password" name="password" placeholder="Password" onChange={this.handleUpdate} />
                    <br />
                    <input className="btn draw-border" type="submit" value = "Register" />
                </form>
            </>
        )
    }
}

export default SignUp;