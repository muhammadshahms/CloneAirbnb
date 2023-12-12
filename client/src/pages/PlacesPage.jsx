import { Link, useParams } from "react-router-dom";

export default function PlacesPage() {
    const { action } = useParams();
    console.log(action);
    return (
        <div>
            {action !== 'new' && (
                <div className="text-center">
                    <Link className="inline-flex bg-primary text-white py-2 px-6 rounded-full"
                        to={'/account/places/new'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5} stroke="currentColor"
                            className="w-6 h-6 mr-1 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                        </svg>
                        Add new place
                    </Link>
                </div>
            )}

            {action === 'new' && (
                <form>
                    <h2 className="text-2xl font-bold mt-4">Title</h2>
                    <p className="text-gray-400 text-sm ">Title for your place should be short and catchy, as in advertisement</p>
                    <input type="text" placeholder="title, for example: Empire State Building" />
                    <h2 className="text-2xl font-bold mt-4">Address</h2>
                    <p className="text-gray-400 text-sm">Street address, P.O. box, company name, c/o</p>
                    <input type="text" placeholder="street address, city, state" />
                    <h2 className="text-2xl font-bold mt-4">Photos</h2>
                    <p className="text-gray-400 text-sm">Drag and drop photos here</p>
                    <div className="flex gap-2">
                        <input type="text" placeholder={'add photo using link .....jpg'} />
                        <button className="bg-gray-350 px-4 rounded-xl"> Add&nbsp;photo </button>
                    </div>
                    <div className="mt-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                        <button className="bg-gray-300 border border-gray-400 p-8 px-4 rounded-xl flex gap-2 justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                            </svg>
                            upload
                        </button>
                    </div>
                    <h2 className="text-2xl font-bold mt-4">Description</h2>
                    <p className="text-gray-400 text-sm">Short and sweet works best</p>
                    <textarea />
                    <h2 className="text-2xl font-bold mt-4">Perks</h2>
                    <p className="text-gray-400 text-sm">Select all that apply</p>
                    <div className="grid mt-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                        <label className="border border-gray-400 p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                            <input type="checkbox" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                            </svg>

                            <span className="mx-2">WIFI</span>
                        </label>
                        <label className="border border-gray-400 p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                            <input type="checkbox" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                            </svg>

                            <span className="mx-2">TV</span>
                        </label>
                        <label className="border border-gray-400 p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                            <input type="checkbox" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>

                            <span className="mx-2">Parking</span>
                        </label>
                        <label className="border border-gray-400 p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                            <input type="checkbox" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
                            </svg>
                            <span className="mx-2">Kitchen</span>
                        </label>
                        <label className="border border-gray-400 p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                            <input type="checkbox" />
                            <svg
                                className="w-6 h-6"
                                width="20px"
                                height="20px"
                                viewBox="0 0 1024 1024"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#000000"
                            >
                                <path d="M539.7 463.1V273.5l90.8-91.2c11-11 10.9-28.7 0-39.6-11-11-28.7-10.9-39.6 0L539.7 194V91.3c0-15.1-12.5-27.8-28-27.8-15.6 0-28 12.5-28 27.8V195L432.5 143.8c-10.9-10.9-28.6-11-39.6 0-10.9 10.9-11 28.6 0 39.6l90.8 91.2v188.6l-164.2-94.8L286 244.1c-4-15-19.4-23.8-34.3-19.8-15 4-23.8 19.4-19.8 34.3l18.7 70-88.9-51.4c-13.1-7.6-30.4-3-38.1 10.4-7.8 13.5-3.2 30.5 10.1 38.2l89.8 51.9-70 18.7c-14.9 4-23.8 19.3-19.8 34.3 4 14.9 19.3 23.8 34.3 19.8l124.4-33.1 163.3 94.3-164.2 94.8-124.4-33.1c-15-4-30.3 4.9-34.3 19.8-4 15 4.9 30.3 19.8 34.3l70 18.7-88.9 51.4c-13.1 7.6-17.8 24.8-10.1 38.2 7.8 13.5 24.8 18 38.1 10.4l89.8-51.9-18.7 70c-4 14.9 4.8 30.3 19.8 34.3 14.9 4 30.3-4.8 34.3-19.8l33.6-124.3 163.3-94.3v190.6l-90.8 93c-11 11-10.9 28.7 0 39.6 11 11 28.7 10.9 39.6 0l51.2-51.2v99.9c0 15.1 12.5 27.8 28 27.8 15.6 0 28-12.5 28-27.8v-101l51.2 51.2c10.9 10.9 28.6 11 39.6 0 10.9-10.9 11-28.6 0-39.6l-90.8-93V560.2l165.1 95.3L740 780.6c4 15 19.4 23.8 34.3 19.8 15-4 23.8-19.4 19.8-34.3l-18.7-70 86.6 50c13.1 7.6 30.4 3 38.1-10.4 7.8-13.5 3.2-30.5-10.1-38.2L802.6 647l70-18.7c14.9-4 23.8-19.3 19.8-34.3-4-14.9-19.3-23.8-34.3-19.8l-125.9 32.2L568 511.6l165.1-95.3L859 448.5c15 4 30.3-4.9 34.3-19.8 4-15-4.9-30.3-19.8-34.3l-70-18.7 86.6-50c13.1-7.6 17.8-24.8 10.1-38.2-7.8-13.5-24.8-18-38.1-10.4l-87.4 50.5 18.7-70c4-14.9-4.8-30.3-19.8-34.3-14.9-4-30.3 4.8-34.3 19.8l-35.1 125.1-164.5 94.9z"></path>
                            </svg>
                            <span className="mx-2">Air conditioning</span>
                        </label>
                        <label className="border border-gray-400 p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                            <input type="checkbox" />
                            <svg
                                className="w-6 h-6"
                                width="20px"
                                height="20px"
                                fill="#000000"
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 470.061 470.061"
                                xmlSpace="preserve"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth={1.5}></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                        <g>
                                            <path
                                                d="M449.379,271.605H20.682C9.278,271.605,0,280.884,0,292.288v38.171c0,11.404,9.278,20.682,20.682,20.682h428.696 c11.404,0,20.683-9.277,20.683-20.682v-38.171C470.061,280.884,460.783,271.605,449.379,271.605z M61.918,283.605h303.65v55.535 H61.918V283.605z M49.918,339.141H36.959v-55.535h12.958L49.918,339.141L49.918,339.141z M12.001,330.459v-38.171 c0-4.787,3.895-8.683,8.682-8.683h4.277v55.535h-4.277C15.895,339.141,12.001,335.246,12.001,330.459z M458.061,330.459 c0,4.787-3.896,8.682-8.683,8.682h-71.811v-55.535h71.811c4.787,0,8.683,3.896,8.683,8.683V330.459z"
                                            ></path>
                                            <path
                                                d="M29.491,268.925c3.313,0,6-2.687,6-6v-16.884c0-5.799,8.173-10.883,17.49-10.883h41.108 c16.261,0,29.49-13.229,29.49-29.49v-14.682c0-9.644,7.846-17.49,17.49-17.49h57.257c16.261,0,29.49-12.241,29.49-27.288V124.92 c0-3.313-2.686-6-6-6c-3.313,0-6,2.687-6,6v21.288c0,8.43-7.846,15.288-17.49,15.288h-57.257c-16.261,0-29.49,13.229-29.49,29.49 v14.682c0,9.644-7.846,17.49-17.49,17.49H52.981c-16.261,0-29.49,10.266-29.49,22.883v16.884 C23.491,266.238,26.177,268.925,29.491,268.925z"
                                            ></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <span className="mx-2">Smoking</span>
                        </label>
                        <label className="border border-gray-400 p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                            <input type="checkbox" />
                            <svg
                                className="w-6 h-6"
                                width="20px"
                                height="20px"
                                fill="#000000"
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 512 512"
                                enableBackground="new 0 0 512 512"
                                xmlSpace="preserve"
                            >
                                <g id="SVGRepo_bgCarrier" stroke="1"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                        <path
                                            d="M256-0.5C114.333-0.5-0.5,114.333-0.5,256S114.333,512.5,256,512.5S512.5,397.667,512.5,256S397.667-0.5,256-0.5z M256,472.422C136.47,472.422,39.578,375.53,39.578,256C39.578,136.47,136.47,39.578,256,39.578 c119.53,0,216.422,96.892,216.422,216.422C472.422,375.53,375.53,472.422,256,472.422z"
                                        ></path>
                                        <path
                                            d="M133.48,236.619c-9.394,8.673-6.982,27.397,5.385,41.863c12.368,14.45,29.996,19.131,39.374,10.427 c9.378-8.643,6.967-27.397-5.401-41.832C160.47,232.642,142.842,227.945,133.48,236.619z"
                                        ></path>
                                        <path
                                            d="M338.833,243.757c-11.006,15.625-11.694,34.52-1.55,42.223c10.129,7.671,27.257,1.314,38.247-14.325 c10.99-15.593,11.679-34.473,1.55-42.191C366.95,221.777,349.808,228.18,338.833,243.757z"
                                        ></path>
                                        <path
                                            d="M226.129,240.125c16.517-3.977,25.111-28.65,19.179-55.107c-5.887-26.458-24.078-44.681-40.595-40.705 c-16.501,4.008-25.08,28.681-19.194,55.139C191.452,225.879,209.628,244.102,226.129,240.125z"
                                        ></path>
                                        <path
                                            d="M309.057,144.313c-16.501-3.977-34.677,14.247-40.595,40.705c-5.918,26.458,2.661,51.131,19.193,55.107 c16.485,3.976,34.677-14.247,40.595-40.673C334.184,172.995,325.558,148.321,309.057,144.313z"
                                        ></path>
                                        <path
                                            d="M256,262.513c-39.374,0-68.932,62.7-68.932,83.444c0,51.005,29.558-1.613,68.932-1.613c39.39,0,68.932,52.618,68.932,1.613 C324.932,325.213,295.39,262.513,256,262.513z"
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                            <span className="mx-2">Pets</span>
                        </label>
                    </div>
                </form>
            )}
        </div>
    )
}