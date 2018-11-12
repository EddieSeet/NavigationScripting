//Below is a working code. Getting to homepage and navigating in a systematic manner
var casper = require("casper").create();
casper.start('https://plugg.neocities.org');



casper.then(function () {
    this.evaluate(function () {
        document.getElementById("product").click();
    });
});

casper.wait(15000, function () {
    this.echo("I've waited for a second.");
});

casper.then(function () {
    this.evaluate(function () {
        document.getElementById("navaboutus").click();
    });

});

casper.wait(15000, function () {
    this.echo("I've waited for 2 second.");
});

casper.then(function () {
    this.evaluate(function () {
        document.getElementById("navaboutus").click();
    });
});

casper.wait(15000, function () {
    this.echo("I've waited for 3 second.");
});

casper.then(function () {
    this.evaluate(function () {
        document.getElementById("navfaq").click();
    });
});

casper.wait(15000, function () {
    this.echo("I've waited for 4 second.");
});

casper.then(function () {
    this.evaluate(function () {
        document.getElementById("navcontact").click();
    });
});

casper.waitForSelector("#contact-form", function () {
    this.fill('form#contact-form', {
        'name': 'Jeff',
        'email': 'Jeff@gmail.com',
        'phone': 'Nil',
        'message': 'Hello'
    }, true);
});

casper.then(function(){
    this.echo(this.getCurrentUrl());
})

casper.thenOpen('https://plugg.neocities.org', function() {
    this.echo(this.getTitle());
});
/*casper.then(function () {
    this.evaluateOrDie(function () {
        return /message sent/.test(document.body.innerText);
    }, 'sending message failed' + Error);
});*/

casper.then(function(){
    this.echo(this.getCurrentUrl());
})


casper.run(function () {
    this.echo('message sent').exit();
});

