export const MOCK_PRODUCTS = [
  {
    id: 1,
    title: "Смарт-часы X100",
    price: 7490,
    category: "Гаджеты",
    image: "https://avatars.mds.yandex.net/i?id=2ccc68622e66920aa6711be750d0c8a1_l-12155438-images-thumbs&n=13",
    description: "Водонепроницаемые смарт-часы с GPS-трекером и 7-дневным аккумулятором. Отслеживание активности, мониторинг сна и пульса."
  },
  {
    id: 2,
    title: "Беспроводные наушники Pro",
    price: 5990,
    category: "Аксессуары",
    image: "https://avatars.mds.yandex.net/get-mpic/1726038/img_id3384263431291103422.jpeg/orig",
    description: "Премиальные беспроводные наушники с активным шумоподавлением. До 30 часов работы от одной зарядки."
  },
  {
    id: 3,
    title: "Ноутбук UltraBook 15",
    price: 89990,
    category: "Электроника",
    image: "https://img.freepik.com/premium-photo/laptop-computer-laptop-light-black_53876-366299.jpg?semt=ais_hybrid&w=740",
    description: "Мощный ультрабук с процессором Intel Core i7, 16 ГБ RAM, SSD 512 ГБ. Идеален для работы и развлечений."
  },
  {
    id: 4,
    title: "Смартфон Galaxy S23",
    price: 64990,
    category: "Гаджеты",
    image: "https://m.media-amazon.com/images/I/31vVNtXkLuL.jpg",
    description: "Флагманский смартфон с камерой 200 МП, дисплеем AMOLED 6.8 дюймов и процессором Snapdragon 8 Gen 2."
  },
  {
    id: 5,
    title: "Планшет TabPro 12",
    price: 45990,
    category: "Электроника",
    image: "https://img.mvideo.ru/Big/small_pic/480/400416452bb5.jpg",
    description: "Планшет с экраном 12.4 дюйма, поддержкой стилуса и клавиатуры. Идеален для творчества и работы."
  },
  {
    id: 6,
    title: "Фотокамера DSLR Pro",
    price: 125990,
    category: "Электроника",
    image: "https://i.ytimg.com/vi/b73P0dCXOjI/hqdefault.jpg",
    description: "Профессиональная зеркальная камера с матрицей 45 МП, видео 4K 60fps и продвинутой системой автофокуса."
  },
  {
    id: 7,
    title: "Умная колонка Echo Plus",
    price: 8990,
    category: "Гаджеты",
    image: "https://p.turbosquid.com/ts-thumb/Sf/mp0B7j/Io/r_viewport_001/png/1624527240/600x600/fit_q87/4ae0c0b3eda47885e3b42cef8dcef8e48fd17ad5/r_viewport_001.jpg",
    description: "Умная колонка с голосовым ассистентом, премиальным звуком и управлением умным домом."
  },
  {
    id: 8,
    title: "Игровая консоль NextGen",
    price: 54990,
    category: "Электроника",
    image: "https://frankfurt.apollo.olxcdn.com/v1/files/8cixyjtnk0oz1-KZ/image",
    description: "Новейшая игровая консоль с поддержкой 4K 120fps, SSD 1 ТБ и эксклюзивными играми."
  }
];

export const formatPrice = (price) => `${price.toLocaleString('ru-RU')} ₽`;

export const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_PRODUCTS);
    }, 500);
  });
};