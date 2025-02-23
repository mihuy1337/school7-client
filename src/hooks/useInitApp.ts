import WebApp from "@twa-dev/sdk"
import { useEffect } from "react"
import { Colors } from "../config/colors"

export function useInitApp() {

  useEffect(() => {
    WebApp.lockOrientation()
    WebApp.bottomBarColor = Colors.black.main

    if (
      WebApp.platform === 'android' || 
      WebApp.platform === 'android_x' || 
      WebApp.platform === 'ios'
    ) {
      WebApp.requestFullscreen()
    }
  }, [])
  
  return
}
