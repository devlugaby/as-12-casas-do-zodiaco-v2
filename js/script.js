function descobrirCDZ(){

    const texto = document.querySelector("h1");
    const texto2 = document.querySelector("p");
    const imagem = document.querySelector("img");
    const dia = document.querySelector('#dia').value;
    const mes = document.querySelector('#mes').value;
    const data = "2023"+"/"+mes+"/"+dia;
    
    // Para a comparação de datas, deve-se levar em consideração a sequência aceita no JS para datas: ANO/MÊS/DIA ou apenas MÊS/DIA.
    
    if (data >="2023/05/21" && data <= "2023/06/20" ) {
        texto.innerHTML = "Você é de Gêmeos!";
        texto2.innerHTML ="O Cavaleiro de Gêmeos sofreu tanto quanto causou dor. Vítima de um 'distúrbio de personalidade', acabou sendo o responsável por uma guerra que poderia ter levado à morte da própria Atena. Será que você é igual?"
        imagem.setAttribute("src","img/gemeos.webp");
        imagem.setAttribute("width","300px");
    }
    else if (data >="2023/10/23" && data <= "2023/11/21" ) {
        texto.innerHTML = "Você é de Escorpião!";
        texto2.innerHTML ="Milo é claramente um Cavaleiro nobre. Ao lutar contra Hyoga, o defensor da casa de Escorpião admira a determinação e o poder do Cavaleiro de Cisne, permitindo que ele avance mesmo após ter sido destroçado pelo Cavaleiro de Ouro. Será que você é igual?"
        imagem.setAttribute("src","img/escorpiao.webp");
        imagem.setAttribute("width","300px");
    }
    else if (data >= "2023/02/19" && data <= "2023/03/20" ) {
        texto.innerHTML = "Você é de Peixes!";
        texto2.innerHTML ="Após tantas batalhas épicas que precedem o duelo na casa de Peixes, há uma certa sensação de frustração quando finalmente assistimos à luta entre Afrodite e Shun, que serve apenas para nos lembrar do quão poderoso é o cavaleiro de Andrômeda. Será que você é igual?"
        imagem.setAttribute("src","img/peixes.webp");
        imagem.setAttribute("width","300px");
    }
    else if (data >= "2023/03/21" && data <= "2023/04/20" ) {
        texto.innerHTML = "Você é de Áries!";
        texto2.innerHTML ="Se não fosse pelos reparos que Mú fez nas armaduras de bronze, talvez os cavaleiros não tivessem chance alguma contra os demais Cavaleiros de Ouro. Será que você é igual?"
        imagem.setAttribute("src","img/aries.webp");
        imagem.setAttribute("width","300px");
    }
    else if (data >= "2023/12/22" && data <= "2023/01/20" ) {
        texto.innerHTML = "Você é de Capricórnio!";
        texto2.innerHTML ="Constantemente menosprezado, o portador da espada santa Excalibur cometeu uma série de erros -- como tentar matar Atena e, de certa forma, ter matado Aiolos. Será que você é igual?"
        imagem.setAttribute("src","img/capricornio.webp");
        imagem.setAttribute("width","300px");
    }
    else if (data >= "2023/11/22" && data <= "2023/12/21" ) {
        texto.innerHTML = "Você é de Sagitário!";
        texto2.innerHTML ="Aiolos de Sagitário é a encarnação de dois conceitos fundamentais para a história de Cavaleiros do Zodíaco: lealdade e determinação. Mesmo gravemente ferido, o Cavaleiro de Sagitário se esforça ao máximo para salvar a bebê Atena do Mestre do Santuário, sendo atacado por muitos de seus colegas no processo. Será que você é igual?"
        imagem.setAttribute("src","img/sagitario.webp");
        imagem.setAttribute("width","300px");
    }
    else if (data >= "2023/04/21" && data <= "2023/05/20" ) {
        texto.innerHTML = "Você é de Touro!";
        texto2.innerHTML ="Quando apareceu pela primeira vez em Os Cavaleiros do Zodíaco, o brasileiro (sim!) Aldebaran nos mostrou como funcionava, de certa forma, a mente dos Cavaleiros de Ouro. Será que você é igual?"
        imagem.setAttribute("src","img/touro.webp");
        imagem.setAttribute("width","300px");
    }
    else if (data >= "2023/01/21" && data <= "2023/02/18" ) {
        texto.innerHTML = "Você é de Aquário!";
        texto2.innerHTML ="Quem é Sub-Zero perto de Camus? O mestre do mestre de Hyoga é tranquilamente um dos mais poderosos Cavaleiros de Ouro, o que fica claro tanto durante a saga do Santuário quanto durante os primeiros episódios da saga de Hades. Será que você é igual?"
        imagem.setAttribute("src","img/aquario.webp");
        imagem.setAttribute("width","300px");
    }
    else if (data >= "2023/07/23" && dia <= "2023/08/22" ) {
        texto.innerHTML = "Você é de Leão!";
        texto2.innerHTML ="Favorito de muitos dos fãs, o irmão de Aiolos travou um duelo inesquecível com Seiya, na casa de Leão, o que bastou para torná-lo um dos Cavaleiros de Ouro mais memoráveis da franquia. Será que você é igual?"
        imagem.setAttribute("src","img/leao.webp");
        imagem.setAttribute("width","300px");
    }
    else if (data >= "2023/06/21" && data <= "2023/07/22" ) {
        texto.innerHTML = "Você é de Câncer!";
        texto2.innerHTML ="Esta talvez seja a única unanimidade garantida na lista. Derrotado por Shiryu em um duelo memorável, Máscara da Morte infelizmente carece do carisma e das habilidades que tornam fascinantes todos os seus companheiros dourados. Será que você é igual?"
        imagem.setAttribute("src","img/cancer.webp");
        imagem.setAttribute("width","300px");
    }
    else if (data >= "2023/09/23" && data <= "2023/10/22" ) {
        texto.innerHTML = "Você é de Libra!";
        texto2.innerHTML ="O aparentemente inofensivo Mestre Ancião nada mais é do que Dohko, o cavaleiro de Libra. Absurdamente poderoso e responsável, o mentor de Shiryu encantou os fãs tanto na forma como o conhecemos, já velhinho e supostamente frágil, quanto atuando no campo de batalha durante a saga de Hades. Será que você é igual?"
        imagem.setAttribute("src","img/libra.webp");
        imagem.setAttribute("width","300px");
    }
    else if (data >= "2023/08/23" && data <= "2023/09/22" ) {
        texto.innerHTML = "Você é de Virgem!";
        texto2.innerHTML ="O Cavaleiro Mais Próximo de Deus já demonstrou, em mais de uma ocasião, que é, sim, o Cavaleiro de Ouro mais poderoso da geração à qual pertence. Será que você é igual?"
        imagem.setAttribute("src","img/virgem.webp");
        imagem.setAttribute("width","300px");
    }
    else {
        texto.innerHTML = "Deu ruim... =(";
        texto2.innerHTML = " Aparentemente não tem nenhum cavaleiro nessa data. Tente novamente.";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","300px");
    }
    }