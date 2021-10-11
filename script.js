// Definindo as cartas do jogo
var cartas = [
  {
    cor: "Rosa",
    color: "#F50057",
    humor: {
      alegria: 7,
      tristeza: 3,
      versatil: 6
    },
    perfil:
      "https://i.pinimg.com/564x/44/35/18/44351841f9b1545cba9f076d27fd1631.jpg"
  },
  {
    cor: "Vermelho",
    color: "#D50000",
    humor: {
      alegria: 6,
      tristeza: 2,
      versatil: 8
    },
    perfil:
      "https://i.pinimg.com/564x/3b/48/10/3b481040f8397f39c7414c92984a2901.jpg"
  },
  {
    cor: "Azul Anti-Trunfo",
    color: "#2962FF",
    humor: {
      alegria: 2,
      tristeza: 8,
      versatil: 7
    },
    perfil:
      "https://i.pinimg.com/564x/37/5f/03/375f037feb407bb52b995e906f8d31b1.jpg"
  },
  {
    cor: "Verde",
    color: "#1B5E20",
    humor: {
      alegria: 5,
      tristeza: 4,
      versatil: 3
    },
    perfil:
      "https://i.pinimg.com/564x/74/e0/de/74e0de8710caaae2684fe5cdb47953f7.jpg"
  },
  {
    cor: "Amarelo",
    color: "#EEFF41",
    humor: {
      alegria: 10,
      tristeza: 1,
      versatil: 4
    },
    perfil:
      "https://i.pinimg.com/564x/c0/71/56/c071562500da0f72fbecd64216dc09a7.jpg"
  },
  {
    cor: "laranja",
    color: "#DD2C00",
    humor: {
      alegria: 7,
      tristeza: 2,
      versatil: 6
    },
    perfil:
      "https://i.pinimg.com/564x/90/1c/de/901cde3f7cefb91d629de8447f046f40.jpg"
  },
  {
    cor: "Roxo",
    color: "#6A1B9A",
    humor: {
      alegria: 5,
      tristeza: 7,
      versatil: 6
    },
    perfil:
      "https://i.pinimg.com/236x/0e/70/66/0e7066541e37a93a8fe0f1539169f73f.jpg"
  },
  {
    cor: "Marrom Super-Trunfo",
    color: "#6D4C41",
    humor: {
      alegria: 8,
      tristeza: 9,
      versatil: 10
    },
    perfil:
      "https://i.pinimg.com/564x/3c/0d/e9/3c0de9e4639e50a0910688a497d240cd.jpg"
  },
  {
    cor: "Branco",
    color: "white",
    humor: {
      alegria: 8,
      tristeza: 2,
      versatil: 9
    },
    perfil:
      "https://i.pinimg.com/564x/c9/9a/d9/c99ad9f67e6942035b2446870d63b54b.jpg"
  },
  {
    cor: "Preto",
    color: "black",
    humor: {
      alegria: 1,
      tristeza: 9,
      versatil: 10
    },
    perfil:
      "https://i.pinimg.com/564x/89/45/2c/89452cc4d3da83c46426648c0cd8f7d5.jpg"
  }
];

// console.log(cartas[1].atributos.ataque);

// Preparando os Decks
//var cartaJogador;
var deckJogador = [];
//var cartaMaquina;
var deckMaquina = [];

// Essa função embaralha as cartas
function embaralhar() {
  // console.log(cartas);
  cartas = cartas.sort(() => Math.random() - 0.5);
  // console.log(cartas);
  //return
}

