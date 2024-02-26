import React from 'react';
import cp from '../Assets/seattle.jpeg'
import { UserPlusIcon } from '@heroicons/react/24/solid'
import logo from '../Assets/harsha.jpeg';

function PurpleButton(props) {
  const buttonStyle = {
    backgroundColor: '#9155D8',
    color: '#FFFFFF', // Text color
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  return (

    <button style={buttonStyle} className='flex ease-in duration-300'>
      <UserPlusIcon className=" h-4 w-4 whitespace-normal " /><p class= 'text-xs'>{props.ButtonText}</p>
    </button>
  );
}


const Flip = () => {
  return (
    <div className="relative flex justify-center items-center top-[-50px]">
      <div className="w-32 h-32">
        <div className="inset-0 flex justify-center items-center rounded-full ">
          <div className="w-24 h-24 rounded-full shadow-lg transform -rotate-y-0 transition-transform duration-1000 ease-in-out hover:rotate-y-180">
            <img src={logo} alt="Coin" className="w-full h-full rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};




export const Carf_Profile = () => {
    var profileName= "SRH"
  return (
    <div>
        <div class="box-border h-[500px] w-[450px] p-4 border-4 shadow-lg shadow-indigo-500/40 ">
            <img/>

           <div class="flex items-center justify-center flex-col " >

             <div class= 'h-[300px] w-[410]'>
               <img src={cp} alt="Description of the image" 
               class="rounded-lg" />
               
               <Flip/>
              </div> 
               
               <h4 class= "text-center text-xs">{profileName}</h4>
               
            </div>
            <div class="flex items-center justify-center flex-col text-xs ">
              <ul class="flex items-center">
                <li class="m-4">Posts 1</li>
                <li class="m-4">Followers 1</li>
                <li class="m-4">Following 1</li>
              </ul>
               <PurpleButton ButtonText={"Follow"}/>
               
            </div>

        </div>
    </div>
  )
}
