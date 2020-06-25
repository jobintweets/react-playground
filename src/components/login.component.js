import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./signup.component";

export default class Login extends Component {
    render() {
        return (
            <Router>

          
            <div>
            <br/>
            <br/><br/><br/>
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                <Link className="nav-link" to={"/sign-up"}>  Forgot password?</Link>
                  
                </p>
            </form>
            </div>
            <Switch>
            <Route path="/sign-up" component={SignUp} />
          </Switch>
            </Router>);
    }
}