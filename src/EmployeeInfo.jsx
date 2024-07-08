import react from 'react'

function EmployeeInfo(props){
    console.log("🚀 ~ EmployeeInfo ~ props:", props)
    //    const{firstname,lastname,email}=props;
    return(
        <tr>
          <td>{props.employee.firstname}</td>
          <td>{props.employee.lastname}</td>
          <td>{props.employee.email}</td>
        </tr>
)
}

export default EmployeeInfo;