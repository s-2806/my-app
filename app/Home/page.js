import Image from "next/image";


export default function Home() {
  return (
     <div>
    <div id="Navbar">
      <div id="Navbar-Left">
        <Image src="/logom.jpg" alt="logo" width={50} height={50} />
      </div>
      <div id="Navbar-Right">
        <a href="/">Blogs</a>
        <a href="/Signup">Sign-up</a>
        <a href="/Signin">Sign-in</a>
      </div>
   </div>
    <div id="Container1">
      <div id="Container1-Left">
        <h1>Cooking success</h1>
        <p>Build your cooking skills siiting at home 😀</p>
        
      </div>
      <div id="Container1-Right">
        <Image src="/Best-Cutting-Board.jpg" alt="logo" width={700} height={400} />
      </div>
    </div>
    <div id="Container2">
      <div id="Container2-inner">
        <div><Image src="/upmama.jpg" alt="logo" width={50} height={50} /></div>
        <div><a href="/"  >Upma</a></div>
      </div>
      <div id="Container2-inner">
        <div><Image src="/upmama.jpg" alt="logo" width={50} height={50} /></div>
        <div><a href="/"  >Noodles</a></div>
      </div>
      <div id="Container2-inner">
        <div><Image src="/upmama.jpg" alt="logo" width={50} height={50} /></div>
        <div><a href="/"  >Fried rice</a></div>
        </div>
      </div>
    </div>
  );
}