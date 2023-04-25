import React,{useState, useEffect} from 'react';

export default function Extrabit() {
    const[quotes,setQuotes]=useState("");
    const[author,setAuthor]=useState("");
    useEffect(()=> { 
        fetch("http://api.quotable.io/random")
        .then(res => res.json())
        .then(
            (quotes) =>{
                setQuotes(quotes.content);
               setAuthor(quotes.author);
               console.log(quotes);
            }
        )
    },[]);
    let fetchNewQuotes=()=>{
        fetch("http://api.quotable.io/random")
        .then(res => res.json())
        .then(
            (quotes) =>{
                setQuotes(quotes.content);
               setAuthor(quotes.author);
               console.log(quotes);
            }
        )
    }
  return (
    <div className="quotes">
    <h2>{quotes}</h2>
    <small>-{author}-</small><br />
    <button className='btn'  onClick={fetchNewQuotes}>Generate new Quotes</button>
    <a  href={`https://twitter.com/intent/tweet?text=${quotes}-${author}`} target="-blank" rel="noopener noreferrer" ><img className="twitt" src='https://tse4.mm.bing.net/th?id=OIP.Bd1KSEbw94SvkU0HDuMkFQHaHa&pid=Api&P=0'/></a>
    </div>
  )
}
