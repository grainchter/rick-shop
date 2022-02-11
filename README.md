# RickShop

Интернет-магазин, базирующийся на вселенной Рика и Морти.

### [LIVE DEMO](https://rick-shop.herokuapp.com/rick-shop/)

## Для чего нужен?

RickShop - пет-проект, в процессе создания которого были использованы такие технологии как: 

- React Router;
- Private/Public route;

Управление доступностью определенных страниц для авторизованных/неавторизованных пользователей. Например, страница регистрации не доступна для авторизованного пользователя, а страница пользователя недоступна для неавторизованного.

- React Hooks;
- Redux Toolkit/Redux;
- react-device-detect;
- Rest Api;
- react-toastify.

## Структура проекта

### Стартовая страница

На старовой странице расположен баннер-карусель.

### Страница товаров

Страница товаров состоит из карточек товара (изображение, краткая информация, кнопка купить). При клике на кнопку "купить", выбранный товар добавляется в корзину.

### Корзина

Со страницы "корзина" можно оформить заказ на товары (выбрать необходимые, посмотреть итоговую стоимость выбранных товаров) или удалить выбранные.
Если пользователь не авторизован, появитя сообщение с просьбой авторизоваться. 

### Авторизация/Регистрация

![alt text](https://i.ibb.co/vVn9ttf/auth.png)

### Страница пользователя

- Информация о пользователе

Пользователь может добаить информацию о своем адресе, номере телефона.

- Информация о заказах

## Инструкция по запуску

### `git clone https://github.com/grainchter/rick-shop`

### `cd rick-shop`

Установка зависимостей

### `npm i`

Запуск проекта

### `npm start`




