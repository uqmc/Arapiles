import React from "react"

import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Button, LinearProgress } from "@material-ui/core";
import { DatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Select from "../inputs/Select";
import Phone, { phoneValidation } from "../inputs/Phone";
import Address, { addressValidation } from "../inputs/Address";

import { userService } from "../../services/user.js"

//Basic Person Details component
class PersonalDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            edit: false,
            success: false
        }
    }

    validationSchema = Yup.object().shape({
        nameFirst: Yup.string()
            .required("Required"),

        nameLast: Yup.string()
            .required("Required"),
    
        dateOfBirth: Yup.date()
            .required("Required"),
        
        sex: Yup.string()
            .ensure()
            .required("Required"),

        phoneNumber: phoneValidation,

        address: addressValidation,

        studentStatus: Yup.string()
            .ensure()
            .required("Required"),

        studentNumber: Yup.number()
            .positive("Student Number must be positive")
            .integer("Student Number must be an integer")
            .required("Required"),

        medicalDetails: Yup.string()
    });

    handleSubmit = async (data, actions) => {
        //Attempt to update user data
        const response = this.props.admin ? await userService.update(this.props.id, data) : await userService.updateMe(data);

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

    render() {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Formik
                    initialValues = {{
                        nameFirst: this.props.data.nameFirst,
                        nameLast: this.props.data.nameLast,
                        dateOfBirth: this.props.data.dateOfBirth,
                        sex: this.props.data.sex,
                        phoneNumber: {
                            number: this.props.data.phoneNumber.number,
                            type: this.props.data.phoneNumber.type
                        },
                        address: {
                            streetAddress: this.props.data.address.streetAddress,
                            postcode: this.props.data.address.postcode
                        },
                        studentStatus: this.props.data.studentStatus,
                        studentNumber: this.props.data.studentNumber,
                        medicalDetails: this.props.data.medicalDetails
                    }}
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
                                delete formProps.errors.general;
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
 
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <Field name="dateOfBirth" component={DatePicker} disabled={!this.state.edit} />
                        <ErrorMessage name="dateOfBirth" />
                        <br />
 
                        <label htmlFor="sex">Sex</label>
                        <Select name="sex" options={userService.sexes} disabled={!this.state.edit} />
                        <ErrorMessage name="sex" />
                        <br />
 
                        <Phone name="phoneNumber" disabled={!this.state.edit} />
 
                        <Address name="address" disabled={!this.state.edit} />
 
                        <label htmlFor="studentStatus">Student Status</label>
                        <Select name="studentStatus" options={userService.studentStatuses} disabled={!this.state.edit} />
                        <ErrorMessage name="studentStatus" />
                        <br />
 
                        {/*TODO: number?*/}
                        <label htmlFor="studentNumber">Student Number</label>
                        <Field name="studentNumber" disabled={!this.state.edit} />
                        <ErrorMessage name="studentNumber" />
                        <br />
 
                        <label htmlFor="medicalDetails">Medical Details</label>
                        <ErrorMessage name="medicalDetails" />
                        <br />
                        <Field name="medicalDetails" as="textarea" disabled={!this.state.edit} />
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

export default PersonalDetails;