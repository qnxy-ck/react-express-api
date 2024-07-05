const students = require("./student")

module.exports = (app) => {

    // react demo api
    app.use("/student", students)
}
