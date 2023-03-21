import axios from "axios";
import { ReadlineParser, SerialPort } from "serialport";

const parser = new ReadlineParser({
	delimiter: "\r\n",
});

// the path option below refers to the port where the arduino is connected

// const port = new SerialPort({
// 	path: "",
// 	baudRate: 9600,
// 	dataBits: 8,
// 	parity: "none",
// 	stopBits: 1,
// 	flowControl: false,
// });

// port.pipe(parser);

let feedObject;

async function getFeeds() {
	const { data } = await axios.get(
		"https://api.thingspeak.com/channels/2037805/feeds.json?api_key=38OJ7YFWIYUUB3ZN&results=1"
	);

	data.feeds.map((feed) => {
		feedObject = {
			tempReal: parseFloat(feed.field1),
			tempSpam: parseFloat(feed.field2.replace("\r\n", "")),
		};
	});
}

await getFeeds();
const { tempReal, tempSpam } = feedObject;
console.log("Real Temperature :", tempReal);
console.log("Spam Temperature :", tempSpam);
const diff = tempSpam - tempReal;
console.log("Difference :", tempSpam - tempReal);

let isSpam = 0; // by default the isSpam flage is 0 i.e false

// port.write(isSpam);

setTimeout(function(){
	   port.write(isSpam);},3000)

