const criptoMap = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

function criptografarTexto(texto) {
    texto = texto.toLowerCase();

    const textoCriptografado = texto.split('').map(caractere => criptoMap[caractere] || caractere).join('');

    return textoCriptografado;
}



function descriptografarTexto(texto) {
    texto = texto.toLowerCase();

    const textoDescriptografado = texto.replace(/enter/g, "e")
                                .replace(/imes/g, "i")
                                .replace(/ai/g, "a")
                                .replace(/ober/g, "o")
                                .replace(/ufat/g, "u");

    return textoDescriptografado;
}

function criptografa() {
    const inputTexto = document.getElementById('inserir_texto');
    const conteudoResposta = document.getElementById('conteudo__resposta');
    const respostaTexto = document.getElementById('resposta__texto');
    const copiar = document.getElementById('botao__copiar');

    const textoDigitado = inputTexto.value.trim();

    if (textoDigitado !== '') {
        const textoCriptografado = criptografarTexto(textoDigitado);

        conteudoResposta.innerHTML = '';

        respostaTexto.value = textoCriptografado;

        respostaTexto.style.display = 'block';

        copiar.style.display = 'block'

    } else {
        
        respostaTexto.style.display = 'none';

        copiar.style.display = 'none';

        conteudoResposta.innerHTML = `
            <h2 class="sub-titulo__resposta">Nenhuma Mensagem encontrada</h2>
            <p class="paragrafo__resposta">Digite o texto que você deseja criptografar.</p>
            <img src="images/img3.png" alt="">
        `;
    }
}

function descriptografar() {
    const inputTexto = document.getElementById('inserir_texto');
    const conteudoResposta = document.getElementById('conteudo__resposta');
    const respostaTexto = document.getElementById('resposta__texto');
    const copiar = document.getElementById('botao__copiar');

    const textoDigitado = inputTexto.value.trim();

    if (textoDigitado !== '') {
        const textoDescriptografado = descriptografarTexto(textoDigitado);

        conteudoResposta.innerHTML = '';

        respostaTexto.value = textoDescriptografado;

        respostaTexto.style.display = 'block';
        
        copiar.style.display = 'block';

    } else {

        respostaTexto.style.display = 'none';
        copiar.style.display = 'none';


        conteudoResposta.innerHTML = `
            <h2 class="sub-titulo__resposta">Nenhuma Mensagem encontrada</h2>
            <p class="paragrafo__resposta">Digite o texto que você deseja descriptografar.</p>
            <img src="images/img3.png" alt="">
        `;
    }
}


function copiarTexto() {

    const textoCopiado = document.getElementById('resposta__texto');
    textoCopiado.select();

    try {

        navigator.clipboard.writeText(textoCopiado.value)
            .then(function() {
                alert('Texto copiado com sucesso!');
                window.getSelection().removeAllRanges();
            })
            .catch(function(err) {
                console.error('Erro ao copiar o texto:', err);
            });
            
    } catch (err) {
        console.error('Erro ao executar o comando de cópia:', err);
    }
}