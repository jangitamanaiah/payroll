import { useRef, useState } from "react";
import classes from "./Login.module.css"
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
export default function Login() {
    let userNameCtrl = useRef(' ');
    let passwordCtrl = useRef(' ');

    let [error, setError] = useState({})
    let history = useHistory();
    function handleSubmit(event) {
        event.preventDefault();

        let username = userNameCtrl.current.value;
        let password = passwordCtrl.current.value;

        let errors = validate();
        let errorProps = Object.keys(errors);

        if (!errorProps.length) {
            if (username == "admin" && password == "admin") {
                history.push('/dashboard')
            } else {
                history.push('/login')
            }
        }
    }
    function validate() {
        let errors = {};

        let username = userNameCtrl.current.value;
        let password = passwordCtrl.current.value;

        if (!username || username.trim().length === 0) {
            errors.username = "User name is rquired";
        }
        else if (username.trim().length < 5) {
            errors.username = "User name is rquired above 5 characters";
        }
        if (!password || password.trim().length === 0) {
            errors.password = "Password is rquired";
        } else if (password.trim().length < 5) {
            errors.password = "Password is rquired above 5 characters";
        }
        setError(errors)
        return errors;
    }
    return (
        <>
            <div className={classes.loging}>
                <div className={classes.form}>
                    <form onSubmit={handleSubmit}>
                        <h4 className="text-center text-primary">Login Page</h4>
                        <div className="p-2">
                            <lable className="form-label"> Username::</lable>
                            <input className="form-control" ref={userNameCtrl} />
                        </div>
                        {error.username && <small className="text-danger ms-2">{error.username}</small>}
                        <div className="p-2 ">
                            <lable className="form-label "> Password::</lable>
                            <input className="form-control" ref={passwordCtrl} />
                        </div>
                        {error.password && <div> <small className="text-danger ms-2">{error.password}</small></div>}
                        <div className="p-2">
                            <button className="btn btn-primary ">Login</button>
                            <Link to="/register" className="ms-2 btn btn-primary ">Register</Link>
                            <div>
                                <hr className={classes.hr}></hr>
                            <Link to="/forgot" className="ms-2">Forgot Password</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}