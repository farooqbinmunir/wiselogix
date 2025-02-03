import Project_Post from "./Project_Post";
import client from '../../../config.js';
export default async function Project_Posts({cls = ""}){
    const projectPostsQuery = `{
        ourProjects(first: 3) {
            nodes {
                databaseId
                title
                excerpt(format: RAW)
                uri
                featuredImage {
                    node {
                        sourceUrl
                    }
                }
            }
        }
    }`;
    const {ourProjects: {nodes: projects}} = await client.request(projectPostsQuery);
    return(
        <div className="fl-col-group fl-node-3u9sxohmr8vn fl-col-group-nested" data-node="3u9sxohmr8vn">
            {projects.map((project, index) => <Project_Post key={index} post={project} />)}
        </div>
    );
}