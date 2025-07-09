import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'

const SellerList = ({ name, price, image}) => {
  return (
     <li className="list-row">
          <div>
            <img className="size-10 rounded-box" src={image} />
          </div>
          <div>
            <div>{name}</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              {price} Rs
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-3">
            <button className="btn btn-square btn-ghost size-10" ><HiOutlineTrash className="size-5" /></button>
          </div>
        </li>
  )
}

export default SellerList
