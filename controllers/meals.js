import { Meal } from "../models/meal.js";

function newMeal(req, res) {
  Meal.find({})
    .then((meals) => {
      res.render("meals/new", {
        title: "Add Meal",
        meals,
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/flights");
    });
}

function create(req, res) {
  req.body.name = formatString(req.body.name);
  Meal.find({ name: req.body.name }).then((meal) => {
    console.log(meal);
    if (meal.length) {
      res.redirect("/meals/new");
      return;
    }
    Meal.create(req.body)
      .then((meal) => {
        res.redirect("/meals/new");
      })
      .catch((err) => {
        console.log(err);
        res.redirect("/meals/new");
      });
  });
}

function formatString(str) {
  const temp = str.toLowerCase();
  return temp.charAt(0).toUpperCase() + temp.slice(1);
}

export { newMeal as new, create };
