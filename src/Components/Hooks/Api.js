import axios from "axios";
import { get_All_data, Delete_data_by_id , update_data_by_id, save_data} from "../Utils/Utils";
//to get data from server and set it in state
export async function LoadEmployeeData(setData) {
    axios.get(get_All_data)
    .then((response)=>{
        setData(response.data)
    })
    .catch(err=>{
        alert("Something went wrong");
    })
}
export async function DelteEmployeeData(id,setData) {
    const url=Delete_data_by_id+"/"+id;
    axios.delete(url)
    .then((response)=>{
        LoadEmployeeData(setData);
       // alert("data deleted successfully");
    })
    .catch(err=>{
       // alert("Something went wrong");
    })
}
export async function updateEmployeeData(id,setData) {
    const url=update_data_by_id+"/"+id;
    axios.update(url)
    .then((response)=>{
        LoadEmployeeData(setData);
       // alert("data updated successfully");
    })
    .catch(err=>{
        
    })
}
export async function SaveEmployeeData(model,setData) {
    axios.post(save_data,model)
    .then((response)=>{
        LoadEmployeeData(setData);
       // alert("data updated successfully");
    })
    .catch(err=>{
        
    })
}