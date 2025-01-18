import React from 'react';
import { IoIosUnlock } from "react-icons/io";

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-4 '>
            <div>
                <h2 className='Text-2xl font-bold text-black'>Jotter</h2>
            </div>
            <div>
                <IoIosUnlock />
            </div>
        </div>
    );
};

export default Navbar;