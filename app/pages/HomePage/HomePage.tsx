import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [show, setShow] = useState(false);
  useEffect(
    () =>
      window.addEventListener("scroll", () => setShow(window.scrollY > 100)),
    []
  );

  return (
    <>
      <header className="py-2 shadow-md" id="inicio">
        <div className="container mx-auto px-2.5 md:flex md:items-center md:justify-between md:px-5">
          <a className="flex flex-row items-center justify-center gap-3">
            <img
              src="gympage-icon.svg"
              alt="Logo de Gympage"
              className="w-14 "
            />
            <h2 className="text-2xl font-bold text-gray-700">Gympage</h2>
          </a>
          <nav className="my-4 flex justify-center gap-2 md:my-0">
            <a
              href=""
              className="rounded-lg border-2 border-transparent px-4 py-2 font-semibold transition-all duration-200 hover:border-purple-300 hover:bg-purple-100"
            >
              Inicio
            </a>
            <a
              href="#seccion-precios"
              className="rounded-lg border-2 border-transparent px-4 py-2 font-semibold transition-all duration-200 hover:border-purple-300 hover:bg-purple-100"
            >
              Suscripción
            </a>
            <a
              href=""
              className="rounded-lg border-2 border-transparent px-4 py-2 font-semibold transition-all duration-200 hover:border-purple-300 hover:bg-purple-100"
            >
              Clases
            </a>
            <a
              href=""
              className="rounded-lg border-2 border-transparent px-4 py-2 font-semibold transition-all duration-200 hover:border-purple-300 hover:bg-purple-100"
            >
              Blog
            </a>
          </nav>
          <div className="my-4 flex justify-center md:my-0">
            <a
              href=""
              className="rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-purple-700"
            >
              Contacto
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-2.5">
        {/* Hero */}
        <section className="py-10 lg:grid lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left">
            <p className="rounded-lg border-2 border-purple-400 bg-purple-100 px-3 py-1 flex ">
              <i className="text-purple-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.08 13.63 12 11.44 10.92 13.63 8.5 13.98 10.25 15.69 9.84 18.1 12 16.96 14.16 18.1 13.75 15.69 15.5 13.98 13.08 13.63z"></path>
                  <path d="m17,2H7c-.55,0-1,.45-1,1v8.41c-.63,1.05-1,2.28-1,3.59,0,3.86,3.14,7,7,7s7-3.14,7-7c0-1.31-.37-2.54-1-3.59V3c0-.55-.45-1-1-1Zm-1,7.26c-.88-.61-1.9-1.02-3-1.18v-4.08h3v5.26Zm-5-5.26v4.08c-1.1.16-2.12.57-3,1.18v-5.26h3Zm1,16c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5Z"></path>
                </svg>
              </i>
              Transforma tu vida
            </p>
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="my-5 text-3xl font-bold text-purple-950 lg:text-5xl"
            >
              Con Gympage, el gimnasio que se adapta a ti
            </motion.h1>
            <p className="text-purple-900 lg:text-xl lg:max-w-4xl">
              Únete a nuestra comunidad y descubre un nuevo enfoque para
              alcanzar tus metas de fitness.
            </p>
            <div className="mt-5 grid w-full gap-2 lg:flex">
              <a
                href=""
                className="rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-purple-700"
              >
                Comienza ahora
              </a>
              <a
                href=""
                className="px-6 py-3 rounded-lg border-2 border-purple-300 text-purple-600 font-semibold hover:bg-purple-100 transition-all duration-200"
              >
                Consigue un demo
              </a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-7"
          >
            <img 
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Imagen de Hero"
              className="w-full rounded-xl"
            />
          </motion.div>
        </section>
        {/* Sección "Nuestra Misión" */}
        <section className="py-10">
          {/* Seccion de Transformar vidas */}
          <header className="mb-10 flex flex-col items-center gap-3 text-center">
            <p className="rounded-lg border-2 border-purple-400 bg-purple-100 px-3 py-1 flex ">
              <svg
                className="fill-purple-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M5 15.64c2-.87 4.28-.76 6.18.33 1.37.78 2.89 1.18 4.42 1.18 1.12 0 2.24-.21 3.32-.64l1.45-.58A1 1 0 0 0 21 15V4c0-.33-.17-.64-.44-.83a1 1 0 0 0-.93-.1l-1.45.58c-1.97.79-4.16.63-6-.42A8.9 8.9 0 0 0 3.77 3l-.21.1a1 1 0 0 0-.55.89v18h2v-6.36Z"></path>
              </svg>
              Nuestra Misión
            </p>
            <h2 className="my-5 text-3xl font-bold text-purple-900 lg:max-w-4xl lg:text-5xl">
              Transformar vidas a través del fitness
            </h2>
            <p className="text-purple-800 lg:max-w-4xl lg:text-lg">
              En Gympage, nuestra misión es empoderar a las personas para que
              alcancen su máximo potencial físico y mental.
            </p>
          </header>

          {/* Seccion Cards */}
          <div className="grid gap-5 rounded-2xl border-4 border-purple-100 p-5 md:grid-cols-2 lg:grid-cols-3 xl:p-10">
            {/* CARD 1 */}
            <div className="grid grid-cols-2 gap-5 rounded-2xl border-2 border-purple-200 p-5 lg:p-10">
              <p className="justify-self-start rounded-lg bg-purple-700 p-2 px-2.5 text-2xl text-white flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 5c1.73 0 3 1.27 3 3s-1.27 3-3 3-3-1.27-3-3 1.27-3 3-3m0 13a7.98 7.98 0 0 1-5.48-2.18C7.33 16.16 9.03 15 11 15h2c1.97 0 3.66 1.16 4.47 2.82A7.94 7.94 0 0 1 12 20"></path>
                </svg>
              </p>
              <a
                className="flex gap-2 items-center rounded-lg border-2 border-purple-300
               px-3 py-2 hover:bg-purple-100"
                href=""
              >
                <svg
                  className="fill-purple-600 text-2xl"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m4 13h-2v-3.59L9.71 15.7 8.3 14.29 12.59 10H9V8h7z"></path>
                </svg>
                Leer Más
              </a>
              <h3 className="col-span-2 text-xl font-semibold">
                Comunidad Inclusiva
              </h3>
              <p className="col-span-2 text-sm text-purple-800">
                En Gympage, creemos que la comunidad es la clave para el éxito
                en el fitness. Nos esforzamos por crear un ambiente inclusivo y
                motivador.
              </p>
            </div>
            {/* CARD 2 */}
            <div className="grid grid-cols-2 gap-5 rounded-2xl border-2 border-purple-200 p-5 lg:p-10">
              <p className="flex items-center justify-center justify-self-start rounded-lg bg-purple-700 p-2 px-2.5 text-2xl text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 8A7 7 0 1 0 12 22 7 7 0 1 0 12 8z"></path>
                  <path d="m6,3v6.73c1.26-1.43,3.02-2.41,5-2.66V2h-4c-.55,0-1,.45-1,1Z"></path>
                  <path d="m13,2v5.07c1.98.25,3.74,1.23,5,2.66V3c0-.55-.45-1-1-1h-4Z"></path>
                </svg>
              </p>
              <a
                className="flex gap-2 items-center rounded-lg border-2 border-purple-300
               px-3 py-2 hover:bg-purple-100"
                href=""
              >
                <svg
                  className="fill-purple-600 text-2xl"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m4 13h-2v-3.59L9.71 15.7 8.3 14.29 12.59 10H9V8h7z"></path>
                </svg>
                Leer Más
              </a>
              <h3 className="col-span-2 text-xl font-semibold">
                Entrenadores Expertos
              </h3>
              <p className="col-span-2 text-sm text-purple-800">
                Nuestro equipo de entrenadores altamente capacitados está aquí
                para guiarte en cada paso de tu viaje de fitness.
                <br />
                <br />
              </p>
            </div>

            {/* CARD 3 */}
            <div className="grid grid-cols-2 gap-5 rounded-2xl border-2 border-purple-200 p-5 lg:p-10">
              <p className="flex items-center justify-center justify-self-start rounded-lg bg-purple-700 p-2 px-2.5 text-2xl text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 19.66V21c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1.34c3.1-1.78 5-5.05 5-8.66 0-.55-.45-1-1-1a3.58 3.58 0 0 0-1.8-2.99c-.24-1.77-1.78-3.13-3.63-3.13-.34 0-.68.05-1.01.14-.68-.65-1.58-1.01-2.54-1.01s-1.87.37-2.54 1.01c-.33-.09-.67-.14-1.01-.14H8.4c-1.82.04-3.32 1.39-3.56 3.13A3.59 3.59 0 0 0 3.04 10c-.55 0-1 .45-1 1 0 3.61 1.9 6.87 5 8.66ZM6.11 8.61l.83-.25-.16-.85c0-.88.73-1.6 1.63-1.62.95.02 1.72.79 1.72 1.75h2c0-.93-.35-1.77-.92-2.43.24-.13.51-.2.79-.2.57 0 1.1.28 1.42.76l.51.77.81-.44c.25-.14.53-.21.83-.21.92 0 1.67.73 1.67 1.6l-.16.85.82.28c.62.21 1.03.76 1.09 1.39H5.02c.05-.63.47-1.19 1.09-1.39Z"></path>
                </svg>
              </p>
              <a
                className="flex gap-2 items-center rounded-lg border-2 border-purple-300
               px-3 py-2 hover:bg-purple-100"
                href=""
              >
                <svg
                  className="fill-purple-600 text-2xl"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m4 13h-2v-3.59L9.71 15.7 8.3 14.29 12.59 10H9V8h7z"></path>
                </svg>
                Leer Más
              </a>
              <h3 className="col-span-2 text-xl font-semibold">
                Apoyo Nutricional
              </h3>
              <p className="col-span-2 text-sm text-purple-800">
                La nutrición es una parte fundamental de cualquier programa de
                fitness. En Gympage, ofrecemos asesoramiento nutricional.
              </p>
            </div>
          </div>
        </section>
        {/* Nuestros Valores */}
        <section className="py-10">
          <header className="mb-10 flex flex-col items-center gap-3 text-center">
            <p className="rounded-lg border-2 border-purple-400 bg-purple-100 px-3 py-1 flex gap-2">
              <svg
                className="fill-purple-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.01c2.76 0 5.01-2.25 5.01-5.01S14.76 6.99 12 6.99 6.99 9.24 6.99 12s2.25 5.01 5.01 5.01M12 9c1.66 0 3.01 1.35 3.01 3.01s-1.35 3.01-3.01 3.01-3.01-1.35-3.01-3.01S10.34 9 12 9M13 19h-2v3h2v-3M13 2h-2v3h2V2M2 11h3v2H2zM19 11h3v2h-3zM4.22 18.36l.71.71.71.71 1.06-1.06 1.06-1.06-.71-.71-.71-.71-1.06 1.06zM19.78 5.64l-.71-.71-.71-.71-1.06 1.06-1.06 1.06.71.71.71.71 1.06-1.06zM7.76 6.34 6.7 5.28 5.64 4.22l-.71.71-.71.71L5.28 6.7l1.06 1.06.71-.71zM16.24 17.66l1.06 1.06 1.06 1.06.71-.71.71-.71-1.06-1.06-1.06-1.06-.71.71z"></path>
              </svg>
              Nuestros Valores
            </p>
            <h2 className="my-5 text-3xl font-bold text-purple-900 lg:max-w-4xl lg:text-5xl">
              Comprometidos con la excelencia y la comunidad
            </h2>
            <p className="text-purple-900 lg:text-xl lg:max-w-4xl">
              En Gympage, nuestros valores son la base de todo lo que hacemos.
              Nos comprometemos a brindar un servicio excepcional.
            </p>
          </header>

          <div className="grid gap-5 rounded-2xl border-4 border-purple-100 p-5 md:grid-cols-2 lg:grid-cols-3 xl:p-10">
            <div className="flex flex-col items-center rounded-2xl rounded-2 border-purple-200 p-5 text-center lg:p-10">
              <img className="w-full" src="images/image.png" alt="" />
              <p className="-mt-7 inline-flex size-12 items-center justify-center rounded-full bg-purple-700 p-2 px-3.5 text-xl lg:-mt-5 text-white 2xl:-mt-10">
                <svg
                  className="fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.988.988 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path>
                </svg>
              </p>
              <h3 className="mt-5 mb-2.5 text-xl font-semibold ">Pasión</h3>
              <p className="text-sm text-purple-800">
                Nos apasiona el fitness y estamos dedicados a ayudar a nuestros
                miembros a alcanzar sus metas.
              </p>
              <a
                className="mt-5 inline-flex w-full items-center justify-center
                             gap-1 rounded-lg bg-purple-600 px-3 font-semibold text-white
                             transition-all duration-200 hover:bg-purple-700
                             py-2
                             "
                href=""
              >
                Leer Más
                <svg
                  className="fill-white lg:size-7 size-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 13h6v4l6-5-6-5v4H6z"></path>
                </svg>
              </a>
            </div>
            <div className="flex flex-col items-center rounded-2xl rounded-2 border-purple-200 p-5 text-center lg:p-10">
              <img className="w-full" src="images/image.png" alt="" />
              <p className="-mt-7 inline-flex size-12 items-center justify-center rounded-full bg-purple-700 p-2 px-3.5 text-xl text-white 2xl:-mt-10 lg:-mt-5">
                <svg
                  className="fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.29 20.69c.2.2.45.29.71.29s.51-.1.71-.29l7.5-7.5c2.35-2.35 2.35-6.05 0-8.41-2.29-2.29-5.84-2.35-8.21-.2-2.36-2.15-5.91-2.09-8.21.2-2.35 2.36-2.35 6.06 0 8.41z"></path>
                </svg>
              </p>
              <h3 className="mt-5 mb-2.5 text-xl font-semibold ">Compasión</h3>
              <p className="text-sm text-purple-800">
                Nos preocupamos por el bienestar de nuestros miembros y nos
                esforzamos por crear un ambiente acogedor.
              </p>
              <a
                className="mt-5 inline-flex w-full items-center justify-center
                             gap-1 rounded-lg bg-purple-600 px-3 font-semibold text-white
                             transition-all duration-200 hover:bg-purple-700
                             py-2
                             "
                href=""
              >
                Leer Más
                <svg
                  className="fill-white lg:size-7 size-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 13h6v4l6-5-6-5v4H6z"></path>
                </svg>
              </a>
            </div>
            <div className="flex flex-col items-center rounded-2xl rounded-2 border-purple-200 p-5 text-center lg:p-10">
              <img className="w-full" src="images/image.png" alt="" />
              <p className="-mt-7 inline-flex size-12 items-center justify-center rounded-full bg-purple-700 p-2 px-3.5 text-xl text-white 2xl:-mt-10 lg:-mt-5">
                <svg
                  className="fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="m20.42 6.11-7.97-4c-.28-.14-.62-.14-.9 0l-7.97 4c-.31.15-.51.45-.55.79-.01.11-.96 10.77 8.55 15.01a.98.98 0 0 0 .82 0C21.91 17.66 20.97 7 20.95 6.9a.98.98 0 0 0-.55-.79Z"></path>
                </svg>
              </p>
              <h3 className="mt-5 mb-2.5 text-xl font-semibold ">Integridad</h3>
              <p className="text-sm text-purple-800">
                Actuamos con honestidad y transparencia en todo lo que hacemos.
                Valoramos la confianza de nuestros miembros.
              </p>
              <a
                className="mt-5 inline-flex w-full items-center justify-center
                             gap-1 rounded-lg bg-purple-600 px-3 font-semibold text-white
                             transition-all duration-200 hover:bg-purple-700
                             py-2
                             "
                href=""
              >
                Leer Más
                <svg
                  className="fill-white lg:size-7 size-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 13h6v4l6-5-6-5v4H6z"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>
        {/* Sección Nuestros Precios */}
        <section className="py-10" id="seccion-precios">
          <header className="mb-10 flex flex-col items-center gap-3 text-center">
            <p className="flex gap-2 rounded-lg border-2 border-purple-400 bg-purple-100 px-3 py-1 lg:text-lg">
              <svg
                className="fill-purple-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"></path>
                <path d="M12 11c-2 0-2-.63-2-1 0-.48.7-1 2-1 1.18 0 1.39.64 1.4 1.02l1-.02h1c0-1.03-.67-2.47-2.4-2.88V6h-2v1.09C9.03 7.42 8 8.72 8 10c0 1.12.52 3 4 3 2 0 2 .68 2 1 0 .42-.62 1-2 1-1.84 0-1.99-.86-2-1H8c0 .92.66 2.55 3 2.92V18h2v-1.09c1.97-.33 3-1.63 3-2.91 0-1.12-.52-3-4-3"></path>
              </svg>
              Nuestros Precios
            </p>
            <h2 className="my-5 text-3xl font-bold text-purple-950 lg:max-w-4xl lg:text-5xl">
              Planes flexibles para todos
            </h2>
            <p className="text-purple-900 lg:max-w-4xl lg:text-xl">
              Elige el plan que mejor se adapte a tus necesidades y objetivos.
              Ofrecemos opciones mensuales y anuales con descuentos exclusivos.
            </p>
          </header>

          {/* Sección Selector de Planes */}
          <div className="flex flex-wrap justify-center gap-3 border-4 border-purple-200 rounded-2xl p-10 xl:p-20">
            <input
              id="m"
              className="peer/m hidden "
              type="radio"
              name="status"
              defaultChecked
            />
            <label
              htmlFor="m"
              className="inline-block cursor-pointer rounded-2xl border-2 border-purple-300 px-5 py-3
                   peer-checked/m:bg-purple-700 peer-checked/m:text-white hover:opacity-85 font-semibold"
            >
              Mensual
            </label>
            <input
              id="y"
              className="peer/y hidden "
              type="radio"
              name="status"
            />
            <label
              htmlFor="y"
              className="inline-block cursor-pointer rounded-2xl border-2 border-purple-300 px-5 py-3
                   peer-checked/y:bg-purple-700 peer-checked/y:text-white hover:opacity-85 font-semibold"
            >
              Anual
            </label>

            <hr className="w-full border-2 border-purple-200" />

            {/* Planes Mensuales */}
            <div className="hidden peer-checked/m:flex mt-10 w-full flex-wrap gap-5">
              {/* Plan Básico Mensual */}
              <div className="flex w-full md:flex-1 flex-col rounded-2xl border-2 border-purple-200 p-5 xl:p-10">
                <h3 className="mt-3 flex items-center gap-3 text-xl font-semibold">
                  <span className="rounded-xl bg-purple-700 p-2 px-3.5 text-2xl">
                    <svg
                      className="fill-white"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      transform=""
                      id="injected-svg"
                    >
                      <path d="M12 2a5 5 0 1 0 0 10 5 5 0 1 0 0-10M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1"></path>
                    </svg>
                  </span>
                  Suscripción Básica
                </h3>
                <p className="mt-5 text-4xl font-bold text-purple-800">
                  $20.00/mes
                </p>
                <p className="mt-4 text-shadow-purple-900">
                  Opción ideal para quienes buscan un entrenamiento básico y
                </p>
                <ul className="mt-4 text-sm text-purple-800">
                  <li>✔ Acceso al gimnasio</li>
                  <li>✔ Uso de máquinas</li>
                  <li>✔ Locker personal</li>
                </ul>
                <a
                  className="px-6 py-3 rounded-lg border-2 border-purple-300
                               text-purple-600 font-semibold hover:bg-purple-100
                               transition-all duration-200 mt-5 md:mt-auto text-center"
                  href=""
                >
                  Suscribirse
                </a>
              </div>

              {/* Plan Premium mensual (Destacado) */}
              <div className="relative flex w-full md:flex-1 flex-col rounded-2xl border-4 border-purple-500 bg-purple-100 p-5 xl:p-10">
                <span className="absolute -top-4 rounded-full bg-purple-700 px-4 py-1 text-sm text-white">
                  Más Popular
                </span>
                <h3 className="mt-3 flex items-center gap-3 text-xl font-semibold">
                  <span className="rounded-xl bg-purple-700 p-2 px-3.5 text-2xl">
                    <svg
                      className="fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.33 3.06a1 1 0 0 0-1.11.32L16 7.4l-3.22-4.02c-.38-.47-1.18-.47-1.56 0L8 7.4 4.78 3.38c-.27-.33-.71-.46-1.11-.32S3 3.58 3 4v11h18V4c0-.42-.27-.8-.67-.94M3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2H3z"></path>
                    </svg>
                  </span>
                  Suscripción Premium
                </h3>
                <p className="mt-5 text-4xl font-bold text-purple-800">
                  $40.00/mes
                </p>
                <p className="mt-4 text-shadow-purple-900">
                  Perfecto para quienes buscan más opciones y clases grupales.
                </p>
                <ul className="mt-4 text-sm text-purple-800">
                  <li>✔ Acceso al gimnasio</li>
                  <li>✔ Clases grupales</li>
                  <li>✔ Locker personal</li>
                  <li>✔ Acceso a áreas exclusivas</li>
                </ul>
                <a
                  className="mt-5 inline-block w-full gap-1 rounded-lg bg-purple-600
                               px-6 py-3 text-center font-semibold text-white transition-all
                               duration-200 hover:bg-purple-700"
                  href=""
                >
                  Suscribirse
                </a>
              </div>

              {/* Plan Elite Mensual*/}
              <div className="flex w-full md:flex-1 flex-col rounded-2xl border-2 border-purple-200 p-5 xl:p-10">
                <h3 className="mt-3 flex items-center gap-3 text-xl font-semibold">
                  <span className="rounded-xl bg-purple-700 p-2 px-3.5 text-2xl">
                    <svg
                      className="fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="m12,22c3.86,0,7-3.14,7-7s-3.14-7-7-7-7,3.14-7,7,3.14,7,7,7Zm-1.08-8.37l1.08-2.19,1.08,2.19,2.42.35-1.75,1.71.41,2.41-2.16-1.14-2.16,1.14.41-2.41-1.75-1.71,2.42-.35Z"></path>
                      <path d="m11,2h-4c-.55,0-1,.45-1,1v6.73c1.26-1.43,3.02-2.41,5-2.66V2Z"></path>
                      <path d="m18,9.73V3c0-.55-.45-1-1-1h-4v5.07c1.98.25,3.74,1.23,5,2.66Z"></path>
                    </svg>
                  </span>
                  Suscripción Elite
                </h3>
                <p className="mt-5 text-4xl font-bold text-purple-800">
                  $60.00/mes
                </p>
                <p className="mt-4 text-shadow-purple-900">
                  Ideal para quienes buscan un entrenamiento personalizado y
                  completo.
                </p>
                <ul className="mt-4 text-sm text-purple-800">
                  <li>✔ Acceso total</li>
                  <li>✔ Entrenador personal</li>
                  <li>✔ Clases grupales</li>
                  <li>✔ Evaluaciones mensuales</li>
                </ul>
                <a
                  className="px-6 py-3 rounded-lg border-2 border-purple-300
                               text-purple-600 font-semibold hover:bg-purple-100
                               transition-all duration-200 mt-5 md:mt-auto text-center"
                  href=""
                >
                  Suscribirse
                </a>
              </div>
            </div>

            {/* Planes Anuales */}
            <div className="hidden peer-checked/y:flex mt-10 w-full flex-wrap gap-5">
              {/* Plan Básico Anual */}
              <div className="flex w-full md:flex-1 flex-col rounded-2xl border-2 border-purple-200 p-5 xl:p-10">
                <h3 className="mt-3 flex items-center gap-3 text-xl font-semibold">
                  <span className="rounded-xl bg-purple-700 p-2 px-3.5 text-2xl">
                    <svg
                      className="fill-white"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      transform=""
                      id="injected-svg"
                    >
                      <path d="M12 2a5 5 0 1 0 0 10 5 5 0 1 0 0-10M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1"></path>
                    </svg>
                  </span>
                  Suscripción Básica
                </h3>
                <p className="mt-5 text-4xl font-bold text-purple-800">
                  $180.00/año
                </p>
                <p className="mt-2 text-sm text-purple-900">
                  (25% de descuento aplicado)
                </p>
                <p className="mt-4 text-shadow-purple-900">
                  Opción ideal para quienes buscan un entrenamiento básico y
                  accesible.
                </p>
                <ul className="mt-4 text-sm text-purple-800">
                  <li>✔ Acceso al gimnasio</li>
                  <li>✔ Uso de máquinas</li>
                  <li>✔ Locker personal</li>
                </ul>
                <a
                  className="px-6 py-3 rounded-lg border-2 border-purple-300
                               text-purple-600 font-semibold hover:bg-purple-100
                               transition-all duration-200 mt-5 md:mt-auto text-center"
                  href=""
                >
                  Suscribirse
                </a>
              </div>

              {/* Plan Premium Anual (Más popular) */}
              <div className="relative flex w-full md:flex-1 flex-col rounded-2xl border-4 border-purple-500 bg-purple-100 p-5 xl:p-10">
                <span className="absolute -top-4 rounded-full bg-purple-700 px-4 py-1 text-sm text-white">
                  Más Popular
                </span>
                <h3 className="mt-3 flex items-center gap-3 text-xl font-semibold">
                  <span className="rounded-xl bg-purple-700 p-2 px-3.5 text-2xl">
                    <svg
                      className="fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.33 3.06a1 1 0 0 0-1.11.32L16 7.4l-3.22-4.02c-.38-.47-1.18-.47-1.56 0L8 7.4 4.78 3.38c-.27-.33-.71-.46-1.11-.32S3 3.58 3 4v11h18V4c0-.42-.27-.8-.67-.94M3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2H3z"></path>
                    </svg>
                  </span>
                  Suscripción Premium
                </h3>
                <p className="mt-5 text-4xl font-bold text-purple-800">
                  $360.00/año
                </p>
                <p className="mt-2 text-sm text-purple-900">
                  (25% de descuento aplicado)
                </p>
                <p className="mt-4 text-shadow-purple-900">
                  Perfecto para quienes buscan más opciones y clases grupales.
                </p>
                <ul className="mt-4 text-sm text-purple-800">
                  <li>✔ Acceso al gimnasio</li>
                  <li>✔ Clases grupales</li>
                  <li>✔ Locker personal</li>
                  <li>✔ Acceso a áreas exclusivas</li>
                </ul>
                <a
                  className="mt-5 inline-block w-full gap-1 rounded-lg bg-purple-600
                               px-6 py-3 text-center font-semibold text-white transition-all
                               duration-200 hover:bg-purple-700"
                  href=""
                >
                  Suscribirse
                </a>
              </div>

              {/* Plan Elite */}
              <div className="flex w-full md:flex-1 flex-col rounded-2xl border-2 border-purple-200 p-5 xl:p-10">
                <h3 className="mt-3 flex items-center gap-3 text-xl font-semibold">
                  <span className="rounded-xl bg-purple-700 p-2 px-3.5 text-2xl">
                    <svg
                      className="fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="m12,22c3.86,0,7-3.14,7-7s-3.14-7-7-7-7,3.14-7,7,3.14,7,7,7Zm-1.08-8.37l1.08-2.19,1.08,2.19,2.42.35-1.75,1.71.41,2.41-2.16-1.14-2.16,1.14.41-2.41-1.75-1.71,2.42-.35Z"></path>
                      <path d="m11,2h-4c-.55,0-1,.45-1,1v6.73c1.26-1.43,3.02-2.41,5-2.66V2Z"></path>
                      <path d="m18,9.73V3c0-.55-.45-1-1-1h-4v5.07c1.98.25,3.74,1.23,5,2.66Z"></path>
                    </svg>
                  </span>
                  Suscripción Elite
                </h3>
                <p className="mt-5 text-4xl font-bold text-purple-800">
                  $540.00/año
                </p>
                <p className="mt-2 text-sm text-purple-900">
                  (25% de descuento aplicado)
                </p>
                <p className="mt-4 text-shadow-purple-900">
                  Ideal para quienes buscan un entrenamiento personalizado y
                  completo.
                </p>
                <ul className="mt-4 text-sm text-purple-800">
                  <li>✔ Acceso total</li>
                  <li>✔ Entrenador personal</li>
                  <li>✔ Clases grupales</li>
                  <li>✔ Evaluaciones mensuales</li>
                </ul>

                <a
                  className="px-6 py-3 rounded-lg border-2 border-purple-300
                               text-purple-600 font-semibold hover:bg-purple-100
                               transition-all duration-200 mt-5 md:mt-auto text-center"
                  href=""
                >
                  Suscribirse
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimoniales */}

        <section className="py-10">
          <header className="mb-10 flex flex-col items-center gap-3 text-center">
            <p className="flex gap-2 rounded-lg border-2 border-purple-400 bg-purple-100 px-3 py-1 lg:text-lg">
              <svg
                className="fill-purple-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4 19h3v2c0 .36.19.69.51.87a1.002 1.002 0 0 0 1-.01L13.27 19h6.72c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2M4 5h16v12h-7c-.18 0-.36.05-.51.14L9 19.23V18c0-.55-.45-1-1-1H4z"></path>
                <path d="M7 8h10v2H7zM7 12h7v2H7z"></path>
              </svg>
              Testimoniales
            </p>
            <h2 className="my-5 text-3xl font-bold text-purple-950 lg:max-w-4xl lg:text-5xl">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-purple-900 lg:max-w-4xl lg:text-xl">
              Descubre cómo Gympage ha transformado la vida de nuestros
              miembros.
            </p>
          </header>

          {/* Testimoniales --> Cards */}

          {/* Marco de sección */}
          <div className="flex flex-wrap justify-center gap-3 border-4 border-purple-200 rounded-2xl p-10 lg:gap-6">
            {/* Testimonial card 1 */}
            {/* Marco de card */}
            <div className="flex w-full md:flex-1 flex-col p-10 border-4 border-purple-100 rounded-2xl ">
              {/* Cabecera de card */}
              <div className="flex flex-row gap-2">
                <img
                  className="self-start size-12 rounded-full"
                  src="images/user.png"
                  alt="Floyd Miles"
                />
                <div>
                  <p className="font-semibold">Floyd Miles</p>
                  <p className="flex gap-2">
                    <svg
                      className="fill-purple-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.988.988 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path>
                    </svg>
                    <svg
                      className="fill-purple-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.988.988 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path>
                    </svg>
                    <svg
                      className="fill-purple-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.988.988 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path>
                    </svg>
                    <svg
                      className="fill-purple-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.988.988 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path>
                    </svg>
                    <svg
                      className="fill-purple-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.988.988 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path>
                    </svg>
                  </p>
                </div>
                <p className="size-12 ml-auto self-end">
                  <svg
                    className="fill-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="m21.01,10h-2.85c.27-1.02,1.01-2.51,3.09-3.03l.76-.19v-2.78h-1c-2.78,0-4.91.77-6.31,2.29-1.89,2.05-1.7,4.68-1.69,4.71v7c0,1.1.9,2,2,2h6c1.1,0,2-.9,2-2v-6c0-1.1-.9-2-2-2Z"></path>
                    <path d="m9.01,10h-2.85c.27-1.02,1.01-2.51,3.09-3.03l.76-.19v-2.78h-1c-2.78,0-4.91.77-6.31,2.29-1.89,2.05-1.7,4.68-1.69,4.71v7c0,1.1.9,2,2,2h6c1.1,0,2-.9,2-2v-6c0-1.1-.9-2-2-2Z"></path>
                  </svg>
                </p>
              </div>

              {/* Comentario en card */}
              <p className="mt-6">
                Gympage me ha ayudado a mantenerme motivado y alcanzar mis
                objetivos de fitness. El ambiente es increíble y el equipo
                siempre está dispuesto a ayudar.
              </p>
            </div>

            {/* Testimonial card 2 */}
            <div className="flex w-full md:flex-1 flex-col p-10 border-3 border-purple-100 rounded-2xl ">
              <div className="flex flex-row gap-2">
                <img
                  className="self-start size-12"
                  src="images/Jane.png"
                  alt="Jane Cooper"
                />
                <div>
                  <p className="font-semibold">Jane Cooper</p>
                  <p className="flex gap-2">
                    <svg
                      className="fill-purple-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.988.988 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path>
                    </svg>
                    <svg
                      className="fill-purple-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.988.988 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path>
                    </svg>
                    <svg
                      className="fill-purple-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.988.988 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path>
                    </svg>
                    <svg
                      className="fill-purple-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.988.988 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path>
                    </svg>
                    <svg
                      className="fill-purple-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.988.988 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06zm6.93-4.91c.15.33.47.56.83.59l3.97.32-3.27 2.94c-.28.26-.4.65-.29 1.02l1.25 4.38-3.74-2.49c-.17-.11-.36-.17-.55-.17-.03 0-.06.01-.09.01V5.62l.09-.2 1.8 3.98Z"></path>
                    </svg>
                  </p>
                </div>
                <p className="size-12 ml-auto self-end">
                  <svg
                    className="fill-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="m21.01,10h-2.85c.27-1.02,1.01-2.51,3.09-3.03l.76-.19v-2.78h-1c-2.78,0-4.91.77-6.31,2.29-1.89,2.05-1.7,4.68-1.69,4.71v7c0,1.1.9,2,2,2h6c1.1,0,2-.9,2-2v-6c0-1.1-.9-2-2-2Z"></path>
                    <path d="m9.01,10h-2.85c.27-1.02,1.01-2.51,3.09-3.03l.76-.19v-2.78h-1c-2.78,0-4.91.77-6.31,2.29-1.89,2.05-1.7,4.68-1.69,4.71v7c0,1.1.9,2,2,2h6c1.1,0,2-.9,2-2v-6c0-1.1-.9-2-2-2Z"></path>
                  </svg>
                </p>
              </div>
              <p className="mt-6">
                Desde que me uní a Gympage, he visto un cambio positivo en mi
                salud y bienestar. Las clases grupales son mi parte favorita.
              </p>
            </div>

            {/* Testimonial card  3 */}
            <div className="flex w-full md:flex-1 flex-col p-10 border-3 border-purple-100 rounded-2xl ">
              <div className="flex flex-row gap-2">
                <img
                  className="self-start size-12"
                  src="images/Robert.png"
                  alt="Robert Fox"
                />
                <div>
                  <p className="font-semibold">Robert Fox</p>
                  <p className="flex gap-2">
                    <svg
                      className="fill-purple-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.988.988 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path>
                    </svg>
                    <svg
                      className="fill-purple-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.988.988 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path>
                    </svg>
                    <svg
                      className="fill-purple-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.988.988 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path>
                    </svg>
                    <svg
                      className="fill-purple-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.988.988 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path>
                    </svg>
                    <svg
                      className="fill-purple-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.988.988 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path>
                    </svg>
                  </p>
                </div>
                <p className="size-12 ml-auto self-end">
                  <svg
                    className="fill-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="m21.01,10h-2.85c.27-1.02,1.01-2.51,3.09-3.03l.76-.19v-2.78h-1c-2.78,0-4.91.77-6.31,2.29-1.89,2.05-1.7,4.68-1.69,4.71v7c0,1.1.9,2,2,2h6c1.1,0,2-.9,2-2v-6c0-1.1-.9-2-2-2Z"></path>
                    <path d="m9.01,10h-2.85c.27-1.02,1.01-2.51,3.09-3.03l.76-.19v-2.78h-1c-2.78,0-4.91.77-6.31,2.29-1.89,2.05-1.7,4.68-1.69,4.71v7c0,1.1.9,2,2,2h6c1.1,0,2-.9,2-2v-6c0-1.1-.9-2-2-2Z"></path>
                  </svg>
                </p>
              </div>
              <p className="mt-6">
                El entrenador personal que contraté en Gympage ha sido clave
                para alcanzar mis metas. ¡Recomiendo este gimnasio a todos!
              </p>
            </div>
          </div>
        </section>

        {/* Seccion FAQ */}
        <section className="py-10">
          <header className="mb-10 flex flex-col items-center gap-3 text-center">
            <p className="rounded-lg border-2 border-purple-400 bg-purple-100 px-3 py-1 lg:text-lg flex gap-2">
              <svg
                className="fill-purple-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M11 15H13V17H11z"></path>
                <path d="m9.53,8.03c-.66.66-1.03,1.54-1.03,2.47h2c0-.4.16-.78.44-1.06.57-.57,1.55-.57,2.12,0,.28.28.44.66.44,1.06s-.16.78-.44,1.06-.66.44-1.06.44c-.55,0-1,.45-1,1v1h2v-.14c.55-.16,1.06-.46,1.47-.88.66-.66,1.03-1.54,1.03-2.47s-.36-1.81-1.03-2.47c-1.32-1.32-3.63-1.32-4.95,0Z"></path>
                <path d="m12,2C6.49,2,2,6.49,2,12c0,2.12.68,4.19,1.93,5.9l-1.75,2.53c-.21.31-.24.7-.06,1.03.17.33.51.54.89.54h9c5.51,0,10-4.49,10-10S17.51,2,12,2Zm0,18h-7.09l1.09-1.57c.26-.37.23-.88-.06-1.22-1.25-1.45-1.93-3.3-1.93-5.21,0-4.41,3.59-8,8-8s8,3.59,8,8-3.59,8-8,8Z"></path>
              </svg>
              Preguntas Frecuentes
            </p>
            <h2 className="my-5 text-3xl font-bold text-purple-950 lg:max-w-4xl lg:text-5xl">
              Resolvemos tus dudas
            </h2>
            <p className="text-purple-900 lg:max-w-4xl lg:text-xl">
              Encuentra respuestas a las preguntas más comunes sobre Gympage.
            </p>
          </header>

          <div className="grid gap-10 rounded-2xl border-4 border-purple-300 p-10 lg:grid-cols-2">
            {/* Preguntas Frecuentes (Izquierda) */}
            <div className="space-y-5">
              <details
                className="rounded-lg border-2 border-purple-200 p-3 open:border-purple-400 open:bg-purple-100"
                open
              >
                <summary className="text-sm leading-6 font-semibold text-gray-900 select-none">
                  ¿Qué servicios incluye mi membresía?
                </summary>
                <div className="mt-3 text-sm leading-6 text-purple-800">
                  <p>
                    Todas las membresías incluyen acceso al gimnasio, uso de
                    máquinas, lockers y clases grupales. Los planes Premium y
                    Elite ofrecen beneficios adicionales como acceso a áreas
                    exclusivas y entrenadores personales.
                  </p>
                </div>
              </details>

              <details className="rounded-lg border-2 border-purple-200 p-3 open:border-purple-400 open:bg-purple-100">
                <summary className="text-sm leading-6 font-semibold text-gray-900 select-none">
                  ¿Puedo cambiar mi plan de membresía?
                </summary>
                <div className="mt-3 text-sm leading-6 text-purple-800">
                  <p>
                    Sí, puedes cambiar tu plan en cualquier momento desde tu
                    cuenta en línea o visitando la recepción del gimnasio.
                  </p>
                </div>
              </details>

              <details className="rounded-lg border-2 border-purple-200 p-3 open:border-purple-400 open:bg-purple-100">
                <summary className="text-sm leading-6 font-semibold text-gray-900 select-none">
                  ¿Hay estacionamiento disponible?
                </summary>
                <div className="mt-3 text-sm leading-6 text-purple-800">
                  <p>
                    Sí, contamos con estacionamiento gratuito para todos
                    nuestros miembros.
                  </p>
                </div>
              </details>

              <details className="rounded-lg border-2 border-purple-200 p-3 open:border-purple-400 open:bg-purple-100">
                <summary className="text-sm leading-6 font-semibold text-gray-900 select-none">
                  ¿Qué horarios tiene el gimnasio?
                </summary>
                <div className="mt-3 text-sm leading-6 text-purple-800">
                  <p>
                    Nuestro gimnasio está abierto de lunes a viernes de 6:00 AM
                    a 10:00 PM, y los fines de semana de 8:00 AM a 8:00 PM.
                  </p>
                </div>
              </details>
            </div>

            {/* Cards (Derecha) */}
            <div className="space-y-5">
              <div className="rounded-2xl border-4 border-purple-200 p-5">
                <h3 className="text-lg font-semibold text-purple-900">
                  ¿Qué debo llevar a mi primera visita?
                </h3>
                <p className="mt-3 text-sm text-purple-800">
                  Te recomendamos traer ropa deportiva cómoda, una botella de
                  agua y una toalla. Si tienes dudas, nuestro equipo estará
                  encantado de ayudarte.
                </p>
                <a
                  href="#"
                  className="mt-5 inline-block rounded-lg bg-purple-600 px-6 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-purple-700"
                >
                  Leer en Blog
                </a>
              </div>

              <div className="rounded-2xl border-4 border-purple-200 p-5">
                <h3 className="text-lg font-semibold text-purple-900">
                  ¿Puedo cancelar mi membresía?
                </h3>
                <p className="mt-3 text-sm text-purple-800">
                  Sí, puedes cancelar tu membresía en cualquier momento desde tu
                  cuenta en línea o visitando la recepción. No hay cargos
                  adicionales por cancelación.
                </p>
                <a
                  href="#"
                  className="mt-5 inline-block rounded-lg bg-purple-600 px-6 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-purple-700"
                >
                  Leer en Blog
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Boton Volver Arriba */}
      <AnimatePresence>
        {show && (
          <motion.a
            href="#inicio"
            initial={{ opacity: 0, x: 50 }} // entra desde la derecha
            animate={{ opacity: 1, x: 0 }} // posición visible
            exit={{ opacity: 0, x: 50 }} // desaparece hacia la derecha
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed right-5 bottom-5 z-50 flex size-12 items-center justify-center
                     rounded-full bg-purple-600 border-2 border-purple-600 shadow-lg
                     hover:scale-105 hover:bg-purple-700"
          >
            <svg
              className="size-8 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="m7.71 15.71 4.29-4.3 4.29 4.3 1.42-1.42L12 8.59l-5.71 5.7z" />
            </svg>
          </motion.a>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-purple-100 py-10 text-white">
        <div className="container mx-auto px-5">
          <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
            {/* Logo y Descripción */}
            <div className="text-center md:text-left">
              <a className="flex items-center justify-center gap-3 md:justify-start">
                <img
                  src="gympage-icon.svg"
                  alt="Logo de Gympage"
                  className="w-14"
                />
                <h2 className="text-2xl font-bold text-gray-900">Gympage</h2>
              </a>
              <p className="mt-3 text-sm text-gray-800">
                Gympage es más que un gimnasio, es una comunidad dedicada a
                ayudarte a alcanzar tus metas de fitness y bienestar. Únete a
                nosotros y transforma tu vida.
              </p>
            </div>

            {/* Redes Sociales */}
            <div className="flex justify-center gap-5 md:justify-end">
              <a
                href="#"
                className="flex size-12 items-center justify-center rounded-full bg-purple-600 transition-all duration-200 hover:-translate-y-2 hover:bg-purple-700 hover:scale-105"
                aria-label="Facebook"
              >
                <svg
                  className="fill-white size-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.06c-5.5 0-10 4.5-10 10 0 4.94 3.61 9.06 8.33 9.89l.06-.05h-.06v-7.06h-2.5v-2.78h2.5V9.84c0-2.5 1.61-3.89 3.89-3.89.72 0 1.5.11 2.22.22v2.56h-1.28c-1.22 0-1.5.61-1.5 1.39v1.94h2.67l-.44 2.78h-2.22v7.06h-.06l.06.05c4.72-.83 8.33-4.94 8.33-9.89 0-5.5-4.5-10-10-10"></path>
                </svg>
              </a>
              <a
                href="#"
                className="flex size-12 items-center justify-center rounded-full bg-purple-600 transition-all duration-200 hover:-translate-y-2 hover:bg-purple-700 hover:scale-105"
                aria-label="Instagram"
              >
                <svg
                  className="fill-white size-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248m0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008M16.806 6.129a1.078 1.078 0 1 0 0 2.156 1.078 1.078 0 1 0 0-2.156"></path>
                  <path d="M20.533 6.111A4.6 4.6 0 0 0 17.9 3.479a6.6 6.6 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.6 6.6 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.6 6.6 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71s0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.6 4.6 0 0 0 2.634 2.632 6.6 6.6 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.6 6.6 0 0 0 2.186-.419 4.61 4.61 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.6 6.6 0 0 0-.421-2.217m-1.218 9.532a5 5 0 0 1-.311 1.688 2.99 2.99 0 0 1-1.712 1.711 5 5 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a5 5 0 0 1-1.669-.311 2.99 2.99 0 0 1-1.719-1.711 5.1 5.1 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654s0-2.686.053-3.655a5 5 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5 5 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a5 5 0 0 1 1.67.311 3 3 0 0 1 1.712 1.712 5.1 5.1 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655s0 2.698-.043 3.654z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="flex size-12 items-center justify-center rounded-full bg-purple-600 transition-all duration-200 hover:-translate-y-2 hover:bg-purple-700 hover:scale-105"
                aria-label="Twitter"
              >
                <svg
                  className="fill-white size-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.68 10.62 20.24 3h-1.55L13 9.62 8.45 3H3.19l6.88 10.01L3.19 21h1.55l6.01-6.99 4.8 6.99h5.24l-7.13-10.38Zm-2.13 2.47-.7-1-5.54-7.93H7.7l4.47 6.4.7 1 5.82 8.32H16.3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="flex size-12 items-center justify-center rounded-full bg-purple-600 transition-all duration-200 hover:-translate-y-2 hover:bg-purple-700 hover:scale-105"
                aria-label="YouTube"
              >
                <svg
                  className="fill-white size-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.593 7.203a2.5 2.5 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.52 2.52 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831M9.996 15.005l.005-6 5.207 3.005z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Enlaces adicionales */}
          <div className="mt-10 text-center text-sm text-gray-700">
            <p>&copy; 2025 Gympage. Todos los derechos reservados.</p>
            <p className="mt-2">
              <a href="#" className="hover:text-purple-500 mr-1">
                Política de privacidad
              </a>
              |
              <a href="#" className="hover:text-purple-500 ml-1">
                Términos y condiciones
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
