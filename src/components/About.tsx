import Angel from '../assets/angel.png'

export const About = () => {
    return (
        <section className="p-6 lg:p-0 flex flex-col gap-4 w-full max-w-2xl lg:max-w-5xl xl:max-w-7xl m-auto mt-20" id="about">
            <header className="flex items-center gap-2 font-medium">
                <svg className="fill-titles h-6 w-6 lg:h-8 lg:w-8" viewBox="0 0 512 512">
                    <path fillRule="nonzero" d="M256 0c70.69 0 134.7 28.66 181.02 74.98C483.34 121.31 512 185.31 512 256c0 70.69-28.66 134.7-74.98 181.02C390.7 483.34 326.69 512 256 512c-70.69 0-134.7-28.66-181.02-74.98C28.66 390.7 0 326.69 0 256c0-70.69 28.66-134.69 74.98-181.02C121.3 28.66 185.31 0 256 0zm17.75 342.25h29.15v29.32h-93.79v-29.32h28.76v-92.34h-28.76v-29.32h64.64v121.66zm-27.94-150.37c-7.08-.05-13.12-2.53-18.2-7.56-5.08-5.01-7.56-11.11-7.56-18.25 0-7.01 2.48-13.06 7.56-18.08 5.08-5.02 11.12-7.55 18.2-7.55 6.95 0 12.99 2.53 18.08 7.55 5.13 5.02 7.67 11.07 7.67 18.08 0 4.72-1.2 9.07-3.56 12.94-2.36 3.93-5.45 7.07-9.31 9.37-3.87 2.3-8.17 3.45-12.88 3.5zm171.9-97.59C376.33 52.92 319.15 27.32 256 27.32c-63.15 0-120.33 25.6-161.71 66.97C52.92 135.68 27.32 192.85 27.32 256c0 63.15 25.6 120.33 66.97 161.71 41.38 41.37 98.56 66.97 161.71 66.97 63.15 0 120.33-25.6 161.71-66.97 41.37-41.38 66.97-98.56 66.97-161.71 0-63.15-25.6-120.32-66.97-161.71z" />
                </svg>
                <h3 className='text-titles lg:text-2xl'>About</h3>
            </header>
            
            <hr className="h-[1px] bg-titles w-full" />
            
            <article className="text-white lg:text-lg mt-4 relative">
                <img 
                    className="float-left rounded-full w-48 h-48 object-cover border-2 border-titles mr-6 mb-4 [shape-outside:circle(50%)]"
                    src={Angel}
                    alt="Àngel Camuña's avatar"
                />
                <div>
                    <p className='mb-4'>Hello! I'm Àngel Camuña. As a developer, I constantly strive to learn and stay updated. Recently, I completed my second year of studies in Web Application Development, and I'm now focused on enhancing my skills in technologies like JavaScript, React, Python, and frameworks such as Flask and Django.</p>
                    <p className='mb-4'>I'm actively seeking my first role as a developer to launch and grow my career. Feel free to reach out!</p>
                    <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi nesciunt numquam id nulla aliquam natus similique voluptatem iste ut doloribus sequi quaerat pariatur, magni, aliquid adipisci fugiat. Id, quae!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi nesciunt numquam id nulla aliquam natus similique voluptatem iste ut doloribus sequi quaerat pariatur, magni, aliquid adipisci fugiat. Id, quae!</p>
                </div>
            </article>
        </section>
    );
};