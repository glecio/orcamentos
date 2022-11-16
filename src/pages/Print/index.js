import { useLocation } from "react-router-dom"
import Logo from "../../assets/logo.jpeg"

function formataReal (entrada){
    if (typeof(entrada) == 'string'){
        entrada = parseFloat(entrada)
    }
    const saida = entrada.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return saida
}

export default function Print(props){
    const location = useLocation()
    const data = location.state.data
    const total = location.state.total
    const dados = location.state.dados

    return (
        <>
       
        

        
<section className="antialiased text-gray-600 h px-4" x-data="app">
    <div className="flex flex-col justify-center h-full">
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100 text-center">
                <div className="flex justify-center">  
                    <img src={Logo} className="w-24 inline-block"></img>
                </div>
                <div className="font-semibold text-gray-800">Cliente: {dados.cliente} </div>
                <div className="font-semibold text-gray-800">Veiculo: {dados.veiculo} </div>       
            </header>

            <div className="overflow-x-auto p-3">
                <table className="table-auto w-full">
                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                            <th className="p-2">
                                <div className="font-semibold text-left">Item</div>
                            </th>
                            <th className="p-2">
                                <div className="font-semibold text-left">Quantidade</div>
                            </th>
                            <th className="p-2">
                                <div className="font-semibold text-left">Preço</div>
                            </th>
                            <th className="p-2">
                                <div className="font-semibold text-left">Subtotal</div>
                            </th>
                        </tr>
                    </thead>

                    <tbody className="text-sm divide-y divide-gray-100">
                        {data.map( (peca, index ) => (
                            <tr key={index}>
                                <td className="p-2">
                                    <div className="font-medium text-gray-800">
                                        {peca.nome}
                                    </div>
                                </td>
                                <td className="p-2">{peca.quantidade}</td>
                                <td className="p-2">{formataReal(peca.valor)}</td>
                                <td className="p-2">
                                    <div className="text-left font-medium text-green-500">
                                        {formataReal(peca.subtotal)}
                                    </div>
                                </td>
                            </tr>
                        ))}  

                    </tbody>
                </table>
            </div>

            <div className="flex justify-end font-bold space-x-4 text-2xl border-t border-gray-100 px-5 py-4">
                <div>Total:</div>
                <div className="text-blue-700"><span x-text="total.toFixed(2)"> {formataReal(total)}</span></div>
            </div>

            <div className="flex justify-end">
                <input type="hidden" className="border border-black bg-gray-50" x-model="selected" />
            </div>
        </div>
    </div>
</section>
    </>
    )
}