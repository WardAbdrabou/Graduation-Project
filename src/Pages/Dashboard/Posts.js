import { useEffect, useState } from "react";
import { CAT, Cat} from "../../Api/Api";
import { Axios } from "../../Api/axios";
import { Link } from "react-router-dom";

export default function Posts() {
   //States
  const [posts, setPosts] = useState([]);

  //Get  all Categories
  useEffect(() => {
    Axios.get(`/${CAT}`)
      .then((data) => setPosts(data.data.posts.data))
      .catch((err) => console.log(err));
  }, []);

  async function handleDelete(id) {
    try {
      const res = await Axios.delete(`${Cat}/${id}`);
      setPosts((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  }  

  const showProducts = posts.map((post, index) => (
    <tr key={index}>
        <td>{index + 1}</td>
        <td>{post.title}</td>
        <td>{post.slug}</td>
        <td>
            <Link to={`${post.id}`}>
                <i
                    className="fa-solid fa-pen-to-square"
                    style={{ color: "#74afb9", fontSize: "20px", paddingRight: "10px" }}
                ></i>
            </Link>
            <i
                onClick={() => handleDelete(post.id)}
                className="fa-solid fa-trash"
                style={{ color: "red", fontSize: "20px", cursor: "pointer" }}
            ></i>
        </td>
    </tr>

));
  return (
    <div style={{ padding: "20px" }} className="w-100 p-2">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{showProducts}</tbody>
            </table>
        </div>
  );
}