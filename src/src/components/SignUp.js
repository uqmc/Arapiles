import React from "react"

import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Button, LinearProgress } from "@material-ui/core";
import { DatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Select from "../components/Select";

//navigate used to redirect
import { navigate } from "gatsby"

//Authentication services for logging in
import { authenticationService } from "../services/authentication.js"

//
import { userService } from "../services/user.js";

//Basic Sign Up component
class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            registered: false
        }
    }

    validationSchema = Yup.object().shape({
        nameFirst: Yup.string()
            .required("Required"),

        nameLast: Yup.string()
            .required("Required"),

        sex: Yup.string()
            .ensure()
            .required("Required"),

        username: Yup.string()
            .required("Required"),

        email: Yup.string()
            .email("Invalid Email")
            .required("Required"),

        password: Yup.string()
            .required("Required"),

        phoneNumber: Yup.object().shape({
            number: Yup.string()
                .required("Required"),

            type: Yup.string()
                .ensure()
                .required("Required"),
        }),

        dateOfBirth: Yup.date()
            .required("Required"),

        address: Yup.object().shape({
            streetAddress: Yup.string()
                .required("Required"),

            postcode: Yup.number()
                .positive("Postcode must be greater than 0")
                .integer("Postcode must be an integer")
                .required("Required")
        }),

        studentStatus: Yup.string()
            .ensure()
            .required("Required"),

        studentNumber: Yup.number()
            .positive("Student Number must be positive")
            .integer("Student Number must be an integer")
            .required("Required"),

        emergencyContact: Yup.object().shape({
            name: Yup.string()
                .required("Required"),

            phoneNumber: Yup.object().shape({
                number: Yup.string()
                    .required("Required"),

                type: Yup.string()
                    .ensure()
                    .required("Required"),
            }),

            address: Yup.object().shape({
                streetAddress: Yup.string()
                    .required("Required"),

                postcode: Yup.number()
                    .positive("Postcode must be greater than 0")
                    .integer("Postcode must be an integer")
                    .required("Required")
            })
        }),

        agreedLiabilityWaiver: Yup.boolean()
            .required("You must agree to the Liability Waiver"),

        agreedMembershipContract: Yup.boolean()
            .required("You must agree to the Membership Agreement")

    }); 

    //Function to handle login form submission
    handleSubmit = async (data, actions) => {
        //Attempt to register a new user
        //TODO: Add user details when registering
        const response = await authenticationService.register(data);

        //Check register request was successful 
        if (response === true) {
            //TODO: Redirect to check email page or display check email message
            this.setState({
                registered: true
            });
        } else {
            actions.setFieldError('general', response);
        }

        actions.setSubmitting(false);
    }

    //Simple Sign Up form
    render() {
        return (
            !this.state.registered
            ? (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Formik
                    initialValues={{
                        dateOfBirth: new Date()
                    }}
                    validationSchema={this.validationSchema}
                    onSubmit={this.handleSubmit}
                >
                {(formProps) => (
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

                        <label htmlFor="sex">Sex</label>
                        <Select name="sex" options={userService.sexes} />
                        <ErrorMessage name="sex" />
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

                        {/*TODO: Change to PhoneInput*/}
                        <label htmlFor="phoneNumber.number">Phone Number</label>
                        <Field name="phoneNumber.number" />
                        <ErrorMessage name="phoneNumber.number" />

                        <label htmlFor="phoneNumber.type">Type</label>
                        <Select name="phoneNumber.type" options={userService.phoneTypes} />                        
                        <ErrorMessage name="phoneNumber.type" />
                        <br />

                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <Field name="dateOfBirth" component={DatePicker} />
                        <ErrorMessage name="dateOfBirth" />
                        <br />

                        {/* TODO: Look into google places API */}
                        <label htmlFor="address.streetAddress">Address</label>
                        <Field name="address.streetAddress" />
                        <ErrorMessage name="address.streetAddress" />
                        <br />

                        <label htmlFor="address.postcode">Postcode</label>
                        <Field name="address.postcode" />
                        <ErrorMessage name="address.postcode" />
                        <br />

                        <label htmlFor="studentStatus">Student Status</label>
                        <Select name="studentStatus" options={userService.studentStatuses} />
                        <ErrorMessage name="studentStatus" />
                        <br />

                        {/*TODO: number?*/}
                        <label htmlFor="studentNumber">Student Number</label>
                        <Field name="studentNumber" />
                        <ErrorMessage name="studentNumber" />
                        <br />

                        {/*TODO: Section "Emergency Contact"*/}
                        <label htmlFor="emergencyContact.name">Contact Name</label>
                        <Field name="emergencyContact.name" />
                        <ErrorMessage name="emergencyContact.name" />
                        <br />
                        
                        {/*TODO: Change to PhoneInput*/}
                        <label htmlFor="emergencyContact.phoneNumber.number">Phone Number</label>
                        <Field name="emergencyContact.phoneNumber.number" />
                        <ErrorMessage name="emergencyContact.phoneNumber.number" />

                        <label htmlFor="emergencyContact.phoneNumber.type">Type</label>
                        <Select name="emergencyContact.phoneNumber.type" options={userService.phoneTypes} /> 
                        <ErrorMessage name="emergencyContact.phoneNumber.type" />
                        <br />

                        {/* TODO: Look into google places API */}
                        <label htmlFor="emergencyContact.address.streetAddress">Address</label>
                        <Field name="emergencyContact.address.streetAddress" />
                        <ErrorMessage name="emergencyContact.address.streetAddress" />
                        <br />

                        <label htmlFor="emergencyContact.address.postcode">Postcode</label>
                        <Field name="emergencyContact.address.postcode" />
                        <ErrorMessage name="emergencyContact.address.postcode" />
                        <br />
                        {/*TODO: Section "Membership"*/}

                        {/*TODO: Get Waiver and Membership agreement from CMS*/}
                        <label htmlFor="agreedLiabilityWaiver">Liability Waiver</label>
                        <div>
                            Waiver Lorem ipsum
                        </div>
                        <Field name="agreedLiabilityWaiver" type="checkbox" />
                        <ErrorMessage name="agreedLiabilityWaiver" />
                        <br />

                        <label htmlFor="agreedMembershipContract">Membership agreement</label>
                        <div>
                            Membership Lorem ipsum
                        </div>
                        <Field name="agreedMembershipContract" type="checkbox" />
                        <ErrorMessage name="agreedMembershipContract" />
                        <br />

                        {   
                            formProps.isSubmitting
                            ? <LinearProgress />
                            : <div style={{color: "red"}}>{formProps.errors.general}</div>
                        }

                        <Button
                            className="btn draw-border"
                            disabled={formProps.isSubmitting}
                            onClick={formProps.handleSubmit}
                        >
                            Sign Up!
                        </Button>
                    </Form>
                )}
                </Formik>
            </MuiPickersUtilsProvider>
            )
            : (
            <div>
                Please check your email to confirm your account.
            </div>
            )
        ) 
    }
}

export default SignUp;