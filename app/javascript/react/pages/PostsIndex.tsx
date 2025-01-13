import React, {useEffect, useRef, useState} from "react"
import {Link} from "react-router"
import type {Post} from "@/app/javascript/react/models/post"
import PostComponent from "@/app/javascript/react/components/PostComponent"
import Layout from "@/app/javascript/react/components/Layout"

export default function PostsIndex() {
  const [posts, setPosts] = useState<null | Post[]>(null)
  const [modalPost, setModalPost] = useState<null | Post>(null)
  const modalRef =useRef<HTMLDialogElement>(null)

  useEffect(() => {
    fetch('/posts', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error:', error))
  }, [])

  function showModal({post}: { post: Post }) {
    setModalPost(post)
    modalRef.current?.showModal()
  }

  function closeModal() {
    modalRef.current?.close()
  }

  return <Layout>
    <h1 className="text-5xl mb-16">PostsIndex</h1>
    <Link to={`/react/posts/create`} className="p-2 rounded bg-orange-600 text-white">New post</Link>
    <div id="posts" className="mt-8">
      {posts && posts.map(post => <div key={post.id} className="mb-4">
        <PostComponent post={post}/>
        <p>
          <Link to={`/react/posts/${post.id}`} className="inline-block p-1 rounded border border-orange-600 text-orange-600">Show
            this post</Link>
        </p>
        <p className="mt-4">
          <button className="p-1 rounded border border-orange-600 text-orange-600"
          onClick={() => showModal({post})}>Show in modal</button>
        </p>
      </div>)}
    </div>
    <dialog id="modal" className="relative min-w-96 min-h-96 p-4 rounded-xl" ref={modalRef}>
      <button onClick={closeModal} className="absolute right-4 top-4 bg-white rounded-full text-3xl bold">x</button>
      <div className="mt-8">
        {modalPost && <PostComponent post={modalPost}/>}
      </div>
    </dialog>
  </Layout>
}
