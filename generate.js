// loop through all css in src
// build sass first
// build postcss

var fs = require('fs')
var path = require('path')
const { spawnSync } = require('child_process')

function postcssConfig (pathnoextension) {
	var ps = pathnoextension.split('/')
	var templateid = ps[ps.length - 1]

	let templateidClass = '.' + templateid
	if (templateid === 'base') templateidClass = ''

	return `var path = require('path')
module.exports = {
	plugins: {
		'postcss-parent-selector': {
			selector: '#subiz .template${templateidClass}'
		},
		'postcss-safe-important': {
			paths: p => p.startsWith(path.resolve(__dirname, '../node_modules')),
			keepcomments: true,
		},
	},
}`
}

function walk (dir, done) {
	var results = []
	fs.readdir(dir, (err, list) => {
		if (err) return done(err)
		var pending = list.length
		if (!pending) return done(null, results)
		list.forEach(file => {
			file = path.resolve(dir, file)

			fs.stat(file, (err, stat) => {
				if (stat && stat.isDirectory()) {
					walk(file, (err, res) => {
						results = results.concat(res)
						if (!--pending) done(null, results)
					})
				} else {
					results.push(file)
					if (!--pending) done(null, results)
				}
			})
		})
	})
}

const BASEJS = fs.readFileSync('./src/base.js')

walk('src', (err, results) => {
	results = results.filter(f => f.endsWith('.vue'))

	// build sass
	results.map(file => {
		let name = file.substr(0, file.length - 4)
		console.log(file)

		if (fs.existsSync(name + '.scss')) {
			let cssname = name + '.css'
			spawnSync('./node_modules/sass/sass.js', [
				'--no-source-map',
				name + '.scss',
				cssname,
			])

			fs.writeFileSync('./.postcssrc.js', postcssConfig(name))

			// run postcss
			spawnSync('./node_modules/postcss-cli/bin/postcss', [
				cssname,
				'--no-map',
				'-o',
				cssname,
			])

			fs.unlinkSync('./.postcssrc.js')
		}

		if (file.indexOf('/src/components/') === -1) fs.writeFileSync(name + '.js', BASEJS)
		// console.log(`stderr: ${postcss.stderr.toString()}`)
		// console.log(`stdout: ${postcss.stdout.toString()}`)
	})
})
