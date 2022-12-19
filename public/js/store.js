
// PRODUCT SECTION..................
const newBrand = document.getElementById("new_brands");
const topBrand = document.getElementById("top_brands");

const topBrand2 = document.getElementById("top_brands2");
const topBrand3 = document.getElementById("top_brands3");


newBrand.innerHTML = `<table class="table">
<thead>
    <tr>
        <th scope="col">Product Id</th>
        <th scope="col">Product Name</th>
        <th scope="col">Brand</th>
        <th scope="col">Price</th>
        <th scope="col">Register Date</th>
        <th scope="col">Action</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">990011</th>
        <td>T-Shirt</td>
        <td>Roadster</td>
        <td>350</td>
        <td>12/12/2022</td>
        <td><button type="button" class="btn btn-secondary btn-sm">VIEW</button>
        </td>
    </tr>
   <tr>
        <th scope="row">990022</th>
        <td>Jeans</td>
        <td>Killer</td>
        <td>1000</td>
        <td>05/07/2022</td>
        <td><button type="button" class="btn btn-secondary btn-sm">VIEW</button>
        </td>
    </tr>
    <tr>
        <th scope="row">990123</th>
        <td>Shirt</td>
        <td>Louis-Phillips</td>
        <td>700</td>
        <td>18/04/2021</td>
        <td><button type="button" class="btn btn-secondary btn-sm">VIEW</button>
        </td>
    </tr>

</tbody>
</table>`;
topBrand.innerHTML = `<table class="table">
<thead>
    <tr>
        <th scope="col">Product Id</th>
        <th scope="col">Product Name</th>
        <th scope="col">Brand</th>
        <th scope="col">Price</th>
        <th scope="col">Rating</th>
        <th scope="col">Register Date</th>
        <th scope="col">Action</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">990011</th>
        <td>T-Shirt</td>
        <td>Roadster</td>
        <td>350</td>
        <td>
        <!-- Product reviews-->
        <div class="d-flex justify-content-start small text-warning mb-2">
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
        </div>
        </td>
        <td>12/12/2022</td>
        <td><button type="button" class="btn btn-secondary btn-sm">VIEW</button>
        </td>
    </tr>
   <tr>
        <th scope="row">990022</th>
        <td>Jeans</td>
        <td>Killer</td>
        <td>1000</td>
        <td> <!-- Product reviews-->
        <div class="d-flex justify-content-start small text-warning mb-2">
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
        </div>
        </td>
        <td>05/07/2022</td>
        <td><button type="button" class="btn btn-secondary btn-sm">VIEW</button>
        </td>
    </tr>
    <tr>
        <th scope="row">990123</th>
        <td>Shirt</td>
        <td>Louis-Phillips</td>
        <td>700</td>
        <td> <!-- Product reviews-->
        <div class="d-flex justify-content-start small text-warning mb-2">
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
        </div>
        </td>
        <td>18/04/2021</td>
        <td><button type="button" class="btn btn-secondary btn-sm">VIEW</button>
        </td>
    </tr>

</tbody>
</table>`;
topBrand2.innerHTML = `<table class="table">
<thead>
    <tr>
        <th scope="col">Product Id</th>
        <th scope="col">Product Name</th>
        <th scope="col">Brand</th>
        <th scope="col">Price</th>
        <th scope="col">Rating</th>
        <th scope="col">Register Date</th>
        <th scope="col">Action</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">990011</th>
        <td>T-Shirt</td>
        <td>Roadster</td>
        <td>350</td>
        <td>
        <!-- Product reviews-->
        <div class="d-flex justify-content-start small text-warning mb-2">
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
        </div>
        </td>
        <td>12/12/2022</td>
        <td><button type="button" class="btn btn-secondary btn-sm">VIEW</button>
        </td>
    </tr>
   <tr>
        <th scope="row">990022</th>
        <td>Jeans</td>
        <td>Killer</td>
        <td>1000</td>
        <td> <!-- Product reviews-->
        <div class="d-flex justify-content-start small text-warning mb-2">
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
        </div>
        </td>
        <td>05/07/2022</td>
        <td><button type="button" class="btn btn-secondary btn-sm">VIEW</button>
        </td>
    </tr>
    <tr>
        <th scope="row">990123</th>
        <td>Shirt</td>
        <td>Louis-Phillips</td>
        <td>700</td>
        <td> <!-- Product reviews-->
        <div class="d-flex justify-content-start small text-warning mb-2">
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
        </div>
        </td>
        <td>18/04/2021</td>
        <td><button type="button" class="btn btn-secondary btn-sm">VIEW</button>
        </td>
    </tr>

</tbody>
</table>`;
topBrand3.innerHTML = `<table class="table">
<thead>
    <tr>
        <th scope="col">Product Id</th>
        <th scope="col">Product Name</th>
        <th scope="col">Brand</th>
        <th scope="col">Price</th>
        <th scope="col">Rating</th>
        <th scope="col">Register Date</th>
        <th scope="col">Action</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">990011</th>
        <td>T-Shirt</td>
        <td>Roadster</td>
        <td>350</td>
        <td>
        <!-- Product reviews-->
        <div class="d-flex justify-content-start small text-warning mb-2">
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
        </div>
        </td>
        <td>12/12/2022</td>
        <td><button type="button" class="btn btn-secondary btn-sm">VIEW</button>
        </td>
    </tr>
   <tr>
        <th scope="row">990022</th>
        <td>Jeans</td>
        <td>Killer</td>
        <td>1000</td>
        <td> <!-- Product reviews-->
        <div class="d-flex justify-content-start small text-warning mb-2">
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
        </div>
        </td>
        <td>05/07/2022</td>
        <td><button type="button" class="btn btn-secondary btn-sm">VIEW</button>
        </td>
    </tr>
    <tr>
        <th scope="row">990123</th>
        <td>Shirt</td>
        <td>Louis-Phillips</td>
        <td>700</td>
        <td> <!-- Product reviews-->
        <div class="d-flex justify-content-start small text-warning mb-2">
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
        </div>
        </td>
        <td>18/04/2021</td>
        <td><button type="button" class="btn btn-secondary btn-sm">VIEW</button>
        </td>
    </tr>

</tbody>
</table>`;


//seller section
var urb = document.getElementById("urbanic");
var semurb = document.getElementById("semi_urbanic");

urb.innerHTML = `<table class="table">
<thead>
    <tr>
        <th scope="col">SELLER ID</th>
        <th scope="col">SELLER NAME</th>
        <th scope="col">GENDER</th>
        <th scope="col">CITY</th>
        <th scope="col">RAITING</th>
        <th scope="col">REGISTER DATE</th>
        <th scope="col">ACTION</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">000121</th>
        <td>SALMAN KHAN</td>
        <td>MALE</td>
        <td>MUMBAI</td>
        <td>
        <!-- Product reviews-->
        <div class="d-flex justify-content-start small text-warning mb-2">
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
        </div>
        </td>
        <td>12/05/2020</td>
        <td><button type="button" class="btn btn-secondary btn-sm">VIEW</button>
        </td>
    </tr>
    <tr>
        <th scope="row">000121</th>
        <td>SALMAN KHAN</td>
        <td>MALE</td>
        <td>MUMBAI</td>
        <td>
        <!-- Product reviews-->
        <div class="d-flex justify-content-start small text-warning mb-2">
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
        </div>
        </td>
        <td>12/05/2020</td>
        <td><button type="button" class="btn btn-secondary btn-sm">VIEW</button>
        </td>
    </tr><tr>
        <th scope="row">000121</th>
        <td>SALMAN KHAN</td>
        <td>MALE</td>
        <td>MUMBAI</td>
        <td>
        <!-- Product reviews-->
        <div class="d-flex justify-content-start small text-warning mb-2">
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
        </div>
        </td>
        <td>12/05/2020</td>
        <td><button type="button" class="btn btn-secondary btn-sm">VIEW</button>
        </td>
    </tr>
    <tr>
        <th scope="row">000121</th>
        <td>SALMAN KHAN</td>
        <td>MALE</td>
        <td>MUMBAI</td>
        <td>
        <!-- Product reviews-->
        <div class="d-flex justify-content-start small text-warning mb-2">
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
        </div>
        </td>
        <td>12/05/2020</td>
        <td><button type="button" class="btn btn-secondary btn-sm">VIEW</button>
        </td>
    </tr>

</tbody>
</table>`;
semurb.innerHTML =`<table class="table">
<thead>
    <tr>
        <th scope="col">SELLER ID</th>
        <th scope="col">SELLER NAME</th>
        <th scope="col">GENDER</th>
        <th scope="col">CITY</th>
        <th scope="col">RAITING</th>
        <th scope="col">REGISTER DATE</th>
        <th scope="col">ACTION</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">000121</th>
        <td>SALMAN KHAN</td>
        <td>MALE</td>
        <td>MUMBAI</td>
        <td>
        <!-- Product reviews-->
        <div class="d-flex justify-content-start small text-warning mb-2">
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
        </div>
        </td>
        <td>12/05/2020</td>
        <td><button type="button" class="btn btn-secondary btn-sm">VIEW</button>
        </td>
    </tr>
    <tr>
        <th scope="row">000121</th>
        <td>SALMAN KHAN</td>
        <td>MALE</td>
        <td>MUMBAI</td>
        <td>
        <!-- Product reviews-->
        <div class="d-flex justify-content-start small text-warning mb-2">
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
        </div>
        </td>
        <td>12/05/2020</td>
        <td><button type="button" class="btn btn-secondary btn-sm">VIEW</button>
        </td>
    </tr><tr>
        <th scope="row">000121</th>
        <td>SALMAN KHAN</td>
        <td>MALE</td>
        <td>MUMBAI</td>
        <td>
        <!-- Product reviews-->
        <div class="d-flex justify-content-start small text-warning mb-2">
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
        </div>
        </td>
        <td>12/05/2020</td>
        <td><button type="button" class="btn btn-secondary btn-sm">VIEW</button>
        </td>
    </tr>
    <tr>
        <th scope="row">000121</th>
        <td>SALMAN KHAN</td>
        <td>MALE</td>
        <td>MUMBAI</td>
        <td>
        <!-- Product reviews-->
        <div class="d-flex justify-content-start small text-warning mb-2">
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
        </div>
        </td>
        <td>12/05/2020</td>
        <td><button type="button" class="btn btn-secondary btn-sm">VIEW</button>
        </td>
    </tr>

</tbody>
</table>`;