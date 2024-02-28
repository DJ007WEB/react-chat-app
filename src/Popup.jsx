/* eslint-disable react/prop-types */
export default function Popup({ children, position }) {

  let place;

  if(position === 'right') place = 'right-72';
  if(position === 'left') place = 'left-[300px]';
  if(position === 'top') place = 'top-[350px]';
  if(position === 'bot') place = 'bottom-48';

  return (
    <div className={`popup ${place}`}>
      {children}
    </div>
  );
}

/* right-72  top-[350px] left-[300px] bottom-48*/
