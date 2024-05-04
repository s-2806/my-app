import Image from "next/image";


export default function Home() {
  return (
     <div>
    <div id="Navbar">
      <div id="Navbar-Left">
        <Image src="/next.svg" alt="logo" width={50} height={50} />
      </div>
      <div id="Navbar-Right">
        <a href="/Signup">Sign-up</a>
        <a href="/Signin">Sign-in</a>
      </div>
   </div>
    <div id="Container1">
      <div id="Container1-Left">
        <h1>Next.js</h1>
        <p>Build your next project with Next.js</p>
        <button>Get Started</button>
      </div>
      <div id="Container1-Right">
        <Image src="/next.svg" alt="logo" width={400} height={400} />
      </div>
    </div>
    <div id="Container2">
      <div><a href="/"  >1</a></div>
      <div><a href="/" >2</a></div>
      <div><a href="/">3</a></div>
      </div>
    </div>
  );
}