'use client'

import { Card, CardTitle } from '@/components/ui/card'
import axios from 'axios'
import { ArrowBigLeft } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {}


export default function page({ }: Props) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {

        const fetchCategories = async () => {

            try {
                const response = await axios.get("https://pakaakchicken.vercel.app/api/category/get",);
                console.log(response.data);
                setCategories(response.data.data)
                // You can handle the response as needed, e.g., show a success message, clear the form, etc.
            } catch (error) {
                console.error("There was an error creating the category!", error);
                // You can handle the error as needed, e.g., show an error message
            }
        };
        fetchCategories();
    }, [])


    console.log(categories, 'categories???')

    return (
        <div className=''>
            <Link href='/'>
                <div>
                    <h1 className='p-4 flex gap-2 font-bold hover:underline cursor-pointer'><ArrowBigLeft className='scale-150 cursor-pointer' /> Back</h1>
                </div>
            </Link>
            <div className=' mx-4'>
                <Link href='/createCategory'>
                    <Card className='cursor-pointer p-10 mt-12'>
                        <CardTitle>Create a Category</CardTitle>

                    </Card>
                </Link>
            </div>
            <h1 className='text-center font-bold text-xl mt-4 p-4'>Manage Categories</h1>
            <div className='grid grid-cols-2 gap-6'>
                {categories.map((category) => (
                    <Card className=' mx-4  max-h-64  p-12'>
                        <img src={category.image} className='h-full object-cover rounded-md w-full' />
                        <CardTitle className='p-4 '>{category.name}</CardTitle>

                    </Card>
                ))}

            </div>
        </div>
    )
}