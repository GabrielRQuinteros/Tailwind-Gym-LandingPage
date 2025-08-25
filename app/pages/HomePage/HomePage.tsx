export const HomePage = () => {
  return (
    <>
      <header className="py-2 shadow-md">
        <div className="container mx-auto px-2.5 md:flex md:items-center md:justify-between md:px-5">
          <a className="flex flex-row items-center justify-center gap-3">
            <img
              src="public/gympage-icon.svg"
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
              href=""
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
            <h1 className="my-5 text-3xl font-bold text-purple-950 lg:text-5xl">
              Con Gympage, el gimnasio que se adapta a ti
            </h1>
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
          <div className="mt-7">
            <img
              src="https://images.unsplash.com/photo-1518310952931-b1de897abd40?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Imagen de Hero"
              className="w-full rounded-xl"
            />
          </div>
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
            <p className="flex gap-2">
              <svg  className="fill-purple-600"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
                    fill="currentColor" viewBox="0 0 24 24" >
                  <path d="M12 17.01c2.76 0 5.01-2.25 5.01-5.01S14.76 6.99 12 6.99 6.99 9.24 6.99 12s2.25 5.01 5.01 5.01M12 9c1.66 0 3.01 1.35 3.01 3.01s-1.35 3.01-3.01 3.01-3.01-1.35-3.01-3.01S10.34 9 12 9M13 19h-2v3h2v-3M13 2h-2v3h2V2M2 11h3v2H2zM19 11h3v2h-3zM4.22 18.36l.71.71.71.71 1.06-1.06 1.06-1.06-.71-.71-.71-.71-1.06 1.06zM19.78 5.64l-.71-.71-.71-.71-1.06 1.06-1.06 1.06.71.71.71.71 1.06-1.06zM7.76 6.34 6.7 5.28 5.64 4.22l-.71.71-.71.71L5.28 6.7l1.06 1.06.71-.71zM16.24 17.66l1.06 1.06 1.06 1.06.71-.71.71-.71-1.06-1.06-1.06-1.06-.71.71z"></path>
              </svg>
              Nuestros Valores
            </p>
            <h2 className="my-5 text-3xl font-bold text-purple-900 lg:max-w-4xl lg:text-5xl" >Comprometidos con la excelencia y la comunidad</h2>
            <p className="text-purple-900 lg:text-xl lg:max-w-4xl" >
              En Gympage, nuestros valores son la base de todo lo que hacemos.
              Nos comprometemos a brindar un servicio excepcional.
            </p>
          </header>

          <div className="grid gap-5 rounded-2xl border-4 border-purple-100 p-5 md:grid-cols-2 lg:grid-cols-3 xl:p-10">
            <div className="flex flex-col items-center rounded-2xl rounded-2 border-purple-200 p-5 text-center lg:p-10">
              <img src="public/images/image.png" alt="" />
              <p>
                <svg className="fill-purple-600"  
                     xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
                     fill="currentColor" viewBox="0 0 24 24" >
                  <path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.988.988 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path>
                </svg>
              </p>
              <h3>Pasión</h3>
              <p>
                Nos apasiona el fitness y estamos dedicados a ayudar a nuestros
                miembros a alcanzar sus metas.
              </p>
              <a href="">
                Leer Más{" "}
                <i className="bx bx-right-arrow-alt text-3xl lg:text-4xl" />
              </a>
            </div>
            <div className="flex flex-col items-center rounded-2xl rounded-2 border-purple-200 p-5 text-center lg:p-10">
              <img src="public/images/image.png" alt="" />
              <p>
                <svg  className="fill-purple-600"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
                      fill="currentColor" viewBox="0 0 24 24" >
                    <path d="M11.29 20.69c.2.2.45.29.71.29s.51-.1.71-.29l7.5-7.5c2.35-2.35 2.35-6.05 0-8.41-2.29-2.29-5.84-2.35-8.21-.2-2.36-2.15-5.91-2.09-8.21.2-2.35 2.36-2.35 6.06 0 8.41z"></path>
                </svg>
              </p>
              <h3>Compasión</h3>
              <p>
                Nos preocupamos por el bienestar de nuestros miembros y nos
                esforzamos por crear un ambiente acogedor.
              </p>
              <a href="">
                Leer Más{" "}
                <i className="bx bx-right-arrow-alt text-3xl lg:text-4xl" />
              </a>
            </div>
            <div className="flex flex-col items-center rounded-2xl rounded-2 border-purple-200 p-5 text-center lg:p-10">
              <img src="public/images/image.png" alt="" />
              <p>
                <svg  className="fill-purple-600"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
                      fill="currentColor" viewBox="0 0 24 24" >
                      <path d="m20.42 6.11-7.97-4c-.28-.14-.62-.14-.9 0l-7.97 4c-.31.15-.51.45-.55.79-.01.11-.96 10.77 8.55 15.01a.98.98 0 0 0 .82 0C21.91 17.66 20.97 7 20.95 6.9a.98.98 0 0 0-.55-.79Z"></path>
                </svg>
              </p>
              <h3>Integridad</h3>
              <p>
                Actuamos con honestidad y transparencia en todo lo que hacemos.
                Valoramos la confianza de nuestros miembros.
              </p>
              <a href="">
                Leer Más <i className="bx bx-right-arrow-alt text-3xl lg:text-4xl" />
              </a>
            </div>
          </div>
        </section>
        
      </main>
    </>
  );
};
