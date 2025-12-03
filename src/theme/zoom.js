/**
 * 图片点击放大功能
 * 基于 medium-zoom 实现
 */
import mediumZoom from "medium-zoom"
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment"

/**
 * 初始化图片放大功能
 * 只在浏览器环境中执行
 */
if (ExecutionEnvironment.canUseDOM) {
  /** @type {import('medium-zoom').Zoom | null} */
  let zoom = null

  /**
   * 为页面中的图片添加放大功能
   */
  const attachZoom = () => {
    // 先清除之前的 zoom 实例
    if (zoom) {
      zoom.detach()
    }

    // 选择文档内容区域的图片，排除 logo、图标等
    zoom = mediumZoom(".markdown img, article img", {
      margin: 24,
      background: "rgba(0, 0, 0, 0.85)",
      scrollOffset: 0,
    })
  }

  // 页面加载完成后初始化
  window.addEventListener("load", attachZoom)

  // 监听 Docusaurus 的路由变化，在页面切换后重新绑定
  // 使用 MutationObserver 监听 DOM 变化
  const observer = new MutationObserver((mutations) => {
    let shouldReattach = false
    for (const mutation of mutations) {
      if (mutation.addedNodes.length > 0) {
        shouldReattach = true
        break
      }
    }
    if (shouldReattach) {
      // 延迟执行，等待 DOM 渲染完成
      setTimeout(attachZoom, 100)
    }
  })

  // 开始观察
  if (document.body) {
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })
  } else {
    window.addEventListener("DOMContentLoaded", () => {
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      })
    })
  }
}

export default {}

