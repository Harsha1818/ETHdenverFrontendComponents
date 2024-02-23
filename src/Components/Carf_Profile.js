import React from 'react';
import PurpleButton from './PurpleButton';
import cp from '/Users/harshatumuluri/Desktop/Desktop /eTHdenveR/socialmedia/src/Assets/seattle.jpeg'
import Flip from './Flip';

export const Carf_Profile = () => {
    var profileName= "SRH"
  return (
    <div>
        <div class="box-border h-[500px] w-[450px] p-4 border-4 ">
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
