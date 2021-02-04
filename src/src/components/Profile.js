import React from "react"

import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Button, LinearProgress } from "@material-ui/core";
import { DatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Select from "../components/Select";

import { userService } from "../services/user.js"

//Basic User profile component
class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            success: false,
            edit: false
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

    //Function to handle forgot password form submission
    handleSubmit = async (data, actions) => {
        //Attempt to send reset password email
        const response = this.props.id ? await userService.update(this.props.id, data) : await userService.updateMe(data);

        //Check if request was successful
        if (response === true) {
            this.setState({
                success: true,
                edit: false
            });
        } else {
            this.setState({success: false});
            actions.setFieldError('general', response);
        }

        actions.setSubmitting(false);
    }

    //Simple Form with email and submit button
    render() {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Formik
                    initialValues = {this.props.data}
                    validationSchema={this.validationSchema}
                    onSubmit={this.handleSubmit}
                >
                {(formProps) => (
                    <Form>
                        <Button
                            className="btn draw-border"
                            disabled={formProps.isSubmitting}
                            onClick={() => {
                                this.setState({edit: !this.state.edit});
                                formProps.errors.general = "";
                            }}
                        >
                            {this.state.edit ? "Cancel" : "Edit"}
                        </Button>
                        <br />

                        <label htmlFor="nameFirst">First Name</label>
                        <Field name="nameFirst" disabled={!this.state.edit} />
                        <ErrorMessage name="nameFirst" />
                        <br />

                        <label htmlFor="nameLast">Last Name</label>
                        <Field name="nameLast" disabled={!this.state.edit} />
                        <ErrorMessage name="nameLast" />
                        <br />

                        <label htmlFor="sex">Sex</label>
                        <Select name="sex" options={userService.sexes} disabled={!this.state.edit} />
                        <ErrorMessage name="sex" />
                        <br />

                        {/*TODO: Change to PhoneInput*/}
                        <label htmlFor="phoneNumber.number">Phone Number</label>
                        <Field name="phoneNumber.number" disabled={!this.state.edit} />
                        <ErrorMessage name="phoneNumber.number" />

                        <label htmlFor="phoneNumber.type">Type</label>
                        <Select name="phoneNumber.type" options={userService.phoneTypes} disabled={!this.state.edit} />                        
                        <ErrorMessage name="phoneNumber.type" />
                        <br />

                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <Field name="dateOfBirth" component={DatePicker} disabled={!this.state.edit} />
                        <ErrorMessage name="dateOfBirth" />
                        <br />

                        {/* TODO: Look into google places API */}
                        <label htmlFor="address.streetAddress">Address</label>
                        <Field name="address.streetAddress" disabled={!this.state.edit} />
                        <ErrorMessage name="address.streetAddress" />
                        <br />

                        <label htmlFor="address.postcode">Postcode</label>
                        <Field name="address.postcode" disabled={!this.state.edit} />
                        <ErrorMessage name="address.postcode" />
                        <br />

                        <label htmlFor="studentStatus">Student Status</label>
                        <Select name="studentStatus" options={userService.studentStatuses} disabled={!this.state.edit} />
                        <ErrorMessage name="studentStatus" />
                        <br />

                        {/*TODO: number?*/}
                        <label htmlFor="studentNumber">Student Number</label>
                        <Field name="studentNumber" disabled={!this.state.edit} />
                        <ErrorMessage name="studentNumber" />
                        <br />

                        {/*TODO: Section "Emergency Contact"*/}
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
                        
                        <label htmlFor="medicalDetails">Medical Details</label>
                        <ErrorMessage name="medicalDetails" />
                        <br />
                        <Field name="medicalDetails" as="textarea" />
                        <br />

                        {
                            this.state.success
                            ? <span style={{color: "green"}}>Your details have been updated.</span>
                            : !formProps.isSubmitting && <span style={{color: "red"}}>{formProps.errors.general}</span>
                        }
                        <br/>
                        { this.state.edit &&
                            <Button
                                className="btn draw-border"
                                disabled={formProps.isSubmitting}
                                onClick={formProps.handleSubmit}
                            >
                                Update   
                            </Button>
                        }
                    </Form>
                )}
                </Formik>
            </MuiPickersUtilsProvider>
        )
    }
}

export default Profile;