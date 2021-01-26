import React from "react"

//Authentication services for logging in
import { authenticationService } from "../services/authentication.js"

//Basic Forgot password componnent
//For now just used for testing purposes.
class ResetPassword extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            password: "",
            passwordConfirmation: "",
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
        const success = await authenticationService.resetPassword(this.props.privateCode, this.state["password"], this.state["passwordConfirmation"]);

        //Check if login was successful
        if (success === true) {
            //navigate("/");
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
                <h1>Reset Password</h1>
                <span style={{color: "red"}}>{this.state["error"]}</span>
                <form
                    method="post"
                    onSubmit={event => {
                        this.handleSubmit(event)
                    }}
                >
                    <input type="text" name="password" placeholder="Password" onChange={this.handleUpdate} />
                    <br />
                    <input type="text" name="passwordConfirmation" placeholder="Confirm Password" onChange={this.handleUpdate} />
                    <br />
                    <input className="btn draw-border" type="submit" value = "Reset Password" />
                </form>
            </>
        )
    }
}

export default ResetPassword;