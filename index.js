const express = require("express")
const app = express()

let output = (data, t) => {
	const a = [
		"a", "b", "c", "d", "e",
		"f", "g", "h", "i","j",
		"k", "l", "m", "n", "o",
		"p", "q", "r", "s", "t",
		"u", "v", "w", "x", "y",
		"z", " ",
		"0", "1", "2", "3", "4",
		"5", "6", "7", "8", "9"
	]
	const b = [
		".-", "-...", "-.-.", "-..", ".",
		"..-.", "--.",  "....", "..", ".---",
		"-.-", ".-..", "--", "-.", "---",
		".--.", "--.-", ".-.", "...", "-",
		"..-", "...-", ".--", "-..-", "-.--",
		"--..", "/",
		"-----", ".----", "..---", "...--", "....-",
		".....", "-....", "--...", "---..", "----."
	]
	let c = ""
	if(t){
		for(let d = 0; d < data.length; d++){
			let e = data.charCodeAt(d)
			if((e > 96 && e < 123) || e == 32){
				for(let f = 0; f < b.length; f++){
					if(data[d] == a[f]){
						c += b[f] + " "
						break
					}
				}
			}
		}
	}else{
		let d = data.split(" ")
		for(let e = 0; e < d.length; e++){
			for(let f = 0; f < b.length; f++){
				if(d[e] == b[f]){
					c += a[f]
					break
				}
			}
		}
	}
	if(c == ""){
		return "System can't generate the results"
	}else{
		return c
	}
}

app.get("/", (req, res) => {
	let query = req.query.data
	if(query == undefined){
		res.sendFile(__dirname + "/index.html")
	}else{
		let data = query.toLowerCase()
		let bool = false
		for(let i = 0; i < data.length; i++){
			let code = data.charCodeAt(i)
			if(code > 96 && code < 123){
				bool = true
				break
			}
		}
		let result = output(data, bool)
		let json = {
			input: query,
			result
		}
		res.send(JSON.stringify(json))
	}
})

app.listen(3000, () => {
	console.log("Listening to a default PORT.")
})

module.exports = app