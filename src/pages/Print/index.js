    import { useLocation } from "react-router-dom"


export default function Print(props){
    const location = useLocation()
    const data = location.state
    const total = location.total
    console.log(data , "data hook")
    return (
        <>
        <h1>Print</h1>
        <table>
        <thead>
            <tr>
                <th>Item</th>
                <th>quantidade</th>
                <th>preço</th>
                <th>subtotal</th>
            </tr>
        </thead>
        <tbody>
            {data.data.map( (peca, index ) => (
                <tr key={index}>
                    <td>{peca.nome}</td>
                    <td>{peca.quantidade}</td>
                    <td>R${peca.valor}</td>
                    <td>R${peca.subtotal}</td>
                </tr>
            ))}  
        </tbody>
    </table>
    <h1>Total: R${data.total}</h1>
    </>
    )
}