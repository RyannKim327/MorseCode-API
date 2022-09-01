### Morse Code
##### Developed by MPOP Reverse II

> The purpose of this development is to practice some ideas about identifications of characters. As making a simple code of identifying data if it is a roman characters or in a morse code encryption.

##### Sample use

``` NodeJS
const axios = require("axios");

let result = async (data) => {
	let output = await axios.get("https://api-morsecode.vercel.app?data=" + data).then(response => {
		return response.data;
	}).catch(error => {
		console.error(`Error [Axios Morse]: ${error}`);
		return null;
	});
	return output;
};

module.exports = async (str) => {
	let data = await result(data);
	console.log(data)
}

```

##### Sample Result
``` JSON
{
	"input": "sample data",
	"result": "... .- -- .--. .-.. . / -.. .- - .- "
}
```

> The system will automatically remove the unwanted characters that won't be needed. If you see any kind of bugs and error, kindly send an email @ weryses19@gmail.com or create an issue on my GitHub @RyannKim327.