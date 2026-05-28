import { Card } from "./index"
function Home() {
  return (
    <div className="mb-24">
      <section className="relative gap-y-24 grid grid-cols-1 text-center gap-12 text-2xl pb-4 max-w-[90%] mx-auto md:grid-cols-2 items-center pt-40 lg:pt-50">
        <div className="relative w-full h-full object-cover md:order-3 rounded-4xl max-w-[90%] m-auto flex justify-center items-center overflow-hidden">
          <div className="rounded-4xl animate-spin transition-all [animation-duration:4.1s] absolute h-256 w-5xl bg-conic-180 from-cyan-400 via-fuchsia-500 to-blue-700"></div>
          <img src="/hero.svg" className="rounded-4xl z-10 relative h-[98%] w-[98%] object-cover shadow-transparent shadow-2xl border-2 border-black" />
        </div>

        <div className="order-1">
          <h1 className="text-6xl">Let's Learn TailWind!</h1>
          <p className="mx-auto text-[1.8rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum fuga
            praesentium, deserunt accusamus id labore aliquam dolorum, sapiente
            alias temporibus ut nesciunt recusandae ratione, nulla hic minima!
            Quae, voluptate repudiandae.
          </p>
          <div className="relative overflow-hidden mx-auto mt-20 h-20 w-36 flex justify-center items-center rounded-full ">
            <div className=" animate-spin [animation-duration:3.1s] absolute h-50 w-50 bg-conic-180 from-cyan-400 via-fuchsia-500 to-blue-700 rounded-full"></div>
            <a
              href="#"
              className="text-white flex items-center rounded-full relative h-19 w-34 p-3.5 transition-colors bg-linear-to-br from-[#14001f] via-violet-950 to-[#1e3a8a]"
            >
              Click Here
            </a>
          </div>
        </div>
      </section>

      <section className="bg-linear-360 from-[#FFFBEB] to-[#ffe785] max-w-full mx-auto mt-12 dark:bg-linear-360 dark:from-[#101044] dark:to-blue-900">
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 mt-15 max-w-[80%] mx-auto">
          <h2 className="text-center text-4xl tracking-wide pt-4 col-start-1 -col-end-1">
            About Me
          </h2>
          <Card img="/vk_1.jpg" role="Developer" />
          <Card img="/vk_2.png" role="Manager" />
          <Card img="/vk_3.jpg" role="CEO" />
          <Card img="/vk_4.png" role="Developer" />
        </div>
      </section>
    </div>
  )
}

export default Home