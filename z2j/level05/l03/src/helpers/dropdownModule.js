import { getBoardAttributes, startGame } from "./gameModule.js";

export default function addNewGameDropdown() {
  const dropDownItems = [
    {
      label: 'łatwy',
      columns: 8,
      rows: 8,
      mines: 10,
    },
    {
      label: 'średni',
      columns: 16,
      rows: 16,
      mines: 40,
    },
    {
      label: 'trudny',
      columns: 30,
      rows: 16,
      mines: 99,
    },
  ];

  let dropdownAdded = false; // Zmienna flagowa śledząca, czy dropdown został dodany

  const nowaGraElement = document.querySelector('#nowa-gra');

  const nowaGraLabel = document.createElement('div');
  nowaGraLabel.textContent = 'Nowa gra';
  nowaGraElement.appendChild(nowaGraLabel);

  nowaGraElement.addEventListener('mouseover', function () {
    // Jeśli dropdown nie został jeszcze wygenrowany to wykonaj kod
    // Zapobiega duplikowaniu dropdown
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
        menuItem.setAttribute('data-game-columns', item.columns);
        menuItem.setAttribute('data-game-rows', item.rows);
        menuItem.setAttribute('data-game-mines', item.mines);
        dropdownMenu.appendChild(menuItem);
      });
      nowaGraMenu.appendChild(dropdownMenu);
      nowaGraElement.appendChild(nowaGraMenu);

      // Ustaw flagę, że dropdown został już wygenerowany
      dropdownAdded = true;

      // Dodaj niezbędne EventListenery
      const containerElement = document.getElementsByClassName('container')[0];
      containerElement.addEventListener('click', function (e) {
        const dropdownMenuItemElements = document.querySelectorAll(
          '.dropdown-menu-item'
        );
        const isDropdownMenuItem = [...dropdownMenuItemElements].find(
          (item) => item === e.target
        );

        const dropdownElement = document.getElementById('dropdown-menu');
        if (!dropdownElement) {
          // Element dropdown-menu nie został znaleziony
          return;
        } else if (!dropdownElement.contains(e.target) && !isDropdownMenuItem) {
          console.log(
            'Kliknięcie poza dropdownem i nie na .dropdown-menu-item'
          );
          dropdownElement.remove();
          dropdownAdded = false;
        } else if (isDropdownMenuItem) {
          // Pobież dane z atrybutów i rozpocznij nową grę
          const [ rows, columns, mines ] = getBoardAttributes(isDropdownMenuItem)
          startGame(rows, columns, mines)
        }
      });
    }
  });
}
