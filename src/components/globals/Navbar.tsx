import React from 'react'

type Props = {}

export default function Navbar({ }: Props) {
    return (
        <div className='  bg-secondary  flex justify-between  p-4'>
            <h1 className='font-bold'>Pakaak - Admin Dashboard</h1>
            <div className='flex gap-4 font-bold  '>
                <h1  className='cursor-pointer'>Products</h1>
                <h1 className='cursor-pointer'>Categories</h1>
                <h1 className='cursor-pointer'>Orders</h1>
            </div>
        </div>
    )
}