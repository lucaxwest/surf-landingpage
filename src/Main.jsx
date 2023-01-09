
function Main() {
    return (
        <div className='main'>
        <div className='center'>
          <div className='menu'>
            <div className='logo'>
              <h3>LifeSurf</h3>
            </div>
            <div className='item-menu'>
              <h4>only good vibes</h4>
            </div>
          </div>

          <div className="form">
          <h2>Entre em contato</h2>
          
            <form>
              <div className="items-form">
                <input type="text" placeholder='Seu nome'/>
                <input type="text" placeholder='Seu sobrenome'/>
                <input type="text" placeholder='Seu e-mail'/>
                <input type="text" placeholder='Seu número'/>
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}

export default Main;