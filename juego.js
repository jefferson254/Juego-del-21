class Palo {
    constructor(figura=[]) {
        this.figura = figura;
    }
}
class Carta{
constructor(valores=[]){
    this.crear=valores;
    }
}
class Letras {
    //contiene las letras de la baraja es su valor de las cartas 
    constructor( 
        letraEspecial =["A"], numeros = ['2','3','4','5','6','7','8','9','10',],
        letrasMayores = [" J " , " Q " , " K " ],){ 
            //contener los valores
            this.valorA=letraEspecial;
            this.valornum=numeros;
            this.valorLetra=letrasMayores;
        }
}
class Naipe {
    constructor(valor=[2,3,4,5,6,7,8,9,10], numespecial =[1,11], numrepetir=[10]) {
        this.valores = valor;
        this.especial = numespecial;
        this.repetir = numrepetir;
    }
}
class Fabrica {
    //lleva las 52 cartas concatenadas 
    baraja = [];
    //del objeto simbolo va ingresar ala clase palo  
    //voy a obtener la variable figura y le voy a  
    //agregar un valor con el push 
    simblo = [simbolo.figura.push( ' Corazones '),
         simbolo.figura.push( ' Treboles '),
         simbolo.figura.push(' Diamantes '),
         simbolo.figura.push(' Pica '),
        
    ];
    //las dos cartas aleatoria de la baraja
    palo1
    palo2
    //variable de pedir
    pedir1

    // metodo crea la baraja de 52 cartas
crear(){
    for(let i=0;i<4;i++){
    // valores de A del 1 ,11
    for(let j=0;j<2;j++){
    // de la varible carta va CONCATENER CON SIMBOLO y el valor
    //letras  ,,, simbolos,, valoress
    let carta=letra.valorA[0].concat(simbolo.figura[i]).concat(valor.especial[j])
    //instaciar la clase carta 
    // el nombre de la variable let servira para solo ese metodo
     let crearcarta= new Carta(carta);
     this.baraja.push(crearcarta);
            }
        }
        // del 2 al 10
        for(let i=0;i<4;i++){
            for(let j=0;j<9;j++){
                let carta=letra.valornum[j].concat(simbolo.figura[i]).concat(valor.valores[j])
             let crearcarta= new Carta(carta);
             this.baraja.push(crearcarta);
            }
        }
        //letras especiales
     for(let i=0;i<4;i++){
        for(let j=0;j<3;j++){
        let carta=letra.valorLetra[j].concat(simbolo.figura[i]).concat(valor.repetir[0])
        let crearcarta= new Carta(carta);
            this.baraja.push(crearcarta);
      
    }
}
console.log(this.baraja)
}
//metodo mezclar
mezclar(){
    // crar un numero aleatorio
    //me dara cualquier carta con * el *
    //length me dice cuanto elemento tiene un array 
    let numeroaletorio = Math.floor(Math.random()*this.baraja.length);
    //recibe un numero aleatorio  de la posicion de mi baraja 
    this.palo1=this.baraja[numeroaletorio]['crear'];
    let simboloaleatorio = Math.floor(Math.random()*this.baraja.length);
    this.palo2=this.baraja[simboloaleatorio]['crear'];
    //
    mezclar.innerHTML = this.baraja

    // va imprimir las cartas aleatroiamente
    console.log(this.palo1);
    console.log(this.palo2);

}

pedir(){
    let numeroaletorio = Math.floor(Math.random()*this.baraja.length)
    this.pedir1=this.baraja[numeroaletorio]['crear'];
    pedir.innerHTML = this.baraja
    console.log(this.pedir1);

}
validar(){
    let contener
     for (let i=0;i<4;i++){
         //mi variable contener de mi objeto juego va ingresar variable baraja 
         // que sea de las primeras posiciones de las cartas va ser su valor 
         // de la clase Naipe
         contener = juego.baraja[i]['crear']=valor.especial;
         //solo un valor
         console.log(parseInt(contener));
     }
     //del 2 al 10 solo se convierte en valores
     for(let n=4;n<40;n++){
         contener= parseInt(juego.baraja[n]['crear']);
        console.log(contener);
     }

    //palo1 tiene mi carta parseInt va convetir el valor de mi carta va convertir a valor en numero
    let convertirnum= parseInt(this.palo1);
    let convertirnum2= parseInt(this.palo2);
    let perdirvalor=parseInt(this.pedir);
    let sumar = convertirnum + convertirnum2 ;
    let sum1 =  convertirnum + convertirnum2  +perdirvalor ;
 
     console.log(sumar);
     console.log(sum1);
    
     if(sum1<21){
        alert ("Pierdistee")
    
    } 
    if (sum1==21){
        alert ("TIenes 21 Win....") 
    }
   
    if(sumar>21){
        alert ("te pasaste")
    } 
    if (sumar< 21){
        alert ("Intenta de nuevo") 
    }
    if (sumar== 21){
        alert ("GANASTE") 
    }

    console.log(convertirnum);
    console.log(convertirnum2);
    console.log(perdirvalor);
    


        

}
}

 let simbolo = new Palo();
 let valor = new Naipe();
 let letra = new Letras();
 let juego = new Fabrica();
 
 // crear automaticamente las 52 cartas 
 juego.crear()
 //

 