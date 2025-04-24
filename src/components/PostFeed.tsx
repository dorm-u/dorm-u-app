'use client';

import { Row, Col } from 'react-bootstrap';
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
  <>
    <h4 className="mb-3"><strong>Posts</strong></h4>
    <Row className="g-3">
      {posts.map((post) => (
        <Col md={4} key={post.id}>
          <PostCard post={post} />
        </Col>
      ))}
    </Row>
  </>
);

export default PostFeed;
