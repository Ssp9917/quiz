import React from "react";
import { getDatabase, ref, set } from "firebase/database";
import { v4 } from "uuid";

const Create = () => {
  const saveDataInFirebase = (e) => {
    e.preventDefault();
    const db = getDatabase();
    const uId = v4();
    const data = {
      question: e.target.que.value,
      optA: e.target.optA.value,
      optB: e.target.optB.value,
      optC: e.target.optC.value,
      optD: e.target.optD.value,
      corrAns: e.target.corrAns.value,
      date: new Date().toLocaleString()
    };

    console.log(data);

    e.target.reset()

    set(ref(db, "quizes/" + uId), data);
  };
  return (
    <div>
      <h1 className="text-center text-3xl bg-white text-black">Add Quiz</h1>

      <form onSubmit={saveDataInFirebase}>
        <div className="mb-3">
          <label
            htmlFor="first_name"
            className="block mb-2 text-xl  font-medium text-gray-900 dark:text-white"
          >
            Question
          </label>
          <input
            name="que"
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Question"
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="first_name"
            className="block mb-2 text-xl  font-medium text-gray-900 dark:text-white"
          >
            Option A
          </label>
          <input
            name="optA"
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Option A"
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="first_name"
            className="block mb-2 text-xl  font-medium text-gray-900 dark:text-white"
          >
            Option B
          </label>
          <input
            name="optB"
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Option B"
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="first_name"
            className="block mb-2 text-xl  font-medium text-gray-900 dark:text-white"
          >
            Option C
          </label>
          <input
            name="optC"
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Option C"
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="first_name"
            className="block mb-2 text-xl  font-medium text-gray-900 dark:text-white"
          >
            Option D
          </label>
          <input
            name="optD"
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Option D"
            required
          />
        </div>
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select an option
        </label>
        <select
          id="countries"
          name="corrAns"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mb-28 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose a correct answer</option>
          <option value="Option A">Option A</option>
          <option value="Option B">Option B</option>
          <option value="Option C">Option C</option>
          <option value="Option D">Option D</option>
        </select>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
