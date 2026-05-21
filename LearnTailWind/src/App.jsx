import "./App.css";
import Card from './compoments/Card'
function App() {
  return (
    <>
      <main className="relative bg-[#101044] text-[azure] min-h-screen min-w-[300px]">
        <header className="fixed z-50 bg-transparent w-full mx-auto px-5 py-3 mb-12 shadow-[0px_0px_50px_rgba(0,2,0,0.5)] backdrop-blur-sm">
          <nav>
            <ul className="flex gap-4 justify-center uppercase tracking-wider sm:justify-between [&>li>a:hover]:bg-fuchsia-900 ">
              <li className="me-auto ">
                <a
                  href=""
                  className="hover:bg-fuchsia-900 inline-block min-h-8 w-auto p-2 my-4"
                >
                  Me
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:bg-fuchsia-900 inline-block min-h-8 w-auto p-2 my-4"
                >
                  Start Here
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:bg-fuchsia-900 inline-block min-h-8 w-auto p-2 my-4"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:bg-fuchsia-900 inline-block min-h-8 w-auto p-2 my-4"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <section className="relative gap-y-24 grid grid-cols-1 text-center gap-12 text-2xl pb-4 max-w-[90%] mx-auto md:grid-cols-2 items-center pt-24">
          <img
            src="/hero.svg"
            className="w-full h-full object-cover md:order-3 border-[#00101C] border-4 rounded-4xl max-w-[90%] m-auto "
          />
          <div className="order-1">
            <h1 className="font-extrabold text-6xl">Let's Learn TailWind!</h1>
            <p className="mx-auto text-[1.8rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum fuga
              praesentium, deserunt accusamus id labore aliquam dolorum,
              sapiente alias temporibus ut nesciunt recusandae ratione, nulla
              hic minima! Quae, voluptate repudiandae.
            </p>
            <a
              href=""
              className="min-h-10 min-w-16 p-3.5 bg-fuchsia-700 rounded-full inline-block transition-colors hover:bg-fuchsia-900"
            >
              Click Here
            </a>
          </div>
        </section>
        <section className='grid sm:grid-cols-2 xl:grid-cols-4 max-w-[90%] mx-auto gap-8 mt-15'>
          <Card img='/vk_1.jpg' role='Developer'/>
          <Card img='/vk_2.png' role='Manager'/>
          <Card img='/vk_3.jpg' role='CEO'/>
          <Card img='/vk_4.png' role='Developer'/>
        </section>
      </main>
    </>
  );
}

export default App;
