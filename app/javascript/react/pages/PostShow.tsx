import {Link, useParams} from "react-router"
import React, {useEffect, useState} from "react"
import PostComponent from "@/app/javascript/react/components/PostComponent"
import {Post} from "@/app/javascript/react/models/post"
import Layout from "@/app/javascript/react/components/Layout"

export default function PostShow() {
  const [ post, setPost ] = useState<null | Post>(null)
  const params = useParams()

  useEffect(() => {
    fetch(`/posts/${params.id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error('Error:', error))
  }, [])

  return <Layout>
    <h1 className="text-5xl mb-16">PostShow</h1>
    {post && <PostComponent post={post}/>}
    <div className="mt-8">
      <Link to="/react" className="p-1 rounded border border-orange-600 text-orange-600">
        Back to posts
      </Link>
    </div>

  </Layout>
}
