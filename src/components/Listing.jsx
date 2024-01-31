import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../context/Context";

const Listing = () => {
 

 const {quiz} = useContext(MainContext)

 

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
          <thead className="text-xl text-white uppercase bg-blue-600 dark:text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Question
              </th>
              <th scope="col" className="px-6 py-3">
                Option A
              </th>
              <th scope="col" className="px-6 py-3">
                Option B
              </th>
              <th scope="col" className="px-6 py-3">
                Option C
              </th>
              <th scope="col" className="px-6 py-3">
                Option D
              </th>
              <th scope="col" className="px-6 py-3">
                Created At
              </th>
            </tr>
          </thead>
          <tbody>
           {
            quiz.map(
              (d)=>{
               return(
                <tr className="bg-blue-500 border-b border-blue-400">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                >
                  {d.question}
                </th>
                <td className={`px-6 py-4 ${d.corrAns=="Option A" ? "font-bold":""}`}>{d.optA}</td>
                <td className={`px-6 py-4 ${d.corrAns=="Option B" ? "font-bold":""}`}>{d.optB}</td>
                <td className={`px-6 py-4 ${d.corrAns=="Option C" ? "font-bold":""}`}>{d.optC}</td>
                <td className={`px-6 py-4 ${d.corrAns=="Option D" ? "font-bold":""}`}>{d.optD}</td>
                <td>{d.date}</td>
              </tr>
               )
              }
            )
           }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Listing;
