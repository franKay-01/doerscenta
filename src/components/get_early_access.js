import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import useAxios from "../hooks/hook";

export default function GetEarlyAccess() {
  const [showContact, setShowContact] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const roles = [
    { name: "Select ..." },
    { name: "As Doer" },
    { name: "As Investor/ Accelerator" },
    { name: "As Partner" },
  ];

  const [selected, setSelected] = useState(roles[0]);

  const { executeReq } = useAxios();

  const changePhone = (e) => {
    e.preventDefault();
    setPhone(e.target.value);
  };

  const changeEmail = (e) => {
    e.preventDefault();

    setEmail(e.target.value);
  };

  const changeName = (e) => {
    e.preventDefault();

    setFullName(e.target.value);
  };

  const submitForm = async () => {
    if (selected === "" || phone === "" || email === "" || fullName === "") {
      setError("Please fill all mandatory fields");
    } else {
      const params = {
        data: {
          intent: selected.name,
          phone: phone,
          email: email,
          full_name: fullName,
        },
      };

      const res = await executeReq(params, "early-accesses");
      console.log(JSON.stringify(res))
      setError("");
      setFullName("");
      setPhone("")
      setEmail("");
      setShowContact(false);
    }
  };
  return (
    <>
      <button
        onClick={() => setShowContact(true)}
        className="text-white bg-gradient-to-r from-sky-500 to-blue-500 hover:from-blue-500 hover:to-sky-500 h-12 relative flex justify-center items-center p-4 space-x-2 rounded-md mt-4"
      >
        <p className="font-bold text-lg lg:text-lg">Get Early Access</p>
      </button>
      {showContact ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-8 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none forms">
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
                  <p className="ml-2 text-xl text-center">Join our waitlist</p>
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
                  <p className="text-center font-bold">
                    We connect deers with lifelung wild-clees Communit to
                    <br />
                    advance discovery, and solve global intractable problems.
                  </p>
                  <div className="mt-8">
                    <div>
                      <label>
                        How would you like to use DoersCents?
                        <br />
                        <span className="italic">
                          This would assist us in undertandig your need
                        </span>
                      </label>
                      <Listbox
                        className="mb-4"
                        value={selected}
                        onChange={setSelected}
                      >
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
                      <label>
                        What is your email address?
                        <br />
                        <span className="italic">
                          We would send an invitè via your email
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="* Email Address"
                        onChange={changeEmail}
                        className="w-full px-4 py-2 mt-2 mb-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                      <label>
                        What is your phone number? (please add the coury code)
                        <br />
                        <span className="italic">
                          We will reach you via this number
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="* Phone Number"
                        onChange={changePhone}
                        className="w-full px-4 py-2 mt-2 mb-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />

                      <label>
                        What is your full name
                        <br />
                      </label>
                      <input
                        type="text"
                        placeholder="* Full Name"
                        onChange={changeName}
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
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
                      setFullName("");
                      setPhone("");
                      setEmail("");
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
