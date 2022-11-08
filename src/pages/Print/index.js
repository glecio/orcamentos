import { useLocation } from "react-router-dom"


function formataReal (entrada){
    if (typeof(entrada) == 'string'){
        entrada = parseFloat(entrada)
    }
    const saida = entrada.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return saida
}

export default function Print(props){
    const location = useLocation()
    let realBRLocale = Intl.NumberFormat('en-US');
    const data = location.state.data
    const total = realBRLocale.format(location.state.total)
    console.log(total)
    return (
        <>
        <h1>Orçamento</h1>
        <table>
        <thead>
            <tr>
                <th>Item</th>
                <th>Quantidade</th>
                <th>Pre;o</th>
                <th>Subtotal</th>
            </tr>
        </thead>
        <tbody>
            {data.map( (peca, index ) => (
                <tr key={index}>
                    <td>{peca.nome}</td>
                    <td>{peca.quantidade}</td>
                    <td>{formataReal(peca.valor)}</td>
                    <td>{formataReal(peca.subtotal)}</td>
                </tr>
            ))}  
        </tbody>
    </table>
    <h1>Total: {formataReal(total)}</h1>
    </>
    )
}