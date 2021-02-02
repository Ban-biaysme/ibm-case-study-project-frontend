import React from 'react';
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cases from "../casestudy/pages/Cases";
import Avatar from "../casestudy/components/Avatar";

export class View extends React.Component{
    constructor(props){
        super(props);
        this.state={ data: ''};

        this.componentDidMount=this.componentDidMount.bind(this);
    }

    //call this on page load
    componentDidMount() {
        //communicate with backend
        Axios.get(`${this.props.serverURI}/view-all`).then((res) => {
            this.setState({data:res.data});
            console.log(res.data);
        });
    }

    render(){
        return(
            <div className="container">
                <h1> CASE STUDY RECORDS </h1>
                <div>
                    <Cases/>
                </div>

                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr> <th> Project ID</th>
                                <th> Project Name</th>
                                <th> Project Type</th>
                                <th> Industry</th>
                                <th> Client Name </th>
                                <th> Start Date </th>
                                <th> End Date </th>
                                <th> Problem </th>
                                <th> Approach </th>
                                <th>  Idea </th>
                                <th>  Impact </th>
                            </tr>
                        </thead>
                        <tbody>

                        {Array.from(this.state.data).map((val)=> {
                            return(
                                <tr> <td> {val.project_id}</td>

                                    <td> {val.project_name}</td>
                                    <td> {val.project_industry}</td>

                                    <td> {val.client_name}</td>
                                    <td> {val.project_start_date}</td>
                                    <td> {val.project_end_date}</td>
                                    <td> {val.problem_space}</td>
                                    <td> {val.approach}</td>
                                    <td> {val.idea}</td>
                                    <td> {val.impact}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
