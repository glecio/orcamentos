import {useState} from 'react';
import { Link } from 'react-router-dom';

let total = 0

export default function Home(props){
const [fields, setFields] = useState([])
let subtotal = 0
const [item,  setItem ] = useState([])

const handleFieldsChange = (e) => setFields({
    ...fields,
    [e.currentTarget.name]: e.currentTarget.value,
})

let data =5

function handleSubmit(e) {
    e.preventDefault();
    let itemOrcado = {...fields, 'subtotal': fields.valor * fields.quantidade}
    total += itemOrcado.subtotal
    setFields('')
    
    setItem(
      [...item,
        itemOrcado,
      ]
    )
}


return (
    <>
        <form onSubmit={handleSubmit}>
            <label>Nome:</label>
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
                        <td>R${peca.valor}</td>
                        <td>R${peca.subtotal}</td>
                    </tr>
                ))}  
            </tbody>
        </table>
        <h1>Total: R${total}</h1>
        <Link to='/print' state={{ data: item, total:total}}> Link</Link>
      
    </>
  )
}


