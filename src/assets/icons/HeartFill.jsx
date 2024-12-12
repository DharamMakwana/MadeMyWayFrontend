import React from "react";

function Icon({liked}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20.539" height="19.536" viewBox="0 0 20.539 19.536" >
  <g id="Iconly_Light_Heart" data-name="Iconly/Light/Heart" transform="translate(0.769 0.786)">
    <g id="Heart">
      <path id="Path_33961" d="M9.261,17.854a34.84,34.84,0,0,1-6.022-4.689A11.99,11.99,0,0,1,.373,8.6C-.7,5.25.554,1.421,4.071.288A5.978,5.978,0,0,1,9.5,1.2h0A5.987,5.987,0,0,1,14.921.288C18.438,1.421,19.7,5.25,18.628,8.6a11.99,11.99,0,0,1-2.866,4.57A34.84,34.84,0,0,1,9.74,17.854L9.505,18Z" transform="translate(0 0)" fill={liked ? "#ee3737":"#ffffff"} stroke={liked ? "#ee3737":"#200e32"} stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
    </g>
  </g>
</svg>

  );
}

export default Icon;