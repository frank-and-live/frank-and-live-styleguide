const { readdirSync } = require('fs')
const { execSync } = require('child_process')
const { extname, join } = require('path')
const { MAIN_BUILD_FILENAME } = require('../conf')

const filesDir = join(__dirname, '..', 'src', 'scss')
const distDir = join(__dirname, '..', 'dist')
const sassCli = join(__dirname, '..', 'node_modules', 'sass', 'sass.js')

for (const filename of readdirSync(filesDir)) {
  if (filename === 'index.scss') {
    const outFilename = (
      filename === 'index.scss' ? `${MAIN_BUILD_FILENAME}.css` : filename
    )
      .replace(/^_/, '')
      .replace('.scss', '.css')

    const outFilenameMin = outFilename.replace('.css', '.min.css')

    execSync(`
      node ${sassCli} ${filesDir}/${filename} ${distDir}/${outFilename}
    `)

    execSync(`
      node ${sassCli} ${filesDir}/${filename} ${distDir}/${outFilenameMin} --style compressed
    `)
  }
}
