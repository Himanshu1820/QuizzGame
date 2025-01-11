import React, { useContext, useEffect } from "react";
import { Maincontext } from "../context/Context";
const Listing = () => {
  const {
    API_BASE_URL,
    imgUrl,
    question,
    TimeCalc,
    fetchQuestions,
    listRender,
    type,
  } = useContext(Maincontext);

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="max-w-[1300px] mt-3 mx-auto ">
      <div className="overflow-x-auto rounded-[10px] mx-2 ">
        <table className="rounded-lg text-sm w-full text-left rtl:text-right text-cyan-500 dark:text-cyan-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-500 dark:bg-gray-700 dark:text-cyan-500">
            <tr>
              <th scope="col" className="px-6 py-2 md:px-12 md:py-3">
                Question
              </th>
              <th scope="col" className="px-6 py-2 md:px-12 md:py-3">
                Option A
              </th>
              <th scope="col" className="px-6 py-2 md:px-12 md:py-3">
                Option B
              </th>
              <th scope="col" className="px-6 py-2 md:px-12 md:py-3">
                Option C
              </th>
              <th scope="col" className="px-6 py-2 md:px-12 md:py-3">
                Option D
              </th>
              <th scope="col" className="px-6 py-2 md:px-12 md:py-3">
                Created At
              </th>
            </tr>
          </thead>
          <tbody>
            {listRender.length > 0 ? (
              listRender.map((ques) => {
                return (
                  <tr
                    key={ques._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-4 py-2 md:px-6 md:py-4 font-medium text-gray-900 dark:text-white"
                    >
                      {type == "Geo" ? (
                        <img
                          src={API_BASE_URL + imgUrl + ques.image}
                          className="h-16 w-16 md:h-32 md:w-32 rounded-full"
                          alt=""
                        />
                      ) : (
                        ques?.question
                      )}
                    </th>
                    <td
                      className={`px-4 py-2 md:px-12 md:py-4 ${
                        ques.correctOpt == "A" ? "font-bold text-green-600" : ""
                      }`}
                    >
                      {ques.optA}
                    </td>
                    <td
                      className={`px-4 py-2 md:px-12 md:py-4 ${
                        ques.correctOpt == "B" ? "font-bold text-green-600" : ""
                      }`}
                    >
                      {ques.optB}
                    </td>
                    <td
                      className={`px-4 py-2 md:px-12 md:py-4 ${
                        ques.correctOpt == "C" ? "font-bold text-green-600" : ""
                      }`}
                    >
                      {ques.optC}
                    </td>
                    <td
                      className={`px-4 py-2 md:px-12 md:py-4 ${
                        ques.correctOpt == "D" ? "font-bold text-green-600" : ""
                      }`}
                    >
                      {ques.optD}
                    </td>
                    <td className="px-4 py-2 md:px-12 md:py-4">
                      {TimeCalc(ques.createdAt)}
                    </td>
                  </tr>
                );
              })
            ) : (
              <div className=" absolute top-[50%] left-[35%]">
                Please select the list category
              </div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Listing;
