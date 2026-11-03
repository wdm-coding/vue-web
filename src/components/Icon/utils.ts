export function isImagePath(str: string) {
  if (typeof str !== 'string' || str.trim() === '') return false;
  // 匹配常见图片扩展名，不区分大小写
  const imageExt = /\.(jpg|jpeg|png|gif|webp|svg|bmp|ico|tiff|avif)$/i;
  // 匹配base64编码的图片
  const base64Image = /^data:image\/(png|jpg|jpeg|gif|webp|svg|bmp|ico|tiff|avif);base64,/;
  return (imageExt.test(str) || base64Image.test(str));
}