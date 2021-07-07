import "./App.css";
import { useState } from "react";
import Show from "./Show";
function App() {
  const [city, setCity] = useState(" ");
  const [list, setList] = useState([]);

  const apidata = (e) => {
    e.preventDefault();
    if (city !== " ") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4f2a87fce3730cb0ca7be062cfbd70ce`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.cod === 200) {
            list.push(data);
            setList([...list]);
          } else {
            alert("Please Enter Valid City");
          }
        });
    }
  };

  const remData = (id) => {
    const newlist = list.filter((data) => data.id !== id);
    setList(newlist);
  };
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-12">
          <h2 className='text-center'>Weather App</h2>
          <form className="w-75 mx-auto ">
            <label className="fw-bold mb-1 text-white">City:</label>
            <input
              className="form-control my-2"
              type="text"
              placeholder="Enter City"
              required
              onChange={(evt) => setCity(evt.target.value)}
            />
            <button
              type="submit"
              onClick={(evt) => apidata(evt)}
              className="btn btn-danger my-3"
            >
              Add City
            </button>
          </form>
        </div>
        <hr className="my-2" />

        {list.map((w, i) => {
          return (
            <Show
              key={i}
              code={w.code}
              id={w.id}
              img={`https://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`}
              city={w.name}
              temp={(w.main.temp - 273.15).toFixed()}
              desc={w.weather[0].main}
              rem={remData}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
