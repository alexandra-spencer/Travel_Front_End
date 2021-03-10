
function NavBar() {
  return (
    <div className="ui secondary  menu">
    <a className="active item" href="/app">
      Home
    </a>
    <a className="item" href="/country_list">
      Countries
    </a>
    <a className="item" href="/comment_list">
      Reviews
    </a>
    <div className="right menu">
      {/* <div class="item">
        <div class="ui icon input">
          <input type="text" placeholder="Search..."/>
          <i class="search link icon"></i>
        </div>
      </div> */}
      <a className="ui item" href="/Logout">
        Logout
      </a>
    </div>
  </div>


  )
}

export default NavBar;

