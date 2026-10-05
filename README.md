# Jack — 3D Creator Portfolio (Lovable Prompt Lab)

> Bài luyện vibe coding: dựng portfolio cá nhân cho persona "Jack — 3D creator" trên Lovable, khởi điểm từ component/prompt tham khảo **3D Jack Portfolio Hero** trên [MotionSites](https://motionsites.ai/?prompt=3d-jack-portfolio-hero).

[![Live Demo](https://img.shields.io/badge/demo-live-FF5C35?style=flat-square)](https://maaitlunghau-portfolio.lovable.app/)
![Built with Lovable](https://img.shields.io/badge/built%20with-Lovable-8A5CF6?style=flat-square)
![Stack](https://img.shields.io/badge/stack-React%20%2B%20TypeScript%20%2B%20Tailwind-0EA5E9?style=flat-square)
![Status](https://img.shields.io/badge/status-practice%20project-lightgrey?style=flat-square)

**🔗 Live demo:** https://maaitlunghau-portfolio.lovable.app/

---

## Mục lục

- [Giới thiệu](#giới-thiệu)
- [Mục đích của repo](#mục-đích-của-repo)
- [Nguồn tham khảo / Component gốc](#nguồn-tham-khảo--component-gốc)
- [Tech stack](#tech-stack)
- [Cấu trúc trang](#cấu-trúc-trang)
- [Chạy project ở local](#chạy-project-ở-local)
- [Prompt đã dùng](#prompt-đã-dùng)
- [Ghi chú kỹ thuật — cần xử lý trước khi dùng thật](#ghi-chú-kỹ-thuật--cần-xử-lý-trước-khi-dùng-thật)
- [Ghi chú về bản quyền / thiết kế tham khảo](#ghi-chú-về-bản-quyền--thiết-kế-tham-khảo)
- [Roadmap luyện tập tiếp theo](#roadmap-luyện-tập-tiếp-theo)
- [Tác giả](#tác-giả)

---

## Giới thiệu

Đây là landing page portfolio cá nhân single-page cho persona **"Jack" — một 3D creator** chuyên về branding, motion và web, được generate bằng **Lovable** khởi điểm từ một component hero tham khảo trên MotionSites (thư viện premium prompt cho Lovable/Bolt/Cursor/Claude).

Trang gồm nav anchor (About / Price / Projects / Contact) và các block: hero portrait + CTA, marquee gallery cuộn ngang, "About me", "Services" (5 mục), "Projects" (3 case study kèm gallery ảnh).

## Mục đích của repo

Repo này **không phải sản phẩm thương mại**. Đây là bài luyện tiếp theo trong chuỗi **vibe coding / prompt engineering cho AI code tool**, với mục tiêu:

- Thử nghiệm quy trình "component tham khảo → mở rộng bằng prompt trên Lovable" thay vì viết structured prompt từ đầu như project trước (`lovable-vaultline-landing`).
- Đánh giá mức độ Lovable copy nguyên component tham khảo (bao gồm asset/nội dung filler) so với mức độ tự thích nghi theo ngữ cảnh mới.
- Lưu lại làm tài liệu so sánh chất lượng giữa cách tiếp cận "prompt từ đầu" và "component có sẵn + tuỳ biến".

## Nguồn tham khảo / Component gốc

- Nền tảng: [MotionSites](https://motionsites.ai) — thư viện prompt/component trả phí cho các AI website builder.
- Component cụ thể: `3d-jack-portfolio-hero` ([link tham khảo](https://motionsites.ai/?prompt=3d-jack-portfolio-hero))
- Phạm vi sử dụng: phần hero + marquee gallery bám khá sát component gốc; các phần About/Services/Projects được mở rộng thêm qua prompt trên Lovable.

> Trước khi public repo hoặc dùng cho mục đích thương mại, kiểm tra lại **giấy phép sử dụng (license) của MotionSites** cho prompt này — nhiều nền tảng bán prompt/component chỉ cấp quyền sử dụng cá nhân/học tập, không cho phép resell hoặc dùng nguyên asset của họ trong sản phẩm public.

## Screenshot
<img width="2048" height="1330" alt="image" src="https://github.com/user-attachments/assets/0af8dc85-0b06-4a29-b371-494978a335fa" />
<img width="1512" height="982" alt="image" src="https://github.com/user-attachments/assets/046bae0a-1ef3-49e5-8c77-3e352bb424c3" />
<img width="2048" height="1330" alt="image" src="https://github.com/user-attachments/assets/7b28335d-3306-4df5-b019-3512b607cf24" />

## Tech stack

| Layer | Công nghệ |
|---|---|
| Framework | React + TypeScript |
| Styling | Tailwind CSS |
| Animation | Có khả năng dùng Framer Motion hoặc CSS animation cho marquee/kinetic text (cần xác nhận lại trong code thật) |
| Build tool | Vite (mặc định của Lovable) |
| Hosting | Lovable Cloud (`*.lovable.app`) |

> Bảng này dựa trên phân tích output tĩnh của trang, không phải đọc trực tiếp source code trong repo — đối chiếu lại `package.json` để cập nhật chính xác.

## Cấu trúc trang

1. Sticky nav (anchor: About / Price / Projects / Contact)
2. Hero: portrait, headline "Hi, i'm jack", CTA "Contact Me"
3. Marquee gallery cuộn ngang 2 hàng (đang dùng preview GIF — xem mục Ghi chú kỹ thuật)
4. About me (kinetic/animated text)
5. Services — 5 mục đánh số: 3D Modeling, Rendering, Motion Design, Branding, Web Design
6. Projects — 3 case study (mỗi case study có tag "Live Project" + gallery ảnh)
7. Footer tối giản

## Chạy project ở local

```bash
git clone https://github.com/maaitlunghau/lovable-3D-portfolio
cd lovable-jack-portfolio
npm install
npm run dev
```

> Thay `<URL_REPO_GITHUB_CỦA_ANH>` bằng URL repo thật — tôi chưa có thông tin repo GitHub cụ thể cho project này, chỉ có link Lovable live demo.

Mở `http://localhost:5173` (port mặc định của Vite) để xem.

## Prompt đã dùng

Khác với project trước, project này khởi điểm từ component có sẵn trên MotionSites thay vì một structured prompt viết từ đầu. Ghi lại tại đây (nếu chưa lưu, nên bổ sung ngay để không quên):

- [ ] Prompt/link component gốc: `https://motionsites.ai/?prompt=3d-jack-portfolio-hero`
- [ ] Các prompt tiếp theo đã dùng để mở rộng About / Services / Projects / Contact (điền lại)
- [ ] Prompt chỉnh sửa nếu có (đổi màu, đổi copy, thêm section...)

> Khuyến nghị: tạo file `docs/prompt-history.md` ghi lại từng prompt theo timeline — đây chính là phần giá trị nhất cho mục đích "luyện tập" mà repo hiện tại đang thiếu.

## Ghi chú kỹ thuật — cần xử lý trước khi dùng thật

- **Marquee gallery đang hotlink ảnh từ `motionsites.ai/assets/...`** — đây là thumbnail preview của các template *khác* trên MotionSites (space-voyage, codenest, vex-ventures...), không phải work thật của Jack. Cần thay bằng ảnh/case study thật, đồng thời tự host ảnh thay vì hotlink domain ngoài.
- Ảnh trong phần Projects (Nextlevel Studio, Aura Brand, Solaris Digital) đang serve qua CDN ngoài `images.higgs.ai` — nên tự host lại để tránh phụ thuộc uptime/thay đổi của bên thứ 3.
- Nav có mục **"Price"** nhưng không thấy section pricing rõ ràng trong nội dung — kiểm tra lại anchor `#price` có trỏ đúng chỗ không.
- Section "About me" hiển thị text bị lặp ký tự khi fetch tĩnh (nhiều khả năng là hiệu ứng kinetic-text chạy JS, chưa chắc chắn 100% không phải bug) — cần tự kiểm tra trên browser có JS.
- CTA "Contact Me" chưa rõ trỏ tới form/section nào cụ thể — xác nhận lại hành vi thực tế.
- Footer hiện gần như trống — cân nhắc bổ sung social links, copyright nếu định dùng làm portfolio thật.

## Ghi chú về bản quyền / thiết kế tham khảo

- Component hero + marquee gallery dựa trên prompt trả phí `3d-jack-portfolio-hero` từ MotionSites — tuân theo điều khoản sử dụng của MotionSites cho prompt này.
- Tên nhân vật "Jack" và các case study (Nextlevel Studio, Aura Brand Identity, Solaris Digital) là nội dung demo/giả định, không liên kết với công ty hay cá nhân thật nào đã biết.
- Cần thay toàn bộ asset hotlink từ MotionSites bằng nội dung tự sở hữu trước khi public hoặc dùng cho mục đích thương mại.

## Roadmap luyện tập tiếp theo

- [ ] Thay marquee gallery bằng case study thật của Jack (hoặc case study demo tự tạo)
- [ ] Tự host lại toàn bộ ảnh, bỏ phụ thuộc `motionsites.ai` và `higgs.ai`
- [ ] Bổ sung Contact form thật (hiện CTA chưa rõ hành vi)
- [ ] Hoàn thiện footer với social links + copyright
- [ ] Ghi lại đầy đủ prompt history vào `docs/prompt-history.md`

## Tác giả

**Mai Trung Hậu** — Co-Founder @ MST Software (MMO Solution Technology) · Technical Director

---

<sub>Dự án luyện tập cá nhân — không phải sản phẩm thương mại.</sub>
