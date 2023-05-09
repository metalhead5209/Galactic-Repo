
'use client'
import Link from "next/link";
import Image from 'next/image';
import { useState, useEffect } from "react";

export default function Home() {

    const [ imgUrl, setImgUrl ] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/api/people?search=vader")
        .then((res) => res.json())
        .then(data => setImgUrl(data.name))
}, [])

  return (
       <div
        className="main container min-h-screen h-screen relative mx-auto bg-black mx-auto my-auto w-5/6 h-5/6 lg:h-3/4 rounded-lg flex xl:justify-center flex-col sm:flex-row md:flex-row lg:flex-row overflow-scroll scroll-smooth "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
      >
      <Link className="text-3xl no-underline text-white" href="/">Home</Link>


        <div className="flex flex-col justify-center items-center">
            {imgUrl}

        </div>


    </div>



  );
}
