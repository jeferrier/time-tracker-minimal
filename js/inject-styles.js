const darkModeEnabled = help.locallyGet('dark-mode-enabled');
let cssString = 'css/light-mode.css';

if (darkModeEnabled){
	cssString = 'css/dark-mode.css';
}

let linkElement = help.getHTMLElementFromString(`<link href="${cssString}" rel="stylesheet">`);
document.getElementsByTagName('head')[0].appendChild(linkElement);