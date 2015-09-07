function Animal(){

}

var animalPrototipo={
    fazerBarulho : function(){
        throw 'Deve ser implementado';
    }
}


function Cao(){

}
var caoPrototipo={
    fazerBarulho : function(){
        return 'Au au au';
    }
}



function Gato(){

}
var gatoPrototipo={
    fazerBarulho : function(){
        return 'mew mew mew';
    }
}

function Manada(){
    this.listaAnimais = [];
}
var manadaPrototipo = {
    adicionarAnimal : function(Animal){
        this.listaAnimais.push(Animal);
    }
}

function manadaVirgula(){
    this.somvirgula = '';
}
var manadaVirgulaPrototipo = {
    imprimirSonsVirgula : function(lista){
        for(var j=0; j < lista.length; j++){
            if(j === lista.length-1){
                this.somvirgula += lista[j].fazerBarulho()+'.';
            }
            else{
                this.somvirgula += lista[j].fazerBarulho()+' , ';
            }
        }
    }
}

function manadaSustenido(){
    this.somsustenido = '';
}
var manadaSustenidoPrototipo = {
    imprimirSonsSustenido : function(lista){
        for (var i = 0; i < lista.length; i++){
           if(i === lista.length-1){
               this.somsustenido += lista[i].fazerBarulho()+'.';
           }
            else{
               this.somsustenido += lista[i].fazerBarulho()+' # ';
           }
       }
    }
}
Animal.prototype = animalPrototipo;

Gato.prototype = gatoPrototipo;
Cao.prototype = caoPrototipo;

caoPrototipo.prototype = Animal.prototype;
gatoPrototipo.prototype = Animal.prototype;

Manada.prototype = manadaPrototipo;

manadaVirgula.prototype = manadaVirgulaPrototipo;
manadaSustenido.prototype = manadaSustenidoPrototipo;

manadaSustenidoPrototipo = Manada.prototype;
manadaVirgulaPrototipo = Manada.prototype;

var tob = new Cao();
var cat = new Gato();
var jack = new Cao();
var joe = new Gato()

var m = new Manada();

m.adicionarAnimal(tob);
m.adicionarAnimal(cat);
m.adicionarAnimal(jack);
m.adicionarAnimal(joe);


var f = new manadaSustenido();
f.imprimirSonsSustenido(m.listaAnimais);
console.log(f.somsustenido);

var g = new manadaVirgula();
g.imprimirSonsVirgula(m.listaAnimais);
console.log(g.somvirgula);