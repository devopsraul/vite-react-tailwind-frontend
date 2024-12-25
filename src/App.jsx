import bgImage from "./assets/images/bg-mobile-light.jpg";
import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
      <header className="containe mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">
            todo
          </h1>
          <button>
            <MoonIcon className="fill-red-400" />
          </button>
        </div>
        <form className="bg-white rounded-md overflow-hidden py-4 flex gap-4 px-4 items-center mt-8">
          <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
          <input
            className="w-full text-gray-400 outline-none"
            type="text"
            placeholder="create a new todo"
          />
        </form>
      </header>

      <main className="container mx-auto mt-8 px-4">
        <div className="bg-white rounded-md [&>article]:px-4">
          <article className="flex gap-4 py-4 border-b border-b-gray-400">
            <button className="flex-none inline-block h-5 w-5 rounded-full border-2 " />
            <p className="grow text-gray-600">complete online javascript</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <article className="flex gap-4 py-4 border-b border-b-gray-400">
            <button className="flex-none inline-block h-5 w-5 rounded-full border-2 " />
            <p className="grow text-gray-600">complete online javascript</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <article className="flex gap-4 py-4 border-b border-b-gray-400">
            <button className="flex-none inline-block h-5 w-5 rounded-full border-2 " />
            <p className="grow text-gray-600">complete online javascript</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <section className="py-4 px-4 flex justify-between">
            <span className="text-gray-400">5 item left</span>
            <button className="text-gray-400">clear compete</button>
          </section>
        </div>
      </main>

      <section className="container mx-auto px-4 mt-8">
        <div className="flex justify-center , rounded-md bg-white p-4 gap-4">
          <button className="text-blue-600">All </button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>

      <p className="text-center">drag and drop reorder list</p>
    </div>
  );
};

export default App;
