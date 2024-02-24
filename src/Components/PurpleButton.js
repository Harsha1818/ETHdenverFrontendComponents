import { UserPlusIcon } from '@heroicons/react/24/solid'

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

export default PurpleButton;
