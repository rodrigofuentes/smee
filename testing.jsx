import react from 'react';
import { createStore, setStore } from './packages/smee/funcStore';
import { useStore } from './packages/smee/useStore';
// import smee from "smee";

const Button = () => {
  const data = useStore('total', 0);
  return <button onClick={() => {}}></button>;
};
