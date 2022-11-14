import {useState} from 'react';
import { Link } from 'react-router-dom';
import '../../Output.css'; 

let total = 0.00


export default function Home(props){
const [fields, setFields] = useState([])
const [inputs, setInputs] = useState({})
const [item,  setItem ] = useState([])

const handleFieldsChange = (e) => setFields({
    ...fields,
    [e.currentTarget.name]: e.currentTarget.value,
})


const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
}


function handleSubmit(e) {
    e.preventDefault();
    let itemOrcado = {...fields, 'subtotal': fields.valor * fields.quantidade}
    total += itemOrcado.subtotal
    console.log (inputs)
    setFields('')
    
    setItem(
      [...item,
        itemOrcado,
      ]
    )
}

function formataReal (entrada){
    if (typeof(entrada) == 'string'){
        entrada = parseFloat(entrada)
    }
    const saida = entrada.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return saida
}


return (
    <>
        <div className="w-full px-1">
            <h1 className="text-3xl mb-3 font-bold underline text-blue-600">   Gabiru 4x4 - Orçamento  </h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-5 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2 mb-4">
                        <div className="border rounded-md relative h-16">
                            <label
                            for="fName"
                            className="absolute -top-3 left-2 px-1 text-base font-medium text-[#07074D] bg-white"
                            >
                            Nome do cliente
                            </label>
                            <input
                                placeholder='Digite o nome do cliente'
                                name='cliente'
                                value={ inputs.cliente ? inputs.cliente : ''}
                                onChange={handleChange}
                                id="fName"
                                className="block w-full h-full rounded-md bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2 mb-4">
                        <div className="border rounded-md relative h-16">
                            <label
                            for="lName"
                            className="absolute -top-3 left-2 px-1 text-base font-medium text-[#07074D] bg-white"
                            >
                            Veículo / Cor / Placa
                            </label>
                            <input
                            type="text"
                            name="veiculo"
                            value={ inputs.veiculo ? inputs.veiculo : ''}
                            onChange={handleChange}                            
                            placeholder=" Veículo / Cor / Placa"
                            className="block w-full h-full rounded-md bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                    </div>
                
                </div>
      

                <div className="flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5 border rounded-md relative h-16">
                            <label
                                for="fName"
                                className="absolute -top-3 left-2 px-1 text-base font-medium text-[#07074D] bg-white">
                            Item
                            </label>
                            <input
                                placeholder='Peça ou serviço'
                                name='nome'
                                value={ fields.nome ? fields.nome : ''}
                                onChange={handleFieldsChange}
                                className="block w-full h-full rounded-md bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/6">
                        <div className="mb-5 border relative h-16">
                            <label
                                for="lName"
                                className="absolute -top-3 left-2 px-1 text-base font-medium text-[#07074D] bg-white"
                            >
                            Quantidade
                            </label>
                            <input
                                name="quantidade"
                                placeholder="Digite a quantidade"
                                value={fields.quantidade ? fields.quantidade : ''}
                                onChange={handleFieldsChange}
                                className="block w-full h-full rounded-md bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/6">
                        <div className="mb-5 relative border h-16">
                            <label
                            for="lName"
                            className="absolute -top-3 left-2 px-1 text-base font-medium text-[#07074D] bg-white"
                            >
                        Valor
                            </label>
                            <input
                                type='text'
                                placeholder='Digite o valor'
                                name='valor'
                                value={fields.valor ? fields.valor : ''}
                                onChange={handleFieldsChange}
                                className="block w-full h-full rounded-md bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div className="w-full p-3 h-16 sm:w-1/6">
                        <button type='submit' className='content-center items-center p-3 rounded-md text-sm font-medium text-white bg-blue-700 border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>+</button>
                    </div>
                
                </div>
            

            
            </form>
            <div className='mt-5'>
                <table className="border-collapse w-full border">
                    <thead>
                        <tr>
                            <th className="p-2 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 lg:table-cell">Item1</th>
                            <th className="p-2 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 lg:table-cell">Qtde</th>
                            <th className="p-2 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 lg:table-cell">preço</th>
                            <th className="p-2 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 lg:table-cell">subtotal</th>
                        </tr>
                    </thead>

                    <tbody>
                        {item.map( (peca, index ) => (
                            <tr key={index} className="bg-white lg:hover:bg-gray-100 py-3">
                                <td className="border">{peca.nome}</td>
                                <td className="border">{peca.quantidade}</td>
                                <td className="border">{formataReal(peca.valor)}</td>
                                <td className="border">{formataReal(peca.subtotal)}</td>

                            </tr>
                        
                        ))} 
                        <tr className='border'>
                            <td colSpan="3"  className="border py-2">Total:</td>
                            <td>{formataReal(total)}</td>
                      
                        </tr>
                    </tbody>
                </table>

                <Link to='/print' state={{ data: item, total:total, dados:inputs}} className='content-center my-3 inline-flex items-center p-3 rounded-md text-sm font-medium text-white bg-blue-700 border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' > Imprimir</Link>
            </div>
        </div>
    </>
  )
}


