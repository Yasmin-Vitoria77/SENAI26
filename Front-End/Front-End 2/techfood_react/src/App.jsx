import CardPrato from "./components/CardPrato";
import Header from "./components/Header";

const cardapio = [
  { id: 1, nome: "Feijoada", preco: 42.90, categoria: "Prato principal" },
  { id: 2, nome: "Moqueca", preco: 49.90, categoria: "Prato principal" },
  { id: 3, nome: "Pudim", preco: 15.00, categoria: "Sobremesa" },
  { id: 4, nome: "Frango Emapanado", preco: 35.00, categoria: "Prato principal" },
  { id: 5, nome: "Cupcake", preco: 15.00, categoria: "Sobremesa" },
]

function App(){
  return (
    <main className="app">
      {/* <h1>Techfood - Sabor & Saber</h1>
      <p>Meu primeiro projeto em React</p> */}

      {/* <Header/>
      <p>Meu primeiro projeto em React</p>
      <CardPrato nome="Feijoada" preco={42.9} categoria="Prato principal"/> */}

      <Header />
      <section className="cardapio">
        {cardapio.map((prato) => (
          <CardPrato
          key={prato.id}
          nome={prato.nome}
          preco={prato.preco}
          categoria={prato.categoria}
          descricao={prato.descricao}
          />
        ))}
      </section>
    </main>
  );
}

export default App;