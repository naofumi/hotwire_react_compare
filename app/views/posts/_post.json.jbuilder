json.id post.id
json.title post.title
json.body post.body
json.created_at post.created_at
json.updated_at post.updated_at
json.author do
  json.id post.author.id
  json.name post.author.name
  json.email post.author.email
end
json.url post_url(post, format: :json)
