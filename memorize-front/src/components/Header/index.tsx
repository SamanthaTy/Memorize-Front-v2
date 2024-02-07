
const Header = () => {
  return(
    <>
    <header className="header-container w-screen flex justify-between">
      <div className="flex">
        <img src="" alt="Logo Mem'O'rize"/>
        <h1 className="title">MEM'O'RIZE</h1>
      </div>
      <div className="btn-container flex content-end">
        <button className="btn-header border-2 px-5 mx-5 border-black">Mon compte</button>
        <button className="btn-header border-2 px-5 mx-5 border-black">Mes decks</button>
        <button className="btn-header border-2 px-5 mx-5 border-black">Déconnexion</button>
      </div>
    </header>
    </>
  )
}

export default Header;