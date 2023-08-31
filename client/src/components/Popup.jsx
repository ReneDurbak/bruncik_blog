import {useState, useEffect} from 'react'
import {GrFormClose} from "react-icons/gr"

function Popup(props) {

  const [clickedOutside, setClickedOutside] = useState(false)


  useEffect(() => {
    const handleClickOutside = (event) => {
      const popupElement = document.getElementById('pop-up');
      if (popupElement && !popupElement.contains(event.target)) {
        setClickedOutside(true);
        props.setTrigger(false);
      }
    };

    if (props.trigger) {
      window.addEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [props.trigger, props.setTrigger]);



  
  return props.trigger  && !clickedOutside ? (
    <div className='fixed top-0 left-0 w-full h-[100vh] bg-[#00000080] z-[10] flex justify-center items-center  lg:hidden'>
      <div id='pop-up' className='relative'>
        <button className='rounded-md px-1 text-black bg-none absolute right-7 sm:right-1 top-2 sm:top-[-45px]' onClick={() => props.setTrigger(false)}><GrFormClose className="sm:text-2xl text-lg"/></button>
        {props.children}
      </div>
    </div>

  ) : <div className='hidden'>{props.children}</div>

}

export default Popup

