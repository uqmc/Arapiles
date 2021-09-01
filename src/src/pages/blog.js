import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import marked from "marked";

import Spinner from "../components/Spinner";

import { blogService } from "../services/blog";
import FourOFour from "../components/FourOFour";

/*

NOTES: 
 - gatsby-plugin-create-client-paths is used to direct all /blog/* endpoints here.
 - anchor elements are used instead of Gatsby Link elements because I couldn't get
   Link elements to refresh the page after a blog post link was clicked without
   gross workarounds.

*/

const Blog = (props) => {
    const [pageType, setPageType] = useState("index");
    const [data, setData] = useState(null);
    const [posts, setPosts] = useState(null);
    const [postNotFound, setPostNotFound] = useState(false);

    async function getContentData(postId) {
      const res = await blogService.findOne(postId);
      if(!res) {
        setPostNotFound(true)
      }
      setData(res["data"]);
    }

    async function getBlogData() {
        const res = await blogService.find();
        setPosts(res["data"]);
    }

    useEffect(() => {
        let slug = props.params["*"]; // Everything after "https://website.org/blog/"
        if(slug) {
            setPageType("post");
            getContentData(slug);
        } else {
            getBlogData();
        }
    }, []);

    if(pageType === "index") {
        if(!posts) {
            return(
                <div className="content-container">
                    <Helmet title="UQMC | Blog" />
                    <Spinner />
                </div>
            );
        }
        return(
            <main className="content-container">
                <Helmet title="UQMC | Blog" />
                <div className="content-full-width">
                    <h1>Blog Posts</h1>
                    <ul className="blog-posts">
                        {
                            posts.map((post) => {
                                return(<li><a href={`/blog/${post.id}`}><span className="highlight">{post.dateWritten}</span><br />{post.title}</a></li>);
                            })
                        }
                    </ul>
                </div>

            </main>
        );
    } else if(pageType === "post") {
        if(postNotFound) {
            return(<FourOFour />);
        }
        if(!data) {
            return(<div className="content-container"><Helmet title="UQMC | Blog" /><Spinner /></div>);
        }
        const htmlContent = marked(data.content);
        return(
            <main className="content-container">
                <Helmet title={"UQMC | " + data.title} />
                <div className="content-full-width">
                    <a href="/blog">&#60; All Posts</a>
                    <h1>{data.title}</h1>
                </div>
                <div className="blog-content content-full-width"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
            </main>
        );
    }
}

export default Blog;
