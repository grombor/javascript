'use strict';

const buttonRemove = () => {
  const buttonElement = document.getElementById('mainButton');
  buttonElement.remove();
};

const changeBackground = () => {
  const mainElement = document.getElementById('main');
  mainElement.classList.add('main_box');
};

const createAlertHeader = () => {
  const mainElement = document.querySelector('#main');
  const headingElement = document.createElement('h1');
  headingElement.classList.add('header');
  const headingTextContent =
    'Windows Encountered a Problem and Needs to be Shut Down: Error Code: 0x000000F4';
  const headingText = document.createTextNode(headingTextContent);
  headingElement.appendChild(headingText);
  mainElement.appendChild(headingElement);
};

const createAlerBody = () => {
  const mainElement = document.querySelector('#main');
  const bodyTextContent = [
    'To resolve this issue, please try the following:',
    'Make sure your computer is properly connected and functioning correctly.',
    'Check if the latest updates for Windows and device drivers are installed.',
    'Try performing a system restore to an earlier point in time.',
    'If the problem persists, please contact technical support for further guidance on resolving this issue.',
    'We apologize for any inconvenience caused by this problem. Thank you for your understanding.',
  ];
  const divElement = document.createElement('div');
  divElement.classList.add('alert_body')
  bodyTextContent.forEach((line) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = line;
    divElement.appendChild(paragraph);
  });
  mainElement.appendChild(divElement);
};

function handleButtonClick() {
  buttonRemove();
  changeBackground();
  setTimeout(() => {
    createAlertHeader();
    createAlerBody();
  }, 6500);
}
