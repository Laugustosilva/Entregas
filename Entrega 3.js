function ouvintes(){
    this.ouvintes = [];
    this.contador = 1;
}

ouvintesPrototipo = {
    adicionarOuvintes : function(funcao){
        this.ouvintes.push(funcao);
    },
    contar : function(){
        var objeto = this;
        for(var c = 0; c < objeto.ouvintes.length; c++){
            console.log('O objeto foi executado '+ objeto.contador + ' vezes.');
        }
        this.contador ++;
    }
}

function observador(){

}
var observadorPrototipo = {
    contar : function(contador){
        console.log(contador);
    }
}

ouvintes.prototype = ouvintesPrototipo;
observador.prototype = observadorPrototipo;

var o = new ouvintes();
var ob1 = new observador();
var ob2 = new observador();
var ob3 = new observador();
var ob4 = new observador();

o.adicionarOuvintes(ob1);
o.contar();
o.adicionarOuvintes(ob2);
o.contar();
o.adicionarOuvintes(ob3);
o.contar();
o.adicionarOuvintes(ob4);
o.contar();
