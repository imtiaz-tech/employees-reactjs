import react from 'react'

function EmployeeInfo(props){
    console.log("🚀 ~ EmployeeInfo ~ props:", props)
        const{firstname,lastname,email}=props;
    return(
        <tr>
          <td>{props.firstname}</td>
          <td>{props.lastname}</td>
          <td>{props.email}</td>
        </tr>
)
}

export default EmployeeInfo;