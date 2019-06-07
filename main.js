function verificar(){
    var date = new Date();
    var year = date.getFullYear();
    var formYear = document.getElementById('nasc');
    var res = document.querySelector('div#res');

    if(formYear.value.length == 0 || Number(formYear.value) > year){

        alert('VERIFIQUE OS DADOS E TENTE NOVAMENTE!');

    } else {

        var formSex = document.getElementsByName('radsex');
        var age = year - Number(formYear.value);
        var genre = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'photo'); //cria um #photo para img

        if(formSex[0].checked){

            genre =  'Homem';

//adicionando imagens HOMEM

            if(age >= 0 && age < 10){

                img.setAttribute('src', 'img/02-menino.png');

            } else if (age < 21){

                img.setAttribute('src', 'img/04-rapaz.png');

            } else if (age <= 50){

                img.setAttribute('src', 'img/06-homem.png');

            } else {

                img.setAttribute('src', 'img/08-idoso.png');

            }

        } else {

            genre = 'Mulher';

// adicionando imagens MULHER

            if(age >= 0 && age < 10){

                img.setAttribute('src', 'img/01-menina.png');

            } else if(age < 21){

                img.setAttribute('src', 'img/03-moca.png');

            } else if (age <= 50){

                img.setAttribute('src', 'img/05-mulher.png')

            } else {

                img.setAttribute('src', 'img/07-idosa.png');

            }

        }

        res.innerHTML = `Detectamos ${genre} com ${age} anos de idade`;
        res.appendChild(img);//adiciona um elemento de imagem

    }
}