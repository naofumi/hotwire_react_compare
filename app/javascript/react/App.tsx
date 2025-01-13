import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router"
import PostsIndex from "@/app/javascript/react/pages/PostsIndex"
import PostShow from "@/app/javascript/react/pages/PostShow"
import PostCreate from "@/app/javascript/react/pages/PostCreate"

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/react" element={<PostsIndex />} />
      <Route path="/react/posts/:id" element={<PostShow />} />
      <Route path="/react/posts/create" element={<PostCreate />} />
    </Routes>
  </BrowserRouter>
}
