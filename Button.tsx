import React, { useEffect, useState } from "react";

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button = ({ label, onClick }: Partial<ButtonProps>) => {
  return <button onClick={onClick}>{label}</button>;
};
