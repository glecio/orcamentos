import {useState} from 'react';
//import Nome from "./components/Nome";


function App(){
  const listaDePecas = []
  const [nome,  setNome ] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [valor, setValor] = useState()
  const [item,  setItem ] = useState()


  
  function handleRegister(e){
    e.preventDefault();
    alert('criado com sucesso')
    setItem({
      nome: nome,
      quantidade: quantidade,
      valor: valor,
    })


  }

  return (
    <>
      <form onSubmit={handleRegister}>
        <label>Nome:</label>
        <input placeholder='Digite seu nome'
          value={nome}
          onChange={
            (e) =>  setNome(e.target.value)
          }
        /><br/>

        <label>Quantidade:</label>
        <input placeholder='Digite seu email'
          value={quantidade}
          onChange={
            (e) => setQuantidade(e.target.value)
          }
        /><br/>

        <label>Valor:</label>
        <input placeholder='Digite sua idade'
          value={valor}
          onChange={
            (e) => setValor(e.target.value)
          }
        /><br/>

        <button type='submit'>Enviar</button>
      </form>

      <span>Nome = {item.nome}  </span><br/>
      <span>Valor = {item.quantidade}</span><br/>
      <span>quantidade = {item.valor}</span><br/>
    </>
  )
}

export default App;