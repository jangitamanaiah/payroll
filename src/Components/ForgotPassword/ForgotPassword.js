import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Forgot.module.css"
import { isObject, useFormik } from "formik";
const validate = (values) => {
    let errors = {};
    if (values.password !== values.conformpass) {
        errors.conformpass = "password and conform password should be same";
    }
    if (!values.username) {
        errors.username = "username is required";
    }
    if (!values.password) {
        errors.password = "password is required";
    }
    if (!values.conformpass) {
        errors.conformpass = "conform password is required";
    }
    return errors
}
export default function Login() {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            conformpass: ''
        },
        validate,
        onSubmit: (values) => {
            alert("username" + values.username + "Email" + values.email + "Conform Password" + values.conformpass + "password" + values.password)
        },
    });

    return (
        <>
            <div className={classes.forgott}>
                <div className={classes.body}>
                    <form onSubmit={formik.handleSubmit}>
                        <h4 className="text-center text-primary p-1">ForgotPassword</h4>
                        <div className="p-1">
                            <lable className="form-label"> Username::</lable>
                            <input  className="form-control" id="username" {...formik.getFieldProps("username")}/>
                        </div>
                        {formik.touched.username && formik.errors.username ? (
                                <div className="text-danger">{formik.errors.username}</div>
                            ) : null}
                        <div className="p-1">
                            <lable className="form-label "> Password::</lable>
                            <input className="form-control" id="password" {...formik.getFieldProps("password")}/>
                        </div>
                        {formik.touched.password && formik.errors.password ? (
                                <div className="text-danger">{formik.errors.password}</div>
                            ) : null}

                        <div className="p-1">
                            <lable className="form-label"> ConformPassword::</lable>
                            <input className="form-control" id="conformpass" {...formik.getFieldProps("conformpass")} />
                        </div>
                        {formik.touched.conformpass && formik.errors.conformpass ? (
                                <div className="text-danger">{formik.errors.conformpass}</div>
                            ) : null}

                        <div className="p-1">
                            <button className="btn btn-primary ">Save</button>
                            <Link to="/login" className="ms-2 btn btn-primary ">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}