(() => {
    const novaTarefa = document.querySelector('[data-form-button]')

//cria botao em forma de x na frente de cada tarefa e cria um ouvdor de eventos que leva a função deletarTarefa
    function criarBotaoDelete() {
        const botaoDelete = document.createElement('span')
        botaoDelete.innerText = "x"
        botaoDelete.classList = "close"

        botaoDelete.addEventListener('click', deletarTarefa)

        return botaoDelete
    }
//cria checkbox e faz um ouvidor de evento que elva para a função concluirTarefa
    function criarBotaoConcluir() {
        const botaoConcluir = document.createElement('input')
        botaoConcluir.setAttribute('type', 'checkbox')
        botaoConcluir.classList = 'form-check-input'

        botaoConcluir.addEventListener('click', concluirTarefa)

        return botaoConcluir
    }
//função que vai pegar o alvo do evento, identficar o pai do elemento e o remover
    function deletarTarefa(evento) {
        const botaoDeleteClicado = evento.target
        const itemDaLista = botaoDeleteClicado.parentElement

        itemDaLista.remove()
    }
//vai pegar o alvo do evento e vai identificar qual é, depois vai trocar sua classe (ver css)
    function concluirTarefa(evento) {
        const botaoConcluirClicado = evento.target
        const itemDaListaConcluido = botaoConcluirClicado.parentElement
        itemDaListaConcluido.classList.toggle('tarefa_concluida')
    }
//função que cadiciona as tarefas, criando li's dentro de uma ul
    function criarTarefa(evento) {

        const inputTarefa = document.querySelector('[data-form-input]')
        evento.preventDefault()

        const valorTarefa = inputTarefa.value
        const listaDeTarefas = document.querySelector('[data-task]')

        novaLabel = document.createElement('label')
        novaLabel.innerText = `- ${valorTarefa}`
        novaLabel.className = "form-check-label"

        novoItem = document.createElement('li')

        novoItem.appendChild(criarBotaoConcluir())
        novoItem.appendChild(novaLabel)
        novoItem.appendChild(criarBotaoDelete())

        listaDeTarefas.appendChild(novoItem)

        inputTarefa.value = ""

    }

    novaTarefa.addEventListener('click', criarTarefa)
})()