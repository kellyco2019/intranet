
import React, {useState} from 'react'
import {useEffect}from "react"
import axios from "axios"

function Dashboard() {
    return (
        <div className="relative min-h-screen flex bg-gray-100 ">
           <div className="bg-gray-900 text-white w-60">1</div>
           <div className="flex-1">
                <div className="flex items-end justify-start h-23 text-xs pl-5 ml-1 border-b-2 border-red-500">
                    <div className="flex items-end px-3 hover:bg-red-500 hover:text-white h-24 " ><a className="mb-1">Formatos HSE</a></div>
                    <span className="text-red-500 text-base">|</span>
                    <div className="flex items-end px-3 hover:bg-red-500 hover:text-white h-24"><a className="mb-1">Hoja de Seguridad</a></div>
                    <span className="text-red-500 text-base">|</span>
                    <div className="flex items-end px-3 hover:bg-red-500 hover:text-white h-24 "><a className="mb-1">Charlas Mensuales</a></div>
                    <span className="text-red-500 text-base">|</span>
                    <div className="flex items-end px-3 hover:bg-red-500 hover:text-white h-24 "><a className="mb-1">Reporte de Actos y Condicines</a></div>
                    <span className="text-red-500 text-base">|</span>
                    <div className="flex items-end px-3 hover:bg-red-500 hover:text-white h-24 "><a className="mb-1">Covid 19</a></div>
                    <span className="text-red-500 text-base">|</span>
                    <div className="flex items-end px-3 hover:bg-red-500 hover:text-white h-24 "><a className="mb-1">Certificados HSE</a></div>
                    <span className="text-red-500 text-base">|</span>
                    <div className="flex items-end px-3 hover:bg-red-500 hover:text-white h-24 "><a className="mb-1">Solicitud de Permisos de Trabajo</a></div>
                    <span className="text-red-500 text-base">|</span>
                    <div className="flex items-end px-3 hover:bg-red-500 hover:text-white h-24 "><a className="mb-1">...</a></div>
                
                </div>
                <div class="grid grid-cols-12 grid-rows-1">
                    <div class="col-span-10">
                        <div class=" flex items-center justify-between row-span-1">
                            <div className="shadow flex items-center w-80 h-10 mr-4 rounded-r-lg">
                            <input class="w-full border-transparent bg-transparent focus:ring-transparent focus:border-transparent" type="text" placeholder="Search..."></input>
                                <button class=" bg-transparent  w-auto flex justify-end items-center text-gray-600 hover:text-gray-400">
                                    <span className=" font-black text-gray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                            <div className="w-24 h-20 flex flex-col text-center justify-center items-center my-4 mr-4 font-medium text-xs text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                                </svg>
                                <p>Formatos de Inspección de Seguridad</p>
                            </div>
                            <div className="w-24 h-20 flex flex-col text-center justify-center items-center my-4 mr-4 font-medium text-xs text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                                </svg>
                                <p>Formatos de Inspección de Seguridad</p>
                            </div>
                            <div className="w-24 h-20 flex flex-col text-center justify-center items-center my-4 mr-4 font-medium text-xs text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                                </svg>
                                <p>Formatos de Inspección de Seguridad</p>
                            </div>
                            <div className="w-24 h-20 flex flex-col text-center justify-center items-center my-4 mr-4 font-medium text-xs text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                                </svg>
                                <p>Formatos de Inspección de Seguridad</p>
                            </div>
                            <div className="w-24 h-20 flex flex-col text-center justify-center items-center my-4 mr-4 font-medium text-xs text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                                </svg>
                                <p>Formatos de Inspección de Seguridad</p>
                            </div>
                        </div>
                        {/* ´pppp */}
                        <div class=" flex items-center justify-between row-span-1  border-t-2 border-red-500 ml-1">
                            
                        </div>
                    </div>
                    <div class=" col-span-2 flex flex-col justify-center border-l-2 border-red-500 mr-2">
                        <div className="mt-4 pl-2"><p className="text-4xl text-gray-400 font-extrabold ">ARCHIVOS</p></div>
                        <div className="flex justify-end text-base font-bold text-gray-400 mt-6 mb-10 ">
                            <div className="flex mr-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <span>enviar</span>   
                            </div>
                            <div className="flex ml-2 justify-end items-center ">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd" />
                                </svg>
                                <span>descargar</span>
                            </div>
                        </div>
                        <div className="ml-2">
                            {/* w-64 */}
                            <div className="flex items-center ml-2 mb-1">
                                <input type="checkbox" class="rounded-full text-red-500 border-red-500 focus:ring-0" id="dewey" name="drone" value="dewey"></input>
                                <span className="text-xs ml-1 font-medium text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd" />
                                </svg>
                                </span>
                                <label htmlFor="dewey" className="text-xs ml-1 font-medium text-gray-400">Dewey</label>
                            </div>
                            <div className="flex items-center ml-2 mb-1">
                                <input type="checkbox" class="rounded-full text-red-500 border-red-500 focus:ring-0" id="dewey" name="drone" value="dewey"></input>
                                <span className="text-xs ml-1 font-medium text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd" />
                                </svg>
                                </span>
                                <label htmlFor="dewey" className="text-xs ml-1 font-medium text-gray-400">Dewey</label>
                            </div>
                            <div className="flex items-center ml-2 mb-1">
                                <input type="checkbox" class="rounded-full text-red-500 border-red-500 focus:ring-0" id="dewey" name="drone" value="dewey"></input>
                                <span className="text-xs ml-1 font-medium text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd" />
                                </svg>
                                </span>
                                <label htmlFor="dewey" className="text-xs ml-1 font-medium text-gray-400">Dewey</label>
                            </div>
                            <div className="flex items-center ml-2 mb-1">
                                <input type="checkbox" class="rounded-full text-red-500 border-red-500 focus:ring-0" id="dewey" name="drone" value="dewey"></input>
                                <span className="text-xs ml-1 font-medium text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd" />
                                </svg>
                                </span>
                                <label htmlFor="dewey" className="text-xs ml-1 font-medium text-gray-400">Dewey</label>
                            </div>
                            <div className="flex items-center ml-2 mb-1">
                                <input type="checkbox" class="rounded-full text-red-500 border-red-500 focus:ring-0" id="dewey" name="drone" value="dewey"></input>
                                <span className="text-xs ml-1 font-medium text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd" />
                                </svg>
                                </span>
                                <label htmlFor="dewey" className="text-xs ml-1 font-medium text-gray-400">Dewey</label>
                            </div>
                            <div className="flex items-center ml-2 mb-1">
                                <input type="checkbox" class="rounded-full text-red-500 border-red-500 focus:ring-0" id="dewey" name="drone" value="dewey"></input>
                                <span className="text-xs ml-1 font-medium text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd" />
                                </svg>
                                </span>
                                <label htmlFor="dewey" className="text-xs ml-1 font-medium text-gray-400">Dewey</label>
                            </div>
                            <div className="flex items-center ml-2 mb-1">
                                <input type="checkbox" class="rounded-full text-red-500 border-red-500 focus:ring-0" id="dewey" name="drone" value="dewey"></input>
                                <span className="text-xs ml-1 font-medium text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd" />
                                </svg>
                                </span>
                                <label htmlFor="dewey" className="text-xs ml-1 font-medium text-gray-400">Dewey</label>
                            </div>
                            <div className="flex items-center ml-2 mb-1">
                                <input type="checkbox" class="rounded-full text-red-500 border-red-500 focus:ring-0" id="dewey" name="drone" value="dewey"></input>
                                <span className="text-xs ml-1 font-medium text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd" />
                                </svg>
                                </span>
                                <label htmlFor="dewey" className="text-xs ml-1 font-medium text-gray-400">Dewey</label>
                            </div>
                            <div className="mt-6 mb-6 w-40 ml-2 border-b-2 border-red-500"></div>
                            
                            <div class="flex flex-col justify-end col-span-2 max-w-xs">
                                <form class="bg-transparent rounded pb-8 mb-4">
                                    <div class=" flex mb-4">
                                    <label class="block text-gray-600 text-sm font-semibold mr-2 mb-2" for="title">
                                        Title
                                    </label>
                                    <input
                                        class=" bg-transparent appearance-none border rounded h-7 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="title"
                                        type="text"
                                    />
                                    </div>
                                    <div class=" flex mb-4">
                                    <label class="block text-gray-600 text-sm font-semibold mr-2 mb-2" for="title">
                                        Title
                                    </label>
                                    <input
                                        class=" bg-transparent appearance-none border rounded h-7 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="title"
                                        type="text"
                                    />
                                    </div>
                                    <div class=" flex mb-4">
                                    <label class="block text-gray-600 text-sm font-semibold mr-2 mb-2" for="title">
                                        Title
                                    </label>
                                    <input
                                        class=" bg-transparent appearance-none border rounded h-7 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="title"
                                        type="text"
                                    />
                                    </div>
                                    
                                    <div class="ml-9">
                                        <textarea
                                        rows="4"
                                        cols="50"
                                        class="bg-gray-100 p-1 appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="description"
                                        type="text"
                                        >
                                        </textarea>
                                    </div>
                                    
                                        <div class="ml-4 flex text-xl text-gray-400 font-bold justify-center items-center">
                                            <div className=" ml-4 flex text-xl  w-14 h-16">
                                                <button class="focus:outline-none focus:shadow-outline focus:text-gray-600" type="button">
                                                    
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-16" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                                                        </svg>
                                
                                                </button>
                                            </div>
                                        </div>
                                </form>

                                </div>

                        </div>
                    </div>
                </div>

           </div>
        </div>
    )
}

export default Dashboard
