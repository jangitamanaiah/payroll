import { useHistory } from 'react-router-dom'
import classes from './Dashboard.module.css'
export default function Dashboard() {
    const history = useHistory();
    const handleExpance = () => {
        history.push('/expance')
    }
    const handleEmployee = () => {
        history.push('/emp')
    }
    const handleCompany = () => {
        history.push('/company')
    }
    return (
        <>
        <div className={classes.form}>
            <div className={classes.sidebar}>
                <button className="btn btn-primary  mt-3" onClick={handleExpance}>Expance</button>
                <button className="btn btn-primary  mt-3" onClick={handleEmployee}>Employee</button>
                <button className="btn btn-primary  mt-3" onClick={handleCompany}>Company</button>
            </div>
            <div className={classes.body}>
                <h1>Dashboard Body</h1>
            </div>
            </div>
        </>
    )
}