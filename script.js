function Verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('anonasc')

  var res = document.getElementById('res')
  if(fano.value.length == 0 || Number(fano.value) > ano){
    window.alert('[ERRO] Verifique os dados e tente novamante!')
  }else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fsex[0].checked){
      genero = 'Homem'
      if(idade >= 0 && idade < 10){
        //criança
        img.setAttribute('src', 'imagens/homemcriança.png')
      }else if(idade < 21){
        //Jovem
        img.setAttribute('src', 'imagens/homem.png')
      }else if(idade < 50){
        //Adulto
        img.setAttribute('src', 'imagens/homemjovem.png')
      }else{
        //Idoso
        img.setAttribute('src', 'imagens/homemvelho.png')
      }
     }else if(fsex[1].checked){
      genero = 'Mulher'
      if(idade >= 0 && idade < 10){
        //criança
        img.setAttribute('src', 'imagens/mulhercriança.png')
      }else if(idade < 21){
        //Jovem
        img.setAttribute('src', 'imagens/mulherjovem.png')
      }else if(idade < 50){
        //Adulto
        img.setAttribute('src', 'imagens/mulher.png')
      }else{
        //Idoso
        img.setAttribute('src', 'imagens/mulhervelha.png')
      }
    }
    res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos!</p>`
    res.appendChild(img)
  }
}