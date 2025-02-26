import BlogOfBlogPage from "../../components/BlogPage/BlogOfBlogPage";
import BlogPageBanner from "../../components/BlogPage/BlogPageBanner";


const Blog = () => {

    return (
        <div>
            <div>
                <BlogPageBanner></BlogPageBanner>
            </div>
            
            <div>
                <BlogOfBlogPage></BlogOfBlogPage>
            </div>
        </div>
    );
};

export default Blog;



