const express = require('express')
const app = express()
const port = 8080

const displayList = [
	"Logic will get you from A to B. Imagination will take you everywhere.",
	"There are 10 kinds of people. Those who know binary and those who don't.",
	"There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies and the other is to make it so complicated that there are no obvious deficiencies.",
	"It's not that I'm so smart, it's just that I stay with problems longer.",
	"It is pitch dark. You are likely to be eaten by a grue.",
]

app.get("/", (req, res) => {

	const selectedTextIndex = Math.abs(Math.floor(Math.random() * displayList.length))
	const selectedText = displayList[selectedTextIndex]
	
	res.send("<html><body>" + 
		"<div>&nbsp;</div>" + 
		"<div style='text-align: center;' >" + 
			"<table style='margin-left: auto; margin-right: auto; '><tr>" + 
			"<td><img src='images/test.png' /></td>" + 
			"<td style='font-size: 30px;'>" + selectedText + "</td>" + 
			"</tr></table>" + 
		"</div>" + 
		"<div>&nbsp;</div>" + 
		"<div style='text-align: center; font-size: 20px;'>Repository <a href='https://github.com/kentlaigvt/cfdsa'>https://github.com/kentlaigvt/cfdsa</a></div>" + 
		"</body></html>")
})

app.use(express.static('static_files'));

app.listen(port, () => {
	console.log("Started listening at http://localhost:" + port)
})