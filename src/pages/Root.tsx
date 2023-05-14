import { Outlet, Link } from "react-router-dom";
function Root() {
  return (
    <>
      <header className="dark:bg-gray-950 dark:text-white flex p-5 items-center justify-between h-20">
        <h1 className="text-4xl font-bold">Jason GPT</h1>
        <div className="flex-end space-x-5">
          <Link to="/chat">Chats</Link>
          <Link to="/image">Images</Link>
        </div>
      </header>
      <div className="overflow-hidden dark:text-white flex flex-col h-screen">
        <main className="p-5 dark:bg-gray-900 flex flex-col justify-between">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Root;
