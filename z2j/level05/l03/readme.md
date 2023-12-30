# Minesweeper (Saper)
## Wymagania:
- 3 tryby trudności do wyboru, zgodnie z tym co na wikipedii, miny rozstawione losowo (uważaj żeby nie wstawić wielu min w jedno miejsce)
- Pola, które wskazują ile jest min wokół nich
- Odkrycie wszystkich pól po porażce
- Kliknięcia w puste pola odsłaniają wszystkie puste pola, które sąsiadują z kolejnymi pustymi polami. Przykład: (edited)
- pola po przekątnej też liczymy jako sąsiadujące pola

## Opcjonalnie:
- Rozgrywka nigdy nie rozpoczyna się od miny
- Timer
- Opcja oznaczania pola jako pole z miną
    - Odsłanianie pól dwuklikiem po kliknięciu w pole z cyfrą, na podstawie oznaczeń min, jak w klasycznym saperze
    - Wskaźnik ile zostało jeszcze nieoznaczonych min

## User Stories
#### User Story 1: Użytkownik powinien być w stanie utworzyć nową grę z dowolnym rozmiarem planszy i liczbą min.
- [x] Stworzenie trzech trybów trudności: łatwy, średni i trudny, z różnymi konfiguracjami planszy wpływającymi na stopień trudności gry.

- [x] Dostosowanie rozmiaru planszy w zależności od wybranego trybu trudności:
- łatwy (8x8), 
- średni (16x16), 
- trudny (30x16).

- [x] Ustawienie min na planszy zgodnie z trybem trudności:
- łatwy (10 min), 
- średni (40 min), 
- trudny (99 min). 

- [ ] Dodanie timera mierzącego czas trwania rozgrywki.


#### User Story 2: Użytkownik powinien być w stanie odsłonić pola na planszy, klikając je.
- [x] Zapewnienie losowego rozmieszczenia min na planszy, unikając zbyt bliskiego umiejscowienia, by utrzymać wyzwanie dla gracza.
- [ ] Wprowadzenie mechanizmu gwarantującego, że rozgrywka nigdy nie rozpocznie się od odsłonięcia pola z miną.
- [ ] Umożliwienie graczowi klikania na puste pola, co odsłoni sąsiednie puste pola, łącznie z polami po przekątnej.
- [ ] Dodanie pól na planszy, informujących gracza o liczbie min w ich bezpośrednim sąsiedztwie. Kliknięcie w puste pole powoduje odsłonięcie sąsiednich pustych pól, również po przekątnej, wywołując łańcuchową reakcję.

#### User Story 3: Użytkownik powinien być w stanie oznaczyć pola jako flagowane, klikając je prawym przyciskiem myszy.
- [ ] Odpowiednio oznaczenie pól na planszy zgodnie z ich stanem: nieotwarte pola, oznaczone cyframi, puste pola, oznaczone flagą, pola z pytajnikiem.

- [ ] Implementacja mechanizmu odsłaniania wszystkich pól po zakończeniu gry, dostarczając pełnej informacji o rozmieszczeniu min.

- [ ] Umieszczenie opcji oznaczania pól jako te, na których gracz podejrzewa obecność miny. Odsłanianie pól dwukrotnym kliknięciem w pola z cyfrą, zgodnie z tradycją klasycznego sapera.

- [ ] Wyświetlanie wskaźnika informującego gracza o ilości min pozostałych do oznaczenia.

## Gameflow
### Krok 1: Wybór ustawień gry
Gracz wybiera rozmiar planszy i liczbę min. Może to zrobić na ekranie głównym gry. Do wyboru ma:
- Easy (9x9)
- Medium (16x16)
- Hard (32x32)

### Krok 2: Rozpoczęcie gry
Gracz klika przycisk "Rozpocznij grę" na ekranie głównym.

### Krok 3: Odkrywanie pól
Gracz klika pola na planszy, aby je odkryć. Jeśli pole zawiera minę, gra się kończy. Jeśli pole nie zawiera miny, pole zostaje odkryte i wyświetlana jest liczba min w sąsiedztwie pola.

