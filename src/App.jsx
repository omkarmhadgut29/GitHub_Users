import { useState } from "react";
import "./App.css";
import User from "./components/User";
import Users from "./components/Users";

function App() {
    const [userUrl, setUserUrl] = useState();
    const setData = (url) => {
        setUserUrl(url);
    };
    return (
        <>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    marginTop: "30px",
                }}
            >
                <h1>Welcome to GitHub Users Data</h1>
            </div>
            <div
                style={{
                    display: "flex",
                    // justifyContent: "space-around",
                    alignItems: "center",
                    marginTop: "30px",
                }}
            >
                <Users setData={setData} />
                <User userUrl={userUrl} />
            </div>
        </>
    );
}

export default App;
