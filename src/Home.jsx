import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  // const [blogs, setBlogs] = useState([
  //   { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
  //   { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
  //   {
  //     title: "Web dev top tips",
  //     body: "lorem ipsum...",
  //     author: "mario",
  //     id: 3,
  //   },
  // ]);

  const { data, isLoading, error } = useFetch("http://localhost:8000/blogs");

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  // useEffect(() => {
  //   const getTheBlog = async (resource) => {
  //     const response = await fetch(resource);

  //     if (response.status !== 200) {
  //       throw new error("cannot fetch the data");
  //     }
  //     const data = await response.json();
  //     return data;
  //   };

  //   getTheBlog("http://localhost:8000/blogs")
  //     .then((data) => {
  //       console.log("resolved", data);
  //       setBlogs(data);
  //     })
  //     .catch((err) => {
  //       console.log("resolved", err.message);
  //     });
  // }, []);

  return (
    <div className="Home">
      <div>
        {error && <div>{error}</div>}
        {isLoading && <div>Loading...</div>}
        {data && <BlogList blogs={data} title="All title" />}
        {/* <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} /> */}
        {/* <BlogList
          blogs={blogs.filter((blog) => blog.author === "mario")}
          title="All Blogs!"
        /> */}
      </div>
    </div>
  );
};

export default Home;
