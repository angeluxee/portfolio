import { useState } from 'react';

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false); 
        }
    };

    return (
        <nav className='bg-gradient-to-b from-black to-transparent fixed top-0 left-0 w-full z-50'>
            <div className={`${isOpen ? 'bg-black/70' : ''} p-4 flex justify-between items-center w-full max-w-[900px] mx-auto px-6 sm:px-10`}>
                <button 
                    className='ml-auto sm:hidden'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <svg className="w-10 h-10 fill-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    ) : (
                        <svg className="w-10 h-10 fill-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        </svg>
                    )}
                </button>
                <ul className="hidden sm:flex space-x-6 font-roboto text-lg text-gray-300 ml-auto">
                    <li className="transition duration-500 hover:text-white">
                        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
                    </li>
                    <li className="transition duration-500 hover:text-white">
                        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
                    </li>
                    <li className="transition duration-500 hover:text-white">
                        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
                    </li>
                    <li className="transition duration-500 hover:text-white">
                        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
                    </li>
                </ul>
            </div>
            <div className={`fixed top-[72px] left-0 w-full transition-all duration-300 ease-in-out bg-black/70 backdrop-blur-sm transform ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible pointer-events-none'} sm:hidden`}>
                <ul className="space-y-2 font-semibold p-4 text-gray-300">
                    {['Home', 'Projects', 'About', 'Contact'].map(item => (
                        <li key={item}>
                            <a 
                                href={`#${item.toLowerCase()}`} 
                                className="block w-full p-2 transition duration-300 hover:text-white hover:bg-white/10 rounded"
                                onClick={(e) => { e.preventDefault(); scrollToSection(item.toLowerCase()); }}>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
