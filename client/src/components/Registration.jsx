import emailjs from "emailjs-com";
import { useState } from "react";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [finalM, setfinalM] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  function handleChange(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  function sendEmail(e) {
    e.preventDefault();
    const rgExp = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;

    if (rgExp.test(email)) {
      if (name.length == 0) {
        setError(true);
      } else {
        setMessage("Email is Valid");
        setfinalM("Message was sent successfully");
        setError(false);
        emailjs
          .sendForm(
            "test123",
            "template_nbi58c7",
            e.target,
            "6Rv8j2Hq5xEQ8kKOX"
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.error(err));
      }
    } else if (email === "") {
      setMessage("Please Enter email");
      if (name.length == 0) {
        setError(true);
      }
    } else if (!rgExp.test(email)) {
      setMessage("Email is not valid");
      if (name.length == 0) {
        setError(true);
      }
    } else {
      setMessage("");
      if (name.length == 0) {
        setError(true);
      }
    }
  }
  return (
    <>
      <div className="w-[900px] font-cabin" id="Email">
        <form
          className="bg-white border-black  shadow-[14px_14px_5px_0px_rgba(152,131,131,0.6)] rounded-[50px] lg:px-10 px-4 py-10 mb-4  sm:text-base text-sm outline outline-[1px]"
          onSubmit={sendEmail}
        >
          <h1 className="text-3xl font-bold">
            Love to hear from you, <br />{" "}
            <div className="mt-2">Get in touch👋</div>
          </h1>

          <div className="mt-5 mb-4">
            <label className="block text-gray-700 text-[15px] mb-3">
              Your name
            </label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              className="shadow border rounded-[20px] bg-[#ECECEC] duration-200 ease-in-out w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none mb-1 focus:shadow-lg outline-none"
            />
            {error && name.length <= 0 ? (
              <label className="text-red-400 font-bold lg:text-sm text-xs">
                Name can't be empty
              </label>
            ) : (
              ""
            )}
          </div>

          <div className="mb-10">
            <label className="block text-gray-700 text-[15px] mb-3">
              Your E-mail
            </label>
            <input
              type="email"
              name="user_Email"
              onChange={(e) => setEmail(e.target.value)}
              className="shadow border rounded-[20px] bg-[#ECECEC] duration-200 ease-in-out w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-lg outline-none "
            />
            <div
              className={
                error
                  ? "text-red-400 font-regular font-bold mt-1 lg:text-sm text-xs"
                  : "text-emerald-600 font-regular font-bold mt-1 lg:text-sm text-xs"
              }
            >
              {message}
            </div>
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 text-[15px] mb-3">
              Message
            </label>
            <textarea
              rows={4}
              name="message"
              className="w-full bg-[#ECECEC] max-h-[175px] duration-200 ease-in-out px-3 py-2 rounded-[20px] shadow focus:shadow-md outline-none "
            />
            <input
              type="submit"
              value="Just send"
              className="flex justify-center w-full bg-black duration-200 ease-in-out py-2 px-3 mt-3 text-md  rounded-[20px] text-white hover:bg-gray-700 active:text-black"
            ></input>
            <div className="mt-2 text-emerald-600 font-bold text-sm">
              {finalM}{" "}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
