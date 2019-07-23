const express = require('express'); 
const crypto = require('crypto');

const app = express(); 
const port = 8000; 

app.listen(port, function (err) { 
	if(err){ 
		console.log("error while starting server"); 
	} 
	else{ 
		console.log("server has been started at "+port); 
	} 
}) 

app.get('/', function (req, res) { 
    const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
function encrypt(text) {
    let cipher = crypto.createCipheriv('aes-256-cbc',Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
    }
    function decrypt(text) {
        let iv = buffer.from(text.iv, 'hex');
        let encryptedText = Buffer.from(text.encryptedData, 'hex');
        let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
        let decrypted = decipher.upate(encryptedText);
        decypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString();
        }

        var gfg = encrypt('bharath');
console.log(gfg);
console.log(decrypt(gfg));
res.send('we are at the root route of our server'); 
}) ;
app.get('/name', function (req, res) { 
    res.send('redirecting to name'); 
    });
    
    app.get('/name/bharath', function (req, res) {
        console.log(req); 
        res.send('bharath'); 
        });
        app.get('/na', function (req, res) {
            console.log(req); 
            res.send('bharath'); 
            });  
