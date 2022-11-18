const ANSWERS = {
	1 : "Hello, World!",
	2 : "Hello, you fool",
	3 : "Hello, hello, turn your radio on",
	4 : "Hello, darkness my old friend",
};

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }


export default {
	fetch() {
		return new Response(ANSWERS[getRandomInt(1,5)], {
			headers: {
				'content-type': 'text/plain',
			},
		});
	},
};
