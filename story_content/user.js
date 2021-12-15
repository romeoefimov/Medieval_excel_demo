function ExecuteScript(strId)
{
  switch (strId)
  {
      case "63ESoapNiM6":
        Script1();
        break;
      case "6D5xVhdEWyM":
        Script2();
        break;
      case "6p4ZeNGcBOi":
        Script3();
        break;
      case "60IdA2IIlmL":
        Script4();
        break;
      case "66XYfsOhujK":
        Script5();
        break;
      case "6rLf4E7Lxqa":
        Script6();
        break;
      case "6b4kU2VC7lj":
        Script7();
        break;
      case "5XogGQ7Entd":
        Script8();
        break;
      case "64RzgxO6iPr":
        Script9();
        break;
      case "5XP28QgSTG4":
        Script10();
        break;
      case "6MNEuRKt2UD":
        Script11();
        break;
      case "5b5nCuBtHCQ":
        Script12();
        break;
      case "6pFXdnWhWAa":
        Script13();
        break;
      case "6kR6CBGjIrw":
        Script14();
        break;
      case "6GMQ7RSXHm8":
        Script15();
        break;
      case "6noTwysWoVw":
        Script16();
        break;
      case "6BOc0fiyuYc":
        Script17();
        break;
      case "667v0m1jvwC":
        Script18();
        break;
      case "6SC0z2OFIlY":
        Script19();
        break;
      case "5yTmRCWXiIB":
        Script20();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();


function add_line() {
	var line = document.createElement("audio");
	var head=document.getElementsByTagName('body')[0];
	line.type = "audio/mp3";
	line.src="";
	line.id="bgSong" ;
	line.autoplay = true;
	line.loop = false;
	head.appendChild(line);
}

//We only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
	var audio = document.getElementById('bgSong');
	audio.volume = 0.1;
	player.SetVar("javascriptsLoaded",true)
}
}

function Script2()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;
audio.load();
audio.play();

}

function Script3()
{
  var player = GetPlayer();

this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;

audio.pause();
audio.currentTime = 0;
}

function Script4()
{
  var player = GetPlayer();

this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;

audio.pause();
audio.currentTime = 0;
}

function Script5()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;
audio.load();
audio.play();

}

function Script6()
{
  var player = GetPlayer();

this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;

audio.pause();
audio.currentTime = 0;
}

function Script7()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;
audio.load();
audio.play();

}

function Script8()
{
  var audio = document.getElementById('bgSong');
audio.play();
}

function Script9()
{
  var player = GetPlayer();

this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;

audio.pause();
audio.currentTime = 0;
}

function Script10()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;
audio.load();
audio.play();

}

function Script11()
{
  var player = GetPlayer();

this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;

audio.pause();
audio.currentTime = 0;
}

function Script12()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;
audio.load();
audio.play();

}

function Script13()
{
  var player = GetPlayer();

this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;

audio.pause();
audio.currentTime = 0;
}

function Script14()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;
audio.load();
audio.play();

}

function Script15()
{
  var player = GetPlayer();

this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;

audio.pause();
audio.currentTime = 0;
}

function Script16()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;
audio.load();
audio.play();

}

function Script17()
{
  var player = GetPlayer();

this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;

audio.pause();
audio.currentTime = 0;
}

function Script18()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;
audio.load();
audio.play();

}

function Script19()
{
  var player = GetPlayer();

this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;

audio.pause();
audio.currentTime = 0;
}

function Script20()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;
audio.load();
audio.play();

}

