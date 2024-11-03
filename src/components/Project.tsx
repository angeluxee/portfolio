import { useState } from "react";

interface ProjectProps {
    title: string;
    text: string;
    photo: string;
    skills: string[];
    github: string;
    gitlab: string;
    deploy: string;
}

export const Project = ({ title, text, photo, skills, github, gitlab, deploy }: ProjectProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='pt-4 space-y-2 '>
            <div className="flex items-center">
                <h4 className='text-white text-2xl'>{title}</h4>
                <div className="flex ml-auto gap-2">
                    {github && (
                        <a 
                            className="bg-black border-2 border-gray-300 text-gray-300 p-1 rounded-lg flex items-center gap-1 transform transition-transform duration-300 hover:scale-110 hover:bg-gray"
                            href={github}
                        > 
                            <svg 
                                className="h-8 w-8 fill-white" 
                                viewBox="0 0 640 640"
                            >
                                <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"/>
                            </svg>
                        </a>
                    )}

                    {gitlab && (
                        <a 
                        className="bg-black border-2 border-gray-300 text-gray-300 p-1 rounded-lg flex items-center gap-1 transform transition-transform duration-300 hover:scale-110 hover:bg-gray"
                        href={deploy}
                        > 
                            <svg 
                            viewBox="0 0 122.88 113.2" 
                            className="w-8 h-8"
                            >
                            <g>
                                <path className="st0" fill="#EC672A" d="M122.65,64.72l-6.89-21.15L102.15,1.61c-0.7-2.15-3.74-2.15-4.47,0L84.06,43.54H38.81L25.19,1.61 c-0.7-2.15-3.74-2.15-4.47,0L7.13,43.54L0.24,64.72c-0.62,1.92,0.05,4.04,1.7,5.24l59.5,43.23l59.5-43.23 C122.58,68.77,123.28,66.65,122.65,64.72L122.65,64.72z"/>
                                <polygon className="st1" fill="#DD3E2A" points="61.45,113.17 61.45,113.17 84.08,43.54 38.82,43.54 61.45,113.17 61.45,113.17"/>
                                <polygon className="st0" fill="#EC672A" points="61.43,113.17 38.81,43.54 7.13,43.54 61.43,113.17 61.43,113.17"/>
                                <path className="st2" fill="#F6A420" d="M7.11,43.56L7.11,43.56L0.23,64.72c-0.62,1.92,0.05,4.04,1.7,5.24l59.5,43.23L7.11,43.56L7.11,43.56 L7.11,43.56z"/>
                                <path className="st1" fill="#DD3E2A" d="M7.12,43.56h31.71L25.18,1.63c-0.7-2.15-3.74-2.15-4.47,0L7.12,43.56L7.12,43.56L7.12,43.56z"/>
                                <polygon className="st0" fill="#EC672A" points="61.45,113.17 84.08,43.54 115.79,43.54 61.45,113.17 61.45,113.17"/>
                                <path className="st2" fill="#F6A420" d="M115.76,43.56L115.76,43.56l6.89,21.15c0.62,1.92-0.05,4.04-1.7,5.24l-59.5,43.21L115.76,43.56L115.76,43.56 L115.76,43.56z"/>
                                <path className="st1" fill="#DD3E2A" d="M115.78,43.56H84.07L97.69,1.63c0.7-2.15,3.74-2.15,4.47,0L115.78,43.56L115.78,43.56L115.78,43.56z"/>
                            </g>
                            </svg>
                        </a>           
                    )}
                    {deploy && (
                        <a 
                        className="bg-black border-2 border-gray-300 text-gray-300 p-1 rounded-lg flex items-center gap-1 transform transition-transform duration-300 hover:scale-110 hover:bg-gray"
                        href={deploy}
                        > 
                            <svg 
                                viewBox="0 0 122.879 122.879" 
                                className="w-8 h-8 fill-white"
                            >
                                <path d="M109.465,89.503c0.182,0,0.359,0.019,0.533,0.053c1.146-1.998,2.191-4.095,3.135-6.286 c0.018-0.044,0.037-0.086,0.059-0.128c1.418-3.345,2.488-6.819,3.209-10.419c0.559-2.793,0.904-5.657,1.035-8.591h-16.893 c-0.307,8.574-2.867,17.03-7.639,25.371H109.465L109.465,89.503z M106.52,94.889H89.506c-5.164,7.481-12.121,14.87-20.838,22.167 c1.367-0.17,2.719-0.388,4.055-0.655c3.646-0.729,7.164-1.817,10.549-3.264l-0.002-0.004c3.441-1.48,6.646-3.212,9.609-5.199 c2.969-1.992,5.721-4.255,8.25-6.795l0.01-0.01l0,0C103.096,99.18,104.889,97.099,106.52,94.889L106.52,94.889z M54.21,117.055 c-8.716-7.296-15.673-14.685-20.838-22.166H16.361c1.631,2.21,3.423,4.291,5.379,6.24l0.01,0.011v-0.001 c2.53,2.54,5.282,4.803,8.25,6.795c2.962,1.987,6.167,3.719,9.609,5.199c0.043,0.019,0.086,0.038,0.128,0.059 c3.345,1.419,6.819,2.488,10.42,3.209C51.493,116.668,52.843,116.886,54.21,117.055L54.21,117.055z M12.852,89.503h17.122 c-4.771-8.341-7.332-16.797-7.637-25.371H5.445c0.13,2.934,0.475,5.797,1.034,8.59c0.729,3.646,1.818,7.164,3.264,10.549 l0.004-0.001C10.682,85.442,11.716,87.521,12.852,89.503L12.852,89.503z M5.445,58.747h16.997c0.625-8.4,3.412-16.857,8.407-25.371 H12.852c-1.136,1.982-2.17,4.061-3.105,6.234c-0.019,0.043-0.039,0.086-0.059,0.127C8.269,43.083,7.2,46.557,6.479,50.157 C5.92,52.95,5.575,55.814,5.445,58.747L5.445,58.747z M16.361,27.991h17.938c5.108-7.361,11.862-14.765,20.29-22.212 c-1.496,0.175-2.973,0.408-4.431,0.7c-3.647,0.729-7.164,1.818-10.549,3.264l0.001,0.003c-3.442,1.481-6.647,3.212-9.609,5.2 c-2.968,1.992-5.72,4.255-8.25,6.794l-0.011,0.01h0C19.784,23.7,17.992,25.78,16.361,27.991L16.361,27.991z M68.289,5.778 c8.428,7.447,15.182,14.851,20.291,22.212h17.939c-1.631-2.21-3.424-4.291-5.381-6.24l-0.01-0.01l0,0 c-2.529-2.54-5.281-4.802-8.25-6.794c-2.963-1.988-6.168-3.719-9.609-5.2c-0.043-0.018-0.086-0.038-0.127-0.059 c-3.346-1.418-6.82-2.488-10.42-3.208C71.264,6.187,69.785,5.954,68.289,5.778L68.289,5.778z M110.027,33.376H92.029 c4.996,8.514,7.783,16.971,8.408,25.371h16.998c-0.131-2.934-0.477-5.797-1.035-8.59c-0.73-3.646-1.818-7.164-3.264-10.549 l-0.004,0.002C112.197,37.437,111.164,35.358,110.027,33.376L110.027,33.376z M49.106,1.198C53.098,0.399,57.21,0,61.44,0 c4.23,0,8.341,0.399,12.333,1.198c3.934,0.788,7.758,1.97,11.473,3.547c0.051,0.018,0.1,0.037,0.148,0.058 c3.703,1.594,7.197,3.485,10.471,5.684c3.268,2.192,6.291,4.677,9.066,7.462c2.785,2.775,5.27,5.799,7.461,9.065 c2.197,3.275,4.09,6.768,5.684,10.473l-0.004,0.001l0.004,0.009c1.607,3.758,2.809,7.628,3.605,11.609 c0.799,3.992,1.197,8.104,1.197,12.334c0,4.23-0.398,8.343-1.197,12.335c-0.787,3.932-1.971,7.758-3.547,11.472 c-0.018,0.05-0.037,0.099-0.059,0.147c-1.594,3.705-3.486,7.197-5.684,10.472c-2.191,3.267-4.676,6.29-7.461,9.065 c-2.775,2.785-5.799,5.271-9.066,7.462c-3.273,2.198-6.768,4.091-10.471,5.684l-0.002-0.004l-0.01,0.004 c-3.758,1.606-7.629,2.808-11.609,3.604c-3.992,0.799-8.104,1.198-12.333,1.198c-4.229,0-8.342-0.399-12.334-1.198 c-3.933-0.787-7.758-1.97-11.474-3.546c-0.049-0.019-0.098-0.037-0.147-0.059c-3.705-1.593-7.197-3.485-10.472-5.684 c-3.266-2.191-6.29-4.677-9.065-7.462c-2.785-2.775-5.27-5.799-7.461-9.065c-2.198-3.274-4.09-6.767-5.684-10.472l0.004-0.002 l-0.004-0.009c-1.606-3.758-2.808-7.628-3.604-11.609C0.4,69.782,0,65.67,0,61.439c0-4.229,0.4-8.342,1.199-12.334 c0.787-3.933,1.97-7.758,3.546-11.473c0.018-0.049,0.037-0.099,0.058-0.147c1.594-3.705,3.485-7.198,5.684-10.473 c2.192-3.266,4.677-6.29,7.461-9.065c2.775-2.785,5.799-5.27,9.065-7.462c3.275-2.198,6.768-4.09,10.472-5.684l0.001,0.004 l0.009-0.004C41.254,3.197,45.125,1.995,49.106,1.198L49.106,1.198z M64.133,9.268v18.723h17.826 C77.275,21.815,71.34,15.575,64.133,9.268L64.133,9.268z M64.133,33.376v25.371h30.922c-0.699-8.332-3.789-16.788-9.318-25.371 H64.133L64.133,33.376z M64.133,64.132v25.371h22.51c5.328-8.396,8.189-16.854,8.531-25.371H64.133L64.133,64.132z M64.133,94.889 v18.952c7.645-6.283,13.902-12.601,18.746-18.952H64.133L64.133,94.889z M58.747,113.843V94.889H40 C44.843,101.24,51.1,107.559,58.747,113.843L58.747,113.843z M58.747,89.503V64.132H27.706c0.341,8.518,3.201,16.975,8.531,25.371 H58.747L58.747,89.503z M58.747,58.747V33.376H37.143c-5.529,8.583-8.619,17.04-9.319,25.371H58.747L58.747,58.747z M58.747,27.991 V9.266C51.54,15.573,45.604,21.815,40.92,27.991H58.747L58.747,27.991z"/>
                            </svg>
                        </a>
                    )}

                </div>
            </div>
            <p className='text-gray-300 font-normal'>
                {text.length > 120 ? (
                    isExpanded ? (
                        <>
                            {text}
                            <span className="cursor-pointer text-blue-400" onClick={toggleExpand}> See Less</span>
                        </>
                    ) : (
                        <>
                            {text.substring(0, 120)}...
                            <span className="cursor-pointer text-blue-400" onClick={toggleExpand}> See More</span>
                        </>
                    )
                ) : (
                    text
                )}
            </p>
            <img className='rounded-lg' src={photo} alt={title} />
            <div className="flex gap-2 flex-wrap justify-center pt-3 pb-6">
                {skills.map((skill, index) => (
                    <span key={index} className="bg-black border-2 border-gray-500 font-thin text-xs text-gray-300 p-2 px-4 rounded-full flex items-center gap-1 transform transition-transform duration-300 hover:scale-110">
                        {skill}
                    </span>
                ))}

            </div>
        </div>
    );
};
