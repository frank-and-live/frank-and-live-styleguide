const { execSync } = require('child_process')
const cssParse = require('css-parse')
const { readFileSync, readdirSync, writeFileSync, copyFileSync } = require('fs')
const { join, extname } = require('path')
const { titleCase } = require('voca')
const { MAIN_BUILD_FILENAME } = require('../conf')

const buildDir = join(__dirname, '..', 'dist')
const buildFilenames = readdirSync(buildDir)
const indexFileSrc = readFileSync(
  join(__dirname, '..', 'src', 'docs', 'index.html'),
  'utf-8',
)
const styleData = []

for (const filename of buildFilenames) {
  if (filename === `${MAIN_BUILD_FILENAME}.min.css`) continue
  if (extname(filename) !== '.css') continue

  const rawStylesheet = readFileSync(join(buildDir, filename), 'utf-8')
  if (rawStylesheet.length < 1) continue

  const title = titleCase(filename.split('.')[0])

  styleData.push({
    filename,
    title,
    rules: cssParse(rawStylesheet).stylesheet.rules,
  })
}

writeFileSync(
  join(__dirname, '..', 'docs', 'index.html'),
  indexFileSrc.replace('___STYLE_DATA___', `\`${JSON.stringify(styleData, null, 2)}\``),
)

execSync(`cp -r ${join(__dirname, '..', 'dist')} ${join(__dirname, '..', 'docs', 'dist')}`)
