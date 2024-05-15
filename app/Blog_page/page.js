import Image from "next/image";

export default function Home() {
  return ( 
    <div>
        <div id="Navbar">
            <div id="Navbar-Left">
            <Image className="logo" src="/logo.jpeg" alt="logo" width={50} height={50} />
            <span>Cooking success</span>
            </div>
            <div id="Navbar-Right">
                <a href="/Home">Home</a>
            <a href="/Blog_page">Blogs</a>
            <a href="/Signup">Sign-up</a>
            <a href="/Signin">Sign-in</a>
            </div>
        </div>
        <div className="main_container_blog">
        <h1 className="Title">Blogs</h1> 
        <div className="blog_page_container">
             
           <a href="/Upma"> <div className="blog">
                <div ><Image className="side-image" src="/upma.jpg" alt="logo" width={250} height={230} /></div>
                <div className="blog_title">Blog</div>
                <div className="blog_matter">Lorem ipsum dolor sit amet</div>
                
            </div></a>
            <a href="/Upma"> <div className="blog">
                <div ><Image className="side-image" src="/upma.jpg" alt="logo" width={250} height={230} /></div>
                <div className="blog_title">Blog</div>
                <div className="blog_matter">Lorem ipsum dolor sit amet</div>
                
            </div></a>
            <a href="/Upma"> <div className="blog">
                <div ><Image className="side-image" src="/upma.jpg" alt="logo" width={250} height={230} /></div>
                <div className="blog_title" >Blog</div>
                <div className="blog_matter">Lorem ipsum dolor sit amet</div>
                                
            </div></a>
           <a href="/Upma">  <div className="blog">
                <div ><Image className="side-image" src="/upma.jpg" alt="logo" width={250} height={230} /></div>
                <div className="blog_title">Blog</div>
                <div className="blog_matter">Lorem ipsum dolor sit amet</div>
                                
            </div></a>
           <a href="/Upma">  <div className="blog">
                <div ><Image className="side-image" src="/upma.jpg" alt="logo" width={250} height={230} /></div>
                <div className="blog_title">Blog</div>
                <div className="blog_matter">Lorem ipsum dolor sit amet</div>
                                
            </div></a>
        </div>
        </div>
    </div>
  );
}