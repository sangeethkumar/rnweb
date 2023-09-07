import {AppRegistry} from 'react-native';
import name from './app.json';
import App from "./App";
import regular from './assets/fonts/DancingScript-Regular.ttf';
import medium from './assets/fonts/DancingScript-Medium.ttf';
import semiBold from './assets/fonts/DancingScript-SemiBold.ttf';
import bold from './assets/fonts/DancingScript-Bold.ttf';

const regularFontStyles = `@font-face {
  src: url(${regular});
  font-family: 'DancingScript-Regular';
}`;

const mediumFontStyles = `@font-face {
  src: url(${medium});
  font-family: 'DancingScript-Medium';
}`;
const semiFontStyles = `@font-face {
  src: url(${semiBold});
  font-family: 'DancingScript-SemiBold';
}`;
const thinFontStyles = `@font-face {
  src: url(${bold});
  font-family: 'DancingScript-Bold';
}`;
// Create stylesheet
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = regularFontStyles;
} else {
  style.appendChild(document.createTextNode(regularFontStyles));
  style.appendChild(document.createTextNode(mediumFontStyles));
  style.appendChild(document.createTextNode(semiFontStyles));
  style.appendChild(document.createTextNode(thinFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);

AppRegistry.registerComponent(name, () => App);
AppRegistry.runApplication(name, {
  initialProps: {},
  rootTag: document.getElementById('app-root')
});
