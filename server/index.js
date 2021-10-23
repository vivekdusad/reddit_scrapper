const { Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver');
const chrome = require('selenium-webdriver/chrome');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

    res.send(titles);
})

app.listen(port, () => {
    (async function example() {

        let driver = await new Builder().forBrowser('chrome').build();
        try {
            await driver.get("https://www.reddit.com/r/stories/top/");
            //clicking on that post           
            var webbody = await driver.findElements(By.className(page_id));
            for (var i = 0; i < webbody.length; i++) {
                await webbody[i].click();    
                await sleep(2000)            
                var content = await driver.findElement(By.className(post_id));
                var temp = '';
                for (var i = 0; i < content.length; i++) {
                    var body = await content[i].getText();
                    temp = temp +" " + body;
                }
                temp = await content.getText();
                await driver.navigate().back();
                titles.push({
                    "body":temp
                });
            }
            //searching for post content
            // await driver.get(driver.getCurrentUrl);

        } catch (e) {
            // console.log(e);
        }
    })();
    console.log(`Example app listening at http://localhost:${port}`)
})
var titles = [];
var post_id = "_1qeIAgB0cPwnLhDF9XSiJM";
var title_id = "_eYtD2XCVieq6emjKBH3m";
var page_id = "_292iotee39Lmt0MkQZ2hPV RichTextJSON-root";

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }