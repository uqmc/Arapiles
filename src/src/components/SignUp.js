import React from "react"

import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Button, LinearProgress } from '@material-ui/core';
import { DatePicker } from 'formik-material-ui-pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

//navigate used to redirect
import { navigate } from "gatsby"

//Authentication services for logging in
import { authenticationService } from "../services/authentication.js"

//Basic Sign Up component
class SignUp extends React.Component {

    sexes = [
        {label: "Male", value: "Male"},
        {label: "Female", value: "Female"},
        {label: "Not Stated", value: "Not_Stated"}
    ]; 

    phoneTypes = [
        {label: "Mobile", value: "Mobile"},
        {label: "Home", value: "Home"},
        {label: "Work", value: "Work"}
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

    mapOptions = (options) => {
        return options.map(option => {
            return <option value={option.value}>{option.label}</option>
        })
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
    }); 

    //Function to handle login form submission
    handleSubmit = async (data) => {
        //Format Form Data for backend
        const userData = {
            //User Login Details
            username: data['username'],
            email: data['email'],
            password: data['password'],

            //User Personal Information
            nameFirst: data['nameFirst'],
            nameLast: data['nameLast'],
            sex: data['sex'],
            dateOfBirth: data['dateOfBirth'],
            phoneNumber: {
                number: data['phoneNumber'],
                type: data['phoneType']
            },
            address: {
                streetAddress: data['address'],
                postcode: data['postcode']
            },
            studentStatus: data['studentStatus'],
            studentNumber: data['studentNumber'],

            //Emergency Contact Information
            emergencyContact: {
                name: data['contactName'],
                phoneNumber: {
                    number: data['contactPhoneNumber'],
                    type: data['contactPhoneType']
                },
                address: {
                    streetAddress: data['contactAddress'],
                    postcode: data['contactPostcode']
                }
            },

            //Membership Data
            agreedLiabilityWaiver: data['agreedLiabilityWaiver'],
            agreedMembershipContract: data['agreedMembershipContract']
        };

        //Attempt to register a new user
        //TODO: Add user details when registering
        const response = await authenticationService.register(userData);

        //Check register request was successful 
        if (response === true) {
            //TODO: Redirect to check email page or display check email message
        } else {
            this.setError(response);
        }
    }

    //Simple Sign Up form
    render() {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Formik
                initialValues={{
                    nameFirst: "",
                    dateOfBirth: new Date()
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

                    <label htmlFor="sex">Sex</label>
                    <Field name="sex" as="select">
                        <option defaultValue>Please Select...</option>
                        { this.mapOptions(this.sexes) }
                    </Field>
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
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <Field name="phoneNumber" />
                    <ErrorMessage name="phoneNumber" />

                    <label htmlFor="phoneType">Type</label>
                    <Field name="phoneType" as="select">                        
                        <option defaultValue>Please Select...</option>
                        { this.mapOptions(this.phoneTypes) }
                    </Field>
                    <ErrorMessage name="phoneType" />
                    <br />

                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <Field name="dateOfBirth" component={DatePicker} />
                    <ErrorMessage name="dateOfBirth" />
                    <br />

                    {/* TODO: Look into google places API */}
                    <label htmlFor="address">Address</label>
                    <Field name="address" />
                    <ErrorMessage name="address" />
                    <br />

                    <label htmlFor="postcode">Postcode</label>
                    <Field name="postcode" />
                    <ErrorMessage name="postcode" />
                    <br />

                    <label htmlFor="studentStatus">Student Status</label>
                    <Field name="studentStatus" as="select">
                        <option defaultValue>Please Select...</option>
                        { this.mapOptions(this.studentStatuses) }
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
                    
                    {/*TODO: Change to PhoneInput*/}
                    <label htmlFor="contactPhoneNumber">Phone Number</label>
                    <Field name="contactPhoneNumber" />
                    <ErrorMessage name="contactPhoneNumber" />

                    <label htmlFor="contactPhoneType">Type</label>
                    <Field name="contactPhoneType" as="select">                        
                        <option defaultValue>Please Select...</option>
                        { this.mapOptions(this.phoneTypes) }
                    </Field>
                    <ErrorMessage name="contactPhoneType" />
                    <br />

                    {/* TODO: Look into google places API */}
                    <label htmlFor="contactAddress">Address</label>
                    <Field name="contactAddress" />
                    <ErrorMessage name="contactAddress" />
                    <br />

                    {/*TODO: Section "Membership"*/}

                    {/*TODO: Get Waiver and Membership agreement from CMS*/}
                    <label htmlFor="acceptWaiver">Liability Waiver</label>
                    <div>
                        Waiver Lorem ipsum
                    </div>
                    <Field name="acceptWaiver" type="checkbox" />
                    <ErrorMessage name="acceptWaiver" />
                    <br />

                    <label htmlFor="acceptMembership">Membership agreement</label>
                    <div>
                        Membership Lorem ipsum
                    </div>
                    <Field name="acceptMembership" type="checkbox" />
                    <ErrorMessage name="acceptMembership" />
                    <br />

                    <button type="submit">Sign Up!</button>
                </Form>
            </Formik>
            </MuiPickersUtilsProvider>
        )
    }
}

export default SignUp;