import React from "react";
import Card from './../Card/Card';

export default function PlanningPoker() {
  return (
    <div className="h-screen w-screen flex gap-5 justify-center items-center flex-wrap">
        <Card numberCard={0}/>
        <Card numberCard={1}/>
        <Card numberCard={2}/>
        <Card numberCard={3}/>
        <Card numberCard={5}/>
        <Card numberCard={8}/>
        <Card numberCard={13}/>
        <Card numberCard={21}/>
    </div>
  );
}
