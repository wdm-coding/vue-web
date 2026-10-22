export const getLinkUrl = (path: string) => {
  if(path.startsWith('/notebook')){
    const origin = window.location.origin
    if(origin.startsWith('http://localhost')){
      return `http://localhost:5173${path}?token=666111222}`
    }
  }
  return path
}