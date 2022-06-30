const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

async function robot() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const valor = readlineSync.question('Qual valor:') || 1;
  const moedaBase = readlineSync.question('Informe uma moeda base:') || 'dolar';
  const moedaFinal = readlineSync.question('Informe a moeda final:') || 'real';
  const url = `https://www.google.com/search?client=opera-gx&q=${valor}+${moedaBase}+para+${moedaFinal}&sourceid=opera&ie=UTF-8&oe=UTF-8`;
  await page.goto(url);
  const moedaResultado = await page.evaluate(() => {
    return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
  });

  await browser.close();
  console.log(`O valor de ${valor} ${moedaBase} em ${moedaFinal} é ${moedaResultado}`);
}

robot();