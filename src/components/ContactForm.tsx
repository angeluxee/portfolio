import { useState } from "react";
// npm install react-hook-form @web3forms/react
import { useForm, SubmitHandler } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = () => {
  const { register, reset, handleSubmit } = useForm<FormData>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [result, setResult] = useState<string | null>(null);

  const accessKey = "79ac2d5b-1edc-436a-b1a6-cff1fc913eb4";
  console.log(isSuccess)
  const { submit: onSubmit } = useWeb3Forms<FormData>({
    access_key: accessKey,
    settings: {
      from_name: "PortFolio Personal",
      subject: "Nuevo mensaje a través del portfolio",
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  return (
    <div className="p-6 lg:p-0 my-20 w-full max-w-2xl lg:max-w-5xl xl:max-w-7xl m-auto flex flex-wrap gap-4" id="contact">
        <div>
            <header className="flex items-center gap-2 font-medium">
                <svg className="fill-titles h-6 w-6 lg:h-8 lg:w-8" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 513.07 515.83"><path d="M65.79 0h301.26c36.19 0 65.79 29.63 65.79 65.79v384.26c0 36.15-29.63 65.78-65.79 65.78H65.79C29.63 515.83 0 486.23 0 450.05V65.79C0 29.6 29.6 0 65.79 0zm386.16 337.23h46.62c1.76 0 3.42.29 5.06.87 2.13.75 3.86 1.84 5.29 3.27l-.01.01c1.48 1.46 2.58 3.23 3.28 5.25h-.01l.01.04c.58 1.67.88 3.38.88 5.06v67.94c0 1.18-.16 2.36-.48 3.56-.08.32-.17.65-.28.99-.66 1.97-1.72 3.68-3.14 5.11a13.582 13.582 0 01-3.5 2.55c-1.84.93-3.75 1.39-5.72 1.39h-48v-96.04zm0-254.67h46.63c2.17 0 4.2.47 6.15 1.38 2.21 1.04 3.93 2.47 5.29 4.29l-.03.02c1.05 1.41 1.84 2.88 2.35 4.49l-.05.01c.52 1.61.78 3.19.78 4.79v68.04c0 1.47-.27 2.94-.82 4.37-.2.58-.46 1.15-.76 1.71-.82 1.5-1.96 2.87-3.42 4-.75.61-1.55 1.12-2.39 1.55l-.01-.01-.04.01c-1.85.93-3.74 1.4-5.67 1.4h-48.01V82.56zm0 126.07l46.62.01c2.2 0 4.24.46 6.2 1.38l-.01.02c2.19 1.03 3.9 2.45 5.26 4.26l-.03.02c.92 1.24 1.63 2.51 2.12 3.82.64 1.7.96 3.39.96 5.07v68.44c0 1.97-.46 3.87-1.4 5.72a13.33 13.33 0 01-2.51 3.49l-.02-.02c-1.1 1.09-2.27 1.95-3.51 2.57l-.03-.04c-1.85.93-3.73 1.39-5.65 1.39h-48v-96.13zm-291.62 43.29c-4.91-7.72-14.06-18.32-14.06-27.5.22-6.08 4.16-11.41 9.91-13.41-.45-7.72-.76-15.59-.76-23.38 0-4.6 0-9.24.26-13.8.24-2.89.76-5.75 1.55-8.55a49.153 49.153 0 0121.95-27.88 64.81 64.81 0 0111.91-5.7c7.6-2.73 3.84-15.43 12.11-15.6 19.32-.5 51.08 17.18 63.47 30.6a49.034 49.034 0 0112.66 31.78l-.79 33.84c3.71.77 6.78 3.38 8.13 6.93 2.64 10.7-8.44 23.97-13.59 32.48-4.76 7.84-22.92 33.19-22.92 33.36 2.57 38.29 90.7 8.29 90.7 89.18H91.98c0-79.02 92.03-53.54 91.08-89.25 0-.5-20.87-30.02-22.73-33v-.1z"/></svg>
                <h3 className='text-titles lg:text-2xl'>Contact</h3>
            </header>
        </div>       
        <div className="w-full p-6 flex flex-wrap border border-gray-800 rounded-xl bg-gray-900/30 hover:bg-gray-900/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl">

            <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FormData>)} className="flex flex-col w-full lg:w-1/2 text-gray-300 gap-3">
                <label htmlFor="name">Name</label>
                <input className="rounded-md bg-gray-900 focus:bg-gray-800 p-2" type="text" placeholder="Name" {...register("name", { required: true })} />
                <label htmlFor="name">Email</label>
                <input className="rounded-md bg-gray-900 focus:bg-gray-800 p-2" type="email" placeholder="example@gmail.com" {...register("email", { required: true })} />
                <label htmlFor="name">Message</label>
                <textarea className="rounded-md bg-gray-900 focus:bg-gray-800 p-2" placeholder="Message" {...register("message", { required: true })}></textarea>

                <button 
                    className="rounded-md bg-gray-800 p-3 hover:bg-gray-700 text-gray-100 transition-colors font-medium mt-2 flex items-center justify-center"
                    type="submit"
                >
                    Submit
                </button>      
                <div className="text-white mt-4">{result}</div>
            </form>
            <div className="m-auto hidden lg:block">
                <svg className="fill-gray-300 h-32 w-32" viewBox="0 0 122.88 71.9"><g><path d="M29.56,0h88.02c1.57,0,2.95,0.64,3.9,1.67c0.96,1.03,1.5,2.46,1.38,4.03l-4.42,60.49c-0.09,1.18-0.53,2.28-1.22,3.2 c-0.14,0.3-0.33,0.57-0.59,0.8c-0.17,0.15-0.36,0.28-0.56,0.37c-1.05,0.83-2.36,1.33-3.74,1.33l-88.02,0 c-1.57,0-2.95-0.64-3.91-1.67c-0.96-1.03-1.49-2.46-1.38-4.03l1.25-10.18h4.37l-1.08,7.78l0,0l33.11-30.93L27.67,7.72l-0.29,3.93 H23l0.43-5.95c0.11-1.57,0.86-3,1.97-4.03C26.51,0.64,27.99,0,29.56,0L29.56,0L29.56,0z M2.19,49.78C0.98,49.78,0,48.8,0,47.59 c0-1.21,0.98-2.19,2.19-2.19h28.89c1.21,0,2.19,0.98,2.19,2.19c0,1.21-0.98,2.19-2.19,2.19H2.19L2.19,49.78z M13.02,36.22 c-1.21,0-2.19-0.98-2.19-2.19c0-1.21,0.98-2.19,2.19-2.19h25.06c1.21,0,2.19,0.98,2.19,2.19c0,1.21-0.98,2.19-2.19,2.19H13.02 L13.02,36.22z M2.19,22.66C0.98,22.66,0,21.68,0,20.47c0-1.21,0.98-2.19,2.19-2.19h28.89c1.21,0,2.19,0.98,2.19,2.19 c0,1.21-0.98,2.19-2.19,2.19H2.19L2.19,22.66z M59.87,35.64L25.74,67.52h85.53L83.2,35.64l-10.64,8.54l0,0 c-0.83,0.67-2.01,0.71-2.8,0.03L59.87,35.64L59.87,35.64L59.87,35.64z M86.74,32.81l27.5,31.23l4.13-56.6L86.74,32.81L86.74,32.81 L86.74,32.81z M30.71,4.37l40.73,35.31l44.03-35.31H30.71L30.71,4.37L30.71,4.37z"/></g></svg>
            </div>
        </div>
    </div>

  );
}
