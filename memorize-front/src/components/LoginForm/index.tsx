

function LoginForm() {
  return (
    <div className="flex items-center justify-center h-screen">
      <form>
        <input
          type="email"
          placeholder="Entrez votre Email"
          className="w-full border-2 border-gray-300 p-2"
        />
        <input
          type="password"
          placeholder="Entrez votre Password"
          className="w-full border-2 border-gray-300 p-2 mt-2"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 mt-2"
        >Se connecter</button>
        <p className="mt-4 text-gray-600">
          Vous n'avez pas de compte? <a href="">Inscrivez-vous</a>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
