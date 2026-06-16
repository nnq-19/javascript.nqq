/* ==========================================================================
   HÀM 1: CẬP NHẬT HÌNH ẢNH VÀ CHỮ KHI DI CHUỘT VÀO HOẶC FOCUS BÀN PHÍM
   ========================================================================== */
function upDate(previewPic) {
    // Thêm log console theo yêu cầu để kiểm tra sự kiện kích hoạt
    console.log("Sự kiện cập nhật hình ảnh (Mouseover/Focus) đã kích hoạt thành công!");
    console.log("Văn bản thay thế (alt): " + previewPic.alt);
    console.log("Đường dẫn ảnh (src): " + previewPic.src);

    var targetDiv = document.getElementById("image");
    
    // Thay đổi nội dung chữ và hình nền tương ứng với ảnh đang tương tác
    targetDiv.innerHTML = previewPic.alt;
    targetDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/* ==========================================================================
   HÀM 2: HOÀN TÁC TRẠNG THÁI KHI RỜI CHUỘT HOẶC MẤT FOCUS (BLUR)
   ========================================================================== */
function undo() {
    console.log("Sự kiện hoàn tác (Mouseleave/Blur) đã kích hoạt thành công!");

    var targetDiv = document.getElementById("image");
    
    // Trả về giá trị ban đầu
    targetDiv.style.backgroundImage = "url('')";
    targetDiv.innerHTML = "Di chuột qua hoặc dùng phím Tab để hiển thị hình ảnh ở đây.";
}

/* ==========================================================================
   HÀM NÂNG CAO: TỰ ĐỘNG THÊM TABINDEX CHO ẢNH KHI TRANG WEB TẢI XONG (ONLOAD)
   ========================================================================== */
function addTabFocus() {
    console.log("Trang web đã tải xong (onload)! Đang khởi tạo hệ thống tabindex...");

    // Tóm lấy tất cả các bức ảnh nhỏ có class là 'preview'
    var images = document.querySelectorAll(".preview");

    // Viết một vòng lặp for để duyệt qua từng bức ảnh một
    for (var i = 0; i < images.length; i++) {
        console.log("Đang thêm thuộc tính tabindex cho bức ảnh số: " + (i + 1));
        
        // Thêm thuộc tính tabindex để ảnh có thể nhận tiêu điểm từ bàn phím
        images[i].setAttribute("tabindex", "0");
    }
    
    console.log("Hoàn thành! Tất cả các ảnh đã sẵn sàng cho trải nghiệm bàn phím.");
}
