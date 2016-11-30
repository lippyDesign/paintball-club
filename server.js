const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
});
//////////////////////////// TWITTER ///////////////////////////////////////
const Twit = require('twit');
const twitterConfig = require('./twitterConfig');
const T = new Twit(twitterConfig);
const params = {
    tweet_mode: 'extended',
    user_id: 800832063083462656,
    screen_name: 'MLipunov',
    count: 1
}
// when app requests /twitter, go get info from twitter
app.get('/twitter', function(req, res) {

    let twitter;

    function gotData(err, data, response) {
        if (err) {
            console.log(err)
        }
        if (data) {
            twitter = data;
            res.json({ twitter })
        }
    }

    T.get('statuses/user_timeline', params, gotData);

    
})
//////////////////////////////// END TWITTER ///////////////////////////////////
//////////////////////////////// EMAIL ///////////////////////////////////

var nodemailer = require('nodemailer');
 
// create reusable transporter object using SMTP transport 
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'maxim.lipunov@gmail.com',
        pass: 'Ilovepaintball'
    }
});

function sendEmailPlease() {
    // send mail with defined transport object 
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('Message sent: ' + info.response);
        }
    });
}

var bodyParser = require('body-parser')
// parse application/json
app.use(bodyParser.json())

app.post('/contactus', function (req, res) {
    const { name, email, date, phone, numPlayers, comments } = req.body;

    mailOptions = {
        from: `${name} <${email}>`,
        to: 'maxim.lipunov@gmail.com',
        subject: 'сообщение о пейнтбольном клубе THE GAME',
        text: 'Hello world',
        html: `
            <p><b>Автор:</b> ${name}</p>
            <p><b>Телефон:</b> ${phone}</p>
            <p><b>Адрес почты:</b> ${email}</p>
            <p><b>Дата Мероприятия:</b> ${date}</p>
            <p><b>Количество Игроков:</b> ${numPlayers}</p>
            <p><b>Комментарии:</b> ${comments}</p>
        `
    }

    sendEmailPlease();
});

//////////////////////////////// END EMAIL ///////////////////////////////////

app.listen(port);
console.log('server started');
