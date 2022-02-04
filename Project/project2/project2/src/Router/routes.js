import PostIdPage from "../components/Project2/PostIdPage";
import Project2 from "../components/Project2/Project2";
import Project3 from "../components/Project3/Project3";
import Project4 from "../components/Project4/Project4";

export const routes = [
    {path: '/', commponent:<div style={{display:"flex", color:"teal", justifyContent:"center", marginTop:10}}><h1>Welcome to my Projects</h1></div>, exact: true },
    {path: '/project2', commponent: Project2, exact: true },
    {path: '/project3', commponent: Project3, exact: true },
    {path: '/project4', commponent: Project4, exact: true },
    {path: '/posts/:id', commponent: PostIdPage, exact: true },
    {path: '*', commponent: <div style={{display:"flex", color:"red", justifyContent:"center", marginTop:10}}><h1>Error: Not Fount</h1></div> },
    
]