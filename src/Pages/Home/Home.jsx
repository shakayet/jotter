import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchBar from '../Searchbar/Searchbar';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SearchBar></SearchBar>
            <Footer></Footer>
        </div>
    );
};

export default Home;