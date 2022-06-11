import axios from 'axios'

function apiUrl(appId: string) {
  return `https://${appId.slice(0, 8)}.api.lncldglobal.com`
}

export function createAxios({
  appId,
  appKey,
  masterKey
}: Record<string, string>) {
  return axios.create({
    baseURL: `${apiUrl(appId)}/1.1`,
    headers: {
      'X-LC-Id': appId,
      'X-LC-Key': `${masterKey},master`
    }
  })
}
