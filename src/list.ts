import pup, { Page } from "puppeteer"

const ghUsername = "promer94"
const userSession = ""
const hostUserSession = ""
const createSelecort =
  "#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-main > div:nth-child(2) > div > div.my-3.d-flex.flex-justify-between.flex-items-center > details > summary"
const nameSelector =
  "#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-main > div:nth-child(2) > div > div.my-3.d-flex.flex-justify-between.flex-items-center > details > details-dialog > form > div:nth-child(3) > auto-check > text-expander > input"
const submitSelector =
  "#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-main > div:nth-child(2) > div > div.my-3.d-flex.flex-justify-between.flex-items-center > details > details-dialog > form > button"

export async function run() {
  const page = await launchBrowser()
  await listTaskChain(page)()
}

const listTaskChain = (page: Page) =>
  list.reduce(
    (fn, n) => {
      return () => fn().then(() => createList(page, n.name))
    },
    () => Promise.resolve(),
  )

const delay = (timeout = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(""), timeout)
  })
}

async function createList(page: Page, name: string) {
  await page.goto(`https://github.com/${ghUsername}?tab=stars`)
  await page.click(createSelecort)
  await delay()
  await page.type(nameSelector, name)
  await delay(3000)
  await page.click(submitSelector)
  await delay(3000)
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
  return page
}

export const list = [
  {
    id: "7592167718527",
    name: "learn-rust",
  },
  {
    id: "7628315388870",
    name: "rust-data-structure",
  },
  {
    id: "7603990654857",
    name: "react-native-component",
  },
  {
    id: "7648564840716",
    name: "node-cli-tools",
  },
  {
    id: "7694241511052",
    name: "web-infra",
  },
  {
    id: "7720086173823",
    name: "react-component",
  },
  {
    id: "7729534452258",
    name: "developer",
  },
  {
    id: "7739342382329",
    name: "ml-dl",
  },
  {
    id: "7791789673874",
    name: "js-interview",
  },
  {
    id: "7806647102084",
    name: "webassembly",
  },
  {
    id: "7841271124573",
    name: "project-example",
  },
  {
    id: "7853096056189",
    name: "rust-resource",
  },
  {
    id: "7895485396406",
    name: "node-web",
  },
  {
    id: "7902369190515",
    name: "iOS",
  },
  {
    id: "7953047843901",
    name: "web-ui",
  },
  {
    id: "7967147357313",
    name: "compiler",
  },
  {
    id: "7988034833758",
    name: "css",
  },
  {
    id: "8060266456416",
    name: "algorithm",
  },
  {
    id: "8093811313966",
    name: "software",
  },
  {
    id: "8114804206002",
    name: "react-render",
  },
  {
    id: "8196366179327",
    name: "react-hooks",
  },
  {
    id: "8209351951672",
    name: "learn-react component",
  },
  {
    id: "8241859249477",
    name: "frontend-utils",
  },
  {
    id: "8277304534611",
    name: "fp",
  },
  {
    id: "8326522615955",
    name: "state-management",
  },
  {
    id: "8468282626716",
    name: "node-build-tools",
  },
  {
    id: "8569690849624",
    name: "web-worker",
  },
  {
    id: "8809281623433",
    name: "babel",
  },
  {
    id: "8820361418260",
    name: "vscode",
  },
  {
    id: "8904747228385",
    name: "dotfile",
  },
  {
    id: "9127562637932",
    name: "graphql",
  },
  {
    id: "9277078935691",
    name: "data-web",
  },
  {
    id: "9330775152138",
    name: "fun",
  },
  {
    id: "9535338457382",
    name: "go-web",
  },
  {
    id: "9611202921110",
    name: "ffmpeg",
  },
  {
    id: "0069406653460",
    name: "rust-cli",
  },
  {
    id: "0092296499682",
    name: "security",
  },
  {
    id: "0373588303356",
    name: "react-framework",
  },
  {
    id: "0396876283642",
    name: "severless-tools",
  },
  {
    id: "8488972638318",
    name: "wall",
  },
  {
    id: "8839279862364",
    name: "linux",
  },
  {
    id: "0288069750892",
    name: "vue",
  },
  {
    id: "1655797682327",
    name: "pwa",
  },
  {
    id: "1785702340624",
    name: "go-cli",
  },
  {
    id: "1891268936434",
    name: "bash",
  },
  {
    id: "2369603659374",
    name: "react-utils",
  },
  {
    id: "2508418644358",
    name: "package-mannage",
  },
  {
    id: "3111598881264",
    name: "docker",
  },
  {
    id: "2385016651307",
    name: "mini-wechat",
  },
  {
    id: "3343275088644",
    name: "block-chain",
  },
  {
    id: "3370628608175",
    name: "awesome",
  },
  {
    id: "3403669425030",
    name: "book",
  },
  {
    id: "3427397382052",
    name: "react-typescript",
  },
  {
    id: "3652868556986",
    name: "react-rx",
  },
  {
    id: "3860692547489",
    name: "english",
  },
  {
    id: "3878229416320",
    name: "haskell",
  },
  {
    id: "0816044439755",
    name: "rust",
  },
  {
    id: "2918661941295",
    name: "rx",
  },
  {
    id: "3977477121612",
    name: "ts-magic",
  },
  {
    id: "7353459422354",
    name: "macos",
  },
  {
    id: "5490186491442",
    name: "font",
  },
  {
    id: "5701615656586",
    name: "cv",
  },
  {
    id: "5881194708059",
    name: "dotnet",
  },
  {
    id: "7506984596692",
    name: "android",
  },
  {
    id: "7623502304866",
    name: "database",
  },
  {
    id: "8509513936687",
    name: "webrtc",
  },
  {
    id: "8733334379956",
    name: "blog",
  },
  {
    id: "9428690359875",
    name: "resume",
  },
  {
    id: "7694275333041",
    name: "ts",
  },
]
