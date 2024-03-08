import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import classes from './Employee.module.css'
import { useEffect, useState } from "react";
import {  LoadEmployeeData , DelteEmployeeData, updateEmployeeData, SaveEmployeeData} from '../Hooks/Api'
export default function EmployeeData() {
    let [data, setData] = useState([])
    let [model, setModel] = useState({})
    useEffect(() => {
        LoadEmployeeData(setData) 
    }, [])
    function handleDelete(id){
        DelteEmployeeData(id,setData)
    }
    function handleUpdate(id){
        updateEmployeeData(id,setData)
    }
    function handelSave(model,setData){
        SaveEmployeeData(setData)
    }
    return (
        <>
            <div className={classes.main}>

                {/* sidebar */}
                <div className={classes.sidebar}>
                    <Link className="btn btn-primary mt-3" onClick={handelSave(model,setData)}>save</Link>
                    <Link className="btn btn-primary mt-3 ">getById</Link>
                    <Link className="btn btn-primary mt-3">getAll</Link>
                    <Link className="btn btn-primary mt-3">update</Link>
                    <Link className="btn btn-primary mt-3 ">updateByid</Link>
                    <Link className="btn btn-primary mt-3 "onClick={handleDelete}>deleteByid</Link>
                    <Link className="btn btn-primary mt-3">deleteAll</Link>
                </div>

                 {/* right side */}
                 <div className={classes.body}>
                   <div>
                       <table className='table table-bordered table-striped table-hover shadow-5'>
                           <thead>
                               <tr>
                                   <th>id</th>
                                   <th>title</th>
                                   <th>body</th>
                               </tr>
                           </thead>
                           <tbody>
                               {
                                   data.map((item) => {
                                       return (
                                           <tr>
                                               <td>{item.id}</td>
                                               <td>{item.title}</td>
                                               <td>{item.body}</td>
                                               <button className="btn btn-outline-danger mt-3" onClick={()=>handleDelete(item.id)}>delete</button>
                                           </tr>
                                       )
                                   })
                               }
                           </tbody>
                       </table>
                   </div>
                 </div>
                
              </div>
            </>
            )
}