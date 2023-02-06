import { FormEvent, useRef } from "react"
import { Navigate } from "react-router-dom"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { useAuth } from "../context/AuthContext"

import propeller from "../propeller.png";

export function Login() {
  const { login, user } = useAuth()
  const usernameRef = useRef<HTMLInputElement>(null)

  if (user != null) return <Navigate to="/" />

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (login.isLoading) return

    const username = usernameRef.current?.value
    if (username == null || username === "") {
      return
    }

    login.mutate(username)
  }

  return (
    <>
      <div className="flex justify-between">
        <img
          src={propeller}
          style={{ width: "40px", height: "40px" }}
          className="animate-spin"
        />
        <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
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
        <label htmlFor="userName">Username</label>
        <Input id="userName" required ref={usernameRef} className="bg-slate-100" />
        <Button
          disabled={login.isLoading}
          type="submit"
          className="col-span-full"
        >
          {login.isLoading ? "Loading.." : "Log In"}
        </Button>
      </form>
    </>
  )
}
