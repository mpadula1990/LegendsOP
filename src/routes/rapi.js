const remoteJson = require('remote-json')

//---------------------API CONFIG--------------------------
//apikey
const apikey ="RGAPI-3e798c10-35fe-4500-a23c-26e2971733f8";
//trayendo los datos desde riot

function get_sum_id(sumname){
  const url = "https://la2.api.riotgames.com/lol/summoner/v3/summoners/by-name/" + sumname + "?api_key=" + apikey;
  // Así se promisifica una función (cuando el callback no sigue el estándar (err, result) => void, sino puedes usar una librería como Bluebird
  return new Promise( function (resolve, reject){
    remoteJson(url).get(function (err, res, body) {
      if(err){ return reject(err) } // Tienes que retornar para detener la ejecución de la función
      return resolve(body.id) // Igual aquí
    })
  })
}

function get_sum_data(sumname){
  const url = "https://la2.api.riotgames.com/lol/summoner/v3/summoners/by-name/" + sumname + "?api_key=" + apikey;
  // Así se promisifica una función (cuando el callback no sigue el estándar (err, result) => void, sino puedes usar una librería como Bluebird
  return new Promise( function (resolve, reject){
    remoteJson(url).get(function (err, res, body) {
      if(err){ return reject(err) } // Tienes que retornar para detener la ejecución de la función
      return resolve(body) // Igual aquí
    })
  })
}


function get_league_data(sumid){
  const url ="https://la2.api.riotgames.com/lol/league/v3/positions/by-summoner/"+ sumid + "?api_key="+ apikey;
   // Así se promisifica una función (cuando el callback no sigue el estándar (err, result) => void, sino puedes usar una librería como Bluebird
   return new Promise( function (resolve, reject){
    remoteJson(url).get(function (err, res, body) {
      if(err){ return reject(err) } // Tienes que retornar para detener la ejecución de la función
      return resolve(body) // Igual aquí
    })
  })
}
module.exports = {  get_sum_id,
                    get_league_data,
                    get_sum_data
                    //ingameverif
                  };
/*
formulas-------------------
KDA-> (Kill / Muertes) + (Assist / Muertes)
*/


/*
// module.js
const extjson  = require('remote-json');

const apikey ="xxxxxxxxxxxxxxxxxxxxx";

function get_sum_id (sumname, callback) {
  const urlsumbySumName = "https://la2.api.riotgames.com/lol/summoner/v3/summoners/by-name/" + sumname + "?api_key=" + apikey;
  extjson(urlsumbySumName).get(callback);
}

module.exports = { get_sum_id };

// app.js
const riot = require('./rapi.js');
const router = express.Router();

router.post('/profile', function(req, res, next) {
  riot.get_sum_id(req.body.summoners, function (err, resp, body) {
    console.log(body);
    res.json(body); // Response here
  });
});
module.exports = router;
*/
