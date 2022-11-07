import { useLocation } from "react-router-dom"


export default function Print(props){
    const location = useLocation()
    console.log(location , "state hook")
    return (
        <h1>Print</h1>

    )
}