### Krok 4: Oznaczanie pól jako flagowanych
Gracz może oznaczyć pola jako flagowane, klikając je prawym przyciskiem myszy. Flagowane pola nie są odkrywane do czasu, gdy gracz kliknie je ponownie.

### Krok 5: Zwycięstwo
Gracz wygrywa, jeśli odkryje wszystkie pola, które nie zawierają min.

### Krok 6: Przegrana
Gracz przegrywa, jeśli kliknie pole zawierające minę.


## Wireframe dla ekranu głównego

Ekran główny gry minesweeper powinien zawierać następujące elementy:

- Logo gry
- Opcje wyboru rozmiaru planszy
- Opcje wyboru liczby min
- Przycisk rozpoczęcia gry
- Planszę z polami
- Licznik liczby odkrytych pól
- Licznik liczby min na planszy
- Licznik czasu

### Wireframe dla ekranu końca gry

Ekran końca gry powinien zawierać następujące elementy:

- Komunikat o wyniku gry
- Opcja rozpoczęcia nowej gry

### Ekran główny

Ekran główny powinien być prosty i przejrzysty. Logo gry powinno być umieszczone w centralnej części ekranu. Opcje wyboru rozmiaru planszy i liczby min powinny być umieszczone w dolnej części ekranu. Przycisk rozpoczęcia gry powinien być umieszczony w prawym dolnym rogu ekranu.

### Ekran gry

Plansza z polami powinna być umieszczona w centralnej części ekranu. Licznik liczby odkrytych pól powinien być umieszczony w górnej części ekranu. Licznik liczby min na planszy powinien być umieszczony w lewym dolnym rogu ekranu. Licznik czasu powinien być umieszczony w prawym dolnym rogu ekranu.

### Ekran końca gry

Komunikat o wyniku gry powinien być umieszczony w centralnej części ekranu. Opcja rozpoczęcia nowej gry powinna być umieszczona w dolnej części ekranu.

## Design

### Kolory
| Kolor | Kod CSS | Użycie |
|-----|-----|-----|
| `white` | `white` | Plansza |
| `gray` | `gray` | Nieodkryte pola |
| `black` | `black` | Mina, Kolor tekstu |
| `green` | `green` | Pola z minami w sąsiedztwie: 0 |
| `red` | `red` | Pola z minami w sąsiedztwie: 1 |
| `yellow` | `yellow` | Pola z minami w sąsiedztwie: 2 |
| `blue` | `blue` | Pola z minami w sąsiedztwie: 3 |
| `purple` | `purple` | Pola z minami w sąsiedztwie: 4 |
| `#008080` | `#008080` | Kolor tła przypominający Windows 95 |
| `#c0c0c0` | `#c0c0c0` | Kolor tablicy przypominający Windows 95 |
| `#000080` | `#000080` | Kolor w tytułach okien |

### Ikony

| Element | Kod Unicode | Kod HTML | Kod JS | Kod CSS
|---------|---------|---------|---------|---------|
| Mina | `U+2600` | `&#9728` |
| Flaga | `U+2691` | `&#9873;` |
| Cross | `U+274C` | ❌ | `\u{274C}` | `\274C` |
| Skull and crossbones | `U+262x` | `&#9760;` |

### Czcionka
- PixelMplus
```css
@font-face {
  font-family: PixelMplus10 Regular;
  src: url('https://cdn.leafscape.be/PixelMplus/PixelMplus10-Regular_web.woff2') format('woff2');
}

@font-face {
  font-family: PixelMplus10 Bold;
  src: url('https://cdn.leafscape.be/PixelMplus/PixelMplus10-Bold_web.woff2') format('woff2');
}

@font-face {
  font-family: PixelMplus12 Regular;
  src: url('https://cdn.leafscape.be/PixelMplus/PixelMplus12-Regular_web.woff2') format('woff2');
}

@font-face {
  font-family: PixelMplus12 Bold;
  src: url('https://cdn.leafscape.be/PixelMplus/PixelMplus12-Bold_web.woff2') format('woff2');
}
```