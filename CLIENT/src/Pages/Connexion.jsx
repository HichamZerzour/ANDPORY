import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo2 from "../assets/imgs/logo2.png";


function Connexion() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        if (email ==( import.meta.env.VITE_EMAIL) &&  password ==( import.meta.env.VITE_PASSWORD)) {

            navigate("/panel-rdv/", {
                state: import.meta.env.VITE_PANEL_KEY,
            });
        } else {
            console.log("error");
        }
    }
  return (
      <section class="bg-gray-50">
          <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <a
                  href="#"
                  class="flex items-center mb-6 text-2xl font-semibold text-gray-900"
              >
                  <img
                      className="w-16 h-16 mr-2 rounded-full "
                      src={logo2}
                      alt="logo"
                  />
                  ANDORY
              </a>
              <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                          Sign in to your account
                      </h1>
                      <form
                          class="space-y-4 md:space-y-6"
                          onSubmit={handleSubmit}
                      >
                          <div>
                              <label
                                  for="email"
                                  class="block mb-2 text-sm font-medium text-gray-900 "
                              >
                                  Votre email
                              </label>
                              <input
                                  type="text"
                                  name="email"
                                  id="email"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                  placeholder="name@company.com"
                                  required=""
                                  onChange={(e) => setEmail(e.target.value)}
                              />
                          </div>
                          <div>
                              <label
                                  for="password"
                                  class="block mb-2 text-sm font-medium text-gray-900 "
                              >
                                  Password
                              </label>
                              <input
                                  onChange={(e) => setPassword(e.target.value)}
                                  type="password"
                                  name="password"
                                  id="password"
                                  placeholder="••••••••"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                  required=""
                              />
                          </div>
                          <div class="flex items-center justify-between">
                              <div class="flex items-start">
                                  <div class="flex items-center h-5">
                                      <input
                                          id="remember"
                                          aria-describedby="remember"
                                          type="checkbox"
                                          class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                                          required=""
                                      />
                                  </div>
                                  <div class="ml-3 text-sm">
                                      <label
                                          for="remember"
                                          class="text-gray-500 "
                                      >
                                          Remember me
                                      </label>
                                  </div>
                              </div>
                              <a
                                  href="#"
                                  class="text-sm font-medium text-primary-600 hover:underline"
                              >
                                  Forgot password?
                              </a>
                          </div>
                          <button
                              type="submit"
                              class="w-full text-white bg-primary  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                          >
                              Sign in
                          </button>

                      </form>
                  </div>
              </div>
          </div>
      </section>
  );
}

export default Connexion
