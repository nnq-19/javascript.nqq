/* ==========================================================================
   HÀM 1: CẬP NHẬT HÌNH ẢNH VÀ CHỮ KHI DI CHUỘT VÀO (HOVER)
   ========================================================================== */
function upDate(previewPic) {
    // Yêu cầu 1: Sử dụng console.log để kiểm tra sự kiện có kích hoạt không
    console.log("Sự kiện onmouseover đã kích hoạt thành công!");

    // Yêu cầu 2: In ra thông tin alt và src của bức ảnh đang được trỏ tới (this)
    console.log("Văn bản thay thế (alt): " + previewPic.alt);
    console.log("Đường dẫn ảnh (src): " + previewPic.src);

    // Tìm kiếm phần tử khung lớn thông qua ID 'image'
    var targetDiv = document.getElementById("image");

    // Yêu cầu 3: Thay đổi nội dung chữ thành thuộc tính 'alt' của ảnh nhỏ
    targetDiv.innerHTML = previewPic.alt;

    // Yêu cầu 4: Thay đổi hình nền (background-image) thành đường dẫn 'src' của ảnh nhỏ
    // Cú pháp chuẩn trong CSS là: url('đường_dẫn_ảnh')
    targetDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/* ==========================================================================
   HÀM 2: HOÀN TÁC TRẠNG THÁI KHI RỜI CHUỘT ĐI (LEAVE)
   ========================================================================== */
function undo() {
    // Sử dụng console.log để kiểm tra sự kiện rời chuột
    console.log("Sự kiện onmouseleave đã kích hoạt thành công! Đang hoàn tác...");

    // Tìm kiếm phần tử khung lớn thông qua ID 'image'
    var targetDiv = document.getElementById("image");

    // Yêu cầu 5: Cập nhật hình nền về giá trị rỗng ban đầu (Hardcoded)
    targetDiv.style.backgroundImage = "url('')";

    // Yêu cầu 6: Cập nhật lại văn bản gốc ban đầu (Hardcoded)
    targetDiv.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}