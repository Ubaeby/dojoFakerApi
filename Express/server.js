const express = require("express");
const app = express();
const PORT = 8000;
const { faker } = require('@faker-js/faker')

const createUser = () => {
    const newUser =
    {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        userId: faker.datatype.number(10)
    }
    return newUser;
};

const createCompany = () => {
    const newCompany = {
        companyId: faker.datatype.number(20),
        compName: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCodeByState(),
            country: faker.address.country()
        }
    }
    return newCompany;
}

const showBoth = {
    company: createCompany(),
    user: createUser()
}

console.log(showBoth)

const newCompanyShow = createCompany();
const newUserShow = createUser();
console.log();


// app.use( express.json() );
// app.use( express.urlencoded( { extended: true} ) );

app.get("/api/users/new", (req, res) => {
    console.log(req.body);
    const showNewUser = createUser();
    res.json(showNewUser);
})

app.get("/api/companies/new", (req, res) => {
    console.log(req.body);
    const showNewCompany = createCompany();
    res.json(showNewCompany)
})

app.get("/api/user/company", (req, res) => {
    console.log(req.body);
    res.json(showBoth)
})

// app.get("/api", (req, res) => {
//     res.json({ message: "Hello World" });
// });

app.listen(PORT, () => console.log(`Listening on ${PORT} server`));