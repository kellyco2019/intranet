
import React, {useState} from 'react'
import {useEffect}from "react"
import axios from "axios"
import{Link} from "react-router-dom"



function Forms() {
    return (
      <div className="relative min-h-screen flex bg-gray-100 ">
        <div className="bg-gray-900 text-white w-60">MENÚ</div>
        <div className="flex-1">
            <div className="flex items-end justify-start h-23 text-xs pl-5 ml-1 border-b-2 border-red-500">
                <Link className="flex items-end focus:bg-red-500 focus:text-white h-24 px-3 mb-1" to="/">Formatos HSE</Link>
                <span className="text-red-500 text-base">|</span>
                <Link className="flex items-end focus:bg-red-500 focus:text-white h-24 px-3 mb-1" to="/">Hoja de Seguridad</Link>
                <span className="text-red-500 text-base">|</span>
                <Link className="flex items-end focus:bg-red-500 focus:text-white h-24 px-3 mb-1" to="/">Charlas Mensuales</Link>
                <span className="text-red-500 text-base">|</span>
                <Link className="flex items-end focus:bg-red-500 focus:text-white h-24 px-3 mb-1" to="/">Reporte de Actos y Condicines</Link>
                <span className="text-red-500 text-base">|</span>
                <Link className="flex items-end focus:bg-red-500 focus:text-white h-24 px-3 mb-1" to="/">Covid 19</Link>
                <span className="text-red-500 text-base">|</span>
                <Link className="flex items-end focus:bg-red-500 focus:text-white h-24 px-3 mb-1" to="/">Certificados HSE</Link>
                <span className="text-red-500 text-base">|</span>
                <Link className="flex items-end focus:bg-red-500 focus:text-white h-24 px-3 mb-1" to="/">Solicitud de Permisos de Trabajo</Link>
                <span className="text-red-500 text-base">|</span>
                <Link className="flex items-end focus:bg-red-500 focus:text-white h-24 px-3 mb-1" to="/">...</Link>
            
            </div>
            <div class="grid grid-cols-12 grid-rows-1">
                    <div class="col-span-10">
                      <form action="#" method="POST">
                        <div class="shadow overflow-hidden sm:rounded-md">
                          <div class="px-4 py-5 bg-gray-100 sm:p-6">
                            <div class="grid grid-cols-6 gap-6">
                              <div class="my-6 col-span-6 sm:col-span-6 lg:col-span-6 ml-3">
                                <h1 className="font-bold text-gray-600">REPORTE DIARIO</h1>
                              </div>

                              <div class=" flex flex-row justify-between col-span-6 sm:col-span-6 lg:col-span-6 ml-3 mr-6">
                                <div className="flex col-span-2 sm:col-span-2 lg:col-span-2">
                                  <div className="w-20 h-20">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/volrod-menu.appspot.com/o/logo-03.png?alt=media&token=d5e97ddf-80b5-4b90-9652-a1431d9a8aaa"/>
                                  </div>
                                  <div className="">
                                    <p>Apellidos Nombres</p>
                                    <p>Cargo</p>
                                    <p>identidad</p>
                                  </div>
                                </div>

                                <div className="flex flex-col content-between sm:col-span-1 lg:col-span-1">
                                  <label for="last_name" class="text-sm text-center font-bold text-gray-700 py-2">Fecha de Reporte</label>
                                  <input type="date" id="start" name="trip-start" value="2021-11-05" min="2021-11-05" max="2024-12-31" class="text-center mt-1 py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                                </div>

                                <div className="flex flex-col sm:col-span-2">
                                  <label for="supervisor" class="text-sm text-center font-bold text-gray-700 py-2">Supervisor</label>
                                  <select id="supervisor" name="supervisor" autocomplete="supervisor" class="text-center mt-1 py-2 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option>Andrés Sánchez</option>
                                    <option>Carlos Calderon</option>
                                    <option>Felipe Torres</option>
                                    <option>Giovanni Castellanos</option>
                                    <option>Holman Duarte</option>
                                    <option>Jaime Lopez</option>
                                    <option>Jorge Becerra</option>
                                    <option>José Luis Alcántar</option>
                                    <option>Luis Carlos Quintero</option>
                                    <option>Miguel Garzon</option>
                                    <option>Nicolas Alfonso</option>
                                  </select>
                                </div>
                                <div>
                                  <label for="estado" class="text-sm text-center font-bold block text-gray-700 py-2">Estado</label>
                                  <select id="estado" name="country" autocomplete="estado" class="text-center mt-1 block w-full py-2 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option>Campo</option>
                                    <option>Compensatorio</option>
                                    <option>Curso HSE</option>
                                    <option>Digitalización de Planos</option>
                                    <option>Disponible en Hotel</option>
                                    <option>En Casa</option>
                                    <option>Informes</option>
                                    <option>Movilización-Conductor</option>
                                    <option>Movilización-Pasajero</option>
                                    <option>Oficina</option>
                                    <option>Permiso</option>
                                    <option>Trabajo en casa</option>
                                    <option>Vacaciones</option>
                                  </select>
                                </div>
                                <div>
                                  <label for="cliente" class="text-sm text-center font-bold block text-gray-700 py-2">Cliente</label>
                                  <select id="cliente" name="country" autocomplete="estado" class="text-center mt-1 block w-full py-2 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option>CENIT LINEAS</option>
                                    <option>CENIT_PLANTAS</option>
                                    <option>PERENCO</option>
                                    <option>SGS</option>
                                    <option>STEPAN</option>
                                    <option>STORK</option>
                                    <option>VARIOS</option>
                                    <option>SIN ASIGNAR</option>
                                    <option>NO APLICA</option>
                                  </select>
                                </div>
                              </div>

                              <div class=" flex flex-row justify-between col-span-6 sm:col-span-6 lg:col-span-6 my-10 ml-3 mr-6">
                                <div className="sm:col-span-2 lg:col-span-2 w-2/6">
                                <label for="lugar_de_inspeccion" class="my-4 block text-sm font-bold text-gray-700">Lugar de Inspección</label>
                                <textarea placeholder="Planta, Línea o Proyecto" type="text" name="lugar_de_inspeccion" id="lugar_de_inspeccion" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                                </div>
                                <div className="px-16 sm:col-span-2 lg:col-span-2 w-2/6">
                                  <label for="lugar_de_inspeccion" class="my-4  block text-sm font-bold text-gray-700">DR-Línea/TAG Equipo o Sistema Tubería</label>
                                  <textarea placeholder="Introduzca los datos correspondientes" type="text" name="lugar_de_inspeccion" id="lugar_de_inspeccion" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                                </div>
                                <div className="sm:col-span-2 lg:col-span-2 w-2/6">
                                  <label for="lugar_de_inspeccion" class="my-4 block text-sm font-bold text-gray-700">Alcance</label>
                                  <textarea placeholder="Realice una descripción breve de la actividad" type="text" name="lugar_de_inspeccion" id="lugar_de_inspeccion" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                                </div>
                              </div>

                              <div class=" flex flex-row justify-between col-span-6 sm:col-span-6 lg:col-span-6 my-10 ml-3 mr-6">
                                <div className="sm:col-span-2 lg:col-span-2 w-2/6">
                                <label for="lugar_de_inspeccion" class="my-4 block text-sm font-bold text-gray-700">Técnica</label>
                                <textarea placeholder="Describa la Técnica empleada en la labor" type="text" name="lugar_de_inspeccion" id="lugar_de_inspeccion" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                                </div>
                                <div className="px-16 sm:col-span-2 lg:col-span-2 w-2/6">
                                  <label for="lugar_de_inspeccion" class="my-4  block text-sm font-bold text-gray-700">Cantidad</label>
                                  <textarea placeholder="Ingrese los datos" type="text" name="lugar_de_inspeccion" id="lugar_de_inspeccion" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                                </div>
                                <div className="sm:col-span-2 lg:col-span-2 w-2/6">
                                  <label for="lugar_de_inspeccion" class="my-4 block text-sm font-bold text-gray-700">Descripción Según ITEM contrato</label>
                                  <textarea placeholder="Ingrese la información de acuerdo a lo solicitado" type="text" name="lugar_de_inspeccion" id="lugar_de_inspeccion" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                                </div>
                              </div>




 

 
                            </div>
                          </div>
                          <div class="px-4 py-3 bg-gray-100 text-right sm:px-6 mr-6">

                            <button type="" class="h-16 w-24 inline-flex justify-center items-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium  text-white bg-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                              Cancelar
                            </button>                            
                            <button type="submit" class="h-16 w-24 inline-flex justify-center items-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium  text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                              Guardar
                            </button>

                          </div>
                        </div> 
                      </form>
                    </div>
                    <div class=" col-span-2 flex flex-col justify-center border-l-2 border-red-500 mr-2">
                        <div className="mt-4 pl-2"></div>
                        <div className="flex flex-col md:flex-row justify-end text-base font-bold text-gray-400 mt-6 mb-10 ">


                        </div>
                    </div>
                </div>
            
        </div>
      </div>

    )
}

export default Forms
