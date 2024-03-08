import{Link} from 'react-router-dom'
export default function Header(){
    
    return(
        <div>
            <h3> Software Solutions
                <Link to="/login" className="float-end btn btn-primary ">Login</Link>
            </h3>
        </div>
    )
}