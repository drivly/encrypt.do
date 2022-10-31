export const api = {
  icon: '🚀',
  name: 'encrypt.do',
  description: 'Simple Encryption API',
  url: 'https://encrypt.do/api',
  type: 'https://apis.do/crypto',
  endpoints: {
    listCategories: 'https://encrypt.do/api',
    getCategory: 'https://encrypt.do/:type',
  },
  site: 'https://encrypt.do',
  login: 'https://encrypt.do/login',
  signup: 'https://encrypt.do/signup',
  subscribe: 'https://encrypt.do/subscribe',
  repo: 'https://github.com/drivly/encrypt.do',
}

export const gettingStarted = [
  `If you don't already have a JSON Viewer Browser Extension, get that first:`,
  `https://extensions.do`,
]

export const examples = {
  listItems: 'https://encrypt.do/worker',
}

export default {
  fetch: async (req, env) => {
    const { user, hostname, pathname, rootPath, pathSegments, query } = await env.CTX.fetch(req).then(res => res.json())
    if (rootPath) return json({ api, gettingStarted, examples, user })
    
    // TODO: Implement this
    const [ resource, id ] = pathSegments
    const data = { resource, id, hello: user.city }
    
    return json({ api, data, user })
  }
}

const json = obj => new Response(JSON.stringify(obj, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
