import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchBar from '../Searchbar/Searchbar';
import Footer from '../Footer/Footer';
import ImportData from '../ImportData/ImportData';
import Recent from '../Recent/Recent';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SearchBar></SearchBar>
            <Footer></Footer>
            <ImportData></ImportData>

            <div className='mt-3'>
                <Recent></Recent>
            </div>
        </div>
    );
};

export default Home;