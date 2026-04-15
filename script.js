// Mock Data สำหรับตัวละคร (สามารถแก้ไขและเพิ่มเองได้ภายหลัง)
const charactersData = {
    char1: {
        name: "เกรซ (ผู้หญิง)",
        videoUrl: "https://youtu.be/IK63i-GBagw?si=-muOjT8A6qRu0cZl", // วิดีโอตัวอย่าง
        driveLink: "https://drive.google.com/file/d/1sajHepaFWzwJUDZOKiAuuQ5mb_G4ihkS/view?usp=drive_link" // ลิงก์ Google Drive สำหร้บบทของตัวละครนี้
    },
    char2: {
        name: "โคล (ผู้ชาย)",
        videoUrl: "https://youtu.be/WrsfBSGwHgY?si=v-Mv9wPw7C2BjyBx", // วิดีโอตัวอย่าง
        driveLink: "https://drive.google.com/file/d/1uPEtVWwMlp1PrJhPBeCVUPCL2D9egadc/view?usp=drive_link" // ลิงก์ Google Drive สำหร้บบทของตัวละครนี้
    },
    char3: {
        name: "โคลอี้ (เด็กผู้หญิง)",
        videoUrl: "https://youtu.be/RIZSSi_-Dmo?si=HgYdiG9431FZ1ptb", // วิดีโอตัวอย่าง
        driveLink: "https://drive.google.com/file/d/1yjMgP5e7fFScdK0bX0FS_uviSvN7EpYD/view?usp=drive_link" // ลิงก์ Google Drive สำหร้บบทของตัวละครนี้
    },
    char4: {
        name: "เชอร์รี่ (ผู้หญิง)",
        videoUrl: "https://youtu.be/aQVXf9ukmLk?si=qqYsTYR9zybm61Fl", // วิดีโอตัวอย่าง
        driveLink: "https://drive.google.com/file/d/1VwI4msNX9JIqZVhC22c0x8MnnnCH9Tzo/view?usp=drive_link" // ลิงก์ Google Drive สำหร้บบทของตัวละครนี้
    },
    char5: {
        name: "ซอมบี้ชาย (ผู้ชาย)",
        videoUrl: "https://youtu.be/cftBysbJk5g?si=MTQ3kG-cSbLn1yMz", // วิดีโอตัวอย่าง
        driveLink: "https://drive.google.com/file/d/1uTQEfJDHU0A1s6pYdWDBWwEXEB3xkGKx/view?usp=drive_link" // ลิงก์ Google Drive สำหร้บบทของตัวละครนี้
    },
    char6: {
        name: "ซีโน่ (ผู้ชาย)",
        videoUrl: "https://youtu.be/JO6S-6SrXEo?si=6gDnyQB2sB4gSYTy", // วิดีโอตัวอย่าง
        driveLink: "https://drive.google.com/file/d/1NAs60LIYzNYiKjF2xBiAX4_0p00DGQhN/view?usp=drive_link" // ลิงก์ Google Drive สำหร้บบทของตัวละครนี้
    },
    char7: {
        name: "เดอะเกิร์ล , ชาวเมืองหญิง , ซอมบี้หญิง (ผู้หญิง)",
        videoUrl: "https://youtu.be/J5i81ISslPs?si=fIYGyOgjy-VMsMNj", // วิดีโอตัวอย่าง
        driveLink: "https://drive.google.com/file/d/1epiy-9VxgY_CbkEP9ydb6gKeRiHu-uqi/view?usp=drive_link" // ลิงก์ Google Drive สำหร้บบทของตัวละครนี้
    },
    char8: {
        name: "นักข่าวชาย , นักข่าวหญิง (ผู้หญิง)",
        videoUrl: "https://youtu.be/1b6Q5QoeSIY?si=0yPo2j7ubW2rdeRc", // วิดีโอตัวอย่าง
        driveLink: "https://drive.google.com/file/d/1mApTeG1QCTPjHg3YfHz3ugBSyp6TV4ID/view?usp=drive_link" // ลิงก์ Google Drive สำหร้บบทของตัวละครนี้
    },
    char9: {
        name: "ผู้จัดการโรงแรม (ผู้ชาย)",
        videoUrl: "https://youtu.be/6NY6Oj1MVpw?si=3jT0mFnfMgxGZ8eq", // วิดีโอตัวอย่าง
        driveLink: "https://drive.google.com/file/d/1pR4vjFndppNn2fQHhtvZQ6nQGEhu-kpA/view?usp=drive_link" // ลิงก์ Google Drive สำหร้บบทของตัวละครนี้
    },
    char10: {
        name: "มาร์วิน , เคนโด้ (ผู้ชาย)",
        videoUrl: "https://youtu.be/D5Jc98vaAMc", // วิดีโอตัวอย่าง
        driveLink: "https://drive.google.com/file/d/1aAxeOeF9_tsC5qQiOQ89d4_SCSvw5pHY/view?usp=drive_link" // ลิงก์ Google Drive สำหร้บบทของตัวละครนี้
    },
    char11: {
        name: "นาธาน (ผู้ชาย)",
        videoUrl: "https://youtu.be/0AhbkkxiiXE", // วิดีโอตัวอย่าง
        driveLink: "https://drive.google.com/file/d/10sYpqlwlLa1JOJNp_Le9VwnGdr7AVaxl/view?usp=drive_link" // ลิงก์ Google Drive สำหร้บบทของตัวละครนี้
    },
    char12: {
        name: "วิกเตอร์ (ผู้ชาย)",
        videoUrl: "https://youtu.be/WNACKAkWIPY", // วิดีโอตัวอย่าง
        driveLink: "https://drive.google.com/file/d/1-hve_h8Qbcs1LGRiWhxRBeNzZwYXQEr2/view?usp=drive_link" // ลิงก์ Google Drive สำหร้บบทของตัวละครนี้
    },
    char13: {
        name: "สเปนเซอร์ (ผู้ชาย)",
        videoUrl: "https://youtu.be/BLZDc9lCfxg", // วิดีโอตัวอย่าง
        driveLink: "https://drive.google.com/file/d/1eBKnW2kWEF7-OgWgxcRpfGIQJwinuBhE/view?usp=drive_link" // ลิงก์ Google Drive สำหร้บบทของตัวละครนี้
    },
    char14: {
        name: "หมอบาดเจ็บ , ชาวเมืองชาย , ชายสวมฮู้ด (ผู้ชาย)",
        videoUrl: "https://youtu.be/WJ2mf5F4kQg", // วิดีโอตัวอย่าง
        driveLink: "https://drive.google.com/file/d/1zahhzVG-M_MFBKfbZ5rKpSJMxf-ahenJ/view?usp=drive_link" // ลิงก์ Google Drive สำหร้บบทของตัวละครนี้
    },
    char15: {
        name: "หัวหน้าทีมทหาร , คอมมานโด (ผู้ชาย)",
        videoUrl: "https://youtu.be/EWtl3KYSxUk", // วิดีโอตัวอย่าง
        driveLink: "https://drive.google.com/file/d/1R2H22WeZuup5RidTD4tQJbw4PE3opG41/view?usp=drive_link" // ลิงก์ Google Drive สำหร้บบทของตัวละครนี้
    },
    char16: {
        name: "อลิซซ่า (ผู้หญิง)",
        videoUrl: "https://youtu.be/K45zcXSlZu0", // วิดีโอตัวอย่าง
        driveLink: "https://drive.google.com/file/d/1S_Peu0ZsLwKpstA2SclHvuPuIokzmQjo/view?usp=drive_link" // ลิงก์ Google Drive สำหร้บบทของตัวละครนี้
    },
    char17: {
        name: "เอมเบอร์อายส์ (ผู้ชาย)",
        videoUrl: "https://youtu.be/Vcv_WWREytY", // วิดีโอตัวอย่าง
        driveLink: "https://drive.google.com/file/d/1XYnLjxtQplxZWCdMWdHPaMJ_nXZhJf5F/view?usp=drive_link" // ลิงก์ Google Drive สำหร้บบทของตัวละครนี้
    },
    char18: {
        name: "เอมิลี่ (เด็กผู้หญิง)",
        videoUrl: "https://youtu.be/2_PmCkPae_4", // วิดีโอตัวอย่าง
        driveLink: "https://drive.google.com/file/d/1ZtoLG6eUNFIyO8fxs75EKfXdOe3OiI5A/view?usp=drive_link" // ลิงก์ Google Drive สำหร้บบทของตัวละครนี้
    },
    char19: {
        name: "โอเปอเรเตอร์ , ฮังค์ (ผู้ชาย)",
        videoUrl: "https://youtu.be/TF6vxCIycZk", // วิดีโอตัวอย่าง
        driveLink: "https://drive.google.com/file/d/1ZqCyCgR_NAeotXpvncZqSi6YUZql1kuV/view?usp=drive_link" // ลิงก์ Google Drive สำหร้บบทของตัวละครนี้
    },
    char20: {
        name: "แฮร์รี่ (ผู้ชาย)",
        videoUrl: "https://youtu.be/6uxA1xuW82s", // วิดีโอตัวอย่าง
        driveLink: "https://drive.google.com/file/d/1KtiYdwQay9_w0rvSzSkYASuASYbN8qrB/view?usp=drive_link" // ลิงก์ Google Drive สำหร้บบทของตัวละครนี้
    }

};

