import classes from './Company.module.css'
export default function CompanyData() {
    return (
        <>
            <div className={classes.arrange}>
                <div className={classes.left}>
                    <button className="btn btn-primary  mt-3">save</button>
                    <button className="btn btn-primary  mt-3">getById</button>
                    <button className="btn btn-primary  mt-3">getAll</button>
                    <button className="btn btn-primary  mt-3">update</button>
                    <button className="btn btn-primary  mt-3">updateByid</button>
                    <button className="btn btn-primary  mt-3">deleteByid</button>
                    <button className="btn btn-primary  mt-3">deleteAll</button>
                </div>
                <div className={classes.body}>
                    <h1>CompanyData</h1>
                </div>

            </div>
        </>
    )
}