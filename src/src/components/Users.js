import React from "react"

import { userService } from "../services/user.js"

//Basic Users componnent
class Users extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            params: {
                pageSize: 10,
                pageNumber: 0,
                sort: {
                    nameLast: "asc",
                    nameFirst: "asc"
                },
                search: ""
            },
            users: [],
            totalCount: 0,
            loading: true,
            admin: true
        }
    }
    
    //Reference: https://strapi.io/documentation/developer-docs/latest/content-api/parameters.html
    constructParams() {
        const { params } = this.state;

        return {
            _limit: params.pageSize,
            _start: params.pageNumber * params.pageSize,
            _sort: Object.entries(params.sort).map(p => encodeURIComponent(p[0]) + ':' + encodeURIComponent(p[1])).join(','),
            _where: {
                _or: [
                    { nameLast_contains: params.search },
                    { nameFirst_contains: params.search }
                ]
            }
        }
    }

    //TODO: Set errors?
    async getUsersData() {
        const queryParams = this.constructParams();

        const count = await userService.count(queryParams);
        if (count) {
            this.setState({ totalCount: count.data });
        } else {
            this.setState({ admin: false });
        }

        const users = await userService.find(queryParams);
        if (users) {
            this.setState({ users: users.data });
        } else {
            this.setState({ admin: false });
        }
    }

    //TODO: better admin checking?
    async componentDidMount() {
        getUsersData();
        this.setState({ loading: false }});
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
                    <p>You do not have permission to access this page or an error has occured.</p>
                )
            }
        }
    }
}

export default Users;