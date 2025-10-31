import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import process from 'node:process'

const { version: oldVersion } = JSON.parse(readFileSync('package.json', { encoding: 'utf8' }))

execSync('bumpp -r -a --no-commit --no-tag --no-push', { stdio: 'inherit' })

const { version } = JSON.parse(readFileSync('package.json', { encoding: 'utf8' }))

if (oldVersion === version) {
  console.log('version error')
  process.exit()
}

execSync('git add .', { stdio: 'inherit' })
execSync(`git commit -m "chore: release v${version}"`, { stdio: 'inherit' })
// 移动到了publish.yml中
// execSync(`git tag -a v${version} -m "v${version}"`, { stdio: 'inherit' })
