const order = [
    {
        sl_no: "01",
        customer_id: "990011",
        customer_name: "Salman Khan",
        order_id: "0111",
        order_place: "Mumbai",
        diliver_date: "12/12/2022",
    },
    {
        sl_no: "02",
        customer_id: "990022",
        customer_name: "Sahrukh Khan",
        order_id: "0112",
        order_place: "Mumbai",
        diliver_date: "15/12/2022",
    },
    {
        sl_no: "03",
        customer_id: "990033",
        customer_name: "Amir Khan",
        order_id: "0113",
        order_place: "Mumbai",
        diliver_date: "19/12/2022",
    }
];

const ord = document.getElementById("order_dtl");

order.forEach((orderno) => {
    const tr_slno = `${orderno.sl_no}`;
    const tr_customerid = `${orderno.customer_id}`;
    const tr_csname = `${orderno.customer_name}`;
    const tr_orderdt = `${orderno.order_id}`;
    const tr_city = `${orderno.order_place}`;
    const tr_orderdate = `${orderno.diliver_date}`;

    const orderdetails = document.createElement("tr");
    orderdetails.classList.add("orderno");

    orderdetails.innerHTML = `
        <tr>
            <th scope="row">${tr_slno}</th>
            <td>${tr_customerid}</td>
            <td>${tr_csname}</td>
            <td>${tr_orderdt}</td>
            <td>${tr_city}</td>
            <td>${tr_orderdate}</td>
            <td><button type="button" class="btn btn-secondary btn-sm">TRACK</button></td>
        </tr>
    `;

    ord.appendChild(orderdetails);
});