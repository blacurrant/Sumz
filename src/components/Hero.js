import React from 'react'
import Demo from './Demo';
import logo from '../assets/logo.jpg';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col z-20'>
      <nav className='flex justify-between items-center w-full mb-10 pt-5 px-10'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />
        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/blacurrant", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Websites with <br className='max-md:hidden' />
        <span className='orange_gradient'> Sumz OPENAI</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
      <Demo/>
    </header>
  )
}

export default Hero