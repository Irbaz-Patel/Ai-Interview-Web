import React from 'react'

function DeleteAlertContent({content, onDelete}) {
  return (
    <div className='p-5'>
        <p className='text-[14px]'>{content}</p>

        <div className='flex justify-end mt-6'>
            <button 
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg shadow-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-400 cursor-pointer"
            type='button'
            onClick={onDelete}
            >
                Delete
            </button>
        </div>
    </div>
  )
}

export default DeleteAlertContent
