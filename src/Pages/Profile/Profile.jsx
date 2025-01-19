import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Footer from "../Footer/Footer";


const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                setUser({
                    displayName: firebaseUser.displayName,
                    photoURL: firebaseUser.photoURL,
                });
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe(); // Clean up on unmount
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="min-h-screen flex flex-col items-center bg-gray-100">
                {/* Profile Section */}
                <div className="flex flex-col items-center py-8 bg-white shadow-md w-full max-w-sm mx-auto rounded-lg">
                    <div className="relative w-full">
                        {/* Profile Picture */}
                        {!user.photoURL ? (
                            <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-xl text-white mx-auto">
                                {user.displayName}
                            </div>
                        ) : (
                            <img
                                src={user.photoURL}
                                alt="User"
                                className="w-24 h-24 rounded-full object-cover mx-auto"
                            />
                        )}

                        {/* Edit Profile Button */}
                        <button
                            onClick={() => alert("Edit Profile clicked!")}
                            className="absolute top-2 right-2 bg-white border-2 border-gray-300 p-1 rounded-full hover:bg-gray-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.862 3.487c1.04-1.04 2.728-.615 3.1.793l.65 2.6a1.878 1.878 0 01-.543 1.798l-9.114 9.114a4.5 4.5 0 01-1.798.972l-4.236.847a.375.375 0 01-.451-.451l.847-4.236a4.5 4.5 0 01.972-1.798l9.114-9.114z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5L15 6"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* User Name */}
                    <h2 className="text-xl font-semibold text-gray-800 mt-4">{user.displayName}</h2>
                </div>

                {/* Options Section */}
                <div className="flex flex-col items-center w-full mt-6 space-y-4">
                    <button
                        onClick={() => alert("Edit Profile clicked!")}
                        className="flex items-center justify-between w-3/4 px-4 py-2 bg-white shadow-md rounded-lg hover:bg-gray-100"
                    >
                        <span className="flex items-center gap-2 text-gray-800">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 text-gray-700"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.862 3.487c1.04-1.04 2.728-.615 3.1.793l.65 2.6a1.878 1.878 0 01-.543 1.798l-9.114 9.114a4.5 4.5 0 01-1.798.972l-4.236.847a.375.375 0 01-.451-.451l.847-4.236a4.5 4.5 0 01.972-1.798l9.114-9.114z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5L15 6"
                                />
                            </svg>
                            Edit Profile
                        </span>
                    </button>

                    <button
                        onClick={() => alert("Logged out!")}
                        className="flex items-center justify-center w-3/4 px-4 py-2 bg-gray-800 text-white shadow-md rounded-lg hover:bg-gray-700"
                    >
                        Log Out
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;
