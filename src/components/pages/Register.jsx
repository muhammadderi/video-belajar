const Register = () => {
  return (
    <div>
      <nav className="flex justify-start items-center py-5 px-10 shadow-sm">
        <img src="./logo.png" alt="logo" />
      </nav>
      <main className="p-10 ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl">Pendaftaran Akun</h1>
          <p>Yuk, daftarkan akunmu sekarang juga!</p>
        </div>
        <form action="" className="flex flex-col py-5">
          <label htmlFor="">
            Nama Lengkap<sup className="text-red-500">*</sup>
            <input
              type="text"
              className="border border-grey-500 rounded-xl py-2 px-3"
            />
          </label>

          <label htmlFor="">
            E-Mail<sup className="text-red-500">*</sup>
          </label>
          <input type="text" />
          <label htmlFor="">
            Jenis Kelamin<sup className="text-red-500">*</sup>
          </label>
          <select name="" id="">
            <option value="">Wanita</option>
            <option value="">Pria</option>
          </select>
          <label htmlFor="">
            No Hp<sup className="text-red-500">*</sup>
          </label>
          <label htmlFor="">
            Kata Sandi<sup className="text-red">*</sup>
          </label>
          <input type="password" />
          <label htmlFor="">
            Konfirmasi Kata Sandi<sup>*</sup>
          </label>
          <input type="password" />
        </form>
      </main>
    </div>
  );
};

export default Register;
