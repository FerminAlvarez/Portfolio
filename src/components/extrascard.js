import { GrValidate } from "react-icons/gr";
export default function ExtrasCard() {
  return (
    <div className="bg-primary text-primary-content rounded-xl px-16 py-6 whitespace-nowrap drop-shadow-2xl">
      <h1 className="text-3xl font-bold title-hero text-white my-10 justify-center">
        Extras
      </h1>
      <div className="stats flex-col bg-primary text-primary-content grid-flow-row xl:grid-flow-col">
        <div className="stat flex-col justify-center align-middle space-y-4">
          <div className="title-hero text-xl flex space-x-1">
            <GrValidate fill="white" />
            <p>MySQL</p>
          </div>
          <div className="title-hero text-xl flex space-x-1">
            <GrValidate fill="white" />
            <p>PostgreSQL</p>
          </div>
          <div className="title-hero text-xl flex space-x-1">
            <GrValidate fill="white" />
            <p>NoSQL</p>
          </div>
          <div className="title-hero text-xl flex space-x-1">
            <GrValidate fill="white" />
            <p>GraphQL</p>
          </div>
        </div>

        <div className="stat flex-col justify-center align-middle space-y-4">
          <div className="title-hero text-xl flex space-x-1">
            <GrValidate fill="white" />
            <p>API REST</p>
          </div>
          <div className="title-hero text-xl flex space-x-1">
            <GrValidate fill="white" />
            <p>Sequelize - Eloquent - Hibernate</p>
          </div>
          <div className="title-hero text-xl flex space-x-1">
            <GrValidate fill="white" />
            <p>Swagger</p>
          </div>
          <div className="title-hero text-xl flex space-x-1">
            <GrValidate fill="white" />
            <p>Clean Code - Clean Architecture</p>
          </div>
        </div>

        <div className="stat flex-col justify-center align-middle space-y-4">
          <div className="title-hero text-xl flex space-x-1">
            <GrValidate fill="white" />
            <p>Micro-Frontends</p>
          </div>
          <div className="title-hero text-xl flex space-x-1">
            <GrValidate fill="white" />
            <p>Micro-Servicios</p>
          </div>
          <div className="title-hero text-xl flex space-x-1">
            <GrValidate fill="white" />
            <p>Docker</p>
          </div>
          <div className="title-hero text-xl flex space-x-1">
            <GrValidate fill="white" />
            <p>RabbitMQ</p>
          </div>
          <div className="title-hero text-xl flex space-x-1">
            <GrValidate fill="white" />
            <p>Serverless</p>
          </div>
          <div className="title-hero text-xl flex space-x-1">
            <GrValidate fill="white" />
            <p>Entrega e Integración Continua</p>
          </div>
        </div>
      </div>
    </div>
  );
}
