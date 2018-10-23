const getJSON = require('get-json')

//---------------------API CONFIG--------------------------
//apikey
const apikey ="RGAPI-e89fa97b-9c37-4c26-933c-6d842442f5eb";
//trayendo los datos desde riot


function  get_sum_id(sumname, callback){
  const urlsumbySumName = "https://la2.api.riotgames.com/lol/summoner/v3/summoners/by-name/" + sumname + "?api_key=" + apikey;
  getJSON(urlsumbySumName, callback);

  }

function get_league_data(sumid, callback){
  const urlgetleaguedata ="https://la2.api.riotgames.com/lol/league/v3/positions/by-summoner/"+ sumid + "?api_key="+ apikey;
  getJSON(urlgetleaguedata, callback);
}

function get_champion_mastery(sumid, champid, callback){
}
function ingameverif(sumid){
  const url ="https://la2.api.riotgames.com/lol/league/v3/positions/by-summoner/"+ sumid + "?api_key="+ apikey;
     getJSON(url, callback);
    }





module.exports = {  get_sum_id, 
                    get_league_data, 
                    get_champion_mastery,
                    ingameverif};
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
