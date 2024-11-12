// // const playwright = require("playwright");
// import playwright from "playwright";


// async function getData() {
//   const browser = await playwright.chromium.launch();
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   await page.goto("https://api.betabotz.eu.org/users/register");

//   // Add a random delay of 1 to 5 seconds to simulate human behavior
//   await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 4000 + 1000)));

//   // Scroll the page to load additional content
//   await page.evaluate(() => window.scrollBy(0, window.innerHeight));

//   // Add another random delay of 1 to 5 seconds
//   await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 4000 + 1000)));

//   const data = await page.evaluate(() => {
//     const results = [];
//     // Select elements on the page and extract data
//     const elements = document.querySelectorAll(".product_pod");
//     for (const element of elements) {
//       results.push({
//         url: element.querySelector("a").href,
//         Name: element.querySelector("h3").innerText,
//       });
//     }
//     return results;
//   });
//   console.log(data);
//   await browser.close();
// }

// getData();











// // npm install humanoid-js 
// import Humanoid from "humanoid-js";

// // Create a new humanoid instance
// const humanoid = new Humanoid();

// // Send Get request to the target website
// humanoid.get("https://api.betabotz.eu.org/api/download/twitter2?url=https://twitter.com/reoenl/status/1678370956996390913?t=wVFQzgse071qZ_omVcvbkg&s=19&apikey=nRlzcfrn")
//     .then(res => {
//         console.log(res.body); // Print the result
//     })
//     // Catch errors if any
//     .catch(err => {
//         console.log(err);
//     });



// import { instagram } from "@xct007/frieren-scraper";

// // v1. fetch direct download url
// const Obj = await instagram.v1("https://instagram_URL");
// console.log(Obj);

// import { aiovideodl } from "@bochilteam/scraper";

// const url = "https://www.instagram.com/stories/airinangg/3220392551234998021/"
// aiovideodl(url).then(console.log).catch(console.error);

// import { instagram } from "@xct007/frieren-scraper";

// const url = "https://www.instagram.com/p/CrIZucGOAay/";
// instagram.v1(url).then(console.log).catch(console.error);

// const username = 'darcie.j'
// const story = await instagramStory(username).then(console.log).catch(console.error)

// import snapsave from "snapsave-downloader2";

// const URL = await snapsave("https://www.instagram.com/p/CyYKliByZet/")
// console.log(URL)

// import xa from 'xfarr-api'

// const url = {
//   imgur: 'https://imgur.com/gallery/WGiOMgp',
//   imdb: 'https://www.imdb.com/video/vi146981657?listId=ls053181649',
//   soundcloud: 'https://soundcloud.com/mlicasiano09/talking-to-the-moon-bruno-mars?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
//   facebook: 'https://www.facebook.com/gita.spense/videos/1409197592877652/?flite=scwspnss&mibextid=SPoPTSVtTECNhSoR',
//   tiktok: 'https://vt.tiktok.com/ZSdoX6rGx/?k=1',
//   instagram: 'https://www.instagram.com/p/CfYiWX_NjsS/?igshid=YmMyMTA2M2Y=',
//   twitter: 'https://twitter.com/LucuLucuVideo/status/1542123908052045825?s=20',
//   telesticker: 'https://t.me/addstickers/c1129234339_by_HarukaAyaBot',
//   linesticker: 'https://store.line.me/stickershop/product/6934597/id',
//   like: 'https://l.likee.video/v/MmMNz4',
//   cocofun: 'http://www.icocofun.com/share/post/457616496291?lang=id&pkg=id&share_to=copy_link&m=c6d95b35bbbbf91ce3da574262388117&d=f7445b55ca8eb354536296f34f9c2a878ccc7704deeb8e2840eed6641f41c5d7&nt=4',
//   pinterestdl: 'https://pin.it/75sDbuC',
//   youtube: 'https://youtu.be/zes3T4Gvpas'
// }
  
// // // telesticker
// // xa.downloader.telesticker(url.telesticker).then(data => {
// //   console.log(data)
// // });
  
// // // linesticker
// // xa.downloader.linesticker(url.linesticker).then(data => {
// //   console.log(data)
// // });
  
