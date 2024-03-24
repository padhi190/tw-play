function CardHover() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-semibold">Card Hover Effect</h1>
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default CardHover;

function Card() {
  return (
    <div className="w-[250px] flex flex-col items-center justify-center gap-4 aspect-[1/1.4] bg-white rounded-2xl shadow-2xl group">
      <div className="relative z-0 flex items-center justify-center size-28">
        <img
          src="https://source.unsplash.com/random"
          alt="random"
          className="object-cover rounded-full size-24"
        />
        <div className="-z-[1] absolute inset-0 duration-500 rounded-full opacity-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 size-28 blur-md group-hover:opacity-100 group-hover:animate-spin"></div>
      </div>
      <div className="text-center">
        <p className="text-2xl font-semibold">Jane Doe</p>
        <p className="text-gray-400">Global Marketing Lead</p>
        <p className="text-gray-400">San Francisco, USA</p>
      </div>
    </div>
  );
}
