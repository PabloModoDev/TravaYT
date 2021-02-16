const { videoResize } = require('node-video-resize')
const path = require('path')
 
const videoPath = path.resolve(__dirname, './resize/test.mp4')
const outputPath = path.resolve(__dirname, './resize/output.mp4')
 
const bootstrap = async () => {
  const ret = await videoResize({
    inputPath: videoPath,
    outputPath,
    format: 'mp4',
    size: '640x480'
  })
  console.log(ret)
}
 
bootstrap()