
var bloco1,bloco2,bloco3,bloco4;
var bola, arestas;
var music;

function preload(){
    // carregue o som aqui
    music = loadSound("music.mp3");

}

function setup(){
    createCanvas(800,600);

    bloco1 = createSprite(0,580,360,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(250,580,180,30);
    bloco2.shapeColor = "orange";

    bloco3 = createSprite(420,580,180,30);
    bloco3.shapeColor = "red";

    bloco4 = createSprite(680,580,360,30);
    bloco4.shapeColor = "green";

    //crie aqui mais dois blocos, ou seja, bloco3 e bloco4

    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
    //escreva o código para adicionar velocityX e velocityY
    bola.velocityX = -4;
    bola.velocityY = 4;

}

function draw() {
    background(rgb(169,169,169));
    arestas=createEdgeSprites();
    bola.bounceOff(arestas);
    bola.bounceOff(bloco1);
    bola.bounceOff(bloco2);
    bola.bounceOff(bloco3);
    bola.bounceOff(bloco4);


    
    //escreva o código de ricochete de bola para bloco1 
    if(bloco1.isTouching(bola) && bola.bounceOff(bloco1)){
        bola.shapeColor = "blue";
        music.play();
    }


    if(bloco2.isTouching(bola)){
        bola.shapeColor = "orange";
        bola.velocityX = 0;
        bola.velocityY = 0;
        //escreva o código para definir velocityX e velocityY da bola como 0

        //escreva o código para parar a música
        music.stop();
    }

    //escreva o código de ricochete de bola para bloco3
    if(bloco3.isTouching(bola)){
        bola.shapeColor = "red";
        music.play();
    }

    //escreva o código de ricochete de bola para bloco4
    if(bloco4.isTouching(bola)){
        bola.shapeColor = "green";
        music.play();
    }


    drawSprites();
}