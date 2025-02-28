// Dados de todas as categorias e opções
const categories = [
    {
      name: "Ator Coadjuvante",
      key: "atorCoadjuvante",
      options: [
        { value: "Yura Borisov - Anora", image: "yura-borisov.jpg" },
        { value: "Kieran Culkin - A verdadeira dor", image: "kieran-culkin.jpg" },
        { value: "Edward Norton - Um completo desconhecido", image: "edward-norton.jpg" },
        { value: "Guy Pearce - O brutalista", image: "guy-pearce.jpg" },
        { value: "Jeremy Strong - O aprendiz", image: "jeremy-strong.jpg" }
      ]
    },
    {
      name: "Figurino",
      key: "figurino",
      options: [
        { value: "Um completo desconhecido", image: "um-completo-desconhecido.jpg" },
        { value: "Conclave", image: "conclave.jpg" },
        { value: "Gladiador 2", image: "gladiador-2.jpg" },
        { value: "Nosferatu", image: "nosferatu.jpg" },
        { value: "Wicked", image: "wicked.png" }
      ]
    },
    {
      name: "Maquiagem e cabelo",
      key: "maquiagemCabelo",
      options: [
        { value: "Um homem diferente", image: "um-homem-diferente.jpg" },
        { value: "Emilia Pérez", image: "emilia-perez.jpg" },
        { value: "Nosferatu", image: "nosferatu.jpg" },
        { value: "A substância", image: "a-substância.jpg" },
        { value: "Wicked", image: "wicked.png" }
      ]
    },
    {
      name: "Trilha sonora",
      key: "trilhaSonora",
      options: [
        { value: "O brutalista", image: "o-brutalista.jpg" },
        { value: "Conclave", image: "conclave.jpg" },
        { value: "Emilia Pérez", image: "emilia-perez.jpg" },
        { value: "Wicked", image: "wicked.png" },
        { value: "O robô selvagem", image: "o-robo-selvagem.jpg" }
      ]
    },
    {
      name: "Curta-metragem com atores",
      key: "curtaComAtores",
      options: [
        { value: "A lien", image: "a-lien.jpg" },
        { value: "Anuja", image: "anuja.jpg" },
        { value: "Im not a robot", image: "im-not-a-robot.jpg" },
        { value: "The last ranger", image: "the-last-ranger.jpg" },
        { value: "The man who could not remain silent", image: "the-man-who-could-not-remain-silent.jpg" }
      ]
    },
    {
      name: "Curta-metragem animado",
      key: "curtaAnimado",
      options: [
        { value: "Beautiful men", image: "beautiful-men.jpg" },
        { value: "In the shadow of cypress", image: "in-the-shadow-of-cypress.jpg" },
        { value: "Magic candies", image: "magic-candies.jpg" },
        { value: "Wander to wonder", image: "wander-to-wonder.jpg" },
        { value: "Yuck!", image: "yuck.jpg" }
      ]
    },
    {
      name: "Roteiro adaptado",
      key: "roteiroAdaptado",
      options: [
        { value: "Um completo desconhecido", image: "um-completo-desconhecido.jpg" },
        { value: "Conclave", image: "conclave.jpg" },
        { value: "Emilia Pérez", image: "emilia-perez.jpg" },
        { value: "Nickel boys", image: "nickel-boys.jpg" },
        { value: "Sing sing", image: "sing-sing.jpg" }
      ]
    },
    {
      name: "Roteiro original",
      key: "roteiroOriginal",
      options: [
        { value: "Anora", image: "anora.jpg" },
        { value: "O brutalista", image: "o-brutalista.jpg" },
        { value: "A verdadeira dor", image: "a-verdadeira-dor.jpeg" },
        { value: "Setembro 5", image: "setembro-5.jpeg" },
        { value: "A substância", image: "a-substância.jpg" }
      ]
    },
    {
      name: "Atriz Coadjuvante",
      key: "atrizCoadjuvante",
      options: [
        { value: "Monica Barbaro - Um completo desconhecido", image: "monica-barbaro.jpg" },
        { value: "Ariana Grande - Wicked", image: "ariana-grande.jpg" },
        { value: "Felicity Jones - O brutalista", image: "felicity-jones.jpg" },
        { value: "Isabella Rossellini - Conclave", image: "isabella-rossellini.jpg" },
        { value: "Zoe Saldaña - Emilia Pérez", image: "zoe-saldana.jpeg" }
      ]
    },
    {
      name: "Canção original",
      key: "cancaoOriginal",
      options: [
        { value: "El Mal - Emilia Pérez", image: "emilia-perez.jpg" },
        { value: "The journey - The six triple eight", image: "the-six-triple-eight.jpg" },
        { value: "Like a bird - Sing sing", image: "sing-sing.jpg" },
        { value: "Mi camino - Emilia Pérez", image: "emilia-perez.jpg" },
        { value: "Never too late - Elton John: Never too late", image: "elton-john.jpg" }
      ]
    },
    {
      name: "Documentário",
      key: "documentario",
      options: [
        { value: "Black box diaries", image: "black-box-diaries.jpg" },
        { value: "No other land", image: "no-other-land.jpg" },
        { value: "Porcelain war", image: "porcelain-war.jpg" },
        { value: "Soundtrack to a coup detat", image: "soundtrack-to-a-coup-detat.jpg" },
        { value: "Sugarcane", image: "sugarcane.jpg" }
      ]
    },
    {
      name: "Documentário de curta-metragem",
      key: "docCurta",
      options: [
        { value: "Death by numbers", image: "death-by-numbers.jpg" },
        { value: "I am ready, warden", image: "i-am-ready-warden.jpg" },
        { value: "Incident", image: "incident.jpg" },
        { value: "Instruments of a beating heart", image: "instruments-of-a-beating-hear.png" },
        { value: "The only girl in the orchestra", image: "the-only-girl-in-the-orchestra.jpg" }
      ]
    },
    {
      name: "Filme internacional",
      key: "filmeInternacional",
      options: [
        { value: "Ainda estou aqui - Brasil", image: "ainda-estou-aqui.jpg" },
        { value: "A garota da agulha - Dinamarca", image: "a-garota-da-agulha.jpg" },
        { value: "Emilia Pérez - França", image: "emilia-perez.jpg" },
        { value: "A semente do fruto sagrado - Alemanha", image: "a-semente-do-fruto-sagrado.jpg" },
        { value: "Flow - Letônia", image: "flow.jpg" }
      ]
    },
    {
      name: "Animação",
      key: "animacao",
      options: [
        { value: "Flow", image: "flow.jpg" },
        { value: "Divertida mente 2", image: "divertida-mente-2.jpeg" },
        { value: "Memórias de um caracol", image: "memorias-de-um-caracol.jpg" },
        { value: "Wallace & Gromit: Avengança", image: "wallace-Gromit-avengança.jpg" },
        { value: "O robô selvagem", image: "o-robo-selvagem.jpg" }
      ]
    },
    {
      name: "Direção de arte",
      key: "direcaoArte",
      options: [
        { value: "O brutalista", image: "o-brutalista.jpg" },
        { value: "Conclave", image: "conclave.jpg" },
        { value: "Duna: Parte 2", image: "duna-2.jpeg" },
        { value: "Nosferatu", image: "nosferatu.jpg" },
        { value: "Wicked", image: "wicked.png" }
      ]
    },
    {
      name: "Montagem",
      key: "montagem",
      options: [
        { value: "Anora", image: "anora.jpg" },
        { value: "O brutalista", image: "o-brutalista.jpg" },
        { value: "Conclave", image: "conclave.jpg" },
        { value: "Emilia Pérez", image: "emilia-perez.jpg" },
        { value: "Wicked", image: "wicked.png" }
      ]
    },
    {
      name: "Som",
      key: "som",
      options: [
        { value: "Um completo desconhecido", image: "um-completo-desconhecido.jpg" },
        { value: "Duna: Parte 2", image: "duna-2.jpeg" },
        { value: "Emilia Pérez", image: "emilia-perez.jpg" },
        { value: "Wicked", image: "wicked.png" },
        { value: "O robô selvagem", image: "o-robo-selvagem.jpg" }
      ]
    },
    {
      name: "Efeitos visuais",
      key: "efeitosVisuais",
      options: [
        { value: "Alien: Romulus", image: "alien-romulus.jpg" },
        { value: "Better Man: A História de Robbie Williams", image: "better-man.jpg" },
        { value: "Duna: Parte 2", image: "duna-2.jpeg" },
        { value: "Planeta dos Macacos: O Reinado", image: "planeta-dos-macacos.jpg" },
        { value: "Wicked", image: "wicked.png" }
      ]
    },
    {
      name: "Fotografia",
      key: "fotografia",
      options: [
        { value: "O brutalista", image: "o-brutalista.jpg" },
        { value: "Duna: Parte 2", image: "duna-2.jpeg" },
        { value: "Emilia Pérez", image: "emilia-perez.jpg" },
        { value: "Maria Callas", image: "maria-callas.jpeg" },
        { value: "Nosferatu", image: "nosferatu.jpg" }
      ]
    },
    {
      name: "Ator",
      key: "ator",
      options: [
        { value: "Adrien Brody - O brutalista", image: "adrien-brody.jpg" },
        { value: "Timothée Chalamet - Um completo desconhecido", image: "timothee-chalamet.jpg" },
        { value: "Colman Domingo - Sing sing", image: "colman-domingo.jpg" },
        { value: "Ralph Fiennes - Conclave", image: "ralph-fiennes.jpg" },
        { value: "Sebastian Stan - O aprendiz", image: "sebastian-stan.jpg" }
      ]
    },
    {
      name: "Atriz",
      key: "atriz",
      options: [
        { value: "Cynthia Erivo - Wicked", image: "cynthia-erivo.jpg" },
        { value: "Karla Sofía Gascón - Emilia Pérez", image: "karla-sofía-gascón.jpg" },
        { value: "Mikey Madison - Anora", image: "mikey-madison.jpg" },
        { value: "Demi Moore - A substância", image: "demi-moore.jpg" },
        { value: "Fernanda Torres - Ainda estou aqui", image: "fernanda -torres.jpg" }
      ]
    },
    {
      name: "Direção",
      key: "direcao",
      options: [
        { value: "Sean Baker - Anora", image: "sean-baker.jpeg" },
        { value: "Brady Corbet - O brutalista", image: "brady-corbet.jpg" },
        { value: "James Mangold - Um completo desconhecido", image: "james-mangold.jpeg" },
        { value: "Jacques Audiard - Emilia Pérez", image: "jacques-audiard.jpg" },
        { value: "Coralie Fargeat - A substância", image: "coralie-fargeat.jpeg" }
      ]
    },
    {
      name: "Melhor filme",
      key: "melhorFilme",
      options: [
        { value: "Anora", image: "anora.jpg" },
        { value: "O brutalista", image: "o-brutalista.jpg" },
        { value: "Um completo desconhecido", image: "um-completo-desconhecido.jpg" },
        { value: "Conclave", image: "conclave.jpg" },
        { value: "Duna: Parte 2", image: "duna-2.jpeg" },
        { value: "Emilia Pérez", image: "emilia-perez.jpg" },
        { value: "Ainda estou aqui", image: "ainda-estou-aqui.jpg" },
        { value: "Nickel boys", image: "nickel-boys.jpg" },
        { value: "A substância", image: "a-substância.jpg" },
        { value: "Wicked", image: "wicked.png" }
      ]
    }
  ];

  // Variáveis para armazenar as escolhas do usuário, status de confirmação e pontuação
  let userPicks = {};
  let categoryConfirmed = {};
  let score = 0;
  
  // Gerar as categorias dinamicamente
  const container = document.getElementById("categories-container");

  categories.forEach(category => {
    const section = document.createElement("section");
    section.classList.add("category");

    // Se for a categoria "Melhor Filme", adiciona a classe que a faz ocupar as 2 colunas
    if(category.key === "melhorFilme") {
      section.classList.add("full-width");
    }

    const heading = document.createElement("h2");
    heading.textContent = category.name;
    section.appendChild(heading);

    let optionsContainer = null;
    // Para a categoria "Melhor Filme", criamos um container com grid de 2 colunas para as opções
    if(category.key === "melhorFilme") {
      optionsContainer = document.createElement("div");
      optionsContainer.classList.add("options-grid");
    }

    category.options.forEach((option, index) => {
      const label = document.createElement("label");
      label.classList.add("option");

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = category.key;
      radio.value = option.value;
      radio.id = `${category.key}-${index}`;

      const img = document.createElement("img");
      img.src = `images/${option.image}`;
      img.alt = option.value;

      const span = document.createElement("span");
      span.textContent = option.value;

      label.appendChild(radio);
      label.appendChild(img);
      label.appendChild(span);

      if(optionsContainer) {
        optionsContainer.appendChild(label);
      } else {
        section.appendChild(label);
      }
    });

    if(optionsContainer) {
      section.appendChild(optionsContainer);
    }

    container.appendChild(section);
  });

  // -------------- EXIBE OS RESULTADOS DAS PREVISÕES --------------

  document.getElementById("oscarForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(this);

    // Reinicia as variáveis sempre que o formulário for enviado
    userPicks = {};
    categoryConfirmed = {};
    score = 0;

    let resultHTML = "<h2>Suas Previsões</h2>";
    resultHTML += '<div class="predictions-grid">';

    categories.forEach(category => {
      const selectedValue = formData.get(category.key);
      if (selectedValue) {
        userPicks[category.key] = selectedValue;
        categoryConfirmed[category.key] = false;

        // Localiza a opção para exibir a imagem
        const option = category.options.find(opt => opt.value === selectedValue);

        let optionsContainer = null;

        resultHTML += `<div class="prediction-card">
          <h3>${category.name}</h3>
          ${ option ? `<img src="images/${option.image}" alt="${option.value}" class="result-img">` : "" }
          <p>${selectedValue}</p>
          <br>
          <p><strong>And the Oscar goes to...</strong></p>
          <div class="real-winner">`;
        
        // Gera os botões para marcar o vencedor real
        if (optionsContainer) {
          category.options.forEach(nominee => {
            optionsContainer.innerHTML += `<button type="button" onclick="markAsWinner('${category.key}', '${nominee.value}')">${nominee.value}</button>`;
          });
          resultHTML += optionsContainer.outerHTML;
        } else {
          category.options.forEach(nominee => {
            resultHTML += `<button type="button" onclick="markAsWinner('${category.key}', '${nominee.value}')">${nominee.value}</button>`;
          });
        }

        resultHTML += `</div></div>`;
      }
    });

    resultHTML += "</div>";
    resultHTML += `<div id="scoreArea" style="margin-top:20px; font-size:1.2rem;">Pontuação atual: ${score}</div>`;

    document.getElementById("results").innerHTML = resultHTML;
  });

  // -------------- FUNÇÃO PARA MARCAR O VENCEDOR REAL --------------

  // Ao clicar num botão, verifica se a escolha do usuário bate com o vencedor real
  function markAsWinner(categoryKey, nomineeValue) {
    if (categoryConfirmed[categoryKey]) {
      return; // Já foi confirmado, não faz nada
    }
    categoryConfirmed[categoryKey] = true;

    // Se a previsão do usuário for igual à opção marcada como vencedora, incrementa a pontuação
    if (userPicks[categoryKey] === nomineeValue) {
      score++;
    }

    // Atualiza o placar na tela
    const scoreArea = document.getElementById("scoreArea");
    if (scoreArea) {
      scoreArea.textContent = `Pontuação atual: ${score}`;
    }

    // Desabilita os botões dessa categoria para evitar cliques adicionais
    const cards = document.querySelectorAll(".prediction-card");
    cards.forEach(card => {
      const header = card.querySelector("h3");
      if (header && header.textContent === getCategoryName(categoryKey)) {
        const buttons = card.querySelectorAll(".real-winner button");
        buttons.forEach(btn => {
          btn.disabled = true;
          btn.style.opacity = "0.6";
          btn.style.cursor = "not-allowed";
        });
      }
    });
  }

  // Função auxiliar para mapear a chave da categoria para o nome exibido
  function getCategoryName(key) {
    const cat = categories.find(c => c.key === key);
    return cat ? cat.name : key;
  }
