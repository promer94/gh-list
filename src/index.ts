import pup, { Page } from "puppeteer"

const ghUsername = "promer94"
const userSession = "0W0T7baj3uNS1JiTAirIgRaK2p8zcYtQr_8BYnU5KDvgywDN"
const hostUserSession = "0W0T7baj3uNS1JiTAirIgRaK2p8zcYtQr_8BYnU5KDvgywDN"
const createSelecort =
  "#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-main > div:nth-child(2) > div > div.my-3.d-flex.flex-justify-between.flex-items-center > details > summary"
const nameSelector =
  "#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-main > div:nth-child(2) > div > div.my-3.d-flex.flex-justify-between.flex-items-center > details > details-dialog > form > div:nth-child(3) > auto-check > text-expander > input"
const submitSelector =
  "#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-main > div:nth-child(2) > div > div.my-3.d-flex.flex-justify-between.flex-items-center > details > details-dialog > form > button"

async function run() {
  const page = await launchBrowser()
}

const delay = (timeout = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(""), timeout)
  })
}

async function createList(page: Page, name: string) {
  const originUrl = page.url()
  await page.click(createSelecort)
  await delay()
  await page.type(nameSelector, name)
  await delay(3000)
  await page.click(submitSelector)
  await page.goto(originUrl)
  return page
}

async function launchBrowser() {
  const browser = await pup.launch({
    headless: false,
    defaultViewport: {
      width: 1280,
      height: 500,
    },
  })
  const page = await browser.newPage()
  await page.setCookie(
    {
      name: "user_session",
      value: userSession,
      domain: ".github.com",
    },
    {
      name: "__Host-user_session_same_site",
      value: hostUserSession,
      url: "https://github.com",
    },
  )
  await page.goto(`https://github.com/${ghUsername}?tab=stars`)
  return page
}

run()
