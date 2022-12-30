export default function ContactForm() {
  return (
    <div className="flex flex-col justify-between lg:mr-24">
      <div>
        <h2 className="text-4xl lg:text-3xl font-bold leading-tight dark:text-white">
          Me alegra que te hayas interesado por mí. ¡Puedes escribirme!
        </h2>
      </div>
      <div className="mt-2">
        <form action="mailto:ferminalvarez.dev@gmail.com" method="post" encType="text/plain">
          <div>
            <span className="uppercase text-sm text-gray-600 font-bold dark:text-base-content">
              Nombre y Apellido
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              placeholder="Ingrese su nombre y apellido"
            />
          </div>
          <div className="mt-2">
            <span className="uppercase text-sm text-gray-600 font-bold dark:text-base-content">
              Email
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name="mail"
              placeholder="Ingrese su email"
            />
          </div>
          <div className="mt-2">
            <span className="uppercase text-sm text-gray-600 font-bold dark:text-base-content">
              Mensaje
            </span>
            <textarea
              className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              placeholder="Ingrese su propuesta :)"
              name="comment"
            ></textarea>
          </div>
          <div className="mt-2">
            <button className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Enviar correo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
