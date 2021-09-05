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
                                return(<li><a href={`/blog/${post.id}`}><span className="highlight">{post.dateWritten}</span><br />{post.title} | {post.authors}</a></li>);
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
                    <span>By: {data.authors}</span>
                </div>
                <div className="blog-content content-full-width"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
            </main>
        );
    }

    /*
    Once upon a time at the foot of a great mountain, there was a town where the
    people known as Happyfolk lived, their very existence a mystery to the rest of
    the world, obscured as it was by great clouds.

    Here they played out their peaceful lives, innocent of the litany of excess
    and violence that was growing in the world below.

    To live in harmony with the spirit of the mountain called Monkey was enough.

    Then one day Strangefolk arrived in the town.

    They came in camouflage, hidden behind dark glasses, but no one noticed them:
    they only saw shadows.

    You see, without the Truth of the Eyes, the Happyfolk were blind.

    In time, Strangefolk found their way into the higher reaches of the mountain,
    and it was there that they found the caves of unimaginable Sincerity and Beauty.

    By chance, they stumbled upon the Place Where All Good Souls Come to Rest.

    The Strangefolk, they coveted the jewels in these caves above all things, and
    soon they began to mine the mountain, its rich seam fueling the chaos of their
    own world.

    Meanwhile, down in the town, the Happyfolk slept restlessly, their dreams
    invaded by shadowy figures digging away at their souls.

    Every day, people would wake and stare at the mountain. Why was it bringing
    darkness into their lives?

    And as the Strangefolk mined deeper and deeper into the mountain, holes began to
    appear, bringing with them a cold and bitter wind that chilled the very soul of
    the monkey.

    For the first time, the Happyfolk felt fearful for they knew that soon the Monkey
    would stir from its deep sleep.

    And then came a sound. Distant first, it grew into castrophany so immense it could
    be heard far away in space.

    There were no screams. There was no time.
    The mountain called Monkey had spoken.
    There was only fire.
    And then, nothing.
    
     - - -

    O little town in U.S.A., your time has come to see
    There's nothing you believe you want
    But where were you when it all came down on me?
    Did you call me now? 
    */
}

export default Blog;
