<div class="flex justify-center items-center py-8 sm:py-32 p-10 flex-col gap-8">
  <div class="flex justify-center">
    <img class="sm:w-16 w-11" src="lock.ico" alt="Lock" />
    <h1 class="text-4xl sm:text-6xl font-bold text-slate-900">AppLocker</h1>
  </div>
  <form>
    <div class="flex flex-col gap-4 mb-16">
      <div>
        <h1>Username</h1>
        <input
          type="text"
          class="rounded-lg p-2 px-3 w-full shadow-lg focus:ring-2 focus:ring-black focus:outline-none appearance-none ring-1 ring-slate-200"
          placeholder="Enter Username"
        />
      </div>
      <div>
        <h1>Password</h1>
        <input
          type="password"
          class="rounded-lg p-2 px-3 w-full shadow-lg focus:ring-2 focus:ring-black focus:outline-none appearance-none ring-1 ring-slate-200"
          placeholder="Enter Password"
        />
      </div>
      <a
        class="text-center bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-700 shadow-lg"
        href="/login"
      >
        Login
      </a>
      <a
        class="text-center text-gray-600 px-6 py-2 hover:underline"
        href="/login"
      >
        Forgot password?
      </a>
    </div>
    <div class="flex sm:flex-row flex-col gap-4 text-center">
      <p class="text-gray-600 pl-4 py-2">Dont have an account?</p>
      <a
        class="font-medium border text-gray-600 px-6 py-2 rounded-lg"
        href="/register">Register Now</a
      >
    </div>
  </form>
</div>
