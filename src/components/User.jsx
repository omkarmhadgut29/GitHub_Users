/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

const User = ({ userUrl }) => {
    const [userData, setUserData] = useState();
    useEffect(() => {
        if (userUrl) {
            (async () => {
                // setUserData();
                setUserData(await (await fetch(`${userUrl}`)).json());
            })();
        }
    }, [userUrl]);
    console.log("userUrl: ");
    console.log(userUrl);
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "60vh",
                    width: "50vw",
                    border: "1px solid red",
                    backgroundColor: "#b5f2b5",
                }}
            >
                {userData && (
                    <div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                paddingTop: "90px",
                            }}
                        >
                            <img
                                // src="https://avatars.githubusercontent.com/u/1?v=4"
                                src={userData?.avatar_url}
                                height={"70px"}
                                width={"70px"}
                                alt="avatar_url"
                            />
                            <div
                                style={{
                                    marginLeft: "10px",
                                }}
                            >
                                <span className="bold">{userData.name}</span>
                            </div>
                        </div>
                        {userData.twitter_username && (
                            <div
                                style={{
                                    marginTop: "20px",
                                    marginBottom: "20px",
                                }}
                            >
                                <span className="bold">twitter_username: </span>
                                <span>{userData.twitter_username}</span>
                            </div>
                        )}
                        <div
                            style={{
                                marginTop: "20px",
                                marginBottom: "20px",
                            }}
                        >
                            <span className="bold">Company: </span>
                            <span>{userData.company}</span>
                        </div>
                        <div
                            style={{
                                marginTop: "20px",
                                marginBottom: "20px",
                            }}
                        >
                            <span className="bold">Blog: </span>
                            <span>{userData.blog}</span>
                        </div>
                        <div>
                            <span className="bold">location: </span>
                            <span>{userData.location}</span>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default User;
