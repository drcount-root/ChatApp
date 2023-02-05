import React, { ReactNode } from "react";

type FullScreenCardProps = {
  children: ReactNode;
};

export default function FullScreenCard({ children }: FullScreenCardProps) {
  return (
    <div className=" bg-orange-200 flex justify-center items-center min-h-screen">
      <div className="max-w-md w-full">{children}</div>
    </div>
  );
}

FullScreenCard.Body = function ({ children }: FullScreenCardProps) {
  return <div className="shadow bg-white p-6 rounded-lg">{children}</div>;
};

FullScreenCard.BelowCard = function ({ children }: FullScreenCardProps) {
  return <div className="mt-2 justify-center flex gap-3">{children}</div>;
};
