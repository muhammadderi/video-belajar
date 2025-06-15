import { useEffect, useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { forgotPassword, getUsers } from "../../services/videosApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [show, setShow] = useState(false);
  const [datas, setDatas] = useState([]);
  const [users, setUsers] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsers();
        setDatas(data);
      } catch (error) {
        console.log("Gagal ambil data users", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleReset = async (e) => {
    e.preventDefault();

    const existingUser = datas.find((user) => user.email === users.email);

    if (existingUser && existingUser.password === users.password) {
      toast.error("Kata sandi sudah pernah digunakan");
      return;
    }

    try {
      await forgotPassword({ email: users.email, password: users.password });
      toast.success("Password berhasil di perbarui");
    } catch (error) {
      toast.error("Gagal reset password");
    }
  };

  return (
    <div>
      <nav className="flex justify-start items-center py-5 px-10 shadow-sm">
        <img src="./logo.png" alt="logo" onClick={() => navigate("/")} />
      </nav>

      <main className="md:p-10 flex justify-center items-center my-5">
        <div className="md:w-1/2 shadow-lg p-6 rounded-lg">
          <div className="flex flex-col justify-center items-center mb-6">
            <h1 className="font-bold text-2xl">Lupa Kata Sandi</h1>
            <p>Silahkan masukkan email dan kata sandi baru mu!</p>
          </div>

          <form className="flex flex-col gap-4" onSubmit={handleReset}>
            <Input
              type="text"
              label="E-Mail"
              onChange={handleChange}
              name="email"
            />

            <div className="relative px-5 ">
              <label htmlFor="">
                Kata Sandi Terbaru
                <sup className="text-red-500">*</sup>
              </label>
              <div>
                <input
                  type={show ? "text" : "password"}
                  className=" w-full border border-md p-2 rounded-md"
                  name="password"
                  value={users.password}
                  onChange={handleChange}
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$"
                  title="Minimal 8 karakter, harus mengandung huruf besar, huruf kecil, angka, dan simbol."
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
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
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
                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className="px-5">
              <Button
                text={"Ganti Kata Sandi"}
                className={
                  "bg-[#3ECF4C] rounded-md text-white py-2 w-full font-medium hover:bg-white hover:text-[#3ECF4C] hover:border"
                }
              />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;
