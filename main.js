/*var casper = require("casper").create();

var urls = ["https://plugg.neocities.org", "https://plugg.neocities.org/aboutus.html", "https://plugg.neocities.org/faq.html", "https://plugg.neocities.org/contactus.html", "https://plugg.neocities.org/products.html", "https://plugg.neocities.org/checkout.html/"]
var viewportSize    s = [480, 720, 1200];
casper.start();


var counter = 0;
casper.repeat(viewportSizes.length, function () {
    var viewportSize = viewportSizes[counter];
    casper.viewport(viewportSize, 1000).each(urls, function (self, item, index) {
        self.thenOpen(item, function () {
            var title = this.getTitle();
            console.log(title);

            this.wait(10000, function () {
                this.capture("./images/screenshot_" + index + "_" + viewportSize + "png");
            });
        });
    });
    counter += 1;
});

casper.run();


*/






// WORKING. Getting to homepage and navigating in a systematic manner*/
var casper = require("casper").create();
casper.start('https://plugg.neocities.org');



casper.then(function () {
    this.evaluate(function () {
        document.getElementById("product").click();
    });
});

casper.wait(5000, function () {
    this.echo("I've waited for a second.");
});

casper.then(function () {
    this.evaluate(function () {
        document.getElementById("navaboutus").click();
    });

});

casper.wait(5000, function () {
    this.echo("I've waited for 2 second.");
});

casper.then(function () {
    this.evaluate(function () {
        document.getElementById("navaboutus").click();
    });
});

casper.wait(5000, function () {
    this.echo("I've waited for 3 second.");
});

casper.then(function () {
    this.evaluate(function () {
        document.getElementById("navfaq").click();
    });
});

casper.wait(5000, function () {
    this.echo("I've waited for 4 second.");
});

casper.then(function () {
    this.evaluate(function () {
        document.getElementById("navcontact").click();
    });
});

casper.waitForSelector("#contact-form", function () {
    this.fill('form#contact-form', {
        'name': 'Eddie',
        'email': '13eddie07@gmail.com',
        'phone': 'Mr',
        'message': 'Chuckle'
    }, true);
});

casper.then(function () {
    this.evaluateOrDie(function () {
        return /message sent/.test(document.body.innerText);
    }, 'sending message failed' + Error);
});
casper.run(function () {
    this.echo('message sent').exit();
});



// testing google form

