function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6HElcT3Fsv0":
        Script1();
        break;
      case "6Z39lHaYCVf":
        Script2();
        break;
      case "5xkPqRFi3ZP":
        Script3();
        break;
      case "6g1jAhiWZKJ":
        Script4();
        break;
      case "6TdWtoJtSal":
        Script5();
        break;
      case "6qaMuukcdiP":
        Script6();
        break;
      case "5YS4lsYnTQ7":
        Script7();
        break;
      case "5UgCUd1gkkb":
        Script8();
        break;
      case "6lC8C2T63kS":
        Script9();
        break;
      case "6LTh51evjMt":
        Script10();
        break;
      case "66ceXH0PXFq":
        Script11();
        break;
      case "6E14OcXgruV":
        Script12();
        break;
      case "5ZAut6Rdp9a":
        Script13();
        break;
      case "6hM4BNKVWdt":
        Script14();
        break;
      case "5lH8xZmaxVo":
        Script15();
        break;
      case "6CKcaVx6Vcg":
        Script16();
        break;
      case "5cA89sbgyrY":
        Script17();
        break;
      case "6hXm2McqLcs":
        Script18();
        break;
      case "67SPP4JDlPR":
        Script19();
        break;
      case "6mVMWNitOQU":
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

