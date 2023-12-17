
// import applogo from "./applogo.png";

const Home = () => {
  return (
    <header className='w-full flex flex-col items-center justify-center'>
        <nav className='flex items-center justify-between w-full py-5 px-12 mb-5'>
            {/* <img src={applogo} alt="" className='w-28 object-contain' /> */}
            <h2 className=""><span className="bg-gradient-to-r from-amber-500 to-orange-600 font-extrabold text-3xl bg-clip-text text-transparent">Abstricle</span></h2>
            <button onClick={()=> window.open('https://github.com/Bhargav0803')} className='bg-black text-white font-bold rounded-xl p-2'>Github</button>
        </nav>
        <h1 className="text-4xl font-bold leading-[1.15] text-black sm:text-5xl text-center">Unveil Article Insights with<br className="max-md:hidden"></br><span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">OpenAI's GPT-model</span></h1>
        <h2 className="mt-5 text-lg text-gray-600 sm:text-xl text-center max-w-2xl">Welcome to Abstricle, your open source article abstractor that transforms lengthy articles into clean and crisp abtracts!</h2>
    </header>
  )
}

export default Home