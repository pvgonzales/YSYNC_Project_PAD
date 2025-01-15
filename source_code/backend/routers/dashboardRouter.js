import { createPost, addComment, fetchPosts, updatePost, delPost, toggleHeart } from '../controllers/dashboard.js';

const dashboardRouter = (app) => {
    app.post('/api/posts', createPost);
    app.post('/api/posts/:id/comment', addComment);
    app.put('/api/posts/:id/heart', toggleHeart);
    app.get('/api/getposts', fetchPosts);
    app.put('/api/updatepost/:id', updatePost);
    app.delete('/api/delpost/:id', delPost);
};

export default dashboardRouter;