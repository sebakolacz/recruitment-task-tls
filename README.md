# recruitment-task

## Project setup
```
yarn install
```
## Lista planet - vue.js

Zadanie polega na utworzeniu strony wyświetlającej listę planet. 

Lista jest pobrana z zewnętrznego API znajdującego się pod tym adresem: https://swapi.dev/api/planets.

Do pobrania danych z API wykorzystany został **AJAX**.

Zapytania z API idą czasem bardzo długo, więc został dodany loading. 

Każdy element listy został ostylowany oraz zawiera następujące parametry:
* name
* rotation_period
* climate
* gravity
* created
* url

Dodatkowym plusem będzie stworzenie paginacji oraz filtrowania aktualnej strony po którymś z parametrów oraz posortowanie listy alfabetycznie.