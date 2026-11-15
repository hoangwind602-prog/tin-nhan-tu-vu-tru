# Little Cloud Daycare – Nhà trẻ Mây Nhỏ

Bản demo V1.0 nhỏ gọn, ưu tiên điện thoại và iPad. Game hiện có một em bé tên Mimi cùng ba hoạt động: uống sữa, ngủ trưa và chơi cùng bé.

## Chạy trên máy
1. Tải và giải nén thư mục.
2. Mở `index.html` bằng trình duyệt; hoặc mở thư mục bằng VS Code và dùng tiện ích Live Server.
3. Không cần cài thư viện JavaScript.

## Đưa lên GitHub Pages
1. Tạo repository GitHub, ví dụ `little-cloud-daycare`.
2. Tải lên `index.html`, `style.css`, `script.js` (có thể tải cả `README.md`).
3. Vào **Settings → Pages**.
4. Ở **Build and deployment**, chọn **Deploy from a branch**.
5. Chọn branch `main`, folder `/(root)`, rồi Save.
6. Đợi GitHub Pages xuất bản và mở đường dẫn được GitHub cung cấp.

## Điều khiển
- Chạm một hoạt động ở bảng bên phải/dưới để chọn.
- Chạm nút hành động để chăm sóc Mimi.
- Thanh bụng no và năng lượng chỉ thay đổi nhẹ theo thời gian; không có game over.

## Bước phát triển tiếp theo
Thêm thao tác kéo/chạm trực tiếp vào đồ vật (kéo bình sữa tới Mimi), âm thanh bật/tắt và lưu trạng thái chơi. Hiện tại các hành động đang được kích hoạt bằng nút để bản demo ổn định trên màn hình cảm ứng.
