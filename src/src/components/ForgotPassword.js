import React from "react"

//Authentication services, used to send forgot password request 
import { authenticationService } from "../services/authentication.js"

//Basic Forgot password component
class ForgotPassword extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            error: "",
            success: false
        }
    }

    //Function to set the error message in the form
    setError = (error) => {
        this.setState({
            error: error,
            success: false
        });
    }

    //Function to update state when either field is changed
    handleUpdate = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
      })
    }

    //Function to handle forgot password form submission
    handleSubmit = async (event) => {
        //Prevent default form behavior
        event.preventDefault();

        //Attempt to send reset password email
        const response = await authenticationService.forgotPassword(this.state["email"]);

        //Check if request was successful
        if (response === true) {
            this.setState({success: true});
        } else {
            this.setError(response);
        }
    }

    //Simple Form with email and submit button
    render() {
        return (
            <>
                <h1>Forgot Password</h1>
                {this.state.success && <span style={{color: "green"}}>Please check your email for link to reset your password.</span>}
                <span style={{color: "red"}}>{this.state["error"]}</span>
                <form
                    method="post"
                    onSubmit={event => {
                        this.handleSubmit(event)
                    }}
                >
                    <input type="text" name="email" placeholder="Email" onChange={this.handleUpdate} />
                    <br />
                    <input className="btn draw-border" type="submit" value = "Reset Password" />
                </form>
            </>
        )
    }
}

export default ForgotPassword;