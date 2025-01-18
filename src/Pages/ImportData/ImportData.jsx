import React from 'react';
import { GrStorage } from "react-icons/gr";
import { FcFolder } from "react-icons/fc";
import { PiNotePencilBold } from "react-icons/pi";
import { FcEditImage } from "react-icons/fc";
import { GrDocumentPdf } from "react-icons/gr";

const ImportData = () => {
    return (
        <div className='mt-4'>
            <div className='flex gap-3 mb-2'>
                <div className='bg-slate-200 p-2 rounded-lg text-center w-3/4'>
                    <div className='flex mb-2'>
                        <div className='text-2xl font-bold'>
                            <GrStorage />
                        </div>
                        <h3 className='font-bold text-center'>Your storage: 15GB</h3>
                    </div>
                    <p>storage: 5.0GB</p>
                    <p>Available: 5.3GB</p>
                </div>
                <div className='text-left bg-slate-200 rounded-lg'>
                    <div className='flex items-center'>
                        <div className='text-2xl font-bold'>
                            <FcFolder />
                        </div>
                        <h3 className='font-bold text-xl'>Folder</h3>
                    </div>
                    <p>Items: 15</p>
                    <p>storage: 5.30 GB</p>
                </div>
            </div>
            <div className='flex justify-between gap-2'>
                <div className='bg-slate-200 gap-2 p-2 rounded-lg text-center'>
                    <a href="/notes">
                        <div className='flex items-center gap-2 bg-slate-200 p-2 rounded-lg'>
                            <div className='text-2xl font-bold'>
                                <PiNotePencilBold />
                            </div>
                            <h3 className='font-bold'>Notes</h3>
                        </div>
                        <p>Items: 15</p>
                        <p>Storage: 5.3GB</p>
                    </a>
                </div>
                <div className='bg-slate-200 gap-2 p-2 rounded-lg text-center'>
                    <a href="/images">
                        <div className='flex items-center gap-2 bg-slate-200 p-2 rounded-lg'>
                            <div className='text-2xl font-bold'>
                                <FcEditImage />
                            </div>
                            <h3 className='font-bold'>Images</h3>
                        </div>
                        <p>Items: 15</p>
                        <p>Storage: 5.3GB</p>
                    </a>
                </div>
                <div className='bg-slate-200 gap-2 p-2 rounded-lg text-center'>
                    <a href="/pdf">
                        <div className='flex items-center gap-2 bg-slate-200 p-2 rounded-lg'>
                            <div className='text-2xl font-bold'>
                                <GrDocumentPdf />
                            </div>
                            <h3 className='font-bold'>Images</h3>
                        </div>
                        <p>Items: 15</p>
                        <p>Storage: 5.3GB</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ImportData;