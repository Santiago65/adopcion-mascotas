
   var image1=[];
   var indice=0;
   var total =mascotas.length;
   console.log(mascotas);
   for (var i = 0; i < total; i++) {
    image1.push(mascotas[i]);
}
var texto="Soy un " + image1[indice].especie + " de tamaño " +image1[indice].tamanio +" , peso " + image1[indice].peso+ "<br>"+"Castrado: "+image1[indice].castrado + "<br>"+"Estoy enfermo: " + image1[indice].enfermedad + "<br>"+ "Vacunas: " + image1[indice].vacunas + "<br>"+ "Discapacidad: " + image1[indice].discapacidad + "<br>"+"Mis cualidades son : " + image1[indice].cualidades + "<br>"+ "Mi caracter es: "+ image1[indice].caracter+ ".";
$('.card-title').html(image1[indice].nombre);
$('.card-text').html(texto);
$('.sexo').html(image1[indice].sexo);
$('.edad').html(image1[indice].edad);
   //console.log(image1[0]);
   $('.foto').attr('src',image1[indice].url);

   $('.sgte').click( ()=>{

    if (indice < total) {
     indice++;
     if (indice === total-1) {
        /*$('.sgte').hide();*/
        indice = 0;
    }
    $('.foto').attr('src',mascotas[indice].url);
    $('.card-title').html(mascotas[indice].nombre);
    $('.sexo').html(mascotas[indice].sexo);
    $('.edad').html(mascotas[indice].edad);
    var texto="Soy un " + mascotas[indice].especie + " de tamaño " +mascotas[indice].tamanio +" , peso " + mascotas[indice].peso+ "<br>"+"Castrado: "+mascotas[indice].castrado + "<br>"+"Estoy enfermo: " + mascotas[indice].enfermedad + "<br>"+ "Vacunas: " + mascotas[indice].vacunas + "<br>"+ "Discapacidad: " + mascotas[indice].discapacidad + "<br>"+"Mis cualidades son : " + mascotas[indice].cualidades + "<br>"+ "Mi caracter es: "+ mascotas[indice].caracter+ ".";
    $('.card-text').html(texto);
    console.log([indice]);
}



}

);

   $('.atras').click( ()=>{
    if (indice <= 0) {
        indice=total-1;
        $('.foto').attr('src',mascotas[indice].url);
         $('.card-title').html(mascotas[indice].nombre);
          $('.sexo').html(mascotas[indice].sexo);
         $('.edad').html(mascotas[indice].edad);
         var texto="Soy un " + mascotas[indice].especie + " de tamaño " +mascotas[indice].tamanio +" , peso " + mascotas[indice].peso+ "<br>"+"Castrado: "+mascotas[indice].castrado + "<br>"+"Estoy enfermo: " + mascotas[indice].enfermedad + "<br>"+ "Vacunas: " + mascotas[indice].vacunas + "<br>"+ "Discapacidad: " + mascotas[indice].discapacidad + "<br>"+"Mis cualidades son : " + mascotas[indice].cualidades + "<br>"+ "Mi caracter es: "+ mascotas[indice].caracter+ ".";
         $('.card-text').html(texto);
        console.log([indice]);

    }
    else
    {
        indice=indice-1;
        $('.foto').attr('src',mascotas[indice].url);
         $('.card-title').html(mascotas[indice].nombre);
          $('.sexo').html(mascotas[indice].sexo);
          $('.edad').html(mascotas[indice].edad);
          var texto="Soy un " + mascotas[indice].especie + " de tamaño " +mascotas[indice].tamanio +" , peso " + mascotas[indice].peso+ "<br>"+"Castrado: "+mascotas[indice].castrado + "<br>"+"Estoy enfermo: " + mascotas[indice].enfermedad + "<br>"+ "Vacunas: " + mascotas[indice].vacunas + "<br>"+ "Discapacidad: " + mascotas[indice].discapacidad + "<br>"+"Mis cualidades son : " + mascotas[indice].cualidades + "<br>"+ "Mi caracter es: "+ mascotas[indice].caracter+ ".";
          $('.card-text').html(texto);
        console.log([indice]);
    }


}

);

