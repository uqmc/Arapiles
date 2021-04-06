import React from "react"
import { Redirect } from "@reach/router";

import { userService } from "../services/user.js"

import AccountDetails from "./profile/AccountDetails";
import PersonalDetails from "./profile/PersonalDetails";
import EmergencyContact from "./profile/EmergencyContact"
import Tapes from "./profile/Tapes";
import Tests from "./profile/Tests";

//Basic User profile component
class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.id = this.props.id ?? this.props.data.id;

        this.state = {
            isDeleted: false,
            admin: false,
        }
    }

    async componentDidMount() {
        const editPerms = await userService.update(this.id, {});
        if (editPerms) {
            this.setState({admin: true});
        }
    }

    //Basic Profile page
    //Note if you run into a bug where forms won't properly submit, it might be because another form on the page has an error message.
    render() {
        if(this.state.isDeleted) {
            return <Redirect noThrow to="/users" />;
        } else {
            return (<>
                <h2>Account Details</h2>
                <AccountDetails id={this.id} data={this.props.data} admin={this.state.admin} />
    
                <h2>Personal Details</h2>            
                <PersonalDetails id={this.id} data={this.props.data} admin={this.state.admin} />
    
                <h2>Emergency Contact</h2>
                <EmergencyContact id={this.id} data={this.props.data} admin={this.state.admin} />
    
                <h2>Competencies</h2>
                    <Tests id={this.id} data={this.props.data} admin={this.state.admin} />
                    <h3>Tapes</h3>
                    <Tapes id={this.id} tapes={this.props.data.tapes} admin={this.state.admin} />
                
                <h2>Delete User</h2>
                <button
                    className="btn-lovely"
                    type="button"
                    onClick={() => {
                        userService.destroy(this.id);
                        this.setState({
                            isDeleted: true
                        });
                    }}>
                    DELETE USER
                </button>
            </>);
        }
    }
}

export default Profile;