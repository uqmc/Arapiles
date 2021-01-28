import React from "react"

import { Formik, Field, Form, ErrorMessage } from "formik"

//navigate used to redirect
import { navigate } from "gatsby"

//Authentication services for logging in
import { authenticationService } from "../services/authentication.js"

//Basic Sign Up component
class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            genders: [
                {label: "Male", value: "Male"},
                {label: "Female", value: "Female"},
                {label: "Not Stated", value: "Not_Stated"}
            ],

            studentStatuses: [
                {label: "Not UQ", value: "Not_UQ"},
                {label: "Domestic", value: "Domestic"},
                {label: "International", value: "International"},
                {label: "Exchange", value: "Exchange"},
                {label: "Staff", value: "Staff"}
            ],

            //Register information
            username: "",
            email: "",
            password: "",

            //Personal information
            nameFirst: "",
            nameLast: "",
            gender: "",
            phoneNumber: "",
            phoneType: "",
            dateOfBirth: "",
            address: "",
            postcode: "",
            studentStauts: "",
            studentNumber: "",

            //Emergency Information
            contactName: "",
            contactPhoneNumber: "",
            contactPhoneType: "",
            contactAddress: "",

            //Membership Information
            waiver: false,
            membershipAgreement: false,

            error: ""
        }
    }

    //Function used to set form error
    setError = (error) => {
        this.setState({error: error});
    }

    handleValidate = (values) => {
        const errors = {}

        if (!values.nameFirst) {
            errors.nameFirst = "Required"
        }

        if (!values.nameLast) {
            errors.nameLast = "Required"
        }

        return errors
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
            <Formik
                initialValues={{
                    nameFirst: ""
                }}
                validate={this.handleValidate}
                onSubmit={this.handleSubmit}
            >
                <Form>

                    <label htmlFor="nameFirst">First Name</label>
                    <Field name="nameFirst" />
                    <ErrorMessage name="nameFirst" />
                    <br />

                    <label htmlFor="nameLast">Last Name</label>
                    <Field name="nameLast" />
                    <ErrorMessage name="nameLast" />
                    <br />

                    <label htmlFor="gender">Gender</label>
                    <Field name="gender" as="select">
                        <option defaultValue>Please Select...</option>
                        {
                            this.state.genders.map(gender => {
                                return <option value={gender.value}>{gender.label}</option>
                            })
                        }
                    </Field>
                    <ErrorMessage name="gender" />
                    <br />

                    <label htmlFor="username">Username</label>
                    <Field name="username" />
                    <ErrorMessage name="username" />
                    <br />

                    <label htmlFor="email">Email</label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" />
                    <br />

                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password" />
                    <ErrorMessage name="password" />
                    <br />

                    {/*TODO: Phone Input, Date picker and Address field*/}

                    <label htmlFor="postcode">Postcode</label>
                    <Field name="postcode" />
                    <ErrorMessage name="postcode" />
                    <br />

                    <label htmlFor="studentStatus">Student Status</label>
                    <Field name="studentStatus" as="select">
                        <option defaultValue>Please Select...</option>
                        {
                            this.state.studentStatuses.map(studentStatus => {
                                return <option value={studentStatus.value}>{studentStatus.label}</option>
                            })
                        }
                    </Field>
                    <ErrorMessage name="studentStatus" />
                    <br />

                    {/*TODO: number?*/}
                    <label htmlFor="studentNumber">Student Number</label>
                    <Field name="studentNumber" />
                    <br />
                </Form>
            </Formik>
        )
    }
}

export default SignUp;