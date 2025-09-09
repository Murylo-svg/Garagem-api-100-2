// Espera o conteúdo da página carregar completamente antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    
    // Pega os elementos do HTML com os quais vamos interagir
    const formAgendamento = document.getElementById('formAgendamento');
    const listaAgendamentos = document.getElementById('listaAgendamentos');

    // Carrega os agendamentos salvos no navegador. Se não houver nenhum, cria uma lista vazia.
    const agendamentos = JSON.parse(localStorage.getItem('agendamentosOficina')) || [];

    // Função para mostrar os agendamentos na tela
    const renderizarAgendamentos = () => {
        listaAgendamentos.innerHTML = ''; // Limpa a lista antes de adicionar os itens
        
        // Ordena os agendamentos por data e hora antes de exibi-los
        agendamentos.sort((a, b) => new Date(a.data + 'T' + a.hora) - new Date(b.data + 'T' + b.hora));

        agendamentos.forEach((agendamento, index) => {
            const li = document.createElement('li');
            li.className = 'agendamento-item';

            // Formata a data para o padrão brasileiro (dd/mm/aaaa)
            const dataObj = new Date(agendamento.data + 'T00:00:00'); // Adiciona T00:00 para evitar problemas de fuso horário
            const dataFormatada = dataObj.toLocaleDateString('pt-BR');

            li.innerHTML = `
                <p><strong>Data:</strong> ${dataFormatada}</p>
                <p><strong>Horário:</strong> ${agendamento.hora}</p>
                <p><strong>Descrição:</strong> ${agendamento.descricao}</p>
                <button class="delete-btn" data-index="${index}">Concluído</button>
            `;
            listaAgendamentos.appendChild(li);
        });
    };

    // Adiciona um "ouvinte" para o evento de envio do formulário
    formAgendamento.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede que a página recarregue ao enviar

        // Cria um objeto com os dados do novo agendamento
        const novoAgendamento = {
            data: document.getElementById('data').value,
            hora: document.getElementById('hora').value,
            descricao: document.getElementById('descricao').value
        };

        agendamentos.push(novoAgendamento); // Adiciona na lista
        localStorage.setItem('agendamentosOficina', JSON.stringify(agendamentos)); // Salva no navegador
        renderizarAgendamentos(); // Atualiza a exibição na tela
        formAgendamento.reset(); // Limpa o formulário
    });

    // Adiciona um "ouvinte" para cliques na lista de agendamentos
    listaAgendamentos.addEventListener('click', (e) => {
        // Verifica se o clique foi no botão de deletar
        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.getAttribute('data-index'); // Pega o índice do item a ser removido
            agendamentos.splice(index, 1); // Remove o item da lista
            localStorage.setItem('agendamentosOficina', JSON.stringify(agendamentos)); // Salva a lista atualizada
            renderizarAgendamentos(); // Atualiza a exibição na tela
        }
    });

    // Exibe os agendamentos já salvos assim que a página carrega
    renderizarAgendamentos();
});

// Espera o conteúdo da página carregar completamente antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // =========== NOVO: LÓGICA DO MENU SANDUÍCHE ===========
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    hamburgerBtn.addEventListener('click', () => {
        // Adiciona ou remove a classe 'active' do botão e do menu
        hamburgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    // ========================================================


    // Pega os elementos do HTML com os quais vamos interagir
    const formAgendamento = document.getElementById('formAgendamento');
    const listaAgendamentos = document.getElementById('listaAgendamentos');

    // Carrega os agendamentos salvos no navegador. Se não houver nenhum, cria uma lista vazia.
    const agendamentos = JSON.parse(localStorage.getItem('agendamentosOficina')) || [];

    // Função para mostrar os agendamentos na tela
    const renderizarAgendamentos = () => {
        listaAgendamentos.innerHTML = ''; // Limpa a lista antes de adicionar os itens
        
        // Ordena os agendamentos por data e hora antes de exibi-los
        agendamentos.sort((a, b) => new Date(a.data + 'T' + a.hora) - new Date(b.data + 'T' + b.hora));

        agendamentos.forEach((agendamento, index) => {
            const li = document.createElement('li');
            li.className = 'agendamento-item';

            // Formata a data para o padrão brasileiro (dd/mm/aaaa)
            const dataObj = new Date(agendamento.data + 'T00:00:00'); // Adiciona T00:00 para evitar problemas de fuso horário
            const dataFormatada = dataObj.toLocaleDateString('pt-BR');

            li.innerHTML = `
                <p><strong>Data:</strong> ${dataFormatada}</p>
                <p><strong>Horário:</strong> ${agendamento.hora}</p>
                <p><strong>Descrição:</strong> ${agendamento.descricao}</p>
                <button class="delete-btn" data-index="${index}">Concluído</button>
            `;
            listaAgendamentos.appendChild(li);
        });
    };

    // Adiciona um "ouvinte" para o evento de envio do formulário
    formAgendamento.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede que a página recarregue ao enviar

        // Cria um objeto com os dados do novo agendamento
        const novoAgendamento = {
            data: document.getElementById('data').value,
            hora: document.getElementById('hora').value,
            descricao: document.getElementById('descricao').value
        };

        agendamentos.push(novoAgendamento); // Adiciona na lista
        localStorage.setItem('agendamentosOficina', JSON.stringify(agendamentos)); // Salva no navegador
        renderizarAgendamentos(); // Atualiza a exibição na tela
        formAgendamento.reset(); // Limpa o formulário
    });

    // Adiciona um "ouvinte" para cliques na lista de agendamentos
    listaAgendamentos.addEventListener('click', (e) => {
        // Verifica se o clique foi no botão de deletar
        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.getAttribute('data-index'); // Pega o índice do item a ser removido
            agendamentos.splice(index, 1); // Remove o item da lista
            localStorage.setItem('agendamentosOficina', JSON.stringify(agendamentos)); // Salva a lista atualizada
            renderizarAgendamentos(); // Atualiza a exibição na tela
        }
    });

    // Exibe os agendamentos já salvos assim que a página carrega
    renderizarAgendamentos();
});

// main.js

// Lógica para o menu sanduíche
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fechar o menu ao clicar fora dele (opcional)
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
            if (navMenu.classList.contains('active')) {
                hamburgerBtn.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
    });

    // Lógica para Agendamentos
    const formAgendamento = document.getElementById('formAgendamento');
    const listaAgendamentos = document.getElementById('listaAgendamentos');

    // Carregar agendamentos do localStorage ao iniciar
    carregarAgendamentos();

    formAgendamento.addEventListener('submit', (e) => {
        e.preventDefault();

        const data = document.getElementById('data').value;
        const hora = document.getElementById('hora').value;
        const descricao = document.getElementById('descricao').value;

        if (data && hora && descricao) {
            const agendamento = {
                id: Date.now(), // ID único para cada agendamento
                data,
                hora,
                descricao
            };

            salvarAgendamento(agendamento);
            adicionarAgendamentoNaLista(agendamento);

            formAgendamento.reset();
        } else {
            alert('Por favor, preencha todos os campos do agendamento.');
        }
    });

    function salvarAgendamento(agendamento) {
        const agendamentos = JSON.parse(localStorage.getItem('agendamentosGaragemAranha')) || [];
        agendamentos.push(agendamento);
        localStorage.setItem('agendamentosGaragemAranha', JSON.stringify(agendamentos));
    }

    function carregarAgendamentos() {
        const agendamentos = JSON.parse(localStorage.getItem('agendamentosGaragemAranha')) || [];
        agendamentos.forEach(agendamento => adicionarAgendamentoNaLista(agendamento));
    }

    function adicionarAgendamentoNaLista(agendamento) {
        const li = document.createElement('li');
        li.classList.add('agendamento-item');
        li.dataset.id = agendamento.id; // Armazenar o ID no elemento li

        li.innerHTML = `
            <p><strong>Data:</strong> ${formatarData(agendamento.data)}</p>
            <p><strong>Hora:</strong> ${agendamento.hora}</p>
            <p><strong>Descrição:</strong> ${agendamento.descricao}</p>
            <button class="delete-btn" data-id="${agendamento.id}">Excluir</button>
        `;
        listaAgendamentos.appendChild(li);

        li.querySelector('.delete-btn').addEventListener('click', function() {
            excluirAgendamento(this.dataset.id);
            li.remove();
        });
    }

    function excluirAgendamento(id) {
        let agendamentos = JSON.parse(localStorage.getItem('agendamentosGaragemAranha')) || [];
        agendamentos = agendamentos.filter(agendamento => agendamento.id != id);
        localStorage.setItem('agendamentosGaragemAranha', JSON.stringify(agendamentos));
    }

    function formatarData(dataString) {
        const [ano, mes, dia] = dataString.split('-');
        return `${dia}/${mes}/${ano}`;
    }


    // Lógica para Veículos
    const formVeiculo = document.getElementById('formVeiculo');
    const listaVeiculos = document.getElementById('listaVeiculos');

    // Carregar veículos do localStorage ao iniciar
    carregarVeiculos();

    formVeiculo.addEventListener('submit', (e) => {
        e.preventDefault();

        const modeloVeiculo = document.getElementById('modeloVeiculo').value;
        const placaVeiculo = document.getElementById('placaVeiculo').value;
        const anoVeiculo = document.getElementById('anoVeiculo').value;

        if (modeloVeiculo && placaVeiculo && anoVeiculo) {
            const veiculo = {
                id: Date.now(), // ID único para cada veículo
                modelo: modeloVeiculo,
                placa: placaVeiculo,
                ano: anoVeiculo
            };

            salvarVeiculo(veiculo);
            adicionarVeiculoNaLista(veiculo);

            formVeiculo.reset();
        } else {
            alert('Por favor, preencha todos os campos do veículo.');
        }
    });

    function salvarVeiculo(veiculo) {
        const veiculos = JSON.parse(localStorage.getItem('veiculosGaragemAranha')) || [];
        veiculos.push(veiculo);
        localStorage.setItem('veiculosGaragemAranha', JSON.stringify(veiculos));
    }

    function carregarVeiculos() {
        const veiculos = JSON.parse(localStorage.getItem('veiculosGaragemAranha')) || [];
        veiculos.forEach(veiculo => adicionarVeiculoNaLista(veiculo));
    }

    function adicionarVeiculoNaLista(veiculo) {
        const li = document.createElement('li');
        li.classList.add('veiculo-item');
        li.dataset.id = veiculo.id; // Armazenar o ID no elemento li

        li.innerHTML = `
            <p><strong>Modelo:</strong> ${veiculo.modelo}</p>
            <p><strong>Placa:</strong> ${veiculo.placa}</p>
            <p><strong>Ano:</strong> ${veiculo.ano}</p>
            <button class="delete-btn" data-id="${veiculo.id}">Excluir</button>
        `;
        listaVeiculos.appendChild(li);

        li.querySelector('.delete-btn').addEventListener('click', function() {
            excluirVeiculo(this.dataset.id);
            li.remove();
        });
    }

    function excluirVeiculo(id) {
        let veiculos = JSON.parse(localStorage.getItem('veiculosGaragemAranha')) || [];
        veiculos = veiculos.filter(veiculo => veiculo.id != id);
        localStorage.setItem('veiculosGaragemAranha', JSON.stringify(veiculos));
    }
});