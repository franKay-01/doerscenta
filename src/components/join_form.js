import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import useAxios from "../hooks/hook";

export default function JoinFormCard() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const { executeReq } = useAxios();
  const [selectedFile, setSelectedFile] = useState("");

  const roles = [
    { name: "Select Role ..." },
    { name: "Engineering" },
    { name: "Design" },
    { name: "Operations" },
    { name: "Marketing" },
  ];

  const [selected, setSelected] = useState(roles[0]);

  const changeFile = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const submitForm = async () => {
    if (name === "" || email === "" || message === "") {
      setError("Please fill all mandatory fields");
    } else {
      const data = new FormData();
      console.log(selectedFile);

      const params = {
        full_name: name,
        email: email,
        message: message,
        role_type: selected.name,
      };
      data.append("files.cv", selectedFile, selectedFile.name);
      data.append("data", JSON.stringify(params));
      const res = await executeReq(data, "profiles");

      setError("");
      setName("");
      setEmail("");
      setMessage("");
      setShowModal(false);
    }
  };

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
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="text-white bg-gradient-to-r from-sky-500 to-blue-500 hover:from-blue-500 hover:to-sky-500 h-12 relative flex justify-center items-center p-4 space-x-2 rounded-md mt-4"
      >
        <p className="font-bold text-lg lg:text-lg">Join the Team</p>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative md:w-1/4 lg:w-1/4">
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
                  <p className="ml-2 text-xl text-center">
                    Join the Team
                  </p>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
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
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        <div>
                          CV:{" "}
                          <input
                            type="file"
                            className="form-control"
                            name="cv"
                            onChange={(e) => changeFile(e)}
                          />
                        </div>
                        <div>
                          <Listbox value={selected} onChange={setSelected}>
                            <div className="relative mt-4">
                              <Listbox.Button className="relative w-full cursor-default bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none sm:text-sm">
                                <span className="block truncate">
                                  {selected.name}
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                  <SelectorIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                </span>
                              </Listbox.Button>
                              <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                  {roles.map((role, roleIdx) => (
                                    <Listbox.Option
                                      key={roleIdx}
                                      className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                          active
                                            ? "bg-sky-100 text-black-900"
                                            : "text-gray-900"
                                        }`
                                      }
                                      value={role}
                                    >
                                      {({ selected }) => (
                                        <>
                                          <span
                                            className={`block truncate ${
                                              selected
                                                ? "font-medium"
                                                : "font-normal"
                                            }`}
                                          >
                                            {role.name}
                                          </span>
                                          {selected ? (
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                              <CheckIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                              />
                                            </span>
                                          ) : null}
                                        </>
                                      )}
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </Transition>
                            </div>
                          </Listbox>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4">* Mandatory Information</p>
                </div>
                {/*footer*/}

                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setError("");
                      setName("");
                      setEmail("");
                      setMessage("");
                      setShowModal(false);
                    }}
                  >
                    Close
                  </button>
                  <button
                    className="bg-sky-500 text-white active:bg-gray-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => submitForm()}
                  >
                    Submit
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
