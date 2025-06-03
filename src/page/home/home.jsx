

// import React from "react";
// import image from "../../assets/hero.png";

// const Card = (props) => {
//   const { data } = props;
//   return (
//     <div>
  
//       {data ? (
//         <div className="w-[20vw]">
//           <div>
//             <img src={`${data.imageLink}`} alt="" />
//           </div>
//           <div className="w-[20vw]">
//             <p>title:{data.title}</p>
//             <p>Descrition:{data.discription}</p>
//           </div>
//         </div>
        
//       ) : (
//         <div> no data</div>
//       )}
//     </div>
//   );


// };
// function Home() {
//   return (
//     <div className="flex gap-10">
//       <Card
//         data={{
//           title: "card1",
//           discription:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt delectus dolores sit, libero praesentium tempora consectetur ab optio iusto at quia porro hic totam repellat? Excepturi rerum fuga nesciunt aut.",
//           imageLink: image,
//         }}
//       />

//       <Card
//        data={{
//           title: "card2",
//           discription:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt delectus dolores sit, libero praesentium tempora consectetur ab optio iusto at quia porro hic totam repellat? Excepturi rerum fuga nesciunt aut.",
//           imageLink: image,
//         }} />
//     </div>
//   );
// }

// export default Home;
import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

function Home() {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editPopup, setEditPopup] = useState(false);
  const [editData, setEditData] = useState("");
  const [completed, setCompleted] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/todos?limit=5")
      .then((res) => res.json())
      .then((res) => {
        setData(res.todos);
        setLoading(false);
      });
  }, []);

  const handleSubmit = async () => {
    if (task.trim()) {
      try {
        await fetch("https://dummyjson.com/todos/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            todo: task,
            completed: false,
            userId: 5,
          }),
        });
        setTask("");
      } catch (err) {
        console.log("Error adding task:", err);
      }
    }
  };

  const handleEdit = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          todo: editData,
          completed: completed,
        }),
      });
      const updated = await response.json();
      console.log("Updated task:", updated);
      setEditPopup(false);
    } catch (err) {
      console.log("Error updating task:", err);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-[#f0ece3] min-h-screen py-10 px-4 flex justify-center">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Daily Task Manager</h2>

        <div className="flex gap-3">
          <input
            type="text"
            value={task}
            placeholder="Write your task"
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg outline-none"
          />
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            <CgAddR />
            Add
          </button>
        </div>

        <div className="space-y-4">
          {data.length > 0 ? (
            data.map((el, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg"
              >
                <li className={`list-none ${el.completed ? "line-through text-gray-500" : ""}`}>
                  {el.todo}
                </li>
                <div className="flex gap-2">
                  <button
                    className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    onClick={() => {
                      setEditPopup(true);
                      setEditData(el.todo);
                      setCompleted(el.completed);
                      setId(el.id);
                    }}
                  >
                    <FaRegEdit />
                    Edit
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600">
                    <MdDeleteOutline />
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-600">No tasks added yet.</div>
          )}
        </div>
      </div>

      {/* Edit Popup */}
      {editPopup && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg space-y-4 w-[90%] max-w-md">
            <h3 className="text-xl font-semibold text-center">Edit Task</h3>
            <input
              type="text"
              value={editData}
              onChange={(e) => setEditData(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg outline-none"
            />
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={completed}
                onChange={(e) => setCompleted(e.target.checked)}
              />
              <span>Mark as completed</span>
            </label>
            <div className="flex justify-end gap-3">
              <button
                onClick={handleEdit}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Update
              </button>
              <button
                onClick={() => setEditPopup(false)}
                className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

