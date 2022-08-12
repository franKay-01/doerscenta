import Frontier from '../assets/frontier.png'
import AfricanAmerican from '../assets/african_american.jpg'
import Scientist from '../assets/scientist.jpg'
import FemaleFreelancer from '../assets/female_freelance.jpg'
import JoinFormCard from './join_form'
import ContactCard from './contact_form'
export default function Banner() {

  return (
    <>
      <div className="grid grid-cols-1 mt-44 justify-between mt-48 mb-36">
        <div className="p-4 lg:px-28">
          <div className="flex flex-col align-item-start">
            <p className="text-4xl mt-6 lg:text-7xl text-black font-bold">Fueling amazing problem solvers.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <p className="text-black text-2xl mt-6 mb-8 lg:text-2xl lg:w-9/12 font-normal">
                We connect doers with a lifelong world-class community to advance discovery, and solve global intractable problems.
              </p>
            </div>

          </div>
          <div className="flex space-x-4">
            <JoinFormCard />
            <ContactCard />
          </div>
        </div>

      </div>
      <div class="grid grid-rows-4 grid-flow-col gap-4 max-height container">
        <div class="row-start-1 row-span-4 rounded-lg">
          <img alt="gallery" class="block object-cover object-fit w-full h-full rounded-lg first-img-width"
            src={Frontier} />
        </div>
        <div class="row-start-2 row-span-2 text-white rounded-lg">
          <img alt="gallery" class="block object-cover object-center h-full max-width-img rounded-lg"
            src={AfricanAmerican} />
        </div>
        <div class="row-start-1 row-span-2 rounded-lg">
          <img alt="gallery" class="block object-fill w-full h-full rounded-lg"
            src={Scientist} />
        </div>
        <div class="row-start-2 row-span-4 rounded-lg">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg last-img-width"
            src={FemaleFreelancer} />
        </div>
      </div>
    </>
  )
}