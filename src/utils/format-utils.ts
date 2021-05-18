/**
 * 更改图片尺寸
 * @param {string} imgUrl 图片地址
 * @param {number} size 更改后的大小
 */
export function getSizeImage(imgUrl: string, size: number): string {
  return `${imgUrl}?param=${size}x${size}`
}
