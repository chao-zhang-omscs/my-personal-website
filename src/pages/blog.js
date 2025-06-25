import React from "react";
import Layout from "../components/layout";

const today = new Date();
const formattedDate = today.toLocaleString();

const BlogPage = () => (
  <Layout>
    <h1>Blog</h1>
    <article style={{ border: '1px solid #eee', borderRadius: '8px', padding: '1rem', marginBottom: '2rem' }}>
      <h2>First Post</h2>
      <p style={{ color: '#888', fontSize: '0.9rem' }}>{formattedDate}</p>
      <p>This is the day my website is online. Stay tuned!</p>
    </article>
  </Layout>
);

export default BlogPage; 