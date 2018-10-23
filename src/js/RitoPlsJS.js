function ajax_get_json(){
  var xmlhttp;
  if(window.XMLHttprequest){
    xmlhttp=new XMLHttpRequest();
  }else{
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function(){
    if(xmlhttp.ReadyState===4 && xmlhttp.status=200){
    var datos =  JSON.parse(xmlhttp.responseText);
    console.log(datos);
    }
  }
  xmlhttp.open("GET",  "https://la2.api.riotgames.com/lol/summoner/v3/summoners/by-name/Wolfur?api_key=RGAPI-9e6c0653-4287-4d7d-b28e-1d0d6e0ba3cf",  true);
  xmlhttp.send();
}
