import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Post } from './types/Post';
import { Comment } from './types/Comment';
import { User } from './types/User';
import { PostList } from './components/PostList/PostList';

function getCommentsByPostId(postId: number): Comment[] {
  return commentsFromServer.filter((comment) => comment.postId === postId);
}

function getUserById(userId: number): User | null {
  return usersFromServer.find((user) => user.id === userId) || null;
}

export const posts: Post[] = postsFromServer.map((post) => ({
  ...post,
  comments: getCommentsByPostId(post.id),
  user: getUserById(post.userId),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);