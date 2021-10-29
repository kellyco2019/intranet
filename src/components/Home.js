
import React, {useState} from 'react'
import {useEffect}from "react"
import axios from "axios"

function Home() {
    return (
        <div className="relative min-h-screen flex bg-gray-100 ">
           <div className="bg-gray-900 text-white w-60">1</div>
           <div className="flex-1">
               <div className="h-52 mx-1 border-b-2 border-red-500"></div>
                <div class=" grid grid-cols-7 my-8 text-center justify-center items-center flex-wrap content-center ">
                
                    <div class="flex text-center justify-center items-center col-span-3 border-r-2 border-b-2 border-red-500 ml-40">
                        <div className="h-52"></div>
                    </div>
                    <div class="flex text-center justify-center items-center col-span-3 border-b-2 border-red-500 mr-40">
                        <div className="h-52"></div>
                    </div>
                    <div class="flex text-center justify-center items-center row-span-1 border-l-2 border-red-500">
                        <div className="h-52"></div>
                    </div>
                    <div class="flex text-center justify-center items-center col-span-3 border-r-2 border-red-500 ml-40">
                        <div className="h-52"></div>
                    </div>
                    <div class="flex text-center justify-center items-center col-span-3 mr-40">
                        <div className="h-52"></div>
                    </div>
                    <div class="flex flex-col text-left justify-start items-center row-span-1 border-l-2 border-red-500">
                        <div className="w-40 h-52 ml-4 text-5xl text-gray-600 border-t-2 border-red-500">
                            <p>Mis Tareas</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home