export default function Card({ title, description, button, withContentPadding=true, children }) {
  return (
      <div className="bg-white my-8">
        <div className="bg-white pt-5 pb-2">
          <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
            <div className="ml-4 mt-4">
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                {title}
              </h2>
              {description && <p className="mt-1 text-sm text-gray-500">
                {description}
              </p>}
            </div>
            <div className="ml-4 mt-4 flex-shrink-0">
              { button && <button
                type="button"
                className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={button.onClick}
              >
                {button.text}
              </button>}
            </div>
          </div>
        </div>
        <div className={`${(withContentPadding) ? "px-4 py-5 sm:p-6" : ""}`}>{children}</div>
      </div>
  );
}
