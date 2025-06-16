"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "./ui/input";
import { useState } from "react";
import { Combobox } from "./ui/combo-box";

const plants = [
  {
    id: 1231,
    name: "Snake Plant",
    category: "Indoor",
    price: 2,
    stock: 14,
  },
];

export default function InventoryTable() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 py-4">
        <div className="relative max-w-screen-sm w-full">
          <Input placeholder="Filter plants..." className="pl-10" />
        </div>
        <Combobox
          value={selectedCategory}
          onChange={(val) => setSelectedCategory(val)}
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Plant ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {plants.map((plant) => (
            <TableRow key={plant.id}>
              <TableCell>{plant.name}</TableCell>
              <TableCell>{plant.category}</TableCell>
              <TableCell>{plant.price}</TableCell>
              <TableCell className="font-bold">{plant.stock}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end">
                  <h1>Edit</h1>
                  <h1>Delete</h1>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
