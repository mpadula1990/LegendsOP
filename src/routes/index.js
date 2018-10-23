const riot = require('./rapi.js');
const express = require('express');
//---------------------------------------------------------
const router = express.Router();

router.get('/',async (req, res) => {
  res.render('index');
});

router.post('/profile',async  (req, res, next)=>{
const sum = req.body.summoners;


  riot.get_sum_id(sum,function (err, body){
    console.log(body.id);
    console.log(body);
    //responces....
    //GameAccount data def.
    const sumdataOBJ = body;
    const account_id = body.accountId;
    const id_ = body.id;


    //si quito esto funciona, me trae los datos de las demas llamadas.
    var ingamestatus = riot.ingameverif(id_, function(veriferr, verifres){
      if(verifres.statusCode=!404){
        return true;
      }else{
        console.log(' Error: ' + veriferr);
        return false;
      }
    })
    //---------------------------------------
    riot.get_league_data(id_, function(lerr,lbody){
    console.log(lbody);
    //GameLeague data def.
    const leagueOBJ = lbody;
    //RENDER
    res.render('profile',{
      //SUMMONER V3
      sum,
      sumdata: sumdataOBJ,
      id: id_,
      accid: account_id,
      ingame: ingamestatus,
      //LEAGUE V3
      league: leagueOBJ
      //MATCH V3
      //LOP statistics
      //LOP Rankings
      });
    })
    //FIN RENDER
    
  });


  

});
module.exports = router;
