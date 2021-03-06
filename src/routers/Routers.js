import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import WorkoutList from "../components/WorkoutList";
import Calendar from "../components/Calendar";
import ExerciseList from "../components/ExerciseList";
import LoginForm from "../components/LoginForm";
import MealPlan from "../components/MealPlan";
import { Card } from "../components/common";

const Routers = () => {
  return (
    <Fragment>
      <Route exact path="/" component={WorkoutList} />
      <Route path="/auth" component={LoginForm} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/mealplan" component={MealPlan} />
      <Route path="/add" component={ExerciseList} />
      <Route path="/back" component={Card} />
      <Route path="/chest" component={Card} />
      <Route path="/shoulder" component={Card} />
      <Route path="/waist" component={Card} />
      <Route path="/arm" component={Card} />
      <Route path="/leg" component={Card} />
    </Fragment>
  );
};

export default Routers;
