'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import axios from "axios"

export function CategoryForm() {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://pakaakchicken.vercel.app/api/category/create", { name, image });
      console.log(response.data);
      setSuccessMessage("Category Created Successfully!")
      // You can handle the response as needed, e.g., show a success message, clear the form, etc.
    } catch (error) {
      console.error("There was an error creating the category!", error);
      // You can handle the error as needed, e.g., show an error message
    }
  };



  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Create a Category</CardTitle>
        <CardDescription>Enter The Details to create a category</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <label htmlFor="name">Name</label>
          <Input id="name" value={name} onChange={(e: any) => setName(e.target.value)} placeholder="Enter the category name" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="image">Image</label>
          <Input value={image} onChange={(e: any) => setImage(e.target.value)} placeholder="Enter Image url" />
        </div>

      </CardContent>
      <CardFooter>
        <button onClick={handleSubmit} type="submit" className="w-full bg-[#ad1a35] p-2 text-white rounded-lg">
          Add Category
        </button>
      </CardFooter>
      <h1 className="font-bold">
        {successMessage}
      </h1>
    </Card>
  )
}
