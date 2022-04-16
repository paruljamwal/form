export function DataBase({data}){
    return (
        <tbody>
            <td>{data.id}</td>
            <td>{data.username}</td>
            <td>{data.age}</td>
            <td>{data.address}</td>
            <td>{data.department}</td>
            <td>{data.salary}</td>
            <td>{data.maritalstate ? "true" : "false"}</td>
            
        </tbody>
    )
}