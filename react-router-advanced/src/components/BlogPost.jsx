import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  return <h2>Viewing blog post with ID: {id}</h2>;
};

export default BlogPost;
