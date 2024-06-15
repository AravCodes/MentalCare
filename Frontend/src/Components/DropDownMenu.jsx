import React from 'react'

const DropDownMenu = () => {
  return (
    <div className ="flex flex-col absolute top-[90px] right-[20px] w-[120px] rounded-[20px] border-2 px-5 py-5 " >
        <ul className = "flex flex-col gap-4">
            <li className =  "px-2 py-2 rounded-md hover:bg-slate-50">Profile</li>
            <li className =  "px-2 py-2 rounded-md hover:bg-slate-50">Settings</li>
            <li className =  "px-2 py-2 rounded-md hover:bg-slate-50">Logout</li>
        </ul>
    </div>
  )
}

export default DropDownMenu