import addNodeToDom from './addNode.js';

export default function addDropdown() {
  const dropDownItems = [
    {
      label: 'łatwy',
      fields: 8 * 8,
      mines: 10,
    },
    {
      label: 'średni',
      fields: 16 * 16,
      mines: 40,
    },
    {
      label: 'trudny',
      fields: 30 * 16,
      mines: 99,
    },
  ];

  let dropdownAdded = false; // Zmienna flagowa śledząca, czy dropdown został dodany

  const targetElement = document.querySelector('#nowa-gra');

  const nowaGraLabel = document.createElement('div');
  nowaGraLabel.textContent = 'Nowa gra';
  targetElement.appendChild(nowaGraLabel);

  targetElement.addEventListener('mouseover', function () {
    if (!dropdownAdded) {
      // Dodaj dropdown menu
      let nowaGraMenu = document.createDocumentFragment();
      const dropdownMenu = document.createElement('div');
      dropdownMenu.classList.add('dropdown-menu');
      dropdownMenu.id = 'dropdown-menu';
      // Dodaj itemy do menu
      dropDownItems.forEach((item) => {
        const menuItem = document.createElement('div');
        menuItem.classList = 'dropdown-menu-item';
        menuItem.textContent = item.label;
        menuItem.setAttribute('data-game-fields', item.fields);
        menuItem.setAttribute('data-game-mines', item.mines);
        dropdownMenu.appendChild(menuItem);
      });
      nowaGraMenu.appendChild(dropdownMenu);
      targetElement.appendChild(nowaGraMenu);
      dropdownAdded = true;
    }
  });
}
