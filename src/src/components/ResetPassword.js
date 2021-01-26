import React from "react"

//Authentication services, used to send reset password request
import { authenticationService } from "../services/authentication.js"

//Basic Reset password component
class ResetPassword extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            password: "",
            passwordConfirmation: "",
            error: ""
        }
    }

    //Function to set form error message
    setError = (error) => {
        this.setState({error: error});
    }

    //Function to update state when either field is changed
    handleUpdate = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
      })
    }

    //Function to handle reset password form submission
    handleSubmit = async (event) => {
        //Prevent default form behavior
        event.preventDefault();

        //Attempt to reset password 
        const success = await authenticationService.resetPassword(this.props.privateCode, this.state["password"], this.state["passwordConfirmation"]);

        //Check if login was successful
        if (success === true) {
            //navigate("/");
        } else {
            this.setError(success);
        }
    }

    //Simple Form with passwords and submit button
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