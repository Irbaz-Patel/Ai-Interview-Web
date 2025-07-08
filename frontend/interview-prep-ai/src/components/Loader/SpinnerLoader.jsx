import React from 'react'

export default function SpinnerLoader() {
  return (
    //  <div className="animate-spin dark:text-gray-600 fill-cyan-900">
    //   <svg
    //     className="w-8 h-8"
    //     viewBox="0 0 101 101"
    //     fill="none"
    //     xmlns="http://www.w3.org/2000/svg"
    //   >
    //     <path
    //       d="M100.591 50C100.591 22.3858 78.2051 0 50.5908 0C22.9766 0 0.59082 22.3858 0.59082 50H10.5908C10.5908 27.1472 27.738 10 50.5908 10C73.4436 10 90.5908 27.1472 90.5908 50H100.591Z"
    //       fill="currentColor"
    //     />
    //     <path
    //       d="M7.8624 35.9116C97.0079 33.5539 95.2932 28.8227 92.8714 24.3692C89.8167 20.348C85.4849 17.6828 80.4416 16.8088 75.5595 17.8637C66.7971 19.7436 61.4306 28.9632 60.1191 37.1807C59.4481 41.4875 58.6486 45.7576 57.4725 50H7.8624V35.9116Z"
    //       fill="currentFill"
    //     />
    //   </svg>
    //   <span className='sr-only'>Loading...</span>
    // </div>
       <div className="flex justify-center">
      <div className="w-6 h-6 border-2 border-t-2 border-gray-300 border-t-cyan-500 rounded-full animate-spin"></div>
    </div>
  )
}
