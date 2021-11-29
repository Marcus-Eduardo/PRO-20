var rato,ratoImg1,ratoImg2,ratoImg3,ratoImg4;
var gato,gatoImg1,gatoImg2,gatoImg3,gatoImg4;
var gardenImg;
function preload() {
    //carregue as imagens aqui
    ratoImg1 = loadAnimation("images/mouse1.png");
    ratoImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    ratoImg3 = loadAnimation("images/mouse4.png");
    gatoImg1 = loadAnimation("images/cat1.png");
    gatoImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    gatoImg3 = loadAnimation("images/cat4.png");
    gardenImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    rato = createSprite(200,650,20,20);
    rato.addAnimation("rato1",ratoImg1);
    rato.addAnimation("rato2",ratoImg2);
    rato.addAnimation("rato3",ratoImg3);
    rato.addA
    rato.scale = 0.2
    rato.debug = false;
    rato.setCollider("rectangle",50,50,500,500)
    

    gato = createSprite(800,650,20,20);
    gato.addAnimation("gato1",gatoImg1);
    gato.addAnimation("gato2",gatoImg2);
    gato.addAnimation("gato3",gatoImg3);
    gato.scale = 0.2

}

function draw() {

    background(gardenImg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    
    rato.display();
    gato.display();
    
    if(keyDown("left")){
        rato.changeAnimation("rato2",ratoImg2)
        gato.velocityX = -2.5;
        gato.changeAnimation("gato2",gatoImg2);
        gato.scale = 0.3
    }
    if(gato.isTouching(rato)){
        gato.changeAnimation("gato3",gatoImg3);
        gato.velocityX = 0;
        rato.changeAnimation("rato3",ratoImg3);
    }

    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui


}
