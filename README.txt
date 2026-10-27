HUONG DAN CHAY WEBSITE SINH NHAT THANH TIEN
===========================================

MAT KHAU
- Mat khau dung: 000000 (6 chu so 0).
- Nhap du 6 so, trang tu kiem tra. Neu dung se tu chuyen den trang la thu.
- Neu sai, trang bao loi va cho nhap lai.
- Tai trang la thu, cham vao phong thu de mo va doc loi chuc.

CACH CHAY TREN ANDROID BANG TERMUX
1. Cai Termux va Python neu chua co.
2. Giai nen toan bo file ZIP. Khong tach rieng cac file HTML, CSS, JS hoac thu muc images.
3. Trong Termux, di den dung thu muc birthday (noi co file index.html). Vi du neu giai nen vao Tool share:
   cd "/storage/emulated/0/Tool share/Thanh_Tien_Pastel_Music/code wed snhat/birthday"
   Neu ban dat ZIP o noi khac, sua duong dan cho dung vi tri thuc te.
4. Chay may chu web:
   python -m http.server 8000 --bind 127.0.0.1
5. Mo Chrome tren dien thoai va vao:
   http://127.0.0.1:8000/
6. Nhap 000000. Neu muon nghe nhac, bam nut Bat nhac sinh nhat o goc duoi man hinh.
7. Dung may chu web: quay lai Termux va nhan Ctrl+C.

NEU LENH PYTHON KHONG CHAY
Thu lenh: python3 -m http.server 8000 --bind 127.0.0.1

CAC FILE QUAN TRONG
- index.html: trang nhap mat khau.
- sinhnhat.html: phong thu va loi chuc; bam phong thu de mo.
- banh.html: trang tiec sinh nhat va hieu ung.
- images/: anh ky niem va anh banh.
- music.js va music-birthday.wav: nut bat/tat nhac sinh nhat.

Luu y: giu nguyen cau truc thu muc sau khi giai nen. Khong can npm install.
