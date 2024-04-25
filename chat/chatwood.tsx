'use client'

import { useEffect } from 'react'

const ChatWood = () => {
  useEffect(() => {
    const BASE_URL = 'https://app.chatwoot.com'
    const script = document.createElement('script')
    script.src = `${BASE_URL}/packs/js/sdk.js`
    script.defer = true
    script.async = true

    const onLoad = () => {
      //@ts-ignore
      window.chatwootSDK.run({
        websiteToken: '86ZNCRMdgd518P9mX5RudqYV',
        baseUrl: BASE_URL,
      })
    }

    script.onload = onLoad

    document.body.appendChild(script)

    return () => {
      script.onload = null
      document.body.removeChild(script)
    }
  }, [])

  return null // Since this component doesn't render anything
}

export default ChatWood
