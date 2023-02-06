import React, { FormEvent, useRef } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

import propeller from "../propeller.png";
import { useAuth } from "../context/AuthContext";

export function Signup() {
  const { signup } = useAuth();
  const usernameRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const imageUrlRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (signup.isLoading) return;

    const username = usernameRef.current?.value;
    const name = nameRef.current?.value;
    const imageUrl = imageUrlRef.current?.value;

    if (username == null || username === "" || name == null || name === "") {
      return;
    }

    signup.mutate({ id: username, name, image: imageUrl });
  }

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
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-5 items-center justify-items-end"
      >
        <label htmlFor="userName" className="font-semibold">
          Username
        </label>
        <Input
          id="userName"
          pattern="\S*"
          required
          ref={usernameRef}
          className="bg-slate-100"
        />

        <label htmlFor="name" className="font-semibold">
          Name
        </label>
        <Input id="name" required ref={nameRef} className="bg-slate-100" />

        <label htmlFor="imageUrl" className="font-semibold">
          Image Url
        </label>
        <Input
          id="imageUrl"
          type="url"
          ref={imageUrlRef}
          className="bg-slate-100"
        />
        <Button
          disabled={signup.isLoading}
          type="submit"
          className="col-span-full"
        >
          {signup.isLoading ? "Loading.." : "Sign Up"}
        </Button>
      </form>
    </React.Fragment>
  );
}
