/* eslint-disable */

prizes=["BOOK","T-SHIRT","2 EXTRA SPINS","AMAZON VOUCHER","50% OFF","NETFLIX SUBS","100% OFF",
       "SWAGPACK","70% OFF","HARD LUCK ","35% OFF","3000 CREDITS"];
var config = {
    
    type : Phaser.CANVAS,
    width : 800,
    height : 600,
    backgroundColor : 0xffcc00,
    
    scene:{
        preload:preload,
        create:create,
        update:update,
        
    },
    
};

var game = new Phaser.Game(config);

function preload()
{
    console.log("preload");
    this.load.image('background','Assets/back.jpg');
    
    this.load.image('wheel','Assets/wheel.png');
    
    this.load.image('pin','Assets/pin.png');
    
    this.load.image('stand','Assets/stand.png');
}
function create()
{    
    console.log("create");
    W=game.config.width;
    H=game.config.height;
    this.background=this.add.sprite(0,0,'background');
    this.background.setPosition(W/2,H/2);
    this.background.setScale(0.20);
    
    this.wheel=this.add.sprite(W/2,H/2,'wheel');
    this.wheel.setScale(0.15);
    this.wheel.depth=1;
    
    this.pin=this.add.sprite(W/2,H/2-155,'pin');
    this.pin.setScale(0.15);
    this.pin.depth=2;
    
    this.stand=this.add.sprite(W/2,H/2+170,'stand');
    this.stand.setScale(0.15);
    // event-listener
    this.input.on("pointerdown",spinwheel,this);
    
    font_style={
        font:"bold 30px Arial",
        align:"center",
        color:"red",
        
    }
    this.game_text=this.add.text(10,60,"Welcome To Spin-And-Win by NEERAV",font_style);
    
}
function update()
{
    
   // console.log("inupdate");
    //this.wheel.angle+=1;
   
}

function spinwheel()
{
    this.game_text.setText("Spinning Started Please wait");
    var rounds=Phaser.Math.Between(2,5);
    var extra=Phaser.Math.Between(0,11);
    
    tween=this.tweens.add({
       targets:this.wheel,
        angle:360*rounds+30*extra,
        ease:"Cubic.easeOut",
       duration:7000,
        callbackScope:this,
        onComplete:function()
        {
          this.game_text.setText(prizes[extra]);  
        },
    });
    
}


