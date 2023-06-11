import logo from '../images/vercel.png'
import next from '../images/nextjs.png'
import nextv2 from '../images/nextv2.png'
import link from '../images/link.png'
import image from '../images/image.png'
import react from '../images/react.png'
import menu from '../images/menu.png'
import close from '../images/close.png'
import world from '../images/world.png'
import Image from 'next/image'
import { useRef,useEffect,useState } from 'react'

export default function Home() {
  const [hamburger, setHamburger] = useState(null);
  const [menu2, setMenu2] = useState(null);
  const [hamburger1, setHamburger1] = useState(null);

  useEffect(() => {
    setHamburger(document.getElementById("hamburger"));
    setMenu2(document.getElementById("menu2"));
    setHamburger1(document.getElementById("hamburger1"))
  }, []);

  useEffect(() => {
    if (hamburger && menu2) {
      hamburger.addEventListener("click", () => {
        menu2.classList.toggle("hidden");
      });
      hamburger1.addEventListener("click",() =>{
        menu2.classList.toggle("hidden")
      } )
    }
  }, [hamburger, menu2]);
  const divRef = useRef();
  
  useEffect(() => {
    const divElem = divRef.current
    const handleMouseMove = (e) => {
      const rect = divElem.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const divCenterX = rect.width / 2;
      const divCenterY = rect.height / 2;
      const rotateXDegree = (mouseY - divCenterY) / divCenterY * 10;
      const rotateYDegree = (mouseX - divCenterX) / divCenterX * 10;
  
      if (mouseX >= 0 && mouseX <= rect.width && mouseY >= 0 && mouseY <= rect.height) {
        divElem.style.transform = `perspective(600px) rotateX(${-rotateXDegree}deg) rotateY(${rotateYDegree}deg)`;
      }
    };
    const handleMouseLeave = () => {
  
      divElem.style.transform = `perspective(600px) rotateX(0deg) rotateY(0deg)`
    }
    divElem.addEventListener('mousemove', handleMouseMove)
    divElem.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      divElem.removeEventListener('mousemove', handleMouseMove)
      divElem.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      <div className=" bg-black w-full h-12 flex items-center justify-center">
        <div className="w-3/5 flex justify-start ">
          <Image src={logo} />
        </div>
        <div className="text-white text-lg w-60">
          Deploy Next.js on Vercel →
        </div>
      </div>

      <div className=" w-full flex h-20 justify-center items-center">
        <div className=" w-full lg:w-3/5 flex items-center">
          <div className='flex justify-start w-full lg:w-0'>

          <Image src={next} className = 'w-28 h-16' />
          </div>
          <div className="text-[#696969]  hidden lg:flex gap-4 ">
            <label>Showcase</label>
            <label>Docs</label>
            <label>Blog</label>
            <label>Analytics</label>
            <label>Templates</label>
            <label>Enterprise</label>
          </div>
          <div id='hamburger1' className="cursor-pointer lg:hidden mr-4">
            <Image src={menu} className = 'w-8' />
          </div>
          
        </div>
        <div className=" hidden lg:flex gap-2 w-60">
          <button className="text-[#696969] bg-white border border-slate-500 hover:border-2 hover:border-black transition-all delay-100 w-24 h-8 rounded-md">
            Feedback
          </button>
          <button className="bg-black text-white w-20 h-8 rounded-md hover:bg-white hover:text-black hover:border-2 hover:border-black transition-all">
            Learn
          </button>
        </div>
      </div>  
         
          <div id='menu2' className="text-[#696969] lg:hidden flex flex-wrap bg-white w-full h-full  fixed inset-0 z-50 ">
            <div className=" bg-black w-full h-12 flex items-center justify-center">
              <div className=" w-3/5 flex justify-start ">
                <Image src={logo} />
              </div>
              <div className="text-white text-sm w-60">
                Deploy Next.js on Vercel →
              </div>
            </div>

            <div className='flex w-full items-center h-0'>
              <div className='flex w-full justify-start'>
               <Image src={next} className='w-28 h-16'/>
              </div>
              <div id='hamburger' className='flex w-full justify-end'>
                <Image src={close} className = 'w-5 cursor-pointer mr-4'/>
              </div>
            </div>
            
            <div className='flex flex-col justify-start space-y-5 p-4 text-lg '>
             <label className='hover:text-black'>Learn</label>
             <label className='hover:text-black'>Showcase</label>
             <label className='hover:text-black'>Docs</label>
             <label className='hover:text-black'>Blog</label>
             <label className='hover:text-black'>Analytics</label>
             <label className='hover:text-black'>Commerce</label>
             <label className='hover:text-black'>Templates</label>
             <label className='hover:text-black'>Enterprise</label>
             <label className='hover:text-black'>Github</label>
            </div>        
          </div>
      
      <div className="flex   lg:w-full justify-center mt-24">
        <div className="flex justify-center w-9/12 flex-wrap break-words">
          <h1 className=" text-4xl lg:text-8xl font-extrabold text-center font-inter tracking-tighter lg:[word-spacing:-10px]">
            The React Framework for the Web
          </h1>
          <p className="text-[#696969] mt-12 text-lg text-center w-5/6">
            Used by some of the world's largest companies, Next.js enables you
            to create full-stack web applications by extending the latest React
            features, and integrating powerful Rust-based JavaScript tooling for
            the fastest builds.
          </p>
          <div className="w-full flex justify-center items-center mt-12 gap-4">
            <button className="w-56 h-12 bg-black text-white rounded-md shadow-lg hover:shadow-xl">
              Start Learning
            </button>
            <button className="w-56 h-12 bg-white text-[#696969] border border-gray-500 rounded-md shadow-lg hover:shadow-xl">
              Documentation
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full mt-32 ">
        <div className="w-4/5 justify-center my-12 flex flex-wrap space-y-4">
          <div
            className=" bg-gradient-to-b from-blue-100 to-white w-full lg:w-2/5 h-[666px] border border-gray-400 rounded-md justify-center flex flex-col items-center transition-transform-ease-out transform hover:scale-105 hover:perspective-500 ease-in-out duration-100 shadow-xl"
            ref={divRef}
          >
            <Image src={nextv2} className="w-24 h-24" />
            <h2 className=" text-5xl lg:text-7xl font-extrabold">Next.js 13</h2>
            <label className="mt-8">By Vercel</label>
            <p className="break-word w-72 mt-8 text-lg text-center text-[#696969]">
              Bringing the power of full-stack to the frontend
            </p>
            <div className="bg-[rgb(82,78,78)] text-white w-40 h-12 rounded-full mt-4 relative flex justify-center items-center cursor-pointer">
              <span className="relative z-10 text-center">Get Started</span>
              <Image
                src={link}
                className="absolute left-32 w-5 h-5 fill-white"
              />
            </div>
          </div>

          <div className="flex  w-full md:w-3/5 lg:w-3/5 flex-wrap justify-center gap-4">
            <div className=" w-full lg:w-5/12 h-80 border border-gray-400 rounded-md flex flex-wrap justify-center shadow-xl">
              <div className="border border-black w-40 h-32 flex justify-end items-center rounded-xl mt-8 ">
                <div className="bg-[#ededed] w-28 h-28 mr-1 rounded-md border border-black flex justify-center">
                  <div className="bg-[#FFFFFF] w-11/12 h-10 mt-1 rounded border border-black"></div>
                </div>
              </div>
              <p className="text-[#333] text-2xl text-center w-3/5 font-semibold tracking-tighter">
                Powerful routing and layouts
              </p>
              <p className="text-center text-[#666] font-normal text-lg w-4/5">
                Build complex interfaces while shipping less JavaScript.
              </p>
            </div>

            <div className="w-full lg:w-5/12 h-80 border border-gray-400 rounded-md flex justify-center flex-wrap ">
              <div className="flex flex-wrap justify-center gap-y-11">
                <p className=" w-7/12lg:w-10/12 h-0 break-words  text-center mt-4 text-[#666] text-lg">
                  Native support for <br />{" "}
                  <span className="text-black font-medium">custom fonts</span>{" "}
                  and <span className="text-black font-medium">images</span>
                </p>
                <button className="text-[#666] w-9/12 h-8 border border-black rounded-md text-xs my-4 ">
                  Powered by Vercel Image Optimization
                </button>
              </div>

              <div className="bg-[#ececec] w-32 rounded-xl h-24 border border-gray-400 flex flex-col space-y-4 p-2">
                <span className="text-xl">Aa</span>
                <span className="text-lg">next/font</span>
              </div>
              <div className="bg-[#ececec] w-32 rounded-xl h-24 border border-gray-400 flex flex-col space-y-4 p-2 ml-4">
                <Image src={image} className="w-10 h-8" />
                <span className="text-lg">next/image</span>
              </div>
            </div>

            <div className=" w-full lg:w-5/12 h-80 border border-gray-400 rounded-md flex flex-wrap justify-center items-center  ">
              <p className="w-4/5 text-[#8A8A8A] text-lg mt-4 text-center">
                Building on{" "}
                <span className="text-black font-semibold">
                  React Server Components,{" "}
                </span>
                <span className="bg-[#EAF2FC] text-[#0E78F4]">app</span> now
                makes{" "}
                <span className="text-black font-semibold">server-first</span>{" "}
                the default
              </p>
              <button className="text-[#666] w-9/12 h-8 border border-black rounded-md text-xs mb-4 ">
                Powered by Vercel Functions
              </button>
              <Image src={react} className="w-72" />
            </div>
            <div className="w-full lg:w-5/12 h-80 border border-gray-400 rounded-md flex flex-wrap justify-center items-center">
              <Image src={world} className="w-60" />
              <h1 className="text-[#333] text-2xl tracking-tighter font-semibold">
                Dynamic HTML Streaming
              </h1>
              <p className="w-4/5 text-center text-lg text-[#8A8A8A]">
                Support for HTML streaming, now on Vercel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
