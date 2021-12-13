const express = require("express");
const router = express.Router();
const https = require("https");

router.get('/github/userdylane/:username', async function(req, res){
    const username = req.params.username;
    const options={ 
        hostname: 'api.github.com',
        path: '/users/'+ username,
        headers: {
            "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36",
          },
        OAUth:"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"
     };
    https.get(options,function(apiResponse){
        apiResponse.pipe(res);
    }).on('error', function(e){
        console.log(e);
        res.status(500).send("une erreur s'est produite");
    })
})
module.exports = router;