// Quando o usuário clica no botão 'Sortear carta', essa função é chamada e rodada
function sortearCarta() {
  // Quando era somente uma carta para cada, o seguinte código funcionava:

  // Número aleatório para escolher as cartas de forma aleatória. Me lembra dos assuntos de probabilidade e amostragem, huh.
  // var indexCartaM = (Math.random() * cartas.length).toFixed(0);
  // var indexCartaJ = (Math.random() * cartas.length).toFixed(0);

  // E então, o computador seleciona as cartas dos jogadores usando os números aleatórios
  // cartaMaquina = cartas[indexCartaM];
  //console.log(cartaMaquina);
  // cartaJogador = cartas[indexCartaJ];
  //console.log(cartaJogador);

  // Aqui temos uma barreira, para quando os números do jogador e do computador forem iguais e, consequentemente, as cartas também
  // while (cartaMaquina == cartaJogador) {
  // O computador escolhe de novo um número e de novo define uma carta, e ele faz isso ENQUANTO as cartas forem iguais
  // indexCartaJ = (Math.random() * cartas.length).toFixed(0);
  // cartaJogador = cartas[indexCartaJ];
  //console.log(cartaJogador)
  // }

  // MAS, como queremos construir o jogo Super Trunfo, vamos fazer o seguinte:

  // primeiro embaralhamos
  embaralhar();

  // depois, distribuimos metade pro jogador e metade pra máquina
  for (var i = 0; i < cartas.length; i++) {
    if (i % 2 == 0) {
      deckJogador.push(cartas[i]);
    } else if (i % 2 != 0) {
      deckMaquina.push(cartas[i]);
    }
  }
  // console.log(deckJogador);
  // console.log(deckMaquina);

  document.getElementById("msg").innerHTML = "Escolha o seu atributo";

  // Bloqueamos o botão de sortear carta e desbloqueamos o de jogar
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  // E mostramos ao usuário sua carta, para iniciar a 1° rodada
  mostrarCarta("J", deckJogador);
}

// Essa função ficou um pouco grande, mas eh porque ela vale tanto para o jogador quanto para a maquina, respeitando os diferentes detalhes, eh claro
function mostrarCarta(quem, deck) {
  var opcoes;
  var opcoesHumor = "";
  var start = `
  <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;"><h3 class = "carta-texto" style="color:${deck[0].color};">${deck[0].cor}</h3><br>`;

  // Para caso o quem seja o Jogador
  if (quem == "J") {
    opcoes = document.getElementById("carta-jogador");
    // console.log(opcoes);

    for (var humor in deck[0].humor) {
      // console.log(humor);
      opcoesHumor += `<div><input type="radio"name="humorJ" value="${humor}">${humor}  ${deck[0].humor[humor]}</div><br>`;
    }

    var mao = `<p class="mao">Você tem<br>${deck.length}<br>cartas</p>`;

    // Para caso o quem seja a Máquina
  } else if (quem == "M") {
    opcoes = document.getElementById("carta-maquina");
    // console.log(opcoes);

    for (var humor in deck[0].humor) {
      // console.log(humor);
      opcoesHumor += `<p type="text" id="opcao" name="humorM" value="${humor}">${humor}  ${deck[0].humor[humor]}<br>`;
    }

    var mao = `<p class="mao">Oponente tem ${deck.length}<br>cartas</p>`;
  }

  opcoes.style.backgroundImage = `url(${deck[0].perfil})`;
  opcoes.innerHTML = `${start}`;
  opcoes.innerHTML += `<div id="status" class="carta-status">
    ${opcoesHumor}
    </div>${mao}`;
}

function next() {
  checkVictory();
  document.getElementById("btnReset").disabled = true;

  var maquina = document.getElementById("carta-maquina");

  maquina.innerHTML = `<img src="https://i.pinimg.com/564x/67/b6/fe/67b6fe574a82f9b710f1a908bef45e67.jpg" style=" width: inherit; height: inherit; position: absolute;">
            <h3></h3>`;
  maquina.style.backgroundImage = "";

  var jogador = document.getElementById("carta-jogador");

  jogador.innerHTML = `<img src="https://i.pinimg.com/564x/67/b6/fe/67b6fe574a82f9b710f1a908bef45e67.jpg" style=" width: inherit; height: inherit; position: absolute;">

            <h3></h3>`;
  jogador.style.backgroundImage = "";
  document.getElementById("resultado").innerHTML = "";

  mostrarCarta("J", deckJogador);

  document.getElementById(
    "botoes"
  ).innerHTML = `<button class="button-jogar" type="button" id="btnJogar" onclick="jogar()" disabled="false">Jogar</button><button type="button" id="btnReset" onclick="resetar()" disabled="false">Resetar</button>`;
  document.getElementById("btnJogar").disabled = false;

  if (
    deckJogador[0].cor == "Marrom Super-Trunfo" ||
    deckMaquina[0].cor == "Marrom Super-Trunfo"
  ) {
    jogar();
  }
}

