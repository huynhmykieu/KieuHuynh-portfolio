"use client";

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 text-center w-64 h-screen fixed top-0 left-0 border border-gray-200 hidden md:block">
      <img
        src="/images/Kieu.jpg"
        alt="Avatar"
        className="mx-auto mt-10 mb-4 w-24 h-24 rounded-full object-cover border-2 border-gray-100"
      />
      <h1 className="text-2xl font-bold mb-6">Kieu Huynh</h1>
      <h3 className="border border-gray-300 rounded-full w-[200px] py-2 mx-auto">Web Developer</h3>
      <div className="mt-6">
        <a
          href="https://github.com/huynhmykieu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github fa-2x text-black"></i>
        </a>
      </div>
      <ul className="flex flex-col space-y-4 bg-gray-100 text-gray-700 p-4 mt-6">
        <li>Ho Chi Minh, Viet Nam</li>
        <li>kieuhuynh.dev@gmail.com</li>
        <li>(+84) - 823505516</li>
      </ul>
    </aside>
  );
}
