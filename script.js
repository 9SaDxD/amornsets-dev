AOS.init({ duration: 800, once: true, offset: 50 });

let currentLang = 'en';
let typedInstance = null;

const translations = {
    en: {
        "nav.home": "Home", "nav.about": "About", "nav.skills": "Skills", "nav.projects": "Projects",
        "hero.hello": "Hi, my name is",
        "hero.desc": "Computer Science student at Sripatum University passionate about building modern web applications, backend systems, and automation technologies.",
        "hero.viewWork": "View Work",
        "hero.downloadCV": "Download CV",
        "about.title": "About Me", "about.profile": "Profile",
        "about.p1": "A motivated Computer Science and Software Innovation Development student at Sripatum University seeking an entry-level internship or graduate role.",
        "about.p2": "Passionate about building modern web applications and backend systems with a strong foundation in full-stack development, database design, and automation technologies.",
        "about.age": "Age", "about.location": "Location", "about.eduTitle": "Education",
        "about.degree": "B.S. in Computer Science & Software Innovation",
        "about.eduDesc": "Currently pursuing degree with focus on software engineering, web development, and data science.",
        "about.inProgress": "In Progress",
        "skills.title": "Technical Skills", "skills.web": "Web Dev & Services",
        "skills.webDesc": "RESTful API, JWT Auth, Responsive Design, UX/UI Principles.",
        "skills.backend": "Backend & Databases",
        "skills.backDesc": "SQL/NoSQL Design, Data Analysis, Basic ML, AI Models.",
        "skills.tools": "Tools & Others",
        "projects.title": "Featured Projects",
        
        "p1.title": "M-Music", "p1.sub": "Music streaming & mood-based playlist",
        "p1.desc": "<span class='text-primary'>▹ Problem:</span> Users waste time searching for songs that match their daily moods.<br><span class='text-primary'>▹ Solution:</span> Developed a music website that uses questionnaires to automatically categorize and generate personalized playlists.<br><span class='text-primary'>▹ My Role:</span> Full-Stack Developer managing both frontend UI Data.",
        
        "p2.title": "Slide Me", "p2.sub": "Tow truck & roadside assistance app",
        "p2.desc": "<span class='text-primary'>▹ Problem:</span> During vehicle emergencies, users struggle to find tow trucks and lack upfront pricing.<br><span class='text-primary'>▹ Solution:</span> Built a platform matching users with nearby tow truck providers, featuring real-time price estimation via GPS API.<br><span class='text-primary'>▹ My Role:</span> Frontend Designer & Full-Stack Developer.",
        
        "p3.title": "Silky POS", "p3.sub": "Real-time Ramen shop management",
        "p3.desc": "<span class='text-primary'>▹ Problem:</span> Ramen shops often face missed orders and delayed kitchen communication.<br><span class='text-primary'>▹ Solution:</span> Created a real-time Point of Sale (POS) web application using WebSocket to push orders instantly to the kitchen.<br><span class='text-primary'>▹ My Role:</span> Full-Stack Developer designing the system and implementing WebSocket architecture.",
        
        "p4.title": "Aqua Bot", "p4.sub": "AI (RAG) platform for fish farming",
        "p4.desc": "<span class='text-primary'>▹ Problem:</span> Fish farmers lack quick and accurate information sources when facing farming issues.<br><span class='text-primary'>▹ Solution:</span> Developed an AI Companion Web App using RAG architecture to provide specialized knowledge on freshwater fish farming.<br><span class='text-primary'>▹ My Role:</span> AI/Backend Developer integrating LLMs with the knowledge base.",
        
        "project.slide": "View Slide",
        "project.link": "Live Demo",
        
        "contact.title": "Get In Touch",
        "contact.desc": "I'm currently looking for an internship opportunity. My inbox is always open."
    },
    th: {
        "nav.home": "หน้าแรก", "nav.about": "เกี่ยวกับ", "nav.skills": "ทักษะ", "nav.projects": "ผลงาน",
        "hero.hello": "สวัสดีครับ ผมชื่อ",
        "hero.desc": "นักศึกษาคณะวิทยาการคอมพิวเตอร์ มหาวิทยาลัยศรีปทุม มีความหลงใหลในการพัฒนาเว็บแอปพลิเคชัน ระบบหลังบ้าน และเทคโนโลยี Automation",
        "hero.viewWork": "ดูผลงานทั้งหมด",
        "hero.downloadCV": "โหลดเรซูเม่ (PDF)",
        "about.title": "เกี่ยวกับฉัน", "about.profile": "โปรไฟล์ส่วนตัว",
        "about.p1": "นักศึกษาคณะวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์ มหาวิทยาลัยศรีปทุม กำลังมองหาโอกาสฝึกงานในตำแหน่ง Software / Web Developer",
        "about.p2": "มีความมุ่งมั่นในการสร้างเว็บแอปพลิเคชันและระบบ Backend สมัยใหม่ โดยมีพื้นฐานที่แข็งแกร่งด้าน Full-Stack, การออกแบบ Database และ Automation",
        "about.age": "อายุ", "about.location": "ที่อยู่", "about.eduTitle": "การศึกษา",
        "about.degree": "วท.บ. วิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์",
        "about.eduDesc": "กำลังศึกษาโดยเน้นด้าน Software Engineering, Web Development และ Data Science",
        "about.inProgress": "กำลังศึกษา (ปี 3)",
        "skills.title": "ทักษะความสามารถ", "skills.web": "การพัฒนาเว็บ",
        "skills.webDesc": "ออกแบบ RESTful API, ระบบยืนยันตัวตน JWT, การออกแบบ Responsive และหลักการ UX/UI",
        "skills.backend": "ระบบหลังบ้านและฐานข้อมูล",
        "skills.backDesc": "ออกแบบฐานข้อมูล SQL/NoSQL, วิเคราะห์และจัดการข้อมูล, Machine Learning เบื้องต้น",
        "skills.tools": "เครื่องมืออื่นๆ",
        "projects.title": "ผลงานเด่น (Projects)",
        
        "p1.title": "M-Music", "p1.sub": "เว็บไซต์ฟังเพลงและจัดเพลย์ลิสต์",
        "p1.desc": "<span class='text-primary'>▹ ปัญหา:</span> ผู้ใช้มักเสียเวลาในการค้นหาเพลงที่ตรงกับอารมณ์ในแต่ละวัน<br><span class='text-primary'>▹ สิ่งที่สร้าง:</span> เว็บไซต์ฟังเพลงที่ใช้แบบสอบถามสั้นๆ เพื่อวิเคราะห์และสร้างเพลย์ลิสต์ให้เข้ากับอารมณ์อัตโนมัติ<br><span class='text-primary'>▹ หน้าที่ของผม:</span> Full-Stack พัฒนาระบบหน้าบ้านและจัดการข้อมูล",
        
        "p2.title": "Slide Me", "p2.sub": "แอปพลิเคชันเรียกรถสไลด์ฉุกเฉิน",
        "p2.desc": "<span class='text-primary'>▹ ปัญหา:</span> เมื่อเกิดเหตุฉุกเฉิน ผู้ใช้มักหาบริการรถสไลด์ยากและไม่ทราบราคาล่วงหน้า<br><span class='text-primary'>▹ สิ่งที่สร้าง:</span> แพลตฟอร์มจับคู่ผู้ใช้รถกับผู้ให้บริการรถสไลด์ พร้อมระบบประเมินราคาล่วงหน้าแบบเรียลไทม์ผ่าน GPS API<br><span class='text-primary'>▹ หน้าที่ของผม:</span> ออกแบบและ สร้างเว็บแอปพลิเคชันฝัง Frontend",
        
        "p3.title": "Silky POS", "p3.sub": "ระบบจัดการร้านราเม็งแบบเรียลไทม์",
        "p3.desc": "<span class='text-primary'>▹ ปัญหา:</span> ร้านราเม็งมักมีปัญหาออเดอร์ตกหล่นและพนักงานหลังร้านได้ข้อมูลล่าช้า<br><span class='text-primary'>▹ สิ่งที่สร้าง:</span> เว็บแอปพลิเคชัน POS ที่ทำงานแบบเรียลไทม์ผ่าน WebSocket ข้อมูลออเดอร์เด้งเข้าครัวทันทีโดยไม่ต้องรีเฟรช<br><span class='text-primary'>▹ หน้าที่ของผม:</span> Full-Stack ออกแบบระบบและวางโครงสร้าง WebSocket",
        
        "p4.title": "Aqua Bot", "p4.sub": "แพลตฟอร์มช่วยเลี้ยงปลาน้ำจืดด้วย AI",
        "p4.desc": "<span class='text-primary'>▹ ปัญหา:</span> เกษตรกรผู้เลี้ยงปลาขาดแหล่งข้อมูลที่แม่นยำและรวดเร็วเมื่อเกิดปัญหา<br><span class='text-primary'>▹ สิ่งที่สร้าง:</span> ระบบ AI Companion โดยใช้สถาปัตยกรรม RAG เพื่อให้ความรู้เฉพาะทางด้านการเลี้ยงปลาน้ำจืด 5 ชนิด<br><span class='text-primary'>▹ หน้าที่ของผม:</span> AI/Backend ผสานการทำงาน LLM เข้ากับฐานข้อมูลความรู้",
        
        "project.slide": "ดูสไลด์นำเสนอ",
        "project.link": "ดูโปรเจกต์จริง",
        
        "contact.title": "ช่องทางการติดต่อ",
        "contact.desc": "ผมกำลังมองหาโอกาสในการฝึกงาน สามารถติดต่อมาพูดคุยกันได้ตลอดเวลาครับ"
    }
};

const typedStrings = {
    en: ['Full Stack Developer Intern', 'Software Engineering Student', 'Tech Enthusiast'],
    th: ['นักศึกษาฝึกงาน Full Stack', 'นักศึกษาวิทยาการคอมพิวเตอร์', 'ผู้หลงใหลในเทคโนโลยี']
};

function initTyped(lang) {
    if(typedInstance) typedInstance.destroy();
    typedInstance = new Typed('#typed-text', {
        strings: typedStrings[lang],
        typeSpeed: 50, backSpeed: 30, backDelay: 2000, loop: true
    });
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'th' : 'en';
    document.getElementById('lang-btn').innerText = currentLang === 'en' ? 'TH' : 'EN';
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key]; 
        }
    });
    initTyped(currentLang);
}

initTyped('en');
document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(translations[currentLang][key]) {
        el.innerHTML = translations[currentLang][key]; 
    }
});
