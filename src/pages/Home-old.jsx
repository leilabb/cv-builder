import fullResume from "./../assets/fullresume.pdf";

export default function Home() {
  return (
    <div>
      <div className="flex h-full w-full flex-col md:flex-row items-center">
        <Link to="/cv" className="mt-40  mb-2 flex justify-center items-center">
          <button className="p-12 md:mb-0 items-center font-semibold justify-center text-xl h-44 w-44 rounded-full border-4 border-gray-900 flex hover:bg-yellow-300">
            Tech CV
          </button>
        </Link>
        <Link
          to="/cvBuilder"
          className="md:mt-40 mb-2 md:ml-8 flex justify-center items-center"
        >
          <button className="p-12 items-center font-semibold justify-center text-xl h-44 w-44 rounded-full border-4 border-gray-900 flex hover:bg-yellow-300">
            <p className="flex ">Try the CV Builder</p>
          </button>
        </Link>
      </div>
      <div>
        <a
          href={fullResume}
          className="flex md:block justify-center items-center"
        >
          <button className="md:block p-12 items-center font-semibold justify-center text-xl h-44 w-44 rounded-full border-4 border-gray-900 flex hover:bg-yellow-300">
            <p className="flex ">Full Resume</p>
          </button>
        </a>
      </div>
    </div>
  );
}
