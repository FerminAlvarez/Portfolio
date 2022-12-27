import { GrValidate } from "react-icons/gr";
export default function ExtrasCard() {
  return (
    <div className="bg-primary text-primary-content rounded-xl px-16 py-6 whitespace-nowrap drop-shadow-2xl">
      <h1 className="text-3xl font-bold title-hero text-white my-10 justify-center">
        Extras
      </h1>
      <div className="stats flex-col bg-primary text-primary-content grid-flow-row xl:grid-flow-col">
        <div className="stat flex-col justify-center align-middle space-y-4">
          <div className="title-hero text-xl flex space-x-1 fill-white ">
            <GrValidate/>
            <p>MySQL</p>
          </div>
          <div className="title-hero text-xl flex space-x-1 fill-white">
            <GrValidate/>
            <p>PostgreSQL</p>
          </div>
          <div className="title-hero text-xl flex space-x-1 fill-white">
            <GrValidate/>
            <p>NoSQL</p>
          </div>
          <div className="title-hero text-xl flex space-x-1 fill-white">
            <GrValidate/>
            <p>GraphQL</p>
          </div>
        </div>

        <div className="stat flex-col justify-center align-middle space-y-4">
          <div className="title-hero text-xl flex space-x-1 fill-white">
            <GrValidate/>
            <p>API REST</p>
          </div>
          <div className="title-hero text-xl flex space-x-1 fill-white">
            <GrValidate/>
            <p>Sequelize - Eloquent - Hibernate</p>
          </div>
          <div className="title-hero text-xl flex space-x-1 fill-white">
            <GrValidate/>
            <p>Swagger</p>
          </div>
          <div className="title-hero text-xl flex space-x-1 fill-white">
            <GrValidate/>
            <p>Clean Code - Clean Architecture</p>
          </div>
        </div>

        <div className="stat flex-col justify-center align-middle space-y-4">
          <div className="title-hero text-xl flex space-x-1 fill-white">
            <GrValidate/>
            <p>Micro-Frontends</p>
          </div>
          <div className="title-hero text-xl flex space-x-1 fill-white">
            <GrValidate/>
            <p>Micro-Servicios</p>
          </div>
          <div className="title-hero text-xl flex space-x-1 fill-white">
            <GrValidate/>
            <p>Docker</p>
          </div>
          <div className="title-hero text-xl flex space-x-1 fill-white">
            <GrValidate/>
            <p>RabbitMQ</p>
          </div>
          <div className="title-hero text-xl flex space-x-1 fill-white">
            <GrValidate/>
            <p>Serverless</p>
          </div>
          <div className="title-hero text-xl flex space-x-1 fill-white">
            <GrValidate/>
            <p>Entrega e Integración Continua</p>
          </div>
        </div>
      </div>
    </div>
  );
}
