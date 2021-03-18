export default function Contact() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="container mx-auto pt-16 grid lg:grid-cols-12 lg:gap-8 box-border px-4">
        <section className="flex flex-col items-center lg:col-span-4  lg:p-0 mb-16">
          <h2 className="dark:text-white text-2xl font-bold w-full mb-4 lg:mb-0">Qui suis-je ?</h2>
          <div className="flex flex-col md:flex-row lg:flex-col">
            <img
              className="hidden md:block w-32 h-32 lg:w-full lg:h-auto object-cover lg:my-4 rounded-full lg:rounded mr-4"
              src="/images/profil.jpg"
              alt=""
            />
            <div>
              <div className="dark:text-gray-200 text-justify">
                <p className="break-normal overflow-hidden">
                  Je suis un étudiant en alternance avec OpenClassrooms portant le doux nom de
                  Mathis Barré. Profitant de compétences acquise en autodidacte avant la formation,
                  j&aposai pris le temps de créé ce site afin d&aposaider les étudiants dans leur
                  parcours.
                </p>
              </div>
              <div className="mt-4 flex flex-col md:flex-row flex-wrap lg:grid lg:grid-cols-2 gap-2">
                <a
                  target="blank_"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/channel/UCl3-1zqMl6YkRx0OQ3KwC_g"
                  className="my-cardLink flex md:inline-flex dark:text-white px-3 py-2"
                >
                  <img className="w-6 mr-2 -mb-0.5" src="/images/youtube_icon.svg" alt="" />
                  <p className="flex items-center">Mathis Barré</p>
                </a>
                <a
                  target="blank_"
                  rel="noopener noreferrer"
                  href="https://twitch.tv/mathisbarre_"
                  className="my-cardLink flex md:inline-flex dark:text-white px-3 py-2"
                >
                  <img className="w-6 mr-1 -mb-0.5 pr-1" src="/images/twitch_glitch.svg" alt="" />
                  <p className="flex items-center">mathisbarre_</p>
                </a>
                <a
                  target="blank_"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/mathis-barre/"
                  className="my-cardLink flex md:inline-flex dark:text-white px-3 py-2"
                >
                  <img className="w-6 h-6 mr-2" src="/images/linkedin.png" alt="" />
                  <p className="flex items-center">mathis-barre</p>
                </a>
                <a
                  target="blank_"
                  rel="noopener noreferrer"
                  href="https://twitter.com/LeMathisBarre"
                  className="my-cardLink flex md:inline-flex dark:text-white px-3 py-2"
                >
                  <img className="w-6 mr-2 -mb-0.5" src="/images/twitter_bird.svg" alt="" />
                  <p className="flex items-center">LeMathisBarre</p>
                </a>
                <div className="my-card flex md:inline-flex dark:text-white pl-2 pr-3 py-2">
                  <img className="w-8 mr-2 -mb-1" src="/images/discord.svg" alt="" />
                  <p className="flex items-center">Mania#6276</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <form
          className="lg:col-span-8 flex flex-col"
          action="https://formspree.io/f/xnqolblw"
          method="POST"
        >
          <h2 className="dark:text-white text-2xl font-bold mb-4">Envoyer un message</h2>
          <label className="dark:text-white block mb-1" htmlFor="name">
            Contact
          </label>
          <input
            className="w-full rounded mb-4 dark:bg-gray-1000 border dark:border-gray-1100 dark:text-white"
            placeholder="Adresse e-mail, tag discord ou autre !"
            type="text"
            name="name"
            id="name"
            required
          />
          <label className="dark:text-white block mb-1" htmlFor="message">
            Votre message
          </label>
          <textarea
            className="w-full rounded mb-4 lg:flex-grow lg:flex-shrink dark:bg-gray-1000 border dark:border-gray-1100 dark:text-white"
            name="message"
            id="message"
            placeholder="C'est ici qu'il faut mettre vos doux mots"
            required
            rows={10}
          />
          <button className="w-full bg-white rounded h-10 dark:bg-gray-1000 border border-gray-500 dark:border-gray-1100 dark:text-white">
            Envoyer votre message
          </button>
        </form>
      </div>
    </div>
  )
}