// Essa função pega os atributos da carta, ou humor da cor, como quiser chamar
function pegaHumor() {
  var radioHumor = document.getElementsByName("humorJ");
  // console.log(radioHumor)

  for (var i = 0; i < radioHumor.length; i++) {
    if (radioHumor[i].checked == true) {
      // console.log(radioHumor[i])
      return radioHumor[i].value;
    }
  }
}

// Criei a variável aqui pra que ela estaja no escopo global
var humorSelected = "";

// Vamos jogar?
function jogar() {
  if (deckJogador[0].cor == "Marrom Super-Trunfo") {
    if (deckMaquina[0].cor == "Azul Anti-Trunfo") {
      document.getElementById(
        "resultado"
      ).innerHTML = `<p class="resultado-final">Você perdeu!</p>`;
      mostrarCarta("M", deckMaquina);

      var cartaEmMudanca = deckJogador.slice(0, 1);
      // console.log(cartaEmMudanca[0]);
      deckJogador.splice(0, 1);
      deckMaquina.push(cartaEmMudanca[0]);

      document.getElementById("btnJogar").disabled = true;
      document.getElementById("btnReset").disabled = false;
      document.getElementById(
        "botoes"
      ).innerHTML += `<button type="button" onclick="next()">Próximo</button>`;

      cartaEmMudanca = deckMaquina.slice(0, 1);
      deckMaquina.splice(0, 1);
      deckMaquina.push(cartaEmMudanca[0]);
    } else {
      document.getElementById(
        "resultado"
      ).innerHTML = `<p class="resultado-final">Você venceu!</p>`;
      mostrarCarta("M", deckMaquina);

      var cartaEmMudanca = deckMaquina.slice(0, 1);
      // console.log(cartaEmMudanca[0]);
      deckMaquina.splice(0, 1);
      deckJogador.push(cartaEmMudanca[0]);
      // console.log(deckMaquina[0]);
      // console.log(deckJogador[5]);
      document.getElementById("btnJogar").disabled = true;
      document.getElementById("btnReset").disabled = false;
      document.getElementById(
        "botoes"
      ).innerHTML += `<button type="button" onclick="next()">Próximo</button>`;

      cartaEmMudanca = deckJogador.slice(0, 1);
      deckJogador.splice(0, 1);
      deckJogador.push(cartaEmMudanca[0]);
    }
  } else if (deckMaquina[0].cor == "Marrom Super-Trunfo") {
    if (deckJogador[0].cor == "Azul Anti-Trunfo") {
      document.getElementById(
        "resultado"
      ).innerHTML = `<p class="resultado-final">Você venceu!</p>`;
      mostrarCarta("M", deckMaquina);

      var cartaEmMudanca = deckMaquina.slice(0, 1);
      // console.log(cartaEmMudanca[0]);
      deckMaquina.splice(0, 1);
      deckJogador.push(cartaEmMudanca[0]);
      // console.log(deckMaquina[0]);
      // console.log(deckJogador[5]);
      document.getElementById("btnJogar").disabled = true;
      document.getElementById("btnReset").disabled = false;
      document.getElementById(
        "botoes"
      ).innerHTML += `<button type="button" onclick="next()">Próximo</button>`;

      cartaEmMudanca = deckJogador.slice(0, 1);
      deckJogador.splice(0, 1);
      deckJogador.push(cartaEmMudanca[0]);
    } else {
      document.getElementById(
        "resultado"
      ).innerHTML = `<p class="resultado-final">Você perdeu!</p>`;
      mostrarCarta("M", deckMaquina);

      var cartaEmMudanca = deckJogador.slice(0, 1);
      // console.log(cartaEmMudanca[0]);
      deckJogador.splice(0, 1);
      deckMaquina.push(cartaEmMudanca[0]);

      document.getElementById("btnJogar").disabled = true;
      document.getElementById("btnReset").disabled = false;
      document.getElementById(
        "botoes"
      ).innerHTML += `<button type="button" onclick="next()">Próximo</button>`;

      cartaEmMudanca = deckMaquina.slice(0, 1);
      deckMaquina.splice(0, 1);
      deckMaquina.push(cartaEmMudanca[0]);
    }
  } else {
    humorSelected = pegaHumor();
    // console.log(humorSelected);
    // console.log(cartaJogador.humor[humorSelected]);

    // Eu filtrei aquele bug de quando não se escolhe um humor antes de apertar o btnJogar
    if (humorSelected != undefined) {
      var resultado = document.getElementById("resultado");
      var valorCartaJ = deckJogador[0].humor[humorSelected];
      var valorCartaM = deckMaquina[0].humor[humorSelected];

      // Ainda está em processo de edição esse código.
      if (valorCartaM < valorCartaJ) {
        resultado.innerHTML = `<p class="resultado-final">Você venceu!</p>`;
        mostrarCarta("M", deckMaquina);

        var cartaEmMudanca = deckMaquina.slice(0, 1);
        // console.log(cartaEmMudanca[0]);
        deckMaquina.splice(0, 1);
        deckJogador.push(cartaEmMudanca[0]);
        // console.log(deckMaquina[0]);
        // console.log(deckJogador[5]);
        document.getElementById("btnJogar").disabled = true;
        document.getElementById("btnReset").disabled = false;
        document.getElementById(
          "botoes"
        ).innerHTML += `<button type="button" onclick="next()">Próximo</button>`;

        cartaEmMudanca = deckJogador.slice(0, 1);
        deckJogador.splice(0, 1);
        deckJogador.push(cartaEmMudanca[0]);
      } else if (valorCartaM > valorCartaJ) {
        resultado.innerHTML = `<p class="resultado-final">Você perdeu!</p>`;
        mostrarCarta("M", deckMaquina);

        var cartaEmMudanca = deckJogador.slice(0, 1);
        // console.log(cartaEmMudanca[0]);
        deckJogador.splice(0, 1);
        deckMaquina.push(cartaEmMudanca[0]);

        document.getElementById("btnJogar").disabled = true;
        document.getElementById("btnReset").disabled = false;
        document.getElementById(
          "botoes"
        ).innerHTML += `<button type="button" onclick="next()">Próximo</button>`;

        cartaEmMudanca = deckMaquina.slice(0, 1);
        deckMaquina.splice(0, 1);
        deckMaquina.push(cartaEmMudanca[0]);
      } else {
        resultado.innerHTML = `<p class="resultado-final">Empatou! Escolha outro atributo para desempatar.</p><br>`;
        document.getElementById("btnJogar").disabled = true;
        document.getElementById("btnReset").disabled = false;
        document.getElementById(
          "botoes"
        ).innerHTML += `<button type="button" id="btnDesempatar" onclick="desempatar()">Desempatar</button>`;
      }
      // console.log(cartaMaquina);
    } else {
      alert("Selecione um humor se quiser jogar!");
    }
  }
  checkVictory();
}

