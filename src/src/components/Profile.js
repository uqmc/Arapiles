import React from "react"

import { userService } from "../services/user.js"

import AccountDetails from "./profile/AccountDetails";
import PersonalDetails from "./profile/PersonalDetails";
import EmergencyContact from "./profile/EmergencyContact"
import Tapes from "./profile/Tapes";

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

    //Simple Form with email and submit button
    render() {
        return (<>
            <h2>Account Details</h2>

            <AccountDetails id={this.id} data={this.props.data} admin={this.state.admin} />

            <h2>Personal Details</h2>
            
            <PersonalDetails id={this.id} data={this.props.data} admin={this.state.admin} />

            <h2>Emergency Contact</h2>
            <EmergencyContact id={this.id} data={this.props.data} admin={this.state.admin} /> 

            <h2>Tapes</h2>
            <Tapes tapes={this.props.data.tapes} id={this.id} admin={this.state.admin} />
        </>)
    }
}

export default Profile;