import classes from "./Register.module.css"
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";
import {useHistory} from "react-router-dom"
export default function Register() {
    const history=useHistory();
    function handleSubmit(event) {
        history.push('/login')
    }
    function cancel(){
        history.push('/login')
    }
    return (
        <>
            <div className={classes.back}>
                <div className="p-2">
                    <Formik
                        initialValues={{ userName: '', password: '', Email: '', conformpassword: '' }}
                        validationSchema={Yup.object({
                            userName: Yup.string()
                                .max(15, 'Must be 15 characters or less')
                                .required('Required'),
                            Email: Yup.string()
                                .max(20, 'Must be 20 characters or less')
                                .required('Required'),
                            password: Yup.string().email('Invalid email address').required('Required'),
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        <Form className={classes.register}>
                            <h2 className="text-center text-primary">Register page</h2>
                            <div>
                                <label htmlFor="firstName">userName::</label>
                                <Field name="firstName" className="form-control" type="text" />
                                <ErrorMessage className="text-danger" name="firstName" />
                            </div>
                            <div>
                                <label htmlFor="Email">Email::</label>
                                <Field className="form-control" name="Email" type="text" />
                                <ErrorMessage className="text-danger" name="Email" />
                            </div>
                            <div>
                                <label htmlFor="password">Password::</label>
                                <Field className="form-control" name="Password" type="password" />
                                <ErrorMessage className="text-danger" name="Password" />
                            </div>
                            <div>
                                <label htmlFor="conformpassword">conformpassword::</label>
                                <Field className="form-control" name="conformpassword" type="conformpassword" />
                                <ErrorMessage className="text-danger" name="conformpassword" />
                            </div>
                            <div className="p-2">
                                <button className="btn btn-primary mT-2 Pt-2" type="submit" onClick={handleSubmit}>Submit</button>
                                <button className="btn btn-primary ms-2 Pt-2" type="reset" onClick={cancel}>Cancel</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    );
};
