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
  // 创建单例 zoom 实例
  const zoom = mediumZoom({
    margin: 24,
    background: "rgba(0, 0, 0, 0.85)",
    scrollOffset: 0,
  })

  /**
   * 判断图片是否应该启用放大功能
   */
  const shouldZoom = (img) => {
    // 排除带有 no-zoom 类的图片
    if (img.classList.contains("no-zoom")) return false
    // 排除非内容区域的图片
    if (!img.closest(".markdown") && !img.closest("article")) return false
    return true
  }

  /**
   * 为新图片附加 zoom 功能
   */
  const attachZoomToImages = () => {
    const images = document.querySelectorAll(".markdown img, article img")
    images.forEach((img) => {
      // 检查是否已经附加过 zoom
      if (img.dataset.zoomAttached) return
      // 检查是否应该启用 zoom
      if (!shouldZoom(img)) return
      
      zoom.attach(img)
      img.dataset.zoomAttached = "true"
    })
  }

  // 页面加载完成后初始化
  window.addEventListener("load", attachZoomToImages)

  // 监听路由变化（Docusaurus SPA）
  // 使用更保守的 MutationObserver 策略
  let debounceTimer = null
  const observer = new MutationObserver(() => {
    // 防抖：避免频繁触发
    if (debounceTimer) clearTimeout(debounceTimer)
    debounceTimer = setTimeout(attachZoomToImages, 300)
  })

  // 开始观察
  const startObserving = () => {
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })
  }

  if (document.body) {
    startObserving()
  } else {
    window.addEventListener("DOMContentLoaded", startObserving)
  }
}

export default {}

