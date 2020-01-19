// loop through all css in src
// build sass first
// build postcss

var fs = require('fs')
var path = require('path')
const { spawnSync } = require('child_process')

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
					return walk(file, (err, res) => {
						results = results.concat(res)
						if (!--pending) done(null, results)
					})
				}
				results.push(file)
				if (!--pending) done(null, results)
			})
		})
	})
}

const BASEJS = fs.readFileSync('./src/base.js')

walk('templates', (err, results) => {
	results = results.filter(f => f.endsWith('.js'))

	// build less
	results.map(file => {
		let name = file.substr(0, file.length - 3)
		console.log(file)
		if (!fs.existsSync(name + '.less')) return
		let cssname = name + '.css'

		var ns = name.split('/')
		var templateid = ns[ns.length - 1]

		// write tmp file
		fs.writeFileSync('./.tmp.less', makeTempLess(templateid))
		var less = spawnSync('node', ['./node_modules/less/bin/lessc', './.tmp.less', cssname])

		if (less.stderr.toString()) console.log(`stderr: ${less.stderr.toString()}`)
		// console.log(`stdout: ${less.stdout.toString()}`)
		// remove link
		fs.unlinkSync('./.tmp.less')

		// if (file.indexOf('/src/components/') === -1) fs.writeFileSync(name + '.js', BASEJS)
	})
})

function makeTempLess (templateid) {
	return `
@import './src/base.less';
#template() { @import './templates/${templateid}/${templateid}.less'; }
#subiz .template.${templateid} { #template() !important; }`
}
