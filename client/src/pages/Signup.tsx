import React, { useRef } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

import propeller from "../propeller.png";

export function Signup() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const imageUrlRef = useRef<HTMLInputElement>(null);

  return (
    <React.Fragment>
      <div className="flex justify-between">
        <img
          src={propeller}
          style={{ width: "40px", height: "40px" }}
          className="animate-spin"
        />
        <h1 className="text-3xl font-bold mb-8 text-center">Sign Up</h1>
        <img
          src={propeller}
          style={{ width: "40px", height: "40px" }}
          className="animate-spin"
        />
      </div>
      <form className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-5 items-center justify-items-end">
        <label htmlFor="userName" className="font-semibold">
          Username
        </label>
        <Input
          id="userName"
          pattern="\S*"
          required
          ref={usernameRef}
          className="bg-slate-200"
        />

        <label htmlFor="name" className="font-semibold">
          Name
        </label>
        <Input id="name" required ref={nameRef} className="bg-slate-200" />

        <label htmlFor="imageUrl" className="font-semibold">
          Image Url
        </label>
        <Input
          id="imageUrl"
          type="url"
          ref={imageUrlRef}
          className="bg-slate-200"
        />
        <Button type="submit" className="col-span-full">
          Sign Up
        </Button>
      </form>
    </React.Fragment>
  );
}
