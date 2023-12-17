import React, { useEffect, useState } from 'react'
import { useLazyGetSummaryQuery } from '../services/article';

const Demo = () => {
  const[article,setArticle]=useState({
    url: '',
    summary:'',
  });

  const [allArticles,setAllArticles]= useState([]);

  const [getSummary,{error,isFetching}]=useLazyGetSummaryQuery();

  useEffect(()=>{
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem('articles')
    )
    if(articlesFromLocalStorage){
      setAllArticles(articlesFromLocalStorage);
    }
  },[])

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { data } = await getSummary({articleUrl:article.url});
    if(data?.summary){
      const newArticle = {...article, summary:data.summary};
      const updatedAllArticles = [newArticle, ...allArticles];
      setArticle(newArticle);
      setAllArticles(updatedAllArticles);
      console.log(newArticle);
      localStorage.setItem('article',JSON.stringify(updatedAllArticles))
    }
  }
  return (
    <section className='mt-8 w-full max-w-xl'>
        <div className='flex flex-col gap-2 w-full'>
            <form className='relative flex justify-center items-center' onSubmit={handleSubmit} id='form'>
                <input 
                type="url"
                placeholder='Enter a url'
                value={article.url}
                onChange={(e)=>{setArticle({...article,url:e.target.value})}}
                required
                className='url_input'
                />
            <button className='submit_btn' type='submit'>Submit</button>
            </form>
        </div>
<div className='my-10 max-w-full flex justify-center items-center'>
        {isFetching ? (
          // <img src={loader} alt='loader' className='w-20 h-20 object-contain' />
          <p>Loading...</p>
        ) : error ? (
          <p className='font-inter font-bold text-black text-center'>
            Well, that wasn't supposed to happen...
            <br />
            <span className='font-satoshi font-normal text-gray-700'>
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className='flex flex-col gap-3'>
              <h2 className='font-satoshi font-bold text-gray-600 text-xl text-center'>
                Article <span className='font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent'>Summary</span>
              </h2>
              <div className=' rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-4'>
                <p className='font-inter font-medium text-sm text-gray-700 text-justify'>
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  )
}

export default Demo