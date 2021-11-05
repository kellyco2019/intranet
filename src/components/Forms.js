
import React, {useState} from 'react'
import {useEffect}from "react"
import axios from "axios"



function Forms() {
    return (
<div className="relative min-h-screen flex bg-gray-100 ">
<div class="mt-10 sm:mt-0 bg-gray-100">
  <div class="md:grid md:grid-cols-3 md:gap-6 mt-6">
    <div class="shadow-md bg-white md:col-span-1 md:ml-6 h-80">
      <div class="">
        <img src="../intra.PNG" className="shadow-md" ></img>
        <h1 class=" text-3xl font-medium leading-6 text-gray-900 my-6 mx-1">Reporte Diario</h1>
        
        <p class="mx-1 text-sm text-gray-600">
          Use a permanent address where you can receive mail.
        </p>
      </div>
    </div>
    <div class=" shadow-md mt-5 md:mt-0 md:col-span-2 md:mr-6">
      <form action="#" method="POST">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">



              <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                <label for="cc" class="block text-sm font-medium text-gray-700">CC</label>
                <input type="text" name="cc" id="cc" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div class="flex col-end-7 col-span-1 justify-center items-end">
                <button type="button" className="rounded-full py-1 px-3 bg-gray-400 text-white">Buscar</button>
              </div>

              <div class="col-start-1 col-end-6">
                <label for="supervisor" class="block text-sm font-medium text-gray-700">Supervisor</label>
                <select id="supervisor" name="supervisor" autocomplete="supervisor" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
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

              <div class="col-span-6 sm:col-span-2">
                <label for="last_name" class="block text-sm font-medium text-gray-700">Last name</label>
                <input type="date" id="start" name="trip-start" value="2021-11-05" min="2021-11-05" max="2024-12-31" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>
              <div class="col-span-6 sm:col-span-2">
                <label for="estado" class="block text-sm font-medium text-gray-700">Estado</label>
                <select id="estado" name="country" autocomplete="estado" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
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

              <div class="col-span-6 sm:col-span-2">
                <label for="cliente" class="block text-sm font-medium text-gray-700">Cliente</label>
                <select id="cliente" name="country" autocomplete="estado" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
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

              <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                <label for="lugar_de_inspeccion" class="block text-sm font-medium text-gray-700">Lugar de Inspección</label>
                <input placeholder="Planta/Línea/Proyecto" type="text" name="lugar_de_inspeccion" id="lugar_de_inspeccion" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div class="col-span-6 sm:col-span-6">
                <label for="dr_linea" class="block text-sm font-medium text-gray-700">DR-LÍNEA/TAG EQUIPO O SISTEMA TUBERÍA</label>
                <input type="text" name="dr_linea" id="dr_linea" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="alcance" class="block text-sm font-medium text-gray-700">Alcance</label>
                <input placeholder="Breve Descripción" type="text" name="alcance" id="alcance" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>

              <div class="col-span-6">
                <label for="street_address" class="block text-sm font-medium text-gray-700">Street address</label>
                <input type="text" name="street_address" id="street_address" autocomplete="street-address" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div class="col-span-6 sm:col-span-2">
                <label for="tecnica" class="block text-sm font-medium text-gray-700">Técnica</label>
                <input type="text" id="tecnica" name="tecnica" value="" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div class="col-span-6 sm:col-span-2">
                <label for="cantidad" class="block text-sm font-medium text-gray-700">cantidad</label>
                <input type="text" id="cantidad" name="cantidad" value="" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div class="col-span-6 sm:col-span-6">
                <label for="disc" class="block text-sm font-medium text-gray-700">DESCRIPIÓN SEGÚN ITEM CONTRATO</label>
                <select id="dsic" name="dsic" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
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
          </div>
          <div class="px-4 py-3 bg-white text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
          </div>
        </div>
       </div> 
      </form>
    </div>
  </div>
</div>
</div>
    )
}

export default Forms