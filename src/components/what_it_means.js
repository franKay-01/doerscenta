import Doctor from '../assets/doctor.jpg'
import FemaleHacker from '../assets/female_hacker.jpg'
import World_2 from '../assets/world_2.jpeg'
import CoreValues from '../assets/core_values.gif'
import ContactCard from './contact_form'
import JoinFormCard from './join_form'
import GetEarlyAccess from './get_early_access'

export default function WhatItMeans() {
  return (
    <>
      <div className="container grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 padded">
        <div className="m-11">
          <h3 className="font-bold text-4xl">For Doers, it means…</h3>
          <h4 className="mt-4 text-2xl">the exposure, jobs, capital, mentorship, right sponsors, and talent you need are always within reach</h4>
          <GetEarlyAccess />
        </div>
        <div>
          <img className="rounded-lg what-it-means-img" src={Doctor} />
        </div>
      </div>
      <div className="container grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-4">
        <div>
          <img className="rounded-lg what-it-means-img" src={FemaleHacker} />
        </div>
        <div className="m-11">
          <h3 className="font-bold text-4xl">For Investors & Accelerators, it means…</h3>
          <h4 className="mt-4 text-2xl">you can get access to vetted and verified high-quality startups, unlock access to the right exposure, show off your key assets, investment portfolio and thematic areas.</h4>
          <GetEarlyAccess />
        </div>
      </div>
      <div className="container grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-4">
        <div className="m-11">
          <h3 className="font-bold text-4xl">For Partners, it means…</h3>
          <h4 className="mt-4 text-2xl">you can reach every doer who needs opportunity</h4>
          <GetEarlyAccess />
        </div>
        <div>
          <img className="rounded-lg what-it-means-img" src={World_2} />
        </div>
      </div>
      <div className="container">
        <h2 className="text-2xl mt-11">We envision a world where the most talented people have access to support network and resources, where innovation is the norm,
          and where doers actively lead the development of solutions. This is the opportunity in front of us!
        </h2>
        <h3 className="text-2xl mt-6">Welcome to DoersCenta, <span className="font-bold italic">the new frontier of empowering, supportive, and inclusive collaboration and growth...!</span></h3>
      </div>
      <div id="career" className="mx-auto bg-gray-200 rounded-xl shadow border p-8 mt-11">
        <div className="container">
          <p className="text-3xl text-gray-700 font-bold mb-5">
            Big challenges require big minds
          </p>
          <p className="text-xl">
            It’s still the beginning. We’re working hard to find new and better ways to help doers succeed, and we're
            looking for people like you with a global perspective, a deep interest in technology, innovation ecosystems,
            amorphous challenges, and an appetite for growth.
          </p>
          <JoinFormCard/>
        </div>

      </div>
      <div className="container grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-4 ">
        <div>
          <img className="rounded-lg" src={CoreValues} />
        </div>
        <div className="m-11">
          <h3 className="font-bold text-4xl">Our core values</h3>
          <div className="grid mt-6">
            <p className="mb-4">
              <span className="font-bold">Purposefulness:</span> We are designing intuitive, inclusive, impactful, and sustainable products for doers.
            </p>
            <p className="mb-4">
              <span className="font-bold">Pragmatism:</span> We are upending the status quo, while making sure our work benefits society.
            </p>
            <p className="mb-4">
              <span className="font-bold">Simplicity:</span> We are building tools that allow doers to focus on what really matters.
            </p>
            <p className="mb-4">
              <span className="font-bold">Team work:</span> We are reinventing “support networks” as a team and taking pride in our work.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}