// ฟังก์ชันแปลงลิงก์ YouTube ทั่วไปให้เป็นแบบ Embed
function getEmbedUrl(url) {
    try {
        if (url.includes('youtu.be/')) {
            const videoIdWithParams = url.split('youtu.be/')[1];
            const videoId = videoIdWithParams.split('?')[0];
            return `https://www.youtube.com/embed/${videoId}`;
        } else if (url.includes('youtube.com/watch?v=')) {
            const urlObj = new URL(url);
            const videoId = urlObj.searchParams.get('v');
            return `https://www.youtube.com/embed/${videoId}`;
        }
    } catch (e) {
        console.error("Invalid URL:", url);
    }
    return url;
}

document.addEventListener('DOMContentLoaded', () => {
    const buttonsContainer = document.getElementById('char-buttons-container');
    const detailsSection = document.getElementById('details-section');
    const iframe = document.getElementById('char-video');
    const nameEl = document.getElementById('char-name');
    const driveBtn = document.getElementById('char-drive');

    // สร้างปุ่มตัวละครอัตโนมัติจาก mock data
    const buttons = [];
    for (const charId in charactersData) {
        if (charactersData.hasOwnProperty(charId)) {
            const data = charactersData[charId];

            const btn = document.createElement('button');
            btn.className = 'char-btn glow-hover';
            btn.setAttribute('data-id', charId);
            btn.textContent = data.name; // ใช้ชื่อตัวละครจาก data

            buttonsContainer.appendChild(btn);
            buttons.push(btn);
        }
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', function () {
            // ป้องกันการโหลดซ้ำถ้ากดตัวละครเดิม
            if (this.classList.contains('active')) return;

            // Remove active class from all buttons
            buttons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const charId = this.getAttribute('data-id');
            const data = charactersData[charId];

            if (data) {
                // 1. ซ่อนการ์ดเพื่อทำ Fade Out ให้หายไปก่อน
                detailsSection.classList.add('fade-out');

                // รอให้อนิเมชัน Fade Out จบ (ประมาณ 400 มิลลิวินาที) ค่อยอัปเดตข้อมูล
                setTimeout(() => {
                    // Update content
                    nameEl.textContent = data.name;
                    driveBtn.href = data.driveLink;

                    // กำหนดว่า เมื่อวิดีโอถูกโหลดเสร็จสมบูรณ์แล้ว ให้ค่อยๆ เฟดอินการ์ดกลับมา
                    iframe.onload = () => {
                        detailsSection.classList.remove('fade-out');
                        iframe.onload = null; // เคลียร์ event ป้องกันปัญหากดสลับหลายครั้ง

                        // Smooth scroll
                        setTimeout(() => {
                            detailsSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }, 50);
                    };

                    // โหลดวิดีโอใหม่
                    iframe.src = getEmbedUrl(data.videoUrl);
                }, 400);
            }
        });
    });

    // แสดงตัวละครแรกเป็นค่าเริ่มต้น
    if (buttons.length > 0) {
        const firstBtn = buttons[0];
        const firstData = charactersData[firstBtn.getAttribute('data-id')];
        if (firstData) {
            nameEl.textContent = firstData.name;
            driveBtn.href = firstData.driveLink;
            firstBtn.classList.add('active');

            // เริ่มต้นซ่อนการ์ดไว้เหมือนกันจนกว่าวิดีโอจะโหลดเสร็จ
            detailsSection.classList.add('fade-out');

            iframe.onload = () => {
                detailsSection.classList.remove('fade-out');
                iframe.onload = null;
            };

            iframe.src = getEmbedUrl(firstData.videoUrl);
        }
    }

    // Simple scroll animation (Fade-in effect when scrolling)
    const fadeElements = document.querySelectorAll('.fade-in');

    const checkVisibility = () => {
        const windowHeight = window.innerHeight;
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= windowHeight - 100) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            } else {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
            }
        });
    };

    // Initial styling for fade elements
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
    });

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check on load
});
