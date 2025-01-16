import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Maincontext } from "../context/Context";
import { useNavigate } from "react-router-dom";
const Question = () => {
  const { API_BASE_URL, QUES_BASE_URL, openToast, quesRender, user } =
    useContext(Maincontext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user == null) {
      navigate("/login");
    }
  }, [user]);

  const imageformhandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("type", "Geo");
    formData.append("optA", e.target.A.value);
    formData.append("optB", e.target.B.value);
    formData.append("optC", e.target.C.value);
    formData.append("optD", e.target.D.value);
    formData.append("answer", e.target.correctOption.value);
    formData.append("image", e.target.image.files[0]);

    axios
      .post(API_BASE_URL + QUES_BASE_URL + "/create", formData)
      .then((success) => {
        if (success.data.status == 1) {
          openToast(success.data.msg, "success");
        } else {
          openToast(success.data.msg, "error");
        }
      })
      .catch((error) => {
        openToast("Client side error", "error");
        console.log(error.message);
      });

    e.target.reset();
  };

  const textformhandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("type", "Quizz");
    formData.append("ques", e.target.ques.value);
    formData.append("optA", e.target.A.value);
    formData.append("optB", e.target.B.value);
    formData.append("optC", e.target.C.value);
    formData.append("optD", e.target.D.value);
    formData.append("answer", e.target.correctOption.value);

    axios
      .post(API_BASE_URL + QUES_BASE_URL + "/create", formData)
      .then((success) => {
        if (success.data.status == 1) {
          openToast(success.data.msg, "success");
        } else {
          openToast(success.data.msg, "error");
        }
      })
      .catch((error) => {
        openToast("Client side error", "error");
        console.log(error.message);
        // console.log(success.data.msg, "success");
      });

    e.target.reset();
  };

  return (
    <div className="sm:max-w-4xl w-[400px] sm:w-[900px] mx-auto">
      <div className=" h-full bg-white p-6 rounded-lg shadow-md">
        <h1
          className="text-2xl font-bold mb-4 text-center"
          style={{ fontFamily: "cursive" }}
        >
          Add a Question
        </h1>
        <hr className="mb-3" />

        {quesRender != "" && quesRender == "Geo" ? (
          <form onSubmit={imageformhandler} encType="multipart/form-data">
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-gray-700 font-semibold mb-2"
              >
                Image:
              </label>
              <input
                type="file"
                id="image"
                name="image"
                placeholder="Enter your question here"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required={true}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="A"
                className="block text-gray-700 font-semibold mb-2"
              >
                Option A:
              </label>
              <input
                type="text"
                id="A"
                name="A"
                placeholder="Enter option A"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required={true}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="B"
                className="block text-gray-700 font-semibold mb-2"
              >
                Option B:
              </label>
              <input
                type="text"
                id="B"
                name="B"
                placeholder="Enter option B"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required={true}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="C"
                className="block text-gray-700 font-semibold mb-2"
              >
                Option C:
              </label>
              <input
                type="text"
                id="C"
                name="C"
                placeholder="Enter option C"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required={true}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="D"
                className="block text-gray-700 font-semibold mb-2"
              >
                Option D:
              </label>
              <input
                type="text"
                id="D"
                name="D"
                placeholder="Enter option D"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required={true}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="correctOption"
                className="block text-gray-700 font-semibold mb-2"
              >
                Correct Option:
              </label>
              <select
                id="correctOption"
                name="correctOption"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required={true}
                defaultValue=""
              >
                <option value="" disabled={true} hidden>
                  Correct Option?
                </option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Question
            </button>
          </form>
        ) : quesRender != "" && quesRender == "Quizz" ? (
          <form onSubmit={textformhandler} encType="multipart/form-data">
            <div className="mb-4">
              <label
                htmlFor="ques"
                className="block text-gray-700 font-semibold mb-2"
              >
                Question:
              </label>
              <input
                type="text"
                id="ques"
                name="ques"
                placeholder="Enter your question here"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required={true}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="A"
                className="block text-gray-700 font-semibold mb-2"
              >
                Option A:
              </label>
              <input
                type="text"
                id="A"
                name="A"
                placeholder="Enter option A"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required={true}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="B"
                className="block text-gray-700 font-semibold mb-2"
              >
                Option B:
              </label>
              <input
                type="text"
                id="B"
                name="B"
                placeholder="Enter option B"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required={true}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="C"
                className="block text-gray-700 font-semibold mb-2"
              >
                Option C:
              </label>
              <input
                type="text"
                id="C"
                name="C"
                placeholder="Enter option C"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required={true}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="D"
                className="block text-gray-700 font-semibold mb-2"
              >
                Option D:
              </label>
              <input
                type="text"
                id="D"
                name="D"
                placeholder="Enter option D"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required={true}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="correctOption"
                className="block text-gray-700 font-semibold mb-2"
              >
                Correct Option:
              </label>
              <select
                id="correctOption"
                name="correctOption"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required={true}
                defaultValue=""
              >
                <option value="" disabled={true} hidden>
                  Correct Option?
                </option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Question
            </button>
          </form>
        ) : (
          <div>Please select the question category</div>
        )}
      </div>
    </div>
  );
};

export default Question;
