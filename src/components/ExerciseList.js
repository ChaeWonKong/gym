import React from "react";
import { Card } from "./common";
import { Link } from "react-router-dom";

const ExerciseList = () => {
  return (
    <div>
      <Link to="/back/">
        <Card>등운동</Card>
      </Link>
      <Link to="/chest/">
        <Card>가슴운동</Card>
      </Link>
      <Link to="/shoulder/">
        <Card>어깨운동</Card>
      </Link>
      <Link to="/waist/">
        <Card>허리운동</Card>
      </Link>
      <Link to="/arm/">
        <Card>팔운동</Card>
      </Link>
      <Link to="/leg/">
        <Card>하체운동</Card>
      </Link>
    </div>
  );
};

export default ExerciseList;
