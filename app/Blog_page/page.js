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
            <a href="/Blog_page">Blogs</a>
            <a href="/Signup">Sign-up</a>
            <a href="/Signin">Sign-in</a>
            </div>
        </div>
        <div className="blog_page_container">
            <h1>Blogs</h1>  
            <div className="blog">
                <div><Image src="upma.jpg" alt="logo" width={50} height={50} /></div>
                <div>Blog</div>
                <div>Lorem ipsum dolor sit amet</div>
                
            </div>
            <div className="blog">
                <div><Image src="upma.jpg" alt="logo" width={50} height={50} /></div>
                <div>Blog</div>
                <div>Lorem ipsum dolor sit amet</div>
                
            </div>
            <div className="blog">
                <div><Image src="upma.jpg" alt="logo" width={50} height={50} /></div>
                <div>Blog</div>
                <div>Lorem ipsum dolor sit amet</div>
                                
            </div>
            <div className="blog">
                <div><Image src="upma.jpg" alt="logo" width={50} height={50} /></div>
                <div>Blog</div>
                <div>Lorem ipsum dolor sit amet</div>
                                
            </div>
            <div className="blog">
                <div><Image src="upma.jpg" alt="logo" width={50} height={50} /></div>
                <div>Blog</div>
                <div>Lorem ipsum dolor sit amet</div>
                                
            </div>
        </div>
    </div>
  );
}