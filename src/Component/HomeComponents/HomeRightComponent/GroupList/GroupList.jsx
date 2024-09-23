import React, { useState, createRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
const defaultSrc =
    "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";

import ModalComponent from '../../../commonComponents/ModalComponents/ModalComponent.jsx';
import Group1 from '../../../../assets/HomeAssets/HomeAssetsRight/GroupListAssets/group1.gif';
// import Group2 from '../../../../assets/HomeAssets/HomeAssetsRight/GroupListAssets/group2.gif';
// import Group3 from '../../../../assets/HomeAssets/HomeAssetsRight/GroupListAssets/group3.gif';

const GroupList = () => {


    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [image, setImage] = useState(defaultSrc);
    const [cropData, setCropData] = useState("#");
    const cropperRef = createRef();

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const onChange = (e) => {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(files[0]);
    };

    const getCropData = () => {
        if (typeof cropperRef.current?.cropper !== "undefined") {
            setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
        }
    };
    return (
        <div className='p-2 w-[340px] h-[250px] bg-stone-50 mt-5 rounded-xl shadow-xl'>

            <div className='flex items-center justify-between'>
                <div className='font-Poppins text-lg font-semibold'>
                    Group List
                </div>
                <span>
                    <button className='bg-blue-600 py-1 px-3 mr-2 font-semibold text-white rounded-xl font-Poppins ' onClick={() => openModal()}>
                        Create Group

                    </button>
                </span>
            </div>
            <div className='flex flex-col gap-y-4  h-[85%] mt-2 overflow-y-scroll scrollbar-thumb-blue-600 scrollbar-track-transparent scrollbar-thin'>
                {[...new Array(10)].map((_, index) => (

                    <div className='flex items-center justify-between border-b-[1px]  pb-2 border-b-gray-300'>
                        <div className='w-[60px] h-[60px] rounded-full shadow-lg'>
                            <picture>
                                <img src={Group1} alt={Group1} className='w-full h-full object-contain rounded-full' />
                            </picture>
                        </div>
                        <div class="flex flex-col items-start justify-center text-wrap w-[50%]  text-justify">
                            <h3 className='text-lg font-semibold font-poppins'>Friends Reunion</h3>
                            <p className='text-sm font-normal font-Poppins text-secondary_auth_color'> Hi Guys, Wassup!</p>
                        </div>
                        <div>
                            <button className='bg-blue-600 py-1 px-3 mr-2 font-semibold text-white rounded-xl font-Poppins '>Join</button>
                        </div>
                    </div>


                ))}



            </div>
            <ModalComponent
                openModal={openModal}
                closeModal={closeModal}
                modalIsOpen={modalIsOpen} >

                <div className='w-[60vw] mt-10 overflow-y-scroll'>

                    <form action="#" method="post" onSubmit={(e) => e.preventDefault()}>
                        <div className='flex flex-col items-start gap-y-2'>
                            <label htmlFor="groupName" className='font-Poppins'>
                                {""}
                                groupName <span className='text-red-700'>*</span>
                            </label>
                            <input
                                className='w-full py-3 px-2 bg-gray-200 border border-red-200'
                                type="text"
                                name="groupName"
                                id="groupName"
                                value={""}
                                placeholder='Enter Your Group Name'
                            />

                        </div>
                        <div className='flex flex-col items-start gap-y-2 mt-5 mb-10'>
                            <label htmlFor="groupTagName" className='font-Poppins'>
                                {""}
                                groupTagName <span className='text-red-700'>*</span>
                            </label>
                            <input
                                className='w-full py-3 px-2 bg-gray-200 border border-red-200'
                                type="text"
                                name="groupTagName"
                                id="groupTagName"
                                value={""}
                                placeholder='Enter Your Group tagName'
                            />

                        </div>


                        <div>
                            <div className="w-[34%] mb-10">
                                <input type="file" onChange={onChange} />



                            </div>

                            <div className="flex relative">

                                <div className="w-[34%] h-[220px]">
                                    <Cropper
                                        ref={cropperRef}
                                        style={{ height: 220, width: "100%" }}
                                        zoomTo={0.5}
                                        initialAspectRatio={1}
                                        preview=".img-preview"
                                        src={image}
                                        viewMode={1}
                                        minCropBoxHeight={10}
                                        minCropBoxWidth={10}
                                        background={false}
                                        responsive={true}
                                        autoCropArea={1}
                                        checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                                        guides={true}
                                    />
                                </div>
                                <h1 className="bg-green-600 text-white absolute left-[34%] top-[-25%] p-2">Preview</h1>

                                <div className="box w-[32%] h-[220px] overflow-hidden bg-blue-600 ">

                                    <div
                                        className="img-preview w-full  h-[220px] "
                                    // style={{ width: "100%", float: "left", height: "300px" }}
                                    />
                                </div>

                                <button className="w-40 h-10 bg-red-500 text-white absolute left-[66%] top-[-25%] p-2" onClick={getCropData}>
                                    Crop Image
                                </button>
                                <div
                                    className="box w-[32%] h-[220px] bg-red-600"

                                >

                                    <img className="w-full h-[220px]" src={cropData} alt="cropped" />
                                </div>

                            </div>


                        </div>

                    </form>
                </div>

            </ModalComponent >
        </div >
    )
}

export default GroupList