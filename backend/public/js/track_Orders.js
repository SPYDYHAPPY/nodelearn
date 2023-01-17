const trackOrder = [
    {
        order_no: "22112022",
        customer_id: "22nov22",
        customer_name: "suryakanta",
        order_desc: "sampoo",
        city: "bhubaneswar",
        order_date: "22-11-2022",
        deliver_expect: "29-11-2022",
    },
    {
        order_no: "25112022",
        customer_id: "25nov22",
        customer_name: "lokesh",
        order_desc: "beard oil",
        city: "chandikhole",
        order_date: "25-11-2022",
        deliver_expect: "03-12-2022",
    },
    {
        order_no: "02122022",
        customer_id: "02dec22",
        customer_name: "Prasenjit",
        order_desc: "denever deo",
        city: "Balesore",
        order_date: "02-12-2022",
        deliver_expect: "12-12-2022",
    }
];

const track = document.getElementById("tracking");

trackOrder.forEach((orderstotrack) => {
    const tr_orderno = `${orderstotrack.order_no}`;
    const tr_customerid = `${orderstotrack.customer_id}`;
    const tr_csname = `${orderstotrack.customer_name}`;
    const tr_orderdt = `${orderstotrack.order_desc}`;
    const tr_city = `${orderstotrack.city}`;
    const tr_orderdate = `${orderstotrack.order_date}`;
    const tr_deliverexp = `${orderstotrack.deliver_expect}`;

    const trackdetails = document.createElement("tr");
    trackdetails.classList.add("orderstotrack");

    trackdetails.innerHTML = `
        <tr>
            <th scope="row">${tr_orderno}</th>
            <td>${tr_customerid}</td>
            <td>${tr_csname}</td>
            <td>${tr_orderdt}</td>
            <td>${tr_city}</td>
            <td>${tr_orderdate}</td>
            <td>${tr_deliverexp}</td>
            <td><button type="button" class="btn btn-secondary btn-sm">TRACK</button></td>
        </tr>
    `;

    track.appendChild(trackdetails);
});