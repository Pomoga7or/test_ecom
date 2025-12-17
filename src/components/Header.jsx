import DarkVeil from './DarkVeil';

export default function Header() {
  return (
    <div className="relative z-10 w-full h-screen">
      <DarkVeil speed="2" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Онлайн-магазин цифровой техники и гаджетов
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        </p>
        <p className="text-lg md:text-xl text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At praesentium necessitatibus molestias, asperiores quaerat assumenda ratione reiciendis sed ad soluta quasi expedita et maxime.
        </p>
      </div>
    </div>
  );
}