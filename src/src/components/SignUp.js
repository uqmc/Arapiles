import React from "react"

import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"

//navigate used to redirect
import { navigate } from "gatsby"

//Authentication services for logging in
import { authenticationService } from "../services/authentication.js"

//Basic Sign Up component
class SignUp extends React.Component {

    genders = [
        {label: "Male", value: "Male"},
        {label: "Female", value: "Female"},
        {label: "Not Stated", value: "Not_Stated"}
    ]; 

    studentStatuses = [
        {label: "Not UQ", value: "Not_UQ"},
        {label: "Domestic", value: "Domestic"},
        {label: "International", value: "International"},
        {label: "Exchange", value: "Exchange"},
        {label: "Staff", value: "Staff"}
    ];

    constructor(props) {
        super(props);


        this.state = {
            error: ""
        }
    }

    //Function used to set form error
    setError = (error) => {
        this.setState({error: error});
    }

    validationSchema = Yup.object().shape({
        nameFirst: Yup.string()
            .required("Required"),

        nameLast: Yup.string()
            .required("Required"),

        //TODO: Not working for some reason?
        gender: Yup.string()
            .ensure()
            .required("Required"),

        username: Yup.string()
            .required("Required"),

        email: Yup.string()
            .email("Invalid Email")
            .required("Required"),

        password: Yup.string()
            .required("Required"),
    }); 

    //Function to handle login form submission
    handleSubmit = async (data) => {
        //Attempt to register a new user
        //TODO: Validation 

        //TODO: Add user details when registering
        const response = await authenticationService.register(data["username"], data["email"], data["password"]);

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
                validationSchema={this.validationSchema}
                onSubmit={this.handleSubmit}
            >
                <Form>
                    {/*TODO: Section "Your Details" */}
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
                            this.genders.map(gender => {
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
                            this.studentStatuses.map(studentStatus => {
                                return <option value={studentStatus.value}>{studentStatus.label}</option>
                            })
                        }
                    </Field>
                    <ErrorMessage name="studentStatus" />
                    <br />

                    {/*TODO: number?*/}
                    <label htmlFor="studentNumber">Student Number</label>
                    <Field name="studentNumber" />
                    <ErrorMessage name="studentNumber" />
                    <br />

                    {/*TODO: Section "Emergency Contact"*/}
                    <label htmlFor="contactName">Contact Name</label>
                    <Field name="contactName" />
                    <ErrorMessage name="contactName" />
                    <br />

                    {/*TODO: Phone Input & Address contact*/}

                    {/*TODO: Section "Membership"*/}
                    {/*TODO: Waiver and Membership agreement*/}

                    <button type="submit">Sign Up!</button>
                </Form>
            </Formik>
        )
    }
}

export default SignUp;