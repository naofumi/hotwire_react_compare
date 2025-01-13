import React from "react"
import {Link} from "react-router"

export default function Layout({children}: {children: React.ReactNode}) {
  return <>
    <nav className="bg-gray-800 text-white p-2 flex justify-center gap-10 items-center">
      <a href="/" className="text-red-500 font-extralight">Hotwire</a>
      <Link to="/react" className="text-blue-500 font-extrabold">React</Link>
    </nav>

    <div className="container mx-auto my-16">
      {children}
    </div>
  </>
}
