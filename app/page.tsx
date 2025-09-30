import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <div className="max-w-6xl mx-auto p-4">
        {/* Intro Section */}
        <div>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            As a self-taught web developer, I have hands-on experience creating
            full websites from the ground up — from layout and styling to
            interactive features and backend logic. My core skills include HTML,
            CSS, JavaScript, React, and Node.js.
          </p>
        </div>

        {/* Technologies Section */}
        <div className="bg-gray-100 py-4 px-4 rounded">
          <h2 className="font-bold text-xl mb-4">
            Technologies I Use
            <span className="block flex-grow h-1 bg-indigo-200 rounded w-[270px]"></span>
          </h2>

          <ul className="flex flex-wrap gap-4">
            <li className="flex items-center gap-2 px-4 py-2 rounded shadow-lg font-bold bg-white text-xl">
              <i className="fab fa-html5 fa-2x text-orange-500"></i> HTML
            </li>
            <li className="flex items-center gap-2 px-4 py-2 rounded shadow-lg font-bold bg-white text-xl">
              <i className="fab fa-css3-alt fa-2x text-blue-500"></i> CSS
            </li>
            <li className="flex items-center gap-2 px-4 py-2 rounded shadow-lg font-bold bg-white   text-xl">
              Tailwind CSS
            </li>
            <li className="flex items-center gap-2 px-4 py-2 rounded shadow-lg font-bold bg-white text-xl">
              <i className="fab fa-js fa-2x text-yellow-500"></i> JavaScript
            </li>
            <li className="flex items-center gap-2 px-4 py-2 rounded shadow-lg font-bold bg-white text-xl">
              <i className="fab fa-react fa-2x text-blue-400"></i> React
            </li>
            <li className="flex items-center gap-2 px-4 py-2 rounded shadow-lg font-bold bg-white text-xl">
              Next.js
            </li>
            <li className="flex items-center gap-2 px-4 py-2 rounded shadow-lg font-bold bg-white text-xl">
              TypeScript
            </li>
            <li className="flex items-center gap-2 px-4 py-2 rounded shadow-lg font-bold bg-white text-xl">
              <i className="fab fa-node-js fa-2x text-green-600"></i> Node.js
            </li>
            <li className="flex items-center gap-2 px-4 py-2 rounded shadow-lg font-bold bg-white text-xl">
              Express.js
            </li>
            <li className="flex items-center gap-2 px-4 py-2 rounded shadow-lg font-bold bg-white text-xl">
              SQL
            </li>
          </ul>
        </div>

        {/* Tools Section */}
        <div className="bg-gray-100 py-4 px-4 rounded my-4">
          <h2 className="font-bold text-xl mb-4">
            Tools I Use
            <span className="block flex-grow h-1 bg-indigo-200 rounded w-[270px]"></span>
          </h2>
          <ul className="flex flex-wrap gap-4">
            <li className="flex items-center gap-2 px-4 py-2 rounded shadow-lg font-bold bg-white text-xl">
              VS Code
            </li>
            <li className="flex items-center gap-2 px-4 py-2 rounded shadow-lg font-bold bg-white text-xl">
              <i className="fab fa-chrome fa-2x text-blue-500"></i> Chrome
              DevTools
            </li>
            <li className="flex items-center gap-2 px-4 py-2 rounded shadow-lg font-bold bg-white text-xl">
              Postman
            </li>
            <li className="flex items-center gap-2 px-4 py-2 rounded shadow-lg font-bold bg-white text-xl">
              <i className="fab fa-git fa-2x text-orange-500"></i> Git
            </li>
            <li className="flex items-center gap-2 px-4 py-2 rounded shadow-lg font-bold bg-white text-xl">
              <i className="fab fa-github fa-2x text-black"></i> GitHub
            </li>
            <li className="flex items-center gap-2 px-4 py-2 rounded shadow-lg font-bold bg-white text-xl">
              Vercel
            </li>
            <li className="flex items-center gap-2 px-4 py-2 rounded shadow-lg font-bold bg-white text-xl">
              Render
            </li>
          </ul>
        </div>

        {/* AI Tools Section */}
        <div className="bg-gray-100 py-4 px-4 rounded">
          <h2 className="font-bold text-xl mb-4">
            AI Tools I Use
            <span className="block flex-grow h-1 bg-indigo-200 rounded w-[270px]"></span>
          </h2>
          <ul className="flex flex-wrap gap-4">
            <li className="flex items-center gap-2 px-4 py-2 rounded shadow-lg font-bold bg-white text-xl">
              ChatGPT
            </li>
            <li className="flex items-center gap-2 px-4 py-2 rounded shadow-lg font-bold bg-white text-xl">
              GitHub Copilot
            </li>
            <li className="flex items-center gap-2 px-4 py-2 rounded shadow-lg font-bold bg-white text-xl">
              Cursor
            </li>
            <li className="flex items-center gap-2 px-4 py-2 rounded shadow-lg font-bold bg-white text-xl">
              Grok
            </li>
            <li className="flex items-center gap-2 px-4 py-2 rounded shadow-lg font-bold bg-white text-xl">
              Gemini
            </li>
            <li className="flex items-center gap-2 px-4 py-2 rounded shadow-lg font-bold bg-white text-xl">
              Claude
            </li>
            <li className="flex items-center gap-2 px-4 py-2 rounded shadow-lg font-bold bg-white text-xl">
              NotebookLM
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
