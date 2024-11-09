export const Home = () => {
    return (
        <div className='min-h-auto pb-10 bg-black relative overflow-hidden border-b-2 border-gray-300 lg:pt-10' id="home">
            <div 
                className='absolute top-0 left-1/2 -translate-x-1/2 w-[200%] z-0 h-[600px] '
                style={{
                    background: `radial-gradient(circle at top, 
                        rgb(17, 24, 39) 10%,
                        rgba(17, 24, 39, 0.7) 30%,
                        rgba(17, 24, 39, 0.3) 45%,
                        transparent 60%
                    )`
                }}
            />
            <div className="relative z-10 pt-28 space-y-3 font-roboto p-10 text-center flex flex-col items-center">
                <div className="flex pb-2">
                    <a 
                        className="bg-black border-2 border-gray-300 text-gray-300 p-3 px-5 rounded-full flex items-center gap-1 transform transition-transform duration-300 hover:scale-110 hover:bg-gray lg:p-4 lg:px-6 lg:text-xl"
                        download
                        href="/angel_cv_en.pdf"
                        >
                        <svg
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            viewBox="0 0 441 512.02"
                            className="fill-gray-300 h-4 w-4 lg:h-6 lg:w-6"
                        >
                            <path d="M324.87 279.77c32.01 0 61.01 13.01 82.03 34.02 21.09 21 34.1 50.05 34.1 82.1 0 32.06-13.01 61.11-34.02 82.11l-1.32 1.22c-20.92 20.29-49.41 32.8-80.79 32.8-32.06 0-61.1-13.01-82.1-34.02-21.01-21-34.02-50.05-34.02-82.11s13.01-61.1 34.02-82.1c21-21.01 50.04-34.02 82.1-34.02zM243.11 38.08v54.18c.99 12.93 5.5 23.09 13.42 29.85 8.2 7.01 20.46 10.94 36.69 11.23l37.92-.04-88.03-95.22zm91.21 120.49-41.3-.04c-22.49-.35-40.21-6.4-52.9-17.24-13.23-11.31-20.68-27.35-22.19-47.23l-.11-1.74V25.29H62.87c-10.34 0-19.75 4.23-26.55 11.03-6.8 6.8-11.03 16.21-11.03 26.55v336.49c0 10.3 4.25 19.71 11.06 26.52 6.8 6.8 16.22 11.05 26.52 11.05h119.41c2.54 8.79 5.87 17.25 9.92 25.29H62.87c-17.28 0-33.02-7.08-44.41-18.46C7.08 432.37 0 416.64 0 399.36V62.87c0-17.26 7.08-32.98 18.45-44.36C29.89 7.08 45.61 0 62.87 0h173.88c4.11 0 7.76 1.96 10.07 5l109.39 118.34c2.24 2.43 3.34 5.49 3.34 8.55l.03 119.72c-8.18-1.97-16.62-3.25-25.26-3.79v-89.25zm-229.76 54.49c-6.98 0-12.64-5.66-12.64-12.64 0-6.99 5.66-12.65 12.64-12.65h150.49c6.98 0 12.65 5.66 12.65 12.65 0 6.98-5.67 12.64-12.65 12.64H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h142.52c3.71 0 7.05 1.6 9.37 4.15a149.03 149.03 0 0 0-30.54 21.14H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h86.2c-3.82 8.05-6.95 16.51-9.29 25.29h-76.91zm191.81 13.82c.1-2.48 1.69-4.64 4.03-5.45-.28-4.71-.85-11.81.43-16.35 1.45-4.75 4.63-8.79 8.92-11.32 1.52-.94 3.15-1.72 4.84-2.32 3.08-1.1 1.55-6.27 4.91-6.34 7.85-.2 20.77 6.99 25.79 12.44 3.21 3.54 5.04 8.13 5.14 12.92l-.32 11.51c1.51.31 2.76 1.36 3.31 2.81 1.68 6.77-14.84 22.77-14.84 24.49.04.58.27 1.14.66 1.59 11.45 15.75 42.33 8.72 42.33 40.03H268.19c0-31.32 30.88-24.27 42.32-40.02.56-.82.82-1.28.81-1.63 0-1.54-14.95-16.83-14.95-22.36z" />
                        </svg>
                        Download CV
                        <svg className="fill-gray-300 h-4 w-4 lg:h-6 lg:w-6" viewBox="0 0 24 24">
                            <path d="M13 17.586V4h-2v13.586l-6.293-6.293-1.414 1.414L12 21.414l8.707-8.707-1.414-1.414L13 17.586z" />
                        </svg>
                        </a>
                </div>
                <h1 className="text-gray-300 text-5xl lg:text-7xl">Full-Stack developer</h1>
                <h2 className="text-gray-300 text-5xl lg:text-7xl font-semibold">Angel Camuña</h2>
                <p className="text-gray-300 lg:text-xl pt-4 pb-2">Hi, I'm Ángel 👋 Currently seeking new opportunities.</p>
                <div className="flex gap-3">
                    {[
                        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/angel-camu%C3%B1a-705b192b1/' },
                        { name: 'GitHub', url: 'https://github.com/angeluxee' }
                    ].map((item, index) => (
                        <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="bg-black border-2 border-gray-300 text-gray-300 p-2 px-4 rounded-full flex items-center gap-1 transform transition-transform duration-300 hover:scale-110 lg:p-3 lg:px-5 lg:text-xl">
                            {item.name} 
                            {/* <svg className="fill-gray-300 h-4 w-4 ml-1 lg:w-6 lg:h-5" viewBox="0 0 24 24">
                                <path d="M11.293 4.707L17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/>
                            </svg> */}
                            <svg viewBox="0 0 24 24" className="fill-gray-300 h-4 w-4 ml-1 lg:w-6 lg:h-5" ><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};