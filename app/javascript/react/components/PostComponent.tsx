import React from "react"
import type {Post} from "@/app/javascript/react/models/post"

export default function PostComponent({post}: { post: Post }) {
  return <div id={`post-${post.id}`}>
    <p>
      <strong>Title:</strong>
      {post.title}
    </p>

    <p>
      <strong>Body:</strong>
      {post.body}
    </p>

    <p>
      <strong>Author name:</strong>
      {post.author.name}
    </p>

  </div>

}
