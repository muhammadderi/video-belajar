import { useEffect, useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../services/videosApi";
import useUserLogin from "../../zustand/User";
import { toast } from "react-toastify";

const Login = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [users, setUsers] = useState([]);
  const { setUserLogin } = useUserLogin();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        throw new Error("tidak ada data", error.message);
      }
    };

    fetchData();
  }, []);

  const handleUserLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) => data.email === u.email && data.password === u.password
    );

    if (user) {
      setUserLogin(user);
      toast.success("Login berhasil");
      navigate("/");
    } else {
      toast.error("User atau kata sandi tidak sesuai!");
    }
  };

  return (
    <div>
      <nav className="flex justify-start items-center py-5 px-10 shadow-sm">
        <img src="./logo.png" alt="logo" onClick={() => navigate("/")} />
      </nav>

      <main className="md:p-10 flex justify-center items-center my-5">
        <div className="md:w-1/2 w-full h-screen md:h-fit shadow-lg p-6 rounded-lg">
          <div className="flex flex-col justify-center items-center mb-6">
            <h1 className="font-bold text-2xl">Masuk Ke Akun</h1>
            <p>Yuk, lanjutin belajarmu di videobelajar.</p>
          </div>

          <form className="flex flex-col gap-4" onSubmit={handleUserLogin}>
            <Input
              type="email"
              label="E-Mail"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <div className="relative px-5 ">
              <label htmlFor="">
                Kata Sandi
                <sup className="text-red-500">*</sup>
              </label>
              <div>
                <input
                  type={show ? "text" : "password"}
                  className=" w-full border border-md p-2 rounded-md"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-9 top-2/3 transform -translate-y-1/2 text-gray-500"
                >
                  {show ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <a href="/forgotPassword">
              <h1 className="text-right text-gray-500 px-5 hover:font-bold">
                Lupa Password?
              </h1>
            </a>
            <div className="px-5">
              <Button
                text={"Daftar"}
                type={"submit"}
                className={
                  "bg-[#3ECF4C] rounded-md text-white py-2 w-full font-medium hover:bg-white hover:text-[#3ECF4C] hover:border"
                }
              />
              <Button
                text={"Masuk"}
                className={
                  "bg-[#E2FCD9CC] rounded-md text-[#3ECF4C] py-2 w-full font-medium my-4 hover:bg-[#3ECF4C] hover:text-white"
                }
              />
              <div className="flex items-center my-2">
                <hr className="flex flex-grow border-t border-gray-300" />
                <span>atau</span>
                <hr className="flex flex-grow border-t border-gray-300" />
              </div>
              <Button
                text={"Google"}
                className={
                  "border border-gray-300 rounded-md hover:bg-[#3ECF4C] hover:text-white py-2 w-full font-medium my-4 flex justify-center items-center gap-2"
                }
                img={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                }
              />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
