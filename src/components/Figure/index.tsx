import React from "react"
import styles from "./styles.module.css"

type FigureProps = {
  /** 图片地址 */
  src: string
  /** 图注文字 */
  caption?: string
  /** 图片 alt 属性，默认使用 caption */
  alt?: string
  /** 图片最大宽度，默认 100% */
  maxWidth?: string | number
}

/**
 * 带图注的居中图片组件
 *
 * @example
 * ```mdx
 * import Figure from '@site/src/components/Figure'
 *
 * <Figure
 *   src="/img/example.png"
 *   caption="这是图注文字"
 *   maxWidth={400}
 * />
 * ```
 */
export default function Figure({
  src,
  caption,
  alt,
  maxWidth = "100%",
}: FigureProps): React.ReactElement {
  const widthStyle = typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth

  return (
    <figure className={styles.figure}>
      <img
        src={src}
        alt={alt ?? caption ?? ""}
        className={styles.image}
        style={{ maxWidth: widthStyle }}
        loading="lazy"
      />
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  )
}

