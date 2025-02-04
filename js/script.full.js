var itemList = {
    "sp001": {
        "name": "Đồ chơi đập chuột",
        "price": 200000,
        "photo": "images/sanpham/toy1.webp"
    },
    "sp002": {
        "name": "Rùa nước nhà tắm",
        "price": 80000,
        "photo": "images/sanpham/toy2.webp"
    },
    "sp003": {
        "name": "Xe buýt đồ chơi gỗ",
        "price": 299000,
        "photo": "images/sanpham/toy3.webp"
    },
    "sp004": {
        "name": "Khối Xây Dựng Lắp Ráp Vải ",
        "price": 90000,
        "photo": "images/sanpham/toy4.webp"
    },
    "sp005": {
        "name": "Đồ Chơi Máy Gắp Thú Bông",
        "price": 600000,
        "photo": "images/sanpham/toy5.webp"
    },
    "sp006": {
        "name": "Đồ Chơi Xe Gỗ Và Thú Gỗ ",
        "price": 190000,
        "photo": "images/sanpham/toy6.jpeg"
    },
    "sp007": {
        "name": "Bảng ghép hình núm gỗ",
        "price": 99000,
        "photo": "images/sanpham/toy7.jpg"
    },
    "sp008": {
        "name": "Chó robot điều khiển từ xa",
        "price":499000,
        "photo": "images/sanpham/toy8.jpeg"
    },
    "sp009": {
        "name": "Gà con đồ chơi vặn cót ",
        "price": 50000,
        "photo": "images/sanpham/toy9.jpeg"
    },
    "sp010": {
        "name": "Bộ Vợt Cầu Lông Đồ Chơi",
        "price": 100000,
        "photo": "images/sanpham/toy10.jpg"
    },
    "sp011": {
        "name": "Bộ quần áo jane",
        "price": 90000,
        "photo": "images/sanpham/bo1.jpg"
    },
    "sp012": {
        "name": "Bộ quần áo angela",
        "price": 150000,
        "photo": "images/sanpham/bo2.jpg"
    },
    "sp013": {
        "name": "Bộ quần áo Peony",
        "price": 300000,
        "photo": "images/sanpham/bo3.jpg"
    },
    "sp014": {
        "name": "Bộ quần áo holly",
        "price": 530000,
        "photo": "images/sanpham/bo4.jpg"
    },
    "sp015": {
        "name": "Bộ quần áo star star",
        "price": 90000,
        "photo": "images/sanpham/bo5.jpg"
    },
    "sp016": {
        "name": "Bộ quần áo coco",
        "price": 400000,
        "photo": "images/sanpham/bo6.jpg"
    },
    "sp017": {
        "name": "Bộ quần áo paly",
        "price": 200000,
        "photo": "images/sanpham/bo7.jpg"
    },
    "sp018": {
        "name": "Bộ quần áo ballon",
        "price": 80000,
        "photo": "images/sanpham/bo8.jpg"
    },
    "sp019": {
        "name": "Bộ quần áo margarine",
        "price": 330000,
        "photo": "images/sanpham/bo9.jpg"
    },
    "sp020": {
        "name": "Bộ áo quần rời wood",
        "price": 100000,
        "photo": "images/sanpham/bo10.jpg"
    }
  }; 
    function addCart(code) {               // hàm thêm sản phẩm vào giỏ hàng
      let number = parseInt(document.getElementById(code).value);  // lấy số lượng từ ô input có id là code, nếu số lượng <=0 thì dừng
      if (number <= 0) return;    
      let current = parseInt(localStorage.getItem(code)) || 0;    // lấy số lượng hiện tại từ localstorage nếu ko có thì số lượng là 0
      if (current + number > 100) {
          alert("Tổng số lượng đặt hàng không thể vượt quá 100.");  // Nếu số lượng trong localstorage + số lượng mới thêm > 100 thì thông báo
          return;
      }
      localStorage.setItem(code, current + number);                 // cập nhật lại số lượng trong kho = trong kho + mới thêm.
      alert("Đặt hàng thành công. Tổng số lượng đã đặt là: " + (current + number) + ".");
      updateCart(); // cập nhật lại giỏ hàng
  }
    function updateCart() {
      const cartTableBody = document.getElementById("cartTableBody");
      const totalPrice = document.getElementById("totalPrice");
      if( !cartTableBody ) return;  
      cartTableBody.innerHTML = "";     // xóa nội dung của bảng 
      let total = 0;  // tổng tiền = 0
      for (let i = 0; i < localStorage.length; i++) {        // duyệt qua các sản phẩm trong giỏ hàng
          const key = localStorage.key(i);    // lấy mã sản phẩm  vd sp001,sp002
          if (itemList[key]) {           // kiểm tra sản phẩm có trong itemsList ko
              const item = itemList[key];    // lấy nội dung của sp ,vd itemList[sp001]
              const qty = localStorage.getItem(key) || 1;  // lấy số lượng từ localstorage
              const priceItem = item.price * qty;       // tính giá tổng của 1 sản phẩm = đơn giá * số lượng
              const row = document.createElement('tr');
              row.innerHTML = `
                  <td  class="text-center rounded"> <a href="sanpham.html" target="sanpham.html"> <img src="${item.photo}"  width="100px"/>  </a></td>
                  <td class="text-center align-middle ">
                  <a href="sanpham.html" target="sanpham.html">  ${item.name} </a> </td>
                  <td class="text-center align-middle " >${item.price}</td>
                  <td class="text-center align-middle  text-nowrap ">
                      <button class="btn btn-secondary btn-sm " onclick="changeQuantity('${key}', -1)">-</button>
                      <span class="px-2" >${qty}</span>
                      <button class="btn btn-secondary btn-sm" onclick="changeQuantity('${key}', 1)">+</button>
                  </td>
                  <td class="text-center align-middle  "><button class="btn btn-danger" onclick="removeCart('${key}')">Xóa</button></td>
              `;
              cartTableBody.appendChild(row);
              total += priceItem;
          }
      }
      totalPrice.innerHTML = total;
  }
  

  function changeQuantity(code, delta) {   // thay đổi số lượng
      let qty = parseInt(localStorage.getItem(code)) || 1;  // lấy số lượng từ localstorage
      qty += delta;  
      if (qty < 1) qty = 1; // Đảm bảo số lượng không nhỏ hơn 1
      if (qty >= 100) qty = 100; //
      localStorage.setItem(code, qty);   // set lại giá trị mới cho item
      updateCart();             // cập nhật lại giỏ hàng
  }
  
  function removeCart(code) {   //xóa sản phẩm 
      localStorage.removeItem(code);  
      updateCart();
  }
  function payment() {
    const totalPrice = document.getElementById("totalPrice");
    const total = parseInt(totalPrice.innerHTML); // Lấy tổng số tiền hiện tại
    const name = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const checkbox = document.getElementById("checkbox").checked;
    const phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (name.length < 4) {
        alert("Tên ít nhất phải có 4 kí tự");
        return ;
    }
    if (!emailPattern.test(email)) {
    alert("Email không hợp lệ.");
    return ;
    }
    if (!phonePattern.test(phone)) {
        alert("Vui lòng nhập số điện thoại hợp lệ");
        return ;
    } 
    if (address.length < 10) {
        alert("Địa chỉ phải có ít nhất 10 kí tự");
        return ;
    } 
    if(checkbox == false ){
        alert("Bạn phải đồng ý với chính sách và điều khoản trước khi tiếp tục");
        return;
    }
    if (total == 0) {
        alert("Vui lòng thêm sản phẩm trước khi thanh toán!");
    }
    else{ 
      localStorage.clear(); // Xóa tất cả dữ liệu trong localStorage
      updateCart(); // Cập nhật lại giỏ hàng
      alert("Đơn hàng đã được đặt đặt thành công. Cảm ơn quý khách!")
    }
  }

  // Gọi hàm updateCart khi trang được tải
  window.onload = updateCart;
  
  
  window.onstorage = function() {
    updateCart();
  };
  
