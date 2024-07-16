import { CategoryForm } from '@/components/category-form'
import { ArrowBigLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function page({ }: Props) {
    return (
        <div className=''>
            <Link href='/Category'>
                <div>
                    <h1 className='p-4 flex gap-2 font-bold hover:underline cursor-pointer'><ArrowBigLeft className='scale-150 cursor-pointer' /> Back</h1>
                </div>
            </Link>
            <h1 className='p-10 text-center font-bold text-xl'>Create a New Category</h1>
            <div className='flex justify-center'>
                <CategoryForm />
            </div>
        </div>

    )
}