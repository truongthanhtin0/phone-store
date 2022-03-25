import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import "./style.scss";

const arr1 = [
  "Lịch sử mua hàng",
  "Cộng tác bán hàng cùng TGDĐ",
  "Tìm hiểu về mua trả góp",
  "Chính sách bảo hành",
  "Xem thêm",
];

const arr2 = [
  "Giới thiệu công ty (MWG.vn)",
  "Tuyển dụng",
  "Gửi góp ý, khiếu nại",
  "Tìm siêu thị (3.077 shop)",
  "Xem bản mobile",
];

const arr3 = [
  "Tổng đài hỗ trợ (Miễn phí gọi)",
  "Gọi mua: 1800.1060 (7:30 - 22:00)",
  "Kỹ thuật: 1800.1763 (7:30 - 22:00)",
  "Khiếu nại: 1800.1062 (8:00 - 21:30)",
  "Bảo hành: 1800.1064 (8:00 - 21:00)",
];

function Footer(props) {
  return (
    <section className="footer">
      <Box sx={{ flexGrow: 1 }} className="container">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            {arr1.map((item, index) => (
              <p key={index} className="footer__title">
                {item}
              </p>
            ))}
          </Grid>
          <Grid item xs={4}>
            {arr2.map((item, index) => (
              <p key={index} className="footer__title">
                {item}
              </p>
            ))}
          </Grid>
          <Grid item xs={4}>
            {arr3.map((item, index) => (
              <p key={index} className="footer__title">
                {item}
              </p>
            ))}
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default Footer;
