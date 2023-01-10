import React from "react";


const App = () => {

  return <>
    <div className="flex-1" id="mainContainer">


      <div className="container mx-auto w-full p-12">


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
        sm:flex-row sm:gap-x-24 sm:text-left">

          <div className="flex flex-col gap-y-12
            sm:items-start 
            flex-1 z-10">
            <h1 className=" text-5xl font-bold">A Simple Bookmark Manager</h1>

            <p className="text-gray-500 leading-relaxed text-lg">A clean and simple user interface to organize your favourite websites. Open a new browser tan and see your sites load instantly. Try it for free. </p>

            <div className="flex flex-row gap-x-4 items-center justify-center w-full">
              <button className="bg-purple-700 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-700 duration-300 active:scale-90 px-3 py-2 rounded-md text-white uppercase font-bold flex-1">Get it on Chrome</button>

              <button className="bg-gray-700 hover:bg-purple-700 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 active:scale-90 px-3 py-2 rounded-md text-white uppercase font-bold flex-1">Get it on Firefox</button>
            </div>
          </div>



          <div className="z-10 flex-1">
            <img src="/images/hero-bg.png"></img>
          </div>

          <div className="bg-purple-700 h-80 w-full sm:w-1/2 rounded-l-full bottom-56 absolute -right-44 overflow-hidden sm:-bottom-20"></div>


        </section>




        <div className="flex flex-col container mx-auto max-w-xl leading-loose gap-y-6 flex-1 justify-center items-center text-center mt-40 mb-36">
          <h1 className="text-3xl font-bold">Features</h1>
          <p className="text-gray-500 text-lg">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmark sync between your devices so you can access them on the go.</p>
        </div>




        <section id="feature1" className="relative flex flex-col items-center gap-y-24 sm:flex-row sm:gap-x-24text-center sm:text-left mb-36">
          <div className="flex flex-1 z-10">
            <img src="/images/illustration-features-tab-1.png"></img>
          </div>
          <div className="flex flex-col gap-y-8 flex-1">
            <h1 className="text-4xl font-bold tracking-wide">Bookmark in One click</h1>
            <p className="text-gray-500 leading-relaxed text-lg">Organize your bookmarks however you like. Our simple drag-and-drap interface gives you complete control over how you manage your favourite sites.</p>
            <button className="bg-purple-700 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-pruple-800 duration-300 active:scale-90 px-3 py-2 rounded-md text-white uppercase font-bold">More Info</button>
          </div>


          <div className="bg-purple-700 h-60 w-full sm:w-1/2 rounded-r-full bottom-56 absolute -left-44 overflow-hidden sm:-bottom-20">

          </div>

        </section>



        <section id="feature2" className="relative flex flex-col items-center gap-y-24 sm:flex-row-reverse sm:gap-x-24 text-center sm:text-left mb-36">
          <div className="flex flex-1 z-10">
            <img src="/images/illustration-features-tab-2.png"></img>
          </div>
          <div className="flex flex-col gap-y-6 flex-1">
            <h1 className="text-4xl font-bold tracking-wide">Save all your favourites</h1>
            <p className="text-gray-500 text-lg">Our easy-to-use user interface lets you save all your favourites over the internet. Just click the save button and get back to it whenever you like.</p>
            <button className="bg-purple-700 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-pruple-800 duration-300 active:scale-90 px-3 py-2 rounded-md text-white uppercase font-bold">Get it on Firefox</button>
          </div>


          <div className="bg-purple-700 h-60 w-full sm:w-1/2 rounded-l-full bottom-56 absolute -right-44 overflow-hidden sm:-bottom-20">

          </div>

        </section>


        <section id="feature1" className="relative flex flex-col items-center gap-y-24 sm:flex-row sm:gap-x-24 text-center sm:text-left mb-52">
          <div className="flex flex-1 z-10">
            <img src="/images/illustration-features-tab-3.png"></img>
          </div>
          <div className="flex flex-col gap-y-6 flex-1">
            <h1 className="text-4xl font-bold tracking-wide">All bookmarks at one place</h1>
            <p className="text-gray-500 text-lg">We care for your favourites and value your time. Thats the reason we gather all your saved notes and articles over the internet at once place which makes it a lot easier to access them.</p>
            <button className="bg-purple-700 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-pruple-800 duration-300 active:scale-90 px-3 py-2 rounded-md text-white uppercase font-bold">Get it on Firefox</button>
          </div>


          <div className="bg-purple-700 h-60 w-full sm:w-1/2 rounded-r-full bottom-56 absolute -left-44 overflow-hidden sm:-bottom-20">

          </div>

        </section>



        <div className="flex flex-col gap-y-8 flex-1 container mx-auto max-w-xl justify-center items-center text-center mb-32">
          <h1 className="text-3xl font-bold tracking-wider">Download the extension</h1>
          <p className="text-gray-500 text-xl">We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'ld like us to priorotize.</p>
        </div>


        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 sm:gap-x-12 w-full justify-between mx-auto mb-52">

          <div className="rounded-md shadow-xl p-5 bg-gray-100">

            <div className="flex flex-col gap-y-9 items-center">
              <div className="w-auto">
                <img src="/images/logo-chrome.svg" ></img>
              </div>
              <h1 className="text-xl text-gray-500 font-medium">Version 3.0.1 & Above</h1>

              <h1 className="border-b-black border-2 w-full border-dashed"></h1>

              <button className="bg-purple-700 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-pruple-800 duration-300 active:scale-90 px-3 py-2 rounded-md text-white uppercase font-bold w-full">Get it on Chrome</button>
            </div>
          </div>

          <div className=" rounded-md shadow-xl p-5 bg-gray-100 md:my-6 md:-mb-8">
            <div className="flex flex-col gap-y-9 items-center">
              <div className="w-auto">
                <img src="/images/logo-firefox.svg" ></img>
              </div>
              <h1 className="text-xl text-gray-500 font-medium">Version 2.0.5 & Above</h1>

              <h1 className="border-b-black border-2 w-full border-dashed"></h1>

              <button className="bg-purple-700 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-pruple-800 duration-300 active:scale-90 px-3 py-2 rounded-md text-white uppercase font-bold w-full">Get it on Firefox</button>
            </div>
          </div>

          <div className="rounded-md shadow-xl p-5 bg-gray-100 md:mt-12 md:-mb-16">
            <div className="flex flex-col gap-y-9 items-center">
              <div className="w-auto">
                <img src="/images/logo-opera.svg" ></img>
              </div>
              <h1 className="text-xl text-gray-500 font-medium">Version 4.2.1 & Above</h1>

              <h1 className="border-b-black border-2 w-full border-dashed"></h1>

              <button className="bg-purple-700 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-pruple-800 duration-300 active:scale-90 px-3 py-2 rounded-md text-white uppercase font-bold w-full">Get it on Opera</button>
            </div>
          </div>
        </section>


      </div>








      <section className="w-full py-20 bg-purple-700">
          <div className="flex flex-col gap-y-10 text-white font-bold container mx-auto max-w-md items-center">
            <h1 className="uppercase tracking-widest text-sm">35,000+ already joined</h1>
            <h1 className="text-3xl tracking-wider text-center">Stay up-to-date with what we are doing</h1>

            <div className="flex flex-row gap-x-8 w-full">
              <div className="flex-1 items-center flex bg-white border-b-black border rounded-md">
                <input type="text" placeholder="Enter your email.." className="border-none py-2 px-2 appearance-none bg-transparent text-gray-500 font-bold focus:outline-none"></input>
              </div>
              <button className="bg-purple-700 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-pruple-800 duration-300 active:scale-90 px-3 py-2 rounded-md text-white uppercase font-bold border ">Contact Us</button>
            </div>

          </div>


        </section>



        <nav className="h-20 bg-gray-800">
          <div className="flex flex-col gap-y-8 md:flex-row items-center h-full container mx-auto max-w-4xl justify-between text-white uppercase text-sm">

            <div className="flex flex-col gap-y-8 md:flex-row md:gap-x-12 md:items-start items-center">
              <div className="-mt-1">
                <img src="images/logo-bookmark-white.png"></img>
              </div>
              <h1>features</h1>
              <h1>pricing</h1>
              <h1>contact</h1>
            </div>

            <div className="flex flex-row gap-x-8 cursor-pointer">
              <img src="images/logo-opera.svg" className="w-6 h-6"></img>
              <img src="images/logo-firefox.svg" className="w-6 h-6"></img>

            </div>

          </div>

        </nav>
    </div>
  </>
};

export default App;