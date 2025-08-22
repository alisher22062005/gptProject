"use client";
// import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function Api() {
  const genAI = new GoogleGenerativeAI(
    "AIzaSyAc50gJKTzHiqUdT8Z_VYNWIHSdFJUNlpY"
  );
  //   const [inputText, setInputtext] = useState("");
  async function main() {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent(
      "Solve basic the problem, if a=5,b=10, then a+b equals?, and say how many free tokens left"
    );
    console.log(result.response.text());
  }
  main();
  return <></>;
}
