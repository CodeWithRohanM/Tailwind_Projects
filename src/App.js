import React from "react";


const App = () => {

  return <>
    <div className="bg-green-300 flex-1" id="mainContainer">


      <div className="container mx-auto w-full p-12 bg-cyan-300">


        <div className="h-12 flex flex-row justify-between w-full mb-20">

          <div className="flex flex-row items-center flex-1">
            <img src="/images/logo-bookmark.svg"></img>
          </div>

          <nav className="hidden
                  sm:flex sm:flex-row sm:gap-x-7 sm:items-center sm:justify-end flex-1
                   hover:cursor-pointer pr-6">
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Services</h1>
            <button className="bg-purple-500 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-blue-500 duration-300 active:scale-90 px-3 py-2 rounded-md text-white uppercase font-bold">Sign In</button>

          </nav>

          <div className="flex justify-end sm:hidden cursor-pointer items-center flex-1">
            <i className="fas fa-bars"></i>
          </div>
        </div>



        <section className="relative flex flex-col-reverse justify-between items-center gap-y-24 text-center 
        sm:flex-row sm:gap-x-24 sm:text-left bg-blue-300">

          <div className="flex flex-col gap-y-6 s
            sm:items-start 
            flex-1 z-10 bg-red-300">
            <h1 className=" text-5xl font-bold">A Simple Bookmark Manager</h1>

            <p className="text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, qui, temporibus impedit quisquam assumenda culpa possimus mollitia facilis in porro asperiores quod perferendis corporis. Perspiciatis quibusdam aut veritatis adipisci unde.</p>

            <div className="flex flex-row gap-x-4 items-center justify-center w-full bg-yellow-300">
              <button className="bg-purple-700 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-500 duration-300 active:scale-90 px-3 py-2 rounded-md text-white uppercase font-bold flex-1">Get it on Chrome</button>

              <button className="bg-gray-500 hover:bg-purple-700 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 active:scale-90 px-3 py-2 rounded-md text-white uppercase font-bold flex-1">Get it on Firefox</button>
            </div>
          </div>



          <div className="z-10 flex-1">
            <img src="/images/hero-bg.png"></img>
          </div>

          <div className="bg-purple-700 h-80 w-full sm:w-1/2 rounded-l-full bottom-56 absolute -right-44 overflow-hidden sm:-bottom-20"></div>


        </section>




        <div className="flex flex-col gap-y-6 flex-1 justify-center items-center text-center bg-yellow-300 mt-40 mb-36">
          <h1 className="text-3xl font-bold">Features</h1>
          <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore doloremque soluta autem possimus veritatis eum, atque officiis assumenda in. Recusandae vitae, nesciunt atque voluptate eum sit placeat ea doloremque ducimus?</p>
        </div>




        <section id="feature1" className="relative flex flex-col items-center gap-y-24 sm:flex-row sm:gap-x-24 bg-red-300 text-center sm:text-left mb-36">
          <div className="flex flex-1 z-10">
            <img src="/images/illustration-features-tab-1.png"></img>
          </div>
          <div className="flex flex-col gap-y-6 bg-yellow-300 flex-1">
            <h1 className="text-3xl font-bold">Bookmark in One click</h1>
            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam velit repellat perferendis expedita repudiandae reiciendis aliquid ea asperiores provident nulla ipsum consequuntur a saepe vero natus harum, animi adipisci id.</p>
            <button className="bg-purple-700 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-pruple-800 duration-300 active:scale-90 px-3 py-2 rounded-md text-white uppercase font-bold">Get it on Firefox</button>
          </div>


          <div className="bg-purple-700 h-60 w-full sm:w-1/2 rounded-r-full bottom-56 absolute -left-44 overflow-hidden sm:-bottom-20">

          </div>

        </section>



        <section id="feature2" className="relative flex flex-col items-center gap-y-24 sm:flex-row-reverse sm:gap-x-24 bg-red-300 text-center sm:text-left mb-36">
          <div className="flex flex-1 z-10">
            <img src="/images/illustration-features-tab-2.png"></img>
          </div>
          <div className="flex flex-col gap-y-6 bg-yellow-300 flex-1">
            <h1 className="text-4xl font-bold">Bookmark in One click</h1>
            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam velit repellat perferendis expedita repudiandae reiciendis aliquid ea asperiores provident nulla ipsum consequuntur a saepe vero natus harum, animi adipisci id.</p>
            <button className="bg-purple-700 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-pruple-800 duration-300 active:scale-90 px-3 py-2 rounded-md text-white uppercase font-bold">Get it on Firefox</button>
          </div>


          <div className="bg-purple-700 h-60 w-full sm:w-1/2 rounded-l-full bottom-56 absolute -right-44 overflow-hidden sm:-bottom-20">

          </div>

        </section>


        <section id="feature1" className="relative flex flex-col items-center gap-y-24 sm:flex-row sm:gap-x-24 bg-red-300 text-center sm:text-left mb-28">
          <div className="flex flex-1 z-10">
            <img src="/images/illustration-features-tab-3.png"></img>
          </div>
          <div className="flex flex-col gap-y-6 bg-yellow-300 flex-1">
            <h1 className="text-4xl font-bold">Bookmark in One click</h1>
            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam velit repellat perferendis expedita repudiandae reiciendis aliquid ea asperiores provident nulla ipsum consequuntur a saepe vero natus harum, animi adipisci id.</p>
            <button className="bg-purple-700 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-pruple-800 duration-300 active:scale-90 px-3 py-2 rounded-md text-white uppercase font-bold">Get it on Firefox</button>
          </div>


          <div className="bg-purple-700 h-60 w-full sm:w-1/2 rounded-r-full bottom-56 absolute -left-44 overflow-hidden sm:-bottom-20">

          </div>

        </section>



        <div className="flex flex-col gap-y-6 flex-1 justify-center items-center text-center bg-yellow-300 mb-16">
          <h1 className="text-3xl font-bold">Features</h1>
          <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore doloremque soluta autem possimus veritatis eum, atque officiis assumenda in. Recusandae vitae, nesciunt atque voluptate eum sit placeat ea doloremque ducimus?</p>
        </div>


        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 sm:gap-x-12 w-full justify-between mx-auto bg-red-300">

          <div className="rounded-md shadow-xl p-5 bg-gray-200 ">

            <div className="flex flex-col gap-y-9 items-center bg-yellow-300">
              <div className="w-auto">
                <img src="/images/logo-chrome.svg" ></img>
              </div>
              <h1 className="text-xl text-gray-500 font-medium">Version 3.0.1 & Above</h1>
              <button className="bg-purple-700 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-pruple-800 duration-300 active:scale-90 px-3 py-2 rounded-md text-white uppercase font-bold w-full">Get it on Firefox</button>
            </div>
          </div>

          <div className=" rounded-md shadow-xl p-5 bg-gray-200 md:mt-6">
            <div className="flex flex-col gap-y-9 items-center bg-yellow-300">
              <div className="w-auto">
                <img src="/images/logo-firefox.svg" ></img>
              </div>
              <h1 className="text-xl text-gray-500 font-medium">Version 2.0.5 & Above</h1>
              <button className="bg-purple-700 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-pruple-800 duration-300 active:scale-90 px-3 py-2 rounded-md text-white uppercase font-bold w-full">Get it on Firefox</button>
            </div>
          </div>

          <div className="rounded-md shadow-xl p-5 bg-gray-200 md:mt-12">
            <div className="flex flex-col gap-y-9 items-center bg-yellow-300">
              <div className="w-auto">
                <img src="/images/logo-opera.svg" ></img>
              </div>
              <h1 className="text-xl text-gray-500 font-medium">Version 4.2.1 & Above</h1>
              <button className="bg-purple-700 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-pruple-800 duration-300 active:scale-90 px-3 py-2 rounded-md text-white uppercase font-bold w-full">Get it on Firefox</button>
            </div>
          </div>
        </section>




        <section className="w-full py-20 bg-purple-700">
          <div className="flex flex-col gap-y-10 text-white font-bold container mx-auto max-w-md bg-yellow-300 items-center">
            <h1 className="uppercase tracking-widest text-sm">35,000+ already joined</h1>
            <h1 className="text-3xl tracking-wider bg-red-300 text-center">Stay up-to-date with what we are doing</h1>

            <div className="flex flex-row gap-x-8 bg-red-300 w-full">
              <div className="flex-1 items-center flex bg-blue-300 border-b-black border">
                <input type="text" placeholder="Enter your email.." className="border-none py-2 px-2 appearance-none bg-transparent text-gray-500 font-bold focus:outline-none"></input>
              </div>
              <button className="bg-purple-700 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-pruple-800 duration-300 active:scale-90 px-3 py-2 rounded-md text-white uppercase font-bold ">Get it on Firefox</button>
            </div>

          </div>


        </section>



        <nav className="h-12 bg-gray-800">
          <div className="flex flex-col gap-y-8 md:flex-row items-center h-full bg-yellow-300 container mx-auto max-w-4xl justify-between">

            <div className="flex flex-col gap-y-8 md:flex-row md:gap-x-12 md:items-start bg-red-300 items-center">
              <img src="images/logo-bookmark-white.png"></img>
              <h1>features</h1>
              <h1>pricing</h1>
              <h1>contact</h1>
            </div>

            <div className="flex flex-row gap-x-8 bg-blue-300 cursor-pointer">
              <img src="images/logo-opera.svg" className="w-6 h-6"></img>
              <img src="images/logo-firefox.svg" className="w-6 h-6"></img>

            </div>

          </div>

        </nav>




      </div>


    </div>
  </>
};

export default App;