
function App() {
  return (
    <div className="flex flex-col gap-2 w-full text-center">
      <h1 className="mt-12">Welcome to GitBook</h1>
      <p>This is a social media platform utilizing a GitHub repository as a database.</p>
      <h2 className="underline">Posts</h2>
      <div className="m-auto text-left p-4 w-[50vw] flex flex-col bg-slate-300">
        <div className="flex flex-col p-2 bg-slate-200">
          <h3>Title</h3>
          <p>Content</p>
          <i className="font-light">Username</i>
        </div>
      </div>
    </div>
  );
}

export default App;
