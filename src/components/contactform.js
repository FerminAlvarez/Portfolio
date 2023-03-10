import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
export default function ContactForm() {
  const form = useRef();
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jsto2rg",
        "template_hddpjr8",
        form.current,
        "sMiXc_NSgDt7cjlzF"
      )
      .then((mensaje) => {
        console.log(mensaje);
        setMessage("¡Correo enviado correctamente!");
      });
  };
  return (
    <div className="flex flex-col justify-between lg:mr-24">
      <div>
        <h2 className="text-4xl lg:text-3xl font-bold leading-tight">
          Me alegra que te hayas interesado por mí. ¡Puedes escribirme!
        </h2>
      </div>
      <div className="mt-2">
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <span className="uppercase text-sm text-gray-600 font-bold">
              Nombre y Apellido
            </span>
            <input
              className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name="from_name"
              placeholder="Ingrese su nombre y apellido"
              minlength="2"
              required
            />
          </div>
          <div className="mt-2">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Email
            </span>
            <input
              className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              name="from_email"
              placeholder="Ingrese su email"
            />
          </div>
          <div className="mt-2">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Mensaje
            </span>
            <textarea
              className="w-full h-32 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              placeholder="Ingrese su propuesta :)"
              name="message"
              minlength="5"
              required
            ></textarea>
          </div>
          <div className="mt-2">
            <input
              className="uppercase text-sm font-bold tracking-wide p-3 rounded-lg w-full focus:outline-none focus:shadow-outline btn btn-primary bg-primary text-black border-primary hover:bg-primary hover:text-black hover:border-primary transform transition duration-300 hover:scale-105"
              type="submit"
              value="Enviar Correo"
            />
          </div>
          <div className="mt-2 ">
            <p className="text-sm text-gray-600 font-bold">
              {message}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
