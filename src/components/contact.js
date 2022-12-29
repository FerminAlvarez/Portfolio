import ContactForm from "./contactform";
import { RiMailSendLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
export default function Contact() {
  return (
    <div className="flex w-full max-w-screen-xl mt-24 px-8 flex flex-cols md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 dark:bg-gray-700 text-gray-900 rounded-lg shadow-lg h-max my-20">
      <ContactForm />
      <div className="divider divider-horizontal"></div>
      <div className="grid content-around justify-center ml-24">
        <a className="flex flex-cols justify-center place-items-center h-20 w-72 card bg-gray-300 rounded-box px-10 py-20 align-middle my-3 transform transition duration-300 hover:scale-105" href="mailto: ferminalvarez.dev@gmail.com">
          <div className="top-2">
            <RiMailSendLine size={25} />
          </div>
          Email
          <p>ferminalvarez.dev@gmail.com</p>
        </a>

        <a className="flex flex-cols justify-center place-items-center h-20 w-72 card bg-gray-300 rounded-box px-10 py-20 align-middle my-3 transform transition duration-300 hover:scale-105" href="https://wa.me/542392409943">
          <div className="top-2">
            <BsWhatsapp size={25} />
          </div>
          <p>Whatsapp</p>
          <p>+54 2392409943</p>
        </a>
      </div>
    </div>
  );
}
