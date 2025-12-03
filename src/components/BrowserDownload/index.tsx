import React from "react"
// @ts-expect-error CSS modules work at runtime
import styles from "./styles.module.css"

/**
 * 官方浏览器 logo（来自 @browser-logos 包）
 * 使用 require 避免 TypeScript 类型检查问题
 */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const chromeLogo = require("@browser-logos/chrome/chrome_64x64.png").default as string
// eslint-disable-next-line @typescript-eslint/no-require-imports
const edgeLogo = require("@browser-logos/edge/edge_64x64.png").default as string
// eslint-disable-next-line @typescript-eslint/no-require-imports
const firefoxLogo = require("@browser-logos/firefox/firefox_64x64.png").default as string

type BrowserInfo = {
  name: string
  logo: string
  url: string
  color: string
}

type BrowserDownloadProps = {
  /** Chrome 商店链接 */
  chromeUrl?: string
  /** Edge 商店链接 */
  edgeUrl?: string
  /** Firefox 商店链接 */
  firefoxUrl?: string
  /** 组件标题，默认 "获取浏览器扩展" */
  title?: string
}

/**
 * 浏览器扩展下载组件
 * 显示 Chrome、Edge、Firefox 官方图标，点击跳转对应商店
 *
 * @example
 * ```mdx
 * import BrowserDownload from '@site/src/components/BrowserDownload'
 *
 * <BrowserDownload
 *   chromeUrl="https://chrome.google.com/webstore/detail/xxx"
 *   edgeUrl="https://microsoftedge.microsoft.com/addons/detail/xxx"
 *   firefoxUrl="https://addons.mozilla.org/firefox/addon/xxx"
 * />
 * ```
 */
export default function BrowserDownload({
  chromeUrl = "https://chromewebstore.google.com/detail/memene/apdcijggejffogpbcjjlojibndebmobh",
  edgeUrl = "https://microsoftedge.microsoft.com/addons/detail/memene/bjaabfbbamanldjeaiboklknaakbokco?hl=zh-CN",
  firefoxUrl = "https://addons.mozilla.org/zh-CN/firefox/addon/memene/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search",
  title = "获取浏览器扩展",
}: BrowserDownloadProps): React.ReactElement {
  const browsers: BrowserInfo[] = [
    {
      name: "Chrome",
      logo: chromeLogo,
      url: chromeUrl,
      color: "#4285F4",
    },
    {
      name: "Edge",
      logo: edgeLogo,
      url: edgeUrl,
      color: "#0078D4",
    },
    {
      name: "Firefox",
      logo: firefoxLogo,
      url: firefoxUrl,
      color: "#FF7139",
    },
  ]

  return (
    <div className={styles.container}>
      {title && <h4 className={styles.title}>{title}</h4>}
      <div className={styles.browserList}>
        {browsers.map((browser) => (
          <a
            key={browser.name}
            href={browser.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.browserItem}
            style={{ "--browser-color": browser.color } as React.CSSProperties}
            title={`前往 ${browser.name} 商店下载`}
          >
            <div className={styles.iconWrapper}>
              <img
                src={browser.logo}
                alt={`${browser.name} logo`}
                className={`${styles.logo} no-zoom`}
                width={48}
                height={48}
              />
            </div>
            <span className={styles.browserName}>{browser.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

