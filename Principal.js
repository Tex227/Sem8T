var juego= new Phaser.Game(370, 550, Phaser.CANVAS, 'bloque_juego');
var fondoJuego;
var boton;
var Nave;
var teclaDerecha;
var teclaIzquierda;
var teclaArriba;
var teclaAbajo;
var musica;

var estadoPrincipal={
    preload: function (){
    //juego.stage.backgroundColor="#000";
    juego.load.image('fondo', 'img/Fond.jpeg');
    juego.load.spritesheet('naves', 'img/pajaro.png', 43, 30);
    juego.load.audio('musicaFondo', 'Flip.mp3');
    },

    create: function(){
     musica = juego.add.audio('musicaFondo');
        musica.loop = true;
        musica.play();
    fondoJuego=juego.add.tileSprite(0,0,370,550,'fondo');
    flappy=juego.add.sprite(100,100,'naves');

    flappy.frame=1;
    flappy.animations.add('vuelo',[0,1,2],10,true);

    teclaDerecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    teclaIzquierda = juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    teclaArriba = juego.input.keyboard.addKey(Phaser.Keyboard.UP);
    teclaAbajo = juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    
    },

    update: function(){
    fondoJuego.tilePosition.x-=1;
    flappy.animations.play('vuelo');

    if (teclaDerecha.isDown) {
        flappy.x++;
    }
    else if (teclaIzquierda.isDown) {
        flappy.x--;
    }
    else if (teclaArriba.isDown) {
        flappy.y--;
    }
    else if (teclaAbajo.isDown) {
        flappy.y++;
    }
   }
};

 juego.state.add('principal',estadoPrincipal);

 juego.state.start('principal');
