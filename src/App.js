import PostList from "./components/PostList";

function App() {

  return (
    <div className="flex flex-col gap-2 w-full text-center p-2">
      <h1 className="mt-12">Welcome to GitBook</h1>
      <p>This is a social media platform utilizing a GitHub repository as a database.</p>
      
      <PostList />
    </div>
  );
}

export default App;
