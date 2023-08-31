"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import getCategory from "@/public/json/faq.json";

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get the 'something' part from the URL by splitting the pathname
  const urlParts = pathname.split("/"); // Will give an array, e.g., ['/faq', 'something']
  const something = urlParts[2]; // Assuming the 'something' is always the third element

  // Find the category based on the 'something' part
  const category = getCategory.find((item) => item.url === something);

  // If a matching category is found, render the category's content
  if (category) {
    return (
      <div>
        <h1>{category.category}</h1>
        {/* Render the questions and answers here */}
      </div>
    );
  } else {
    // If no matching category is found, redirect to a 404 page
    // Replace "404-page" with the actual path to your 404 page component
    router.replace("/404-page");
    return null;
  }
}
