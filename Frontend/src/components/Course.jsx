import React, { useEffect } from "react";
import Cards from "./Cards";
import axios from "axios"
import { Link } from "react-router-dom";

function Course() {
  const[book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res=await axios.get("https://localhost:4001/book")
        console.log(res.data)
        setBook(res.data)
      }catch(error){
        console.log(error);
      }
    }
    getBook();
  },[])
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            I look back sometimes at the person I was before I rediscovered my
            old professor. I want to talk to that person. I want to tell him
            what to look out for, what mistakes to avoid. I want to tell him to
            be more open, to ignore the lure of advertised values, to pay
            attention when your loved ones are speaking, as if it were the last
            time you might hear them. Mostly I want to tell that person to get
            on an airplane and visit a gentle old man in West Newton,
            Massachusetts, sooner rather than later, before that old man gets
            sick and loses his ability to dance. I know I cannot do this. None
            of us can undo what we’ve done, or relive a life already recorded.
            But if Professor Morris Schwartz taught me anything at all, it was
            this: there is no such thing as “too late” in life. He was changing
            until the day he said good-bye
          </p>
         <Link to="/"> <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-5">
            Back
          </button></Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 ">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
