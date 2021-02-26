import HomepageCard from 'components/HomepageCard'
import Link from 'next/link'

export default function Index() {
  return (
    <div className="my-wrapper">
      <div className="grid lg:grid-cols-2 gap-8 mt-8">
        <HomepageCard
          href="communaute-openclassrooms"
          title="Rejoignez la communauté OpenClassrooms"
          description="Événements - Discords - Carte - Initiatives"
          button={{
            text: {
              content: 'Rejoindre',
              color: 'oc-500'
            }
          }}
          bgColor="oc-500"
          hoverColor="oc-600"
          watermarkImageUrl="/images/logo_openclassrooms.svg"
        />
        <HomepageCard
          href="ressources"
          title="Des ressources triés sur le volet !"
          description="HTML - CSS - Javascript - Node.js - MongoDB"
          button={{
            text: {
              content: "Ça m'intéresse !",
              color: 'mypurple-500'
            }
          }}
          bgColor="mypurple-500"
          hoverColor="mypurple-600"
          watermarkImageUrl="/images/icons/academic-cap.svg"
        />
      </div>
      <div className="grid gap-8 lg:grid-cols-3 lg:max-w-none w-full mt-8">
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div className="flex-shrink-0">
            <img
              className="h-48 w-full object-cover"
              src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=pLPhGoGaS9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
              alt=""
            />
          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-indigo-600">
                <a href="#" className="hover:underline">
                  Article
                </a>
              </p>
              <a href="#" className="block mt-2">
                <p className="text-xl font-semibold text-gray-900">Boost your conversion rate</p>
                <p className="mt-3 text-base text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium
                  praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.
                </p>
              </a>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <a href="#">
                  <span className="sr-only">Roel Aufderehar</span>
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=pLPhGoGaS9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  <a href="#" className="hover:underline">
                    Roel Aufderehar
                  </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-03-16">Mar 16, 2020</time>
                  <span aria-hidden="true">·</span>
                  <span>6 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div className="flex-shrink-0">
            <img
              className="h-48 w-full object-cover"
              src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=pLPhGoGaS9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
              alt=""
            />
          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-indigo-600">
                <a href="#" className="hover:underline">
                  Video
                </a>
              </p>
              <a href="#" className="block mt-2">
                <p className="text-xl font-semibold text-gray-900">
                  How to use search engine optimization to drive sales
                </p>
                <p className="mt-3 text-base text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores
                  porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio
                  animi., tempore temporibus quo laudantium.
                </p>
              </a>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <a href="#">
                  <span className="sr-only">Brenna Goyette</span>
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixqx=pLPhGoGaS9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  <a href="#" className="hover:underline">
                    Brenna Goyette
                  </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-03-10">Mar 10, 2020</time>
                  <span aria-hidden="true">·</span>
                  <span>4 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div className="flex-shrink-0">
            <img
              className="h-48 w-full object-cover"
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixqx=pLPhGoGaS9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
              alt=""
            />
          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-indigo-600">
                <a href="#" className="hover:underline">
                  Case Study
                </a>
              </p>
              <a href="#" className="block mt-2">
                <p className="text-xl font-semibold text-gray-900">
                  Improve your customer experience
                </p>
                <p className="mt-3 text-base text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum
                  voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque
                  corporis perferendis hic.
                </p>
              </a>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <a href="#">
                  <span className="sr-only">Daniela Metz</span>
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixqx=pLPhGoGaS9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  <a href="#" className="hover:underline">
                    Daniela Metz
                  </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-02-12">Feb 12, 2020</time>
                  <span aria-hidden="true">·</span>
                  <span>11 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
