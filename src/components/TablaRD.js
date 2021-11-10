import React, {useState} from 'react'
import {useEffect}from "react"
import axios from "axios"
import{Link} from "react-router-dom"

function TablaRD() {

   const datox=[{name:"Luis Hernandez",numero:20, compañía:"volrod"},{name:"Luis Hernandez",numero:20, compañía:"volrod"},{},{},{},{}]
    return (
        <div className="relative min-h-screen flex bg-gray-100 ">
            <div className="bg-gray-900 text-white w-60">MENÚ</div>
            <table class="flex-1 bg-gray-100">
                
                <thead className="">
                    <tr className="sticky top-0">
                    <th className="border border-gray-100 px-2 py-2 bg-gray-700 text-white">Fecha de Reporte</th>
                    <th className="border border-gray-100 px-2 py-2 bg-gray-700 text-white">CC</th>
                    <th className="border border-gray-100 px-2 py-2 bg-gray-700 text-white">Nombre</th>
                    <th className="border border-gray-100 px-2 py-2 bg-gray-700 text-white">Cargo</th>
                    <th className="border border-gray-100 px-2 py-2 bg-gray-700 text-white">Supervisor</th>
                    <th className="border border-gray-100 px-2 py-2 bg-gray-700 text-white">Estado</th>
                    <th className="border border-gray-100 px-2 py-2 bg-gray-700 text-white">Cliente</th>
                    <th className="border border-gray-100 px-2 py-2 bg-gray-700 text-white">Ubicación</th>
                    <th className="border border-gray-100 px-2 py-2 bg-gray-700 text-white">DR-Linea Equipo o Sistema</th>
                    <th className="border border-gray-100 px-2 py-2 bg-gray-700 text-white">Alcance</th>
                    <th className="border border-gray-100 px-2 py-2 bg-gray-700 text-white">Técnica</th>
                    <th className="border border-gray-100 px-2 py-2 bg-gray-700 text-white">Cantidad</th>
                    <th className="border border-gray-100 px-2 py-2 bg-gray-700 text-white">Descripción según contrato</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {datox.map((element)=>{
                            return(

                                <tr class="hover:bg-red-500 hover:text-white bg-emerald-200">
                                    <td className="border boder-gray-100 px-2 py-2">08/11/2021</td>
                                    <td className="border boder-gray-100 px-2 py-2">...</td>
                                    <td className="border boder-gray-100 px-2 py-2">Adam</td>
                                    <td className="border boder-gray-100 px-2 py-2">...</td>
                                    <td className="border boder-gray-100 px-2 py-2">...</td>
                                    <td className="border boder-gray-100 px-2 py-2">...</td>
                                    <td className="border boder-gray-100 px-2 py-2">...</td>
                                    <td className="border boder-gray-100 px-2 py-2">...</td>
                                    <td className="border boder-gray-100 px-2 py-2">...</td>
                                    <td className="border boder-gray-100 px-2 py-2">...</td>
                                    <td className="border boder-gray-100 px-2 py-2">...</td>
                                    <td className="border boder-gray-100 px-2 py-2">...</td>
                                    <td className="border boder-gray-100 px-2 py-2">...</td>
                                </tr> )
                            

                                               }
                        )}
                </tbody>
            </table>

        </div>
    )
}

export default TablaRD

