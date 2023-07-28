const Data = [
  {
    id: 1,
    name: "ТЕСТО",
    ingridients: [
      { name: "мука" },
      { name: "вода" },
      { name: "соль" },
      { name: "растительное масло" },
    ],
  },
  {
    id: 2,
    name: "НАЧИНКА",
    ingridients: [
      { name: "мясной фарш" },
      { name: "картофелины" },
      { name: "луковицы" },
      { name: "соль" },
      { name: "черного душистого перца" },
      { name: "зиры" },
      { name: "растительное масло" },
    ],
  },
  {
    id: 3,
    name: "ПАСТА С КРЕВЕТКАМИ",
    ingridients: [
      { name: "Спагетти" },
      { name: "Креветки (неочищенные)" },
      { name: "Сыр пармезан (или любой твёрдый сыр)" },
      { name: "Сливки жирностью 20%" },
      { name: "Вино сухое белое" },
      { name: "Масло сливочное" },
      { name: "Лук репчатый" },
      { name: "Чеснок" },
      { name: "Соль" },
      { name: "Перец чёрный молотый" },
      { name: "Паприка молотая" },
      { name: "Петрушка свежая" },
    ],
  },
  {
    id: 4,
    name: "ГАСПАЧО",
    ingridients: [
      { name: "Перец болгарский" },
      { name: "Помидоры" },
      { name: "Лук репчатый" },
      { name: "Чеснок" },
      { name: "Чиабатта" },
      { name: "Уксус винный" },
      { name: "Соль" },
      { name: "Перец черный молотый" },
    ],
  },
  {
    id: 5,
    name: "БРИЗОЛЬ",
    ingridients: [
      { name: "Для блинчиков:" },
      { name: "Яйца" },
      { name: "Молоко" },
      { name: "Соль" },
      { name: "" },
      { name: "Для начинки:" },
      { name: "Фарш мясной (свиной или свино-говяжий)" },
      { name: "Огурцы солёные" },
      { name: "Сыр твёрдый" },
      { name: "Чеснок" },
      { name: "Масло подсолнечное" },
      { name: "Сметана" },
      { name: "Соль" },
      { name: "Перец чёрный молотый" },
      { name: "" },
      { name: "Дополнительно:" },
      { name: "Зелень свежая" },
      { name: "Лук зелёный" },
    ],
  },
  {
    id: 6,
    name: "ЛЕЧО",
    ingridients: [
      { name: "Перец сладкий" },
      { name: "Лук репчатый" },
      { name: "Помидор" },
      { name: "Масло растительное" },
      { name: "Соль" },
      { name: "Сахар" },
      { name: "Перец черный горошком" },
      { name: "Перец душистый горошком" },
      { name: "Лавровый лист" },
      { name: "Уксус 9%" },
    ],
  },
  {
    id: 7,
    name: "КРУАССАН",
    ingridients: [
      { name: "Для теста:" },
      { name: "Молоко" },
      { name: "Масло сливочное" },
      { name: "Мука" },
      { name: "Сахар" },
      { name: "Соль" },
      { name: "Дрожжи сухие активные" },
      { name: "" },
      { name: "Для глазировки:" },
      { name: "Яйцо" },
      { name: "Молоко" },
    ],
  },
  {
    id: 8,
    name: "СИННАБОНЫ",
    ingridients: [
      { name: "пшеничная мука" },
      { name: "дрожжи сухие" },
      { name: "яйца куриные" },
      { name: "молоко" },
      { name: "сливочное масло" },
      { name: "сахар" },
      { name: "соль" },
      { name: "Начинка" },
      { name: "сахар коричневый" },
      { name: "корица молотая" },
      { name: "сливочное масло" },
      { name: "Крем" },
      { name: "сыр сливочный" },
      { name: "сливочное масло" },
      { name: "сахарная пудра" },
    ],
  },
  {
    id: 9,
    name: "КАРТОФЕЛЬ ПО ДЕРЕВЕНСКИ",
    ingridients: [
      { name: "картофеля" },
      { name: "растительное масло" },
      { name: "специи:" },
      { name: "сладкой паприки" },
      { name: "куркумы" },
      { name: "соли" },
      { name: "сухой чеснок" },
      { name: "горчицы сухой или готовой" },
      { name: "смеси специй для картофеля" },
    ],
  },
  {
    id: 10,
    name: "ЗАПЕЧЕНАЯ ТЫКВА С МЕДОМ И ОРЕХАМИ",
    ingridients: [
      { name: "Тыква" },
      { name: "Мед" },
      { name: "Сахар коричневый" },
      { name: "Масло сливочное" },
      { name: "Орехи грецкие" },
      { name: "Соль" },
      { name: "Вода" },
    ],
  },
  {
    id: 11,
    name: "ДОЛМА",
    ingridients: [
      { name: "Говяжий фарш" },
      { name: "Круглый рис" },
      { name: "Репчатый лук" },
      { name: "Сушеная кинза (кориандр)" },
      { name: "Сушеный базилик" },
      { name: "Сушеная душица" },
      { name: "Томатная паста" },
      { name: "Вода" },
      { name: "Листья винограда" },
      { name: "Соль" },
      { name: "Молотый черный перец" },
    ],
  },
  {
    id: 12,
    name: "МАКАРОНЫ ПО ФЛОТСКИ",
    ingridients: [
      { name: "Макароны" },
      { name: "Фарш" },
      { name: "Репчатый лук" },
      { name: "Чеснок" },
      { name: "Томатная паста" },
      { name: "Растительное масло" },
      { name: "Соль" },
      { name: "Молотый черный перец" },
    ],
  },
  {
    id: 13,
    name: "КРЫЛЫШКИ БАФФАЛО",
    ingridients: [
      { name: "Крылья куриные" },
      { name: "Соус Баффало" },
      { name: "Масло сливочное" },
      { name: "Сахар коричневый" },
      { name: "Соус томатный (или томатная паста)" },
      { name: "Соус (соус чили)" },
      { name: "Чеснок" },
      { name: "Перец черный" },
      { name: "Соль" },
      { name: "Соус Блю чиз" },
      { name: "Сыр мягкий" },
      { name: "Сметана" },
      { name: "Йогурт" },
      { name: "Чеснок" },
      { name: "Соль" },
      { name: "Перец черный" },
      { name: "Сельдерей черешковый" },
      { name: "Морковь" },
    ],
  },
  {
    id: 14,
    name: "САЛАТ С ХРУСТЯЩИМИ БАКЛАЖАНАМИ",
    ingridients: [
      { name: "Баклажаны" },
      { name: "Сливочный сыр" },
      { name: "Укроп" },
      { name: "Кукурузный крахмал" },
      { name: "Подсолнечное масло" },
      { name: "Соль" },
      { name: "Кунжутное масло" },
      { name: "Помидоры" },
      { name: "Семечки подсолнуха" },
      { name: "Зеленый лук" },
      { name: "Сладкий соус чили" },
      { name: "Кинза" },
    ],
  },
  {
    id: 15,
    name: "БАГЕТ С ЧЕСНОКОМ",
    ingridients: [
      { name: "Батон" },
      { name: "Чеснок" },
      { name: "Петрушка" },
      { name: "Масло сливочное" },
      { name: "Итальянские травы" },
    ],
  },
  {
    id: 16,
    name: "ПАСТА КАРБОНАРА",
    ingridients: [
      { name: "Спагетти" },
      { name: "Оливковое масло" },
      { name: "Чеснок" },
      { name: "Ветчина" },
      { name: "Яичный желток" },
      { name: "Тертый сыр пармезан" },
      { name: "Сливки 10%-ные" },
      { name: "Соль" },
      { name: "Молотый черный перец" },
    ],
  },
  {
    id: 17,
    name: "ХАШЛАМА",
    ingridients: [
      { name: "грудинка" },
      { name: "помидоры" },
      { name: "лук репчатый" },
      { name: "перец болгарский" },
      { name: "баклажаны" },
      { name: "кабачки" },
      { name: "морковь" },
      { name: "перец красный острый" },
      { name: "кукуруза" },
      { name: "чеснок" },
      { name: "томат-паста" },
      { name: "паста острая (хариса, табаско или аналогичная)" },
      { name: "растительное масло" },
      { name: "специи" },
      { name: "топленое масло" },
      { name: "вода" },
    ],
  },
];

export default Data;
