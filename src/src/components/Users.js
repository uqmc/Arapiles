import React from "react"

//navigate used to redirect
import { navigate } from "gatsby"

import { userService } from "../services/user.js"

//Basic Users componnent
class Users extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            loading: true,
            admin: false
        }
    }

    async componentDidMount() {
        const users = await userService.find({
            _limit: 0
        });
        console.log(users);
    }

    //Basic Component Renderer
    render() {
        if (this.state.loading) {
            return (
                <p>Loading...</p>
            )
        } else {
            if (this.state.admin) {
                return (
                    <>

                    </>
                )
            } else {
                return (
                    <p>You do not have permission to access this page</p>
                )
            }
        }
    }
}

export default Users;