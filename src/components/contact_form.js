import { useState } from "react";
import useAxios from "../hooks/hook";

export default function ContactCard() {
  const [showContact, setShowContact] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const { executeReq } = useAxios();

  const changeName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const changeEmail = (e) => {
    e.preventDefault();

    setEmail(e.target.value);
  };

  const changeMessage = (e) => {
    e.preventDefault();

    setMessage(e.target.value);
  };

  const submitForm = async () => {
    if (name === "" || email === "" || message === "") {
      setError("Please fill all mandatory fields");
    } else {
      const params = {
        data: {
          full_name: name,
          email: email,
          message: message,
        },
      };

      const res = await executeReq(params, "contacts");

      setError("");
      setName("");
      setEmail("");
      setMessage("");
      setShowContact(false);
    }
  };
  return (
    <>
      <button
        onClick={() => setShowContact(true)}
        className="text-sky-500 bg-transparent border-2 border-sky-500 hover:bg-sky-500 hover:text-white h-12 relative flex justify-center items-center p-4 space-x-2 rounded-md mt-4"
      >
        <p className="font-bold text-lg lg:text-lg">Get Early Access</p>
      </button>
      {showContact ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <p className="m-auto">Get Early Access</p>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowContact(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="text-red-500">{error}</p>

                  <div className="mt-4">
                    <div>
                      <input
                        type="text"
                        placeholder="* Full Name"
                        onChange={changeName}
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                      <input
                        type="email"
                        placeholder="* Email"
                        onChange={changeEmail}
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                      <textarea
                        id="message"
                        onChange={changeMessage}
                        rows="4"
                        class="block w-full px-4 py-2 mt-2 text-black border rounded-md focus:ring-1 focus:ring-blue-600 "
                        placeholder="Message..."
                      ></textarea>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setError("");
                      setName("");
                      setEmail("");
                      setMessage("");
                      setShowContact(false);
                    }}
                  >
                    Close
                  </button>
                  <button
                    className="bg-gray-800 text-white active:bg-gray-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      submitForm();
                    }}
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
