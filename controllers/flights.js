import { Flight } from "../models/flight.js";

function index(req, res) {
  Flight.find({})
    .then((flights) => {
      res.render("flights/index", {
        flights,
        title: "All Flights",
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
}

function newFlight(req, res) {
  res.render("flights/new", { title: "New Flight" });
}

function create(req, res) {
  req.body.departs =
    req.body.departs || new Date().setFullYear(new Date().getFullYear() + 1);
  Flight.create(req.body)
    .then((flight) => {
      res.redirect("/flights");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/flights");
    });
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id)
    .then((flight) => {
      res.redirect("/flights");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/flights");
    });
}

function show(req, res) {
  Flight.findById(req.params.id)
    .then((flight) => {
      res.render("flights/show", {
        flight,
        title: `Flight ${flight.flightNo} Info`,
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/flights");
    });
}

function edit(req, res) {
  Flight.findById(req.params.id)
    .then((flight) => {
      res.render("flights/edit", {
        flight,
        title: `Edit`,
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/flights");
    });
}

function submitEdit(req, res) {
  Flight.findByIdAndUpdate(req.params.id, req.body)
    .then((flight) => {
      res.redirect(`/flights/${flight._id}`);
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/flights");
    });
}

export {
  index,
  newFlight as new,
  create,
  deleteFlight as delete,
  show,
  edit,
  submitEdit,
};