function valcontact(){
    const contactname = document.getElementById("contactname").value;
    const contactemail = document.getElementById("contactemail").value;
    const contacttext = document.getElementById("contacttext").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log(contactname.length);
    
    if (contactname.length < 4) {
        alert("Tên ít nhất phải có 4 kí tự");
        return ;
    }
    if (!emailPattern.test(contactemail)) {
    alert("Email không hợp lệ.");
    return ;
}
    if (contacttext.length < 10) {
        alert("Nội dung liên hệ ít nhất 10 kí tự");
        return ;
    } 

alert("Thông tin liên hệ của bản đã được gửi thành công");
}
  // Kiểm tra xem sản phẩm có đáp ứng tiêu chí lọc theo giá hay không
  function filterByPrice(price, selectedPrice) {//price là giá của sản phẩm,giá sp được gắn giá trị bên html, và selectedPrice là giá trị lọc giá mà người dùng đã chọn
    if (selectedPrice === "1" && price >= 200000) {
        return false;
    } else if (selectedPrice === "2" && (price < 200000 || price > 500000)) {
        return false;
    } else if (selectedPrice === "3" && price <= 500000) {
        return false;
    }
    return true;
  }//Nếu selectedPrice là "1(1được định nghĩa là dưới  200k, dòng 148 bên html", thì giá sản phẩm phải nhỏ hơn 200,000.
  //Nếu selectedPrice là "2", thì giá sản phẩm phải nằm trong khoảng từ 200,000 đến 500,000.
  //Nếu selectedPrice là "3", thì giá sản phẩm phải lớn hơn 500,000.
  //Nếu sản phẩm không đáp ứng tiêu chí lọc, hàm trả về false; ngược lại, trả về true.
  
  // Kiểm tra xem sản phẩm có đáp ứng tiêu chí lọc theo loại sản phẩm hay không
  function filterByCategory(category, selectedCategory) {//category là loại của sản phẩm, và selectedCategory là giá trị lọc loại sản phẩm mà người dùng đã chọn.
    if (selectedCategory && selectedCategory !== "all" && category !== selectedCategory) {//Nếu selectedCategory không phải là "all" và không trống, thì loại của sản phẩm phải trùng với selectedCategory để đáp ứng tiêu chí lọc.
        return false;
    }
    return true;
  }//Nếu sản phẩm không đáp ứng tiêu chí lọc, hàm trả về false; ngược lại, trả về true.(fasle và true mình sẽ dùng cho hàm applyfilterproduct)
  
  // Hiển thị hoặc ẩn sản phẩm dựa trên tiêu chí lọc
  function applyFiltersToProducts() {
    const products = document.querySelectorAll('.card'); // Lấy tất cả sản phẩm
    for (let i = 0; i < products.length; i++) {
      const  chooseprice =  document.getElementById('filterPrice').value;
      const  choosefilter = document.getElementById('filterCategory').value;
        const product = products[i]; // Lấy sản phẩm hiện tại
        const price = parseInt(product.getAttribute('data-price')); // Lấy giá sản phẩm
        const category = product.getAttribute('data-category'); // Lấy loại sản phẩm
        // Kiểm tra xem sản phẩm có đáp ứng tiêu chí lọc giá và loại hay không
        const isPriceValid = filterByPrice(price, chooseprice);
        const isCategoryValid = filterByCategory(category,choosefilter);
        // Hiển thị hoặc ẩn sản phẩm dựa trên kết quả kiểm tra bằng if-else
        if (isPriceValid && isCategoryValid) {
            product.parentElement.style.display = 'block'; // Hiển thị sản phẩm
        } else {
            product.parentElement.style.display = 'none'; // Ẩn sản phẩm
        }
    }
  }
// đăng nhập

function sigin(){
   
    const username = document.getElementById("usernamelog").value;
    const password = document.getElementById("passwordlog").value;
    let valid = true; // Biến để theo dõi tính hợp lệ của form
    if (username.length < 4) {
      alert("Tên tài khoản ít nhất phải có 4 kí tự");
      valid = false;
      return ;
  }
    if (password.length < 8) {
        alert("Mật khẩu phải có ít nhất 8 ký tự.");
        valid = false;
        return ;
    } 
      var user = localStorage.getItem(username);
      var dataUser = JSON.parse(user);
   
      if (user == null ){
        alert("Tài khoản không tồn tại");
      }
      if (  username == dataUser.username && password == dataUser.password){
        alert("Đăng nhập thành công ");
        window.location.href="trangchu.html";
      }
      else{
        alert("Sai mật khẩu");
      }
  
  }
  

  // đăng ký
  function sigup(){
  
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const repassword = document.getElementById("repassword").value;
      let valid = true; // Biến để theo dõi tính hợp lệ của form
      if (username.length < 4) {
        alert("Tên tài khoản ít nhất phải có 4 kí tự");
        valid = false;
        return ;
    }
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email)) {
          alert("Email không hợp lệ.");
          valid = false;
          return ;
      }
      // Kiểm tra mật khẩu
    
      if (password.length < 8) {
          alert("Mật khẩu phải có ít nhất 8 ký tự.");
          valid = false;
          return ;
      } 
    if( password == repassword ){ 
  var user = {
    username: username,
    email : email,
    password : password,
  }
  var json = JSON.stringify(user);
  localStorage.setItem(username,json);
  alert("Đăng kí thành công");
  }
  else
  alert("Mật khẩu nhập lại không đúng");
  }