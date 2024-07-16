import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge, GridIcon, ListOrdered } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="p-4 font-bold text-2xl">🐣 Overview</h1>

      <div className="grid grid-cols-3 gap-6">
        <Card className="w-full  p-8 cursor-pointer">
          <CardTitle className="text-xl flex gap-3"><Badge /> Products</CardTitle>
          <CardDescription>100+</CardDescription>
        </Card>
        <Link href='/Category'>
          <Card className="w-full p-8 cursor-pointer">
            <CardTitle className="text-xl flex gap-3"><GridIcon /> Categories</CardTitle>
            <CardDescription>100+</CardDescription>
          </Card>
        </Link>
        <Card className="w-full  p-8 cursor-pointer">
          <CardTitle className="text-xl flex gap-3"><ListOrdered /> Orders</CardTitle>
          <CardDescription>100+</CardDescription>
        </Card>
      </div>

    </div>
  );
}
