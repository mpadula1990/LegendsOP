import RitoPlsJS.js;

var sumname=getElementsById("SummName");
window.AddEventListener("load",iniciar,false);
function iniciar(){
  sumname.inerHTML() = ajax_get_json();
}
