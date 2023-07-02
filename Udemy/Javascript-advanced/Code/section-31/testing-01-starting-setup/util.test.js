const puppeteer = require('puppeteer')
const { generateText, checkAndGenerate } = require('./util')

test('should output name and age', () => {
  const text = generateText('Max', 29)
  expect(text).toBe('Max (29 years old)')
})



test('should genrate a valid name and age', () => {
  const text = generateText('Max', 29)
  expect(text).toBe('Max (29 years old)')
})

test('should click around', async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ['--window-size=1920,1080']
  });
  const page = await browser.newPage()
  await page.goto(
    'https://www.zad-academy.com/login/'
  )
  await page.click('input#username')
  await page.type('input#username', '***')
  await page.click('input#password')
  await page.type('input#password', '****')
  await page.click('button#submitBtn')

})
