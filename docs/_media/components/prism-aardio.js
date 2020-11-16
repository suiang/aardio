/* **********************************************
     Begin prism-aardio.js
********************************************** */

Prism.languages.aardio = Prism.languages.extend('clike', {
	'keyword': [
		{
			pattern: /\b(?:begin|end|false|true|if|else|elseif|class|function|return|while|do|namespace|select|case|catch|try|for|in|this|global|self|owner|var|def|null|and|not|or|break|continue|import|with|ctor|try|catch|eval|import|type|assert|assertf|error|rget|loadcode|dumpcode|collectgarbage|call|invoke|tostring|topointer|tonumber|sleep|execute|setlocale|setprivilege|loadcodex|reduce|lambda|λ)\b/,
			lookbehind: true
		},
	],
	"url": {
		pattern: /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/m,
		lookbehind: true
	},
});

Prism.languages.aar = Prism.languages.aardio;