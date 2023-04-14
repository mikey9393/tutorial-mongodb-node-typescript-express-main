"use strict";


const Header = ({message}) => { // passing props w/destructuring.
  return (
    <div className="header">
      <h3>Header</h3>
      { message }
    </div>
  );
}
export default Header;