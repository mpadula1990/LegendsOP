const riot = require('./rapi.js');
const express = require('express');
//---------------------------------------------------------
const router = express.Router();

router.get('/',async (req, res) => {
  res.render('index');
});

router.post('/profile',async  (req, res, next)=>{

//datos
const id_ = await riot.get_sum_id(req.body.summoners);
const sumdataOBJ = await riot.get_sum_data(req.body.summoners);
const leagueOBJ = await riot.get_league_data(id_);


//salidas de consola
console.log('id:  ' + id_);
console.log('summ data---->   ' + sumdataOBJ);
console.log('league data----> '+ leagueOBJ);
console.log(sumdataOBJ.accountId); 

//RENDER
 res.render('profile',{
  //SUMMONER V3
  sum: req.body.summoners,
  sumdata: sumdataOBJ,
  id: id_,
  //LEAGUE V3
  league: leagueOBJ
  //MATCH V3
  //LOP statistics
  //LOP Rankings
  });
  //FIN RENDER


})


module.exports = router;
