/**
 * Input: điểm thi 3 môn, điểm ưu tiên(khu vực + đối tượng): tạo sự kiện click và lấy dữ liệu để xử lí
 *
 * Process:
 * +Tính tổng trung bình: -
 */

document.querySelector("#ketqua").onclick = function () {
  let diemMon1 = document.querySelector("#mon1").value * 1;
  let diemMon2 = document.querySelector("#mon2").value * 1;
  let diemMon3 = document.querySelector("#mon3").value * 1;
  let khuVuc = document.querySelector("#khuvuc").value;
  let doiTuong = document.querySelector("#doituong").value;
  let diemChuan = document.querySelector("#diemchuan").value * 1;
  let tongDiem = diemMon1 + diemMon2 + diemMon3;
  let diemKhuVuc = 0;
  let diemDoiTuong = 0;
  if (khuVuc == "khuvucA") {
    diemKhuVuc = 2;
  } else if (khuVuc == "khuvucB") {
    diemKhuVuc = 1;
  } else if (khuVuc == "khuvucC") {
    diemKhuVuc = 0.5;
  } else {
    diemKhuVuc = 0;
  }
  //   if (doiTuong == " 1") {
  //     diemDoiTuong = 2.5;
  //   } else if (doiTuong == "2") {
  //     diemDoiTuong = 1.5;
  //   } else if (doiTuong == "3") {
  //     diemDoiTuong = 1;
  //   } else {
  //     diemDoiTuong = 0;
  //   }
  switch (doiTuong) {
    case "doituong1":
      diemDoiTuong = 2.5;
      break;

    case "doituong2":
      diemDoiTuong = 1.5;
      break;

    case "doituong3":
      diemDoiTuong = 1;
      break;

    default:
      diemDoiTuong = 0;
  }
  console.log(diemDoiTuong);
  let ketQua = tongDiem + diemKhuVuc + diemDoiTuong;
  console.log(ketQua);
  if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
    document.querySelector(
      ".alert-info"
    ).innerHTML = `Xin chia buồn bạn đã trượt vì đã bị rơi vào điểm liệt`;
  } else if (ketQua >= diemChuan) {
    document.querySelector(
      ".alert-info"
    ).innerHTML = `Xin chúc mừng thí sinh đã thi đậu với số điểm là: ${ketQua}`;
  } else if (ketQua < diemChuan) {
    document.querySelector(
      ".alert-info"
    ).innerHTML = `Xin chia buồn bạn đã trượt vì số điểm bạn là: ${ketQua}`;
  }
};

// Bài Tập2:

document.querySelector("#ketQuaTienDien").onclick = function () {
  let hoTen = document.querySelector("#hoTen").value;
  let soKw = document.querySelector("#soKw").value * 1;
  let tongTien = 0;
  if (soKw <= 50) {
    tongTien = 500 * soKw;
  } else if (soKw > 50 && soKw <= 100) {
    tongTien = 500 * 50 + (soKw - 50) * 650;
  } else if (soKw > 100 && soKw <= 200) {
    tongTien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (soKw > 200 && soKw <= 350) {
    tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  } else {
    tongTien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
  }

  document.querySelector(
    ".raTien"
  ).innerHTML = `Tổng tiền của khách hàng ${hoTen} là hết: ${tongTien.toLocaleString(
    "it-IT",
    {
      style: "currency",
      currency: "VND",
    }
  )}`;
  console.log("Tiền điện là:", tongTien);
};

// Bài Tập3

document.querySelector("#ketQuaTinhThue").onclick = function () {
  let hoVaTen = document.querySelector("#hoVaTen").value;
  let tongThuNhap = document.querySelector("#tongThuNhap").value * 1;
  let nguoiPhuThuoc = document.querySelector("#soNguoi").value * 1;
  let thuNhapCT = tongThuNhap - 4000000 - nguoiPhuThuoc * 1600000;
  let soThue = 0;
  if (thuNhapCT <= 60e6 && thuNhapCT > 0) {
    soThue = thuNhapCT * 0.05;
  } else if (thuNhapCT > 60e6 && thuNhapCT <= 120e6) {
    soThue = 60e6 * 0.05 + (thuNhapCT - 60e6) * 0.1;
  } else if (thuNhapCT > 120e6 && thuNhapCT <= 210e6) {
    soThue = 60e6 * 0.05 + 60e6 * 0.1 + (thuNhapCT - 120e6) * 0.15;
  } else if (thuNhapCT > 210e6 && thuNhapCT <= 384e6) {
    soThue = 60e6 * 0.05 + 60e6 * 0.1 + 90e6 * 0.15 + (soThue - 210e6) * 0.2;
  } else if (thuNhapCT > 384e6 && thuNhapCT <= 624e6) {
    soThue =
      60e6 * 0.05 +
      60e6 * 0.1 +
      90e6 * 0.15 +
      174e6 * 0.2 +
      (thuNhapCT - 384e6) * 0.25;
  } else if (thuNhapCT > 624e6 && thuNhapCT <= 960e6) {
    soThue =
      60e6 * 0.05 +
      60e6 * 0.1 +
      90e6 * 0.15 +
      174e6 * 0.2 +
      240e6 * 0.25 +
      (thuNhapCT - 624e6) * 0.3;
  } else if (thuNhapCT > 960e6) {
    soThue =
      60e6 * 0.05 +
      60e6 * 0.1 +
      90e6 * 0.15 +
      174e6 * 0.2 +
      240e6 * 0.25 +
      336e6 * 0.3 +
      (thuNhapCT - 960e6) * 0.35;
  } else {
    soThue = 0;
  }

  document.querySelector(
    ".ketQua"
  ).innerHTML = `Tổng tiền thuế mà ${hoVaTen} phải trả là ${soThue.toLocaleString(
    "it-IT",
    {
      style: "currency",
      currency: "VND",
    }
  )}`;
  console.log(soThue);
};

// Bài tập4
const nha_Dan = "ND";
const doanh_nghiep = "DN";
function hideAndShow() {
  var user = document.getElementById("loaiKhachHang").value;
  if (user == "DN") {
    document.getElementById("soKetNoi").style.display = "block";
  } else {
    document.getElementById("soKetNoi").style.display = "none";
  }
}
document.querySelector("#ketQuaTienCap").onclick = function () {
  let user = document.querySelector("#loaiKhachHang").value;
  let codeUser = document.querySelector("#maKH").value;
  let chanel = document.querySelector("#soKenh").value * 1;
  let connec = document.querySelector("#soKetNoi").value * 1;
  let fee = 0;

  if (user == "ND") {
    fee = 4.5 + 20.5 + 7.5 * chanel;
  } else if (user == "DN") {
    if (connec < 10) {
      fee = 15 + 75 + 50 * chanel;
    } else {
      fee = 15 + 75 + (connec - 10) * 5 + 50 * chanel;
    }
  }

  document.getElementById(
    "kqTienCap"
  ).innerHTML = `Mã số khách hàng: ${codeUser} - Tiền Cáp:${fee.toLocaleString(
    "en-US",
    {
      style: "currency",
      currency: "USD",
    }
  )}`;
};
