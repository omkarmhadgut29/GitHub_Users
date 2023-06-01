/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

const Users = ({ setData }) => {
    const [usersData, setUsersData] = useState([]);
    useEffect(() => {
        (async () => {
            setUsersData(
                await (await fetch("https://api.github.com/users")).json()
            );
        })();
    }, []);

    const keyArr = [10, 20, 30];

    return (
        <>
            <div
                style={{
                    minHeight: "60vh",
                    minWidth: "50vw",
                    border: "1px solid red",
                    margin: "0 10px",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                    }}
                >
                    {keyArr.map((key) => {
                        return (
                            <div className="column" key={key}>
                                {usersData.slice(key - 10, key).map((user) => {
                                    return (
                                        <>
                                            <div
                                                key={user.id}
                                                className="list"
                                                onClick={() => {
                                                    setData(user.url);
                                                }}
                                            >
                                                {user.login}
                                            </div>
                                        </>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Users;
{
    /* <div className="column">
    {usersData.slice(10, 20).map((user) => {
        return (
            <>
                <div
                    key={user.id}
                    className="list"
                    onClick={() => {
                        setData(user.url);
                    }}
                >
                    {user.login}
                </div>
            </>
        );
    })}
</div>

<div className="column">
    {usersData.slice(20, 30).map((user) => {
        return (
            <>
                <div
                    key={user.id}
                    className="list"
                    onClick={() => {
                        setData(user.url);
                    }}
                >
                    {user.login}
                </div>
            </>
        );
    })}
</div> */
}
