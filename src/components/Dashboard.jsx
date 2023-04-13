import React, { useState } from "react";
import "./Style.css";
import { Link } from "react-router-dom";
function Dashboard() {
  const [title, setTitle] = useState("");
  const [editTitle, setEdittitle] = useState("");
  const [description, setDescription] = useState("");
  const [editDescription, setEditdescription] = useState("");
  const [editing, setEditing] = useState(null);
  const [todos, setTodos] = useState([]);

  console.log("@SN ", todos);
  const handleClick = () => {
    setTodos([...todos, { title: title, description: description }]);
    setTitle("");
    setDescription("");
  };
  const handleEdit2 = () => {
    setTodos((prevState) => {
      return prevState.map((val, i) => {
        if (editing === i) {
          (val.title = editTitle), (val.description = editDescription);
        }
        return val;
      });
    });
    setEditing(null);
    setEdittitle("");
    setEditdescription("");
  };

  const handleDelete = (index) => {
    console.log("@SN ");
    setTodos((prevState) => {
      return prevState.filter((val, i) => {
        return i !== index;
      });
    });
  };

  const handleEdit = (item, index) => {
    setEdittitle(item.title);
    setEditdescription(item.description);
    setEditing(index);
  };
  console.log("@SN ", editTitle, editDescription);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Todo List</h2>
        <div style={{ display: "flex", gap: "10px", padding: "5px" }}>
          <label htmlFor="" style={{ fontSize: "x-large" }}>
            Title
          </label>
          <input
            type="text"
            placeholder="Enter title here.."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div style={{ display: "flex", gap: "10px", padding: "5px" }}>
          <label htmlFor="" style={{ fontSize: "x-large" }}>
            Description
          </label>
          <input
            type="text"
            placeholder="Enter description here.."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div style={{ padding: "8px" }}>
          <Link style={{ padding: "10px" }}>
            <button className="btn btn-success" onClick={handleClick}>
              Submit
            </button>
          </Link>

          <Link to="/" style={{ padding: "10px" }}>
            <button className="btn btn-danger">Login</button>
          </Link>
        </div>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table id="customers">
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>

          {todos.map((item, index) => {
            return (
              <tr>
                {editing === index ? (
                  <>
                    <td>
                      <input
                        type="text"
                        placeholder="Enter title here.."
                        value={editTitle}
                        onChange={(e) => setEdittitle(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="Enter description here.."
                        value={editDescription}
                        onChange={(e) => setEditdescription(e.target.value)}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleEdit2(item, index)}
                      >
                        Save
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>
                      <button
                        className="btn btn-info"
                        onClick={() => handleEdit(item, index)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
