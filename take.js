const path = require('path')
const fs = require('fs')
const flow = require('@subiz/flow')
//joining path of directory
const directoryPath = path.join(__dirname, 'src/templates')
//passsing directoryPath and callback function
fs.readdir(directoryPath, async function (err, files) {
	//handling error
	if (err) {
		return console.log('Unable to scan directory: ' + err)
	}

	const browser = await puppeteer.launch()

	await flow.map(files, 4, async (file) => {
		if (!file.endsWith('.less')) return
		if (!file.startsWith('template')) return

		let templateid = file.split('.')[0]

		const page = await browser.newPage()
		await page.setViewport({ width: 1000, height: 768 })
		await page.goto('http://localhost:8082/?screenshoot#' + templateid, { waitUntil: 'networkidle2' })
		await timeout(200)
		await page.screenshot({ path: './thumbs/' + templateid + '.jpg' })
		console.log('GENERATED THUMBNAIL FOR ', templateid + '.jpg')
	})
	browser.close()
})

const puppeteer = require('puppeteer')

function timeout (ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}
