import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="flex h-full w-full flex-col md:flex-row justify-center items-center">
        <Link to="/cv" className="mt-40 flex justify-center items-center">
          <button className="p-12 mb-8 md:mb-0 items-center font-semibold justify-center text-xl h-44 w-44 rounded-full border-4 border-gray-900 flex hover:bg-yellow-300">
            Tech CV
          </button>
        </Link>
        <Link
          to="/cvBuilder"
          className="md:mt-40 md:ml-8 flex justify-center items-center"
        >
          <button className="p-12 items-center font-semibold justify-center text-xl h-44 w-44 rounded-full border-4 border-gray-900 flex hover:bg-yellow-300">
            <p className="flex ">Try the CV Builder</p>
          </button>
        </Link>
      </div>
      <a
        href="../assets/full-resume.pdf"
        className=" flex justify-center items-center"
      >
        <button className="p-12 items-center font-semibold justify-center text-xl h-44 w-44 rounded-full border-4 border-gray-900 flex hover:bg-yellow-300">
          <p className="flex ">Full Resume</p>
        </button>
      </a>
    </div>
  );
}
