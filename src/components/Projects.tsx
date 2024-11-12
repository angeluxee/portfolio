import taskflow from '../assets/TaskFlow.webp';
import livechatgpt from '../assets/livechatgpt.webp';
import portfolio from '../assets/portfolio.webp';
import { Project } from './Project';

export const Projects = () => {

    return (
        <div className="p-6 lg:p-0 font-medium flex flex-col lg:pt-20" id='projects'>
            <div className='flex flex-col gap-10 mt-5 w-full max-w-2xl lg:max-w-5xl xl:max-w-7xl m-auto'>
                <div className="flex gap-2 items-center ">
                    <svg
                        className="fill-titles h-6 w-6 lg:h-8 lg:w-8"
                        viewBox="0 0 512 336.62"
                    >
                        <path
                            fillRule="nonzero"
                            d="M23.09 0h465.82C501.58 0 512 10.42 512 23.09v290.44c0 12.67-10.42 23.09-23.09 23.09H23.09C10.42 336.62 0 326.2 0 313.53V23.09C0 10.42 10.42 0 23.09 0zm220.86 180.16c-13.75 0-13.75-25.1 0-25.1h206.92c13.75 0 13.73 25.1 0 25.1H243.95zm153.16 51.29c-13.74 0-13.74-25.1 0-25.1h53.76c13.74 0 13.74 25.1 0 25.1h-53.76zm-153.16 0c-13.75 0-13.75-25.1 0-25.1h113.27c13.74 0 13.74 25.1 0 25.1H243.95zm.01 51.39c-13.76 0-13.75-25.09 0-25.09h207.13c13.74 0 13.74 25.09 0 25.09H243.96zM56.9 50.03h308.78c4.43 0 8.06 3.64 8.06 8.07v42.81c0 4.42-3.64 8.06-8.06 8.06H56.9c-4.43 0-8.07-3.62-8.07-8.06V58.1c0-4.44 3.63-8.07 8.07-8.07zm351.76 0h46.44c4.44 0 8.07 3.64 8.07 8.07v42.81c0 4.42-3.64 8.06-8.07 8.06h-46.44c-4.43 0-8.07-3.62-8.07-8.06V58.1c0-4.44 3.63-8.07 8.07-8.07zM52.72 282.84c-2.41 0-2.44-2.45-2.01-4.16 3.62-28.69 14.71-27.68 30.62-31.78 7.65-1.97 25.12-9.64 23.27-19.53-3.85-3.57-7.68-8.5-8.35-15.87l-.46.01c-1.07-.02-2.1-.26-3.06-.81-2.13-1.21-3.29-3.52-3.86-6.17-.55-2.61-.69-7.7 0-10.31.74-2.07 1.66-3.19 2.83-3.68l.03-.01c-.53-9.96 1.15-20.56-9.07-23.66 20.19-24.95 43.46-38.52 60.94-16.32 19.47 1.02 28.15 24.55 16.06 39.99h-.51c1.62.68 2.52 2.56 2.96 4.17.34 2.5.58 6.48-.14 9.82-.55 2.65-1.72 4.96-3.85 6.17-.96.55-1.99.79-3.06.81l-.47-.01c-.66 7.37-4.5 12.3-8.35 15.87-1.85 9.9 15.64 17.56 23.29 19.53 15.92 4.09 27.02 3.09 30.64 31.78.42 1.71.39 4.16-2.02 4.16H52.72zM488.91 16.43H23.09c-3.69 0-6.66 2.97-6.66 6.66v290.44c0 3.69 2.97 6.66 6.66 6.66h465.82c3.69 0 6.66-2.97 6.66-6.66V23.09c0-3.69-2.97-6.66-6.66-6.66z"
                        />
                    </svg>
                    <h3 className='text-titles lg:text-2xl'> Personal Projects </h3>
                </div>
            <Project 
                title="Taskflow" 
                text="A simplified Trello-style application, developed using Flask for the backend, React for the frontend, JWT for authentication, and MongoDB for data storage. It allows users to register, create, and manage boards with lists and tasks, offering a visual organization experience similar to Trello." 
                photo={taskflow} 
                skills={['React', 'Flask', 'MongoDB', 'JWT', 'Tailwind CSS', 'Python', 'JavaScript']}
                github='https://github.com/angeluxee/taskflow'
                gitlab='https://gitlab.com/devluxe/taskflow'
                deploy='https://taskflow-frontend-eta.vercel.app/'
            />
            
            <Project 
                title="LiveChat GPT" 
                text="A real-time chat application developed with Node.js, Express, Socket.IO, MongoDB, and Docker. It allows interaction between users and optionally with an artificial intelligence model (ChatGPT)." 
                photo={livechatgpt} 
                skills={['Node.js', 'Socket.io', 'Express.js', 'MongoDB', 'Docker', 'HTML5', 'CSS']} 
                github='https://github.com/angeluxee/LiveChat-GPT'
                gitlab='https://gitlab.com/devluxe/livechat-gpt'
                deploy=''
            />
            <Project 
                title="Laravel Netflix 'Clone'" 
                text="Netflix-style web application for consuming multimedia content (series and movies) developed with PHP Laravel and MySQL." 
                photo={'https://www.jacksonsquareshopping.co.uk/wp-content/uploads/2016/12/placeholder-1920x1080-copy.png'} 
                skills={['Laravel', 'MySQL', 'Docker', 'PHP', 'jQuery']} 
                github='https://github.com/angeluxee/Laravel-Netflix-Clone'
                gitlab='https://gitlab.com/devluxe/laravel-netflix-clone'
                deploy=''
            />
            <Project 
                title="Personal Portfolio" 
                text="My personal portfolio developed with react" 
                photo={portfolio} 
                skills={['React', 'TypeScript']} 
                github='https://github.com/angeluxee/portfolio'
                gitlab=''
                deploy=''
            />
            </div>
        </div>
    );
};
