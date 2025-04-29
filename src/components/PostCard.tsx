'use client';

interface Post {
  id: number;
  content: string;
  date: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => (
  <div className="post-card p-3 mb-3">
    <p>{post.content}</p>
    <small className="text-muted">{post.date}</small>
  </div>
);

export default PostCard;
