'use client';

import PostCard from './PostCard';

interface Post {
  id: number;
  content: string;
  date: string;
}

interface PostFeedProps {
  posts: Post[];
}

const PostFeed = ({ posts }: PostFeedProps) => (
  <div>
    <h4>Posts</h4>
    {posts.map((post) => (
      <PostCard key={post.id} post={post} />
    ))}
  </div>
);

export default PostFeed;
