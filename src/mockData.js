export const MOCK_PRODUCTS = [
  {
    id: 1,
    title: "Смарт-часы X100",
    price: 7490,
    category: "Гаджеты",
    image: "https://images.pexels.com/photos/11677077/pexels-photo-11677077.jpeg",
    description: "Водонепроницаемые смарт-часы с GPS-трекером и 7-дневным аккумулятором. Отслеживание активности, мониторинг сна и пульса."
  },
  {
    id: 2,
    title: "Беспроводные наушники Pro",
    price: 5990,
    category: "Аксессуары",
    image: "https://images.unsplash.com/photo-1689872072441-5aed6df99448?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBvbiUyMGRlc2slMkMlMjBwcmVtaXVtJTIwYXVkaW8lMjBkZXZpY2UlMjB0ZWNobm9sb2d5fGVufDB8Mnx8fDE3NjU5MDYwNzh8MA&ixlib=rb-4.1.0&q=85",
    description: "Премиальные беспроводные наушники с активным шумоподавлением. До 30 часов работы от одной зарядки."
  },
  {
    id: 3,
    title: "Ноутбук UltraBook 15",
    price: 89990,
    category: "Электроника",
    image: "https://images.pexels.com/photos/218863/pexels-photo-218863.jpeg",
    description: "Мощный ультрабук с процессором Intel Core i7, 16 ГБ RAM, SSD 512 ГБ. Идеален для работы и развлечений."
  },
  {
    id: 4,
    title: "Смартфон Galaxy S23",
    price: 64990,
    category: "Гаджеты",
    image: "https://images.unsplash.com/photo-1760443728278-62bef33bcc1e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwaW4lMjBoYW5kJTJDJTIwbW9kZXJuJTIwbW9iaWxlJTIwcGhvbmUlMjB0ZWNobm9sb2d5fGVufDB8MXx8fDE3NjU5MDYwNzl8MA&ixlib=rb-4.1.0&q=85",
    description: "Флагманский смартфон с камерой 200 МП, дисплеем AMOLED 6.8 дюймов и процессором Snapdragon 8 Gen 2."
  },
  {
    id: 5,
    title: "Планшет TabPro 12",
    price: 45990,
    category: "Электроника",
    image: "https://images.unsplash.com/photo-1638273266965-843b01e02a5c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHx0YWJsZXQlMjBkZXZpY2UlMjBvbiUyMHRhYmxlJTJDJTIwdG91Y2hzY3JlZW4lMjBkaXNwbGF5JTIwdGVjaG5vbG9neXxlbnwwfDB8fHwxNzY1OTA2MDc5fDA&ixlib=rb-4.1.0&q=85",
    description: "Планшет с экраном 12.4 дюйма, поддержкой стилуса и клавиатуры. Идеален для творчества и работы."
  },
  {
    id: 6,
    title: "Фотокамера DSLR Pro",
    price: 125990,
    category: "Электроника",
    image: "https://images.pexels.com/photos/10416279/pexels-photo-10416279.jpeg",
    description: "Профессиональная зеркальная камера с матрицей 45 МП, видео 4K 60fps и продвинутой системой автофокуса."
  },
  {
    id: 7,
    title: "Умная колонка Echo Plus",
    price: 8990,
    category: "Гаджеты",
    image: "https://picsum.photos/400/400?random=7",
    description: "Умная колонка с голосовым ассистентом, премиальным звуком и управлением умным домом."
  },
  {
    id: 8,
    title: "Игровая консоль NextGen",
    price: 54990,
    category: "Электроника",
    image: "https://picsum.photos/400/400?random=8",
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