function desempatar() {
  // console.log(humorSelected);
  var novoHumor = pegaHumor();
  if (humorSelected == novoHumor) {
    alert("Você deve escolher um atributo diferente.");
  } else {
    document.getElementById("btnDesempatar").disabled = true;
    var valorCartaJ = deckJogador[0].humor[novoHumor];
    var valorCartaM = deckMaquina[0].humor[novoHumor];
    var resultado = document.getElementById("resultado");

    if (valorCartaM < valorCartaJ) {
      resultado.innerHTML = `<p class="resultado-final">Você venceu!</p>`;
      mostrarCarta("M", deckMaquina);

      var cartaEmMudanca = deckMaquina.slice(0, 1);
      deckMaquina.splice(0, 1);
      deckJogador.push(cartaEmMudanca[0]);
      document.getElementById("btnJogar").disabled = true;
      document.getElementById("btnReset").disabled = false;
      document.getElementById(
        "botoes"
      ).innerHTML += `<button type="button" onclick="next()">Próximo</button>`;

      cartaEmMudanca = deckJogador.slice(0, 1);
      deckJogador.splice(0, 1);
      deckJogador.push(cartaEmMudanca[0]);
    } else if (valorCartaM > valorCartaJ) {
      resultado.innerHTML = `<p class="resultado-final">Você perdeu!</p>`;
      mostrarCarta("M", deckMaquina);

      var cartaEmMudanca = deckJogador.slice(0, 1);
      deckJogador.splice(0, 1);
      deckMaquina.push(cartaEmMudanca[0]);

      document.getElementById("btnJogar").disabled = true;
      document.getElementById("btnReset").disabled = false;
      document.getElementById(
        "botoes"
      ).innerHTML += `<button type="button" onclick="next()">Próximo</button>`;

      cartaEmMudanca = deckMaquina.slice(0, 1);
      deckMaquina.splice(0, 1);
      deckMaquina.push(cartaEmMudanca[0]);
    }
  }
  checkVictory();
}

function checkVictory() {
  var form = document.getElementById("form");
  if (deckMaquina.length == 0) {
    form.innerHTML = `<img src="https://i.pinimg.com/originals/54/82/e7/5482e7e72cedcebc22cd49cd012c19bc.gif"><h2>Parabéns, você ganhou o jogo!!</h2>`;
    form.innerHTML += `<button type="button" id="btnReset" onclick="resetar()">Resetar</button>`;
  } else if (deckJogador.length == 0) {
    form.innerHTML = `<img src="https://i.pinimg.com/originals/b5/f5/60/b5f5605a2ac1bba9f30029ecf280de2c.gif">`;
    form.innerHTML += `<button type="button" id="btnReset" onclick="resetar()">Resetar</button>`;
  }
}

// E aqui está a função que limpa tudo e deixa a tela igual ao início
function resetar() {
  var box = document.getElementById("box");
  box.innerHTML = "";
  box.innerHTML = `<form id="form">
      <h2 id="msg">Regras do jogo: As cartas são sorteadas e distribuidas aos jogadores. A cada rodada, o jogador deve escolher um atributo, e vence a rodada quem possui o maior valor. Quando houver empate, o jogador deve escolher outro atributo, para desempatar. O perdedor entrega a carta abatida ao vencedor, que deve coloca-la no final de seu baralho, assim como a carta vencedora. Há duas cartas especiais no jogo, a Super-Trunfo, que ganha de todas as cartas exceto uma, a Anti-Trunfo. Vence o jogo quem tiver em mãos todas as cartas.</h2>
      <div class="wrapper">
        <div>
          <div id="carta-jogador">
            <img src="https://i.pinimg.com/564x/67/b6/fe/67b6fe574a82f9b710f1a908bef45e67.jpg" style=" width: inherit; height: inherit; position: absolute;">
            <h3></h3>
          </div>
        </div>
        <div>
          <div id="carta-maquina" class="carta"><img src="https://i.pinimg.com/564x/67/b6/fe/67b6fe574a82f9b710f1a908bef45e67.jpg" style=" width: inherit; height: inherit; position: absolute;"></div>
        </div>
      </div>
      <div id="botoes">
        <button class="button-jogar" type="button" id="btnJogar" onclick="jogar()" disabled="false">Jogar</button><button type="button" id="btnReset" onclick="resetar()" disabled="false">Resetar</button>
      </div>
      <div id="resultado">
      </div>
    </form>`;

  document.getElementById("btnSortear").disabled = false;

  embaralhar();
  deckJogador = [];
  deckMaquina = [];
}