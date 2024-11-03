export const Home = () => {
    return (
        <div className='min-h-auto pb-10 bg-black relative overflow-hidden border-b-2 border-gray-300' id="home">
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
                        className="bg-black border-2 border-gray-300 text-gray-300 p-2 px-4 rounded-full flex items-center gap-1 transform transition-transform duration-300 hover:scale-110 hover:bg-gray"
                        download
                        href="/angel_cv_en.pdf"
                        > 
                        <svg viewBox="0 0 111.87 122.88" className="h-4 fill-white">
                            <defs>
                                <style>{".cls-1{fill-rule:evenodd;}"}</style>
                            </defs>
                            <path
                                className="cls-1"
                                d="M56.75,113.57V75.07a9.34,9.34,0,0,1,9.31-9.31h36.5a9.34,9.34,0,0,1,9.31,9.31v38.5a9.34,9.34,0,0,1-9.31,9.31H66.06a9.34,9.34,0,0,1-9.31-9.31Zm2.74-102.1L79.08,29.82H59.49V11.47ZM20.72,69.38a2.12,2.12,0,0,0-2,2.21,2.08,2.08,0,0,0,2,2.21H45.3V69.38Zm0,15.83a2.12,2.12,0,0,0-2,2.21,2.08,2.08,0,0,0,2,2.21H45.3V85.21Zm0-47.5a2.12,2.12,0,0,0-2,2.21,2.09,2.09,0,0,0,2,2.21H43.45a2.12,2.12,0,0,0,2-2.21,2.1,2.1,0,0,0-2-2.21Zm0-15.83a2.12,2.12,0,0,0-2,2.21,2.08,2.08,0,0,0,2,2.21h12.5a2.12,2.12,0,0,0,2-2.21,2.09,2.09,0,0,0-2-2.21Zm0,31.67a2.12,2.12,0,0,0-2,2.21,2.1,2.1,0,0,0,2,2.21H59.16a2.13,2.13,0,0,0,2-2.21,2.09,2.09,0,0,0-2-2.21ZM90,32.45a3.26,3.26,0,0,0-2.37-3.14L58.74,1.2A3.21,3.21,0,0,0,56.23,0H5.87A5.86,5.86,0,0,0,0,5.86V106.25a5.84,5.84,0,0,0,1.72,4.15,5.91,5.91,0,0,0,4.15,1.71H45.39v-6.55H6.55v-99H52.94V33.08a3.29,3.29,0,0,0,3.29,3.29h27.2V57.82H90V32.45ZM77.73,94.75c-.58-.9-1.65-2.15-1.65-3.22A1.72,1.72,0,0,1,77.24,90c0-.9-.09-1.83-.09-2.74,0-.54,0-1.09,0-1.62a5.51,5.51,0,0,1,.18-1,5.74,5.74,0,0,1,2.58-3.28,7.83,7.83,0,0,1,1.4-.67c.89-.32.45-1.81,1.42-1.83,2.27-.06,6,2,7.45,3.59a5.79,5.79,0,0,1,1.48,3.73l-.09,4a1.27,1.27,0,0,1,1,.81c.31,1.26-1,2.81-1.59,3.81s-2.69,3.9-2.69,3.92a.79.79,0,0,0,.19.46c3.31,4.55,13,1.68,13,10.72H67.13c0-9,9.72-6.17,13-10.72.16-.24.24-.37.23-.47s-2.45-3.53-2.66-3.87v0Z"
                            />
                        </svg>
                        Dowload CV
                        <svg className="fill-gray-300 h-4 w-4" viewBox="0 0 24 24">
                            <path d="M13 17.586V4h-2v13.586l-6.293-6.293-1.414 1.414L12 21.414l8.707-8.707-1.414-1.414L13 17.586z"/>
                        </svg> 
                    </a>
                </div>
                <h1 className="text-gray-300 text-5xl">Full-Stack developer</h1>
                <h2 className="text-gray-300 text-5xl font-semibold">Angel Camuña</h2>
                <p className="text-gray-300 pt-4 pb-2">Hi, I'm Ángel 👋 Currently seeking new opportunities.</p>
                <div className="flex gap-3">
                    {[
                        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/angel-camu%C3%B1a-705b192b1/' },
                        { name: 'GitHub', url: 'https://github.com/angeluxee' }
                    ].map((item, index) => (
                        <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="bg-black border-2 border-gray-300 text-gray-300 p-2 px-4 rounded-full flex items-center gap-1 transform transition-transform duration-300 hover:scale-110">
                            {item.name} 
                            <svg className="fill-gray-300 h-4 w-4 ml-1" viewBox="0 0 24 24">
                                <path d="M11.293 4.707L17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/>
                            </svg>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};