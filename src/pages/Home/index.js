import {useState} from 'react';
import { Link } from 'react-router-dom';
import '../../Output.css'; 

let total = 0.00
let nomecliente = ''
let veiculo = ''

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
    <h1 class="text-3xl font-bold underline text-blue-600">
    Hello world!
  </h1>
        <form onSubmit={handleSubmit}>
            <label>Nome do cliente</label>
            <input 
                placeholder='Digite o nome do cliente'
                name='cliente'
                value={ inputs.cliente ? inputs.cliente : ''}
                onChange={handleChange}
            /><br/>

            <label>Veiculo - Placa:</label>
            <input 
                placeholder='Ex. Jeep Azul - PNP2345'
                name='veiculo'
                value={ inputs.veiculo ? inputs.veiculo : ''}
                onChange={handleChange}
            /><br/>

            <label>Item:</label>
            <input 
                placeholder='Digite seu nome'
                name='nome'
                value={ fields.nome ? fields.nome : ''}
                onChange={handleFieldsChange}
            /><br/>

            <label>Quantidade:</label>
            <input 
                name='quantidade'
                placeholder='Digite a quantidade'
                value={fields.quantidade ? fields.quantidade : ''}
                onChange={handleFieldsChange}
            /><br/>

            <label>Valor:</label>
            <input 
                type='text'
                placeholder='Digite o valor'
                name='valor'
                value={fields.valor ? fields.valor : ''}
                onChange={handleFieldsChange}
            /><br/>

            <button type='submit'>Enviar</button>
        </form>
      
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
                {item.map( (peca, index ) => (
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
        <Link to='/print' state={{ data: item, total:total, dados:inputs}}> Link</Link>
      
    </>
  )
}


