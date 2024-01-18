import Link from "next/link";




export default function Home({posts}) {
  return (
    <div>
         <h1>Blog Posts</h1>
         <ul>
             {
               posts.map(
                (data,index)=>{
                  return <li key={index}>
                    <Link href={`/post/${data.id}`}>
                      {data.title}
                    </Link>
                  </li>
                }
               )
             }
         </ul>
    </div>
  )
};

export async function getStaticProps()
{
  const response=await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts=await response.json();
  return{
    props:{
      posts: posts.slice(0,20)
    }
  }
}
