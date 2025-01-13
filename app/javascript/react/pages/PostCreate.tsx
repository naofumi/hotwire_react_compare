import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router"
import Layout from "@/app/javascript/react/components/Layout"
import {Author} from "@/app/javascript/react/models/author"

export default function PostCreate() {
  const [authors, setAuthors] = useState<null | Author[]>(null)
  const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ""
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/authors', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    }).then(response => response.json())
      .then(data => setAuthors(data))
      .catch(error => console.error('Error:', error))
  }, [])

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    fetch('/posts', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken},
      body: JSON.stringify({
        title: formData.get('post[title]'),
        body: formData.get('post[body]'),
        author_id: formData.get('post[author_id]')
      })
    })
    .then(response => response.json())
    .then(data => {
      navigate(`/react/posts/${data.id}`)
    })
    .catch(error => console.error('Error:', error))
  }

  return <Layout>
    <h1 className="text-5xl mb-8">New post</h1>
    <form action="/posts" method="POST" onSubmit={handleSubmit}>
      <input type="hidden" name="authenticity_token" value={csrfToken}/>
      <div className="mb-2">
        <label htmlFor="post_title" className="block text-sm">Title</label>
        <input type="text" name="post[title]" id="post_title" className="p-1 border rounded "/>
      </div>
      <div className="mb-2">
        <label htmlFor="post_body" className="block text-sm">Body</label>
        <input type="text" name="post[body]" className="p-1 border rounded "/>
      </div>
      <div className="mb-2">
        <label htmlFor="post_author_id" className="block text-sm">Author</label>
        <select name="post[author_id]" id="post_author_id" className="p-1 border rounded appearance-none pr-8">
          {authors && authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>)}
        </select>
      </div>
      <div>
        <input type="submit" value="Submit" className="p-2 rounded bg-orange-600 text-white cursor-pointer"/>
      </div>
    </form>
  </Layout>
}
