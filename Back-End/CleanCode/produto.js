const buscarProdutoPorId = async (id_prod) => {
    return await queryAsync(
        "SELECT * FROM produtos WHERE id = ?", [id]
    )
}

const validarPreenchimento = ({nome, preco}) => {
    if (!nome || preco === undefined) {
        return "Campos orbigatórios a serem preenchidos (nome e preco)"
    }
    if (typeof preco !== "number" || preco <= 0) {
        return "Preço inválido/inexistente, verifique."
    }

    return null
}

app.put('/prod/update/:id_prod', async (req, res) => {
    try{
        const erroPreencher = validarPreenchimento(req.body)
        if (erroPreencher) {
            return res.status(400).json({
                sucesso: false,
                mensagem: erroPreencher
            })
        }
        const { id_prod } = req.params
        const atualizacoesDoProduto = req.body

        const produtos = await buscarProdutoPorId(id_prod)
        

        if (produtos.length === 0){
            res.json({
                sucesso: false,
                mensagem: "Produto não encontrado."
            })
        }

        if (Object.keys(atualizacoesDoProduto).length === 0){
            return res.status(400).json({
                sucesso: false,
                mensagem: "Nenhum dado enviado no momento."
            })
        }

        await queryAsync(
            "UPDATE produtos SET ? WHERE id = ?", [atualizacoesDoProduto, id_prod]
        )

        res.json({
            sucesso: true,
            mensagem: "Produto atualizado com sucesso!"
        })

    } catch (erro){
        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao atualizar seu produto, confira"
        })
    }
})