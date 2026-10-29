export function isImagePath(str: string) {
  if (typeof str !== 'string' || str.trim() === '') return false;
  // 匹配常见图片扩展名，不区分大小写
  const imageExt = /\.(jpg|jpeg|png|gif|webp|svg|bmp|ico|tiff|avif)$/i;
  return imageExt.test(str);
}