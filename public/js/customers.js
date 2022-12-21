
const customerDetails = [
    {
        customer_id: "990011",
        customer_name: "Amitabh Bachhan",
        gender: "Male",
        city: "Mumbai",
        register_date: "21-11-2022",
        last_purchase: "15-08-2020",
    },
    {
        customer_id: "990022",
        customer_name: "Salman Khan",
        gender: "Male",
        city: "Delhi",
        register_date: "22-11-2022",
        last_purchase: "29-11-2020",
    },
    {
        customer_id: "990033",
        customer_name: "Johney Depp",
        gender: "Male",
        city: "New-Delhi",
        register_date: "22-11-2022",
        last_purchase: "27-12-2020",
    },
    {
        customer_id: "990033",
        customer_name: "Shruty Hassan",
        gender: "Female",
        city: "Karnataka",
        register_date: "22-11-2022",
        last_purchase: "29-01-2019",
    }
];

const cstmr = document.getElementById("customer");

customerDetails.forEach((customerdtls) => {
    const dt_customerid = `${customerdtls.customer_id}`;
    const dt_csname = `${customerdtls.customer_name}`;
    const dt_gender = `${customerdtls.gender}`;
    const dt_city = `${customerdtls.city}`;
    const dt_regdate = `${customerdtls.register_date}`;
    const dt_lastpurchase = `${customerdtls.last_purchase}`;

    const customerdetails = document.createElement("dt");
    customerdetails.classList.add("customerdtls");

    customerdetails.innerHTML = `
    <tr>
       <th scope="row">${dt_customerid}</th>
       <td>${dt_csname}</td>
       <td>${dt_gender}</td>
       <td>${dt_city}</td>
       <td>${dt_regdate}</td>
       <td>${dt_lastpurchase}</td>
       <td><button type="button" class="btn btn-secondary btn-sm">VIEW</button></td>
   </tr>
   `;

    cstmr.appendChild(customerdetails);
});