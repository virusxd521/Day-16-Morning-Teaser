import { ProgressBar } from './ProgressBar';

const body = document.querySelector("body");

document.addEventListener('DOMContentLoaded', () => {
  const rightElement = new ProgressBar(0, 1);
  const alreadyAppended =  body.appendChild(rightElement.element);
});
