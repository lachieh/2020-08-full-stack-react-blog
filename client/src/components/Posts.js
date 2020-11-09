import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Header, Segment } from 'semantic-ui-react'

export default function Posts() {

  const [ posts, setPosts ] = useState([])

  // componentDidMount
  useEffect(() => {
    fetch('/api/v1/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
      })
  }, [])

  return (
    <div>
      <Header as="h1">Posts</Header>
      <Segment vertical >
        { posts.map((post) => {
          return <div key={post.id} style={{ marginBottom: '15px' }}>
            <Segment>
              <Header as="h2">{ post.title }</Header>
              <Header size='small'>{ post.author }</Header>
              <p>{ post.content.slice(0, 200)}{ post.content.length > 200 && "..."}</p>
              <Link to={`/post/${post.id}`}>Read More</Link>
            </Segment>
          </div>
        }) }
      </Segment>
    </div>
  )
}
