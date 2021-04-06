import React from "react"

import { Link } from "gatsby";

import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button, LinearProgress } from "@material-ui/core";

import { userService } from "../services/user.js"
import Spinner from "./Spinner.js";

//Basic Users componnent
class Users extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            params: {
                pageSize: 10,
                pageNumber: 1,
                sort: {
                    nameLast: "asc",
                    nameFirst: "asc"
                },
                search: ""
            },
            users: [],
            totalCount: 0,
            maxPage: 0,
            loading: true,
            admin: true
        }
    }
    
    //Reference: https://strapi.io/documentation/developer-docs/latest/content-api/parameters.html
    constructParams() {
        const { params } = this.state;

        return {
            _limit: params.pageSize,
            _start: (params.pageNumber - 1) * params.pageSize,
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

        this.setState({ maxPage: Math.ceil(this.state.totalCount / this.state.params.pageSize)})

        const users = await userService.find(queryParams);
        if (users) {
            this.setState({ users: users.data });
        } else {
            this.setState({ admin: false });
        }
    }

    //TODO: better admin checking?
    async componentDidMount() {
        this.getUsersData();
        this.setState({ loading: false });
    }

    changePage(amt) {
        this.setState({ loading: true });

        const { params } = this.state;

        let newPage = params.pageNumber + amt;
        if (newPage < 1) {
            newPage = 1;
        } else if (newPage > this.state.maxPage) {
            newPage = this.state.maxPage;
        }

        params.pageNumber = newPage;
        this.setState({ params: params });

        this.getUsersData()

        this.setState({ loading: false });
    }

    handleSearch = async (event) => {
        this.setState({ loading: true });

        const { params } = this.state;

        params.search = event.target.value
        params.pageNumber = 1;

        this.setState({ params: params });

        this.getUsersData()

        this.setState({ loading: false });
    }

    //Basic Component Renderer
    render() {
        if (this.state.loading) {
            return (
                <Spinner />
            )
        } else {
            if (this.state.admin) {
                return (
                    <>
                        <label htmlFor="search">Search</label>
                        <input
                            name="search"
                            value={this.state.params.search}
                            onChange={this.handleSearch}
                            disabled={this.state.loading}
                        />
                        <Button
                            className="btn-lovely"
                            disabled={this.state.loading || this.state.params.pageNumber <= 1}
                            onClick={() => {this.changePage(-1)}}
                        >
                            {"<"}
                        </Button>
                        <span>{this.state.params.pageNumber}/{this.state.maxPage}</span>
                        <Button
                            className="btn-lovely"
                            disabled={this.state.loading || this.state.params.pageNumber >= this.state.maxPage}
                            onClick={() => {this.changePage(1)}}
                        >
                            {">"}
                        </Button>
                        <table>
                            <thead>
                                <tr>
                                    <td></td>
                                    <td>First Name</td>
                                    <td>Family Name</td>
                                    <td>Email</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map((user) => {
                                        return (
                                            <tr>
                                                <td><Link to={`/profile/${user.id}`}>Edit</Link></td>
                                                <td>{user.nameFirst}</td>
                                                <td>{user.nameLast}</td>
                                                <td>{user.email}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
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