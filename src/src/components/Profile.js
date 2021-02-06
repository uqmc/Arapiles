import React from "react"

import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Button, LinearProgress } from "@material-ui/core";
import { DatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Select from "../components/inputs/Select";

import { userService } from "../services/user.js"

import AccountDetails from "../components/profile/AccountDetails";
import PersonalDetails from "../components/profile/PersonalDetails";
import Tapes from "../components/profile/Tapes";

//Basic User profile component
class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.id = this.props.id ?? this.props.data.id;

        this.state = {
            admin: false,
            success: false,
            edit: false,
            editPassword: false,
        }
    }

    async componentDidMount() {
        const editPerms = await userService.update(this.id, {});
        if (editPerms) {
            this.setState({admin: true});
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

        medicalDetails: Yup.string(),
    });

    //Simple Form with email and submit button
    render() {
        return (<>
            <h2>Account Details</h2>

            <AccountDetails id={this.id} data={this.props.data} admin={this.state.admin} />

            <h2>Personal Details</h2>
            
            <PersonalDetails id={this.id} data={this.props.data} admin={this.state.admin} />

            <h2>Emergency Contact</h2>
            <Formik
                initialValues = {this.props.data}
                validationSchema={this.validationSchema}
                onSubmit={this.handleSubmit}
            >
            {(formProps) => (
                <Form>  
                    <label htmlFor="emergencyContact.name">Contact Name</label>
                    <Field name="emergencyContact.name" disabled={!this.state.edit} />
                    <ErrorMessage name="emergencyContact.name" />
                    <br />
                    
                    {/*TODO: Change to PhoneInput*/}
                    <label htmlFor="emergencyContact.phoneNumber.number">Phone Number</label>
                    <Field name="emergencyContact.phoneNumber.number" disabled={!this.state.edit} />
                    <ErrorMessage name="emergencyContact.phoneNumber.number" />

                    <label htmlFor="emergencyContact.phoneNumber.type">Type</label>
                    <Select name="emergencyContact.phoneNumber.type" options={userService.phoneTypes} disabled={!this.state.edit} /> 
                    <ErrorMessage name="emergencyContact.phoneNumber.type" />
                    <br />

                    {/* TODO: Look into google places API */}
                    <label htmlFor="emergencyContact.address.streetAddress">Address</label>
                    <Field name="emergencyContact.address.streetAddress" disabled={!this.state.edit} />
                    <ErrorMessage name="emergencyContact.address.streetAddress" />
                    <br />

                    <label htmlFor="emergencyContact.address.postcode">Postcode</label>
                    <Field name="emergencyContact.address.postcode" disabled={!this.state.edit} />
                    <ErrorMessage name="emergencyContact.address.postcode" />
                    <br />
                </Form>
            )}
            </Formik>

            <h2>Tapes</h2>
            <Tapes tapes={this.props.data.tapes} id={this.id} admin={this.state.admin} />
        </>)
    }
}

export default Profile;