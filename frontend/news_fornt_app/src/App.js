import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/news/getUrgentNews") 
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="title">Urgent News</h1>
      <table className="news-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {news.length > 0 ? (
            news.map((item) => (
              <tr key={item.id}> 
                <td>{item.id}</td> 
                <td>{item.title}</td>
                <td>{item.content}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">Loading news...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
