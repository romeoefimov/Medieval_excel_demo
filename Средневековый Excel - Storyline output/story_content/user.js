function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5V3jQlGUgdZ":
        Script1();
        break;
      case "6E5xQ5S99PE":
        Script2();
        break;
      case "5mJ9r3mfyI9":
        Script3();
        break;
  }
}

function Script1()
{
  //load the scripts dynamically into the head of the document
function add_line() {
 var line = document.createElement("audio");
 var head=document.getElementsByTagName('body')[0];
 line.type = "audio/mp3";
 line.src="";
 line.id="bgSong" ;
 line.autoplay = true;
 line.loop = true;
 head.appendChild(line);
}
//but we only want to add these once!
if(document.getElementById('bgSong')==null){
 add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}
}

function Script2()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
var audio = document.getElementById('bgSong');
audio.src= location + "one.mp3";
audio.load();
audio.play();
}

function Script3()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
var audio = document.getElementById('bgSong');
audio.src= location + "Medievalsoundmainscreen.mp3";
audio.load();
audio.play();
}

