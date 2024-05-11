import Image from "next/image";

export default function Home() {
  return (
         <div> <div id="Navbar">
        <div id="Navbar-Left">
          <Image src="/logom.jpg" alt="logo" width={50} height={50} />
          <span>Cooking success</span>
        </div>
        <div id="Navbar-Right">
          <a href="/">Blogs</a>
          <a href="/Signup">Sign-up</a>
          <a href="/Signin">Sign-in</a>
        </div>
      </div>
    <div id="container_upma">
    <div id="incontainer_upma1"><Image src="/upma.jpg" alt="logo" width={500} height={300} /></div>
            <div id="incontainer_upma2">
                    <h1>Upma-Recipe</h1>
                    <ul>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>lorum5
                          
                        </li>
                        <li></li>
                        <li></li>
                    </ul>
            </div>
    </div></div>
      );
}