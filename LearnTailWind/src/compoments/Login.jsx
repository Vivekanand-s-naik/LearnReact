import { Outlet } from "react-router-dom"
function Login() {
  return (
    <section className="h-screen relative gap-y-24 grid grid-cols-1 text-center gap-12 text-2xl pb-4 max-w-[90%] mx-auto md:grid-cols-2 items-center pt-40 lg:pt-50">
      Test
      <Outlet />
    </section>
  )
}

export default Login