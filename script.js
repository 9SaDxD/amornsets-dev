// 1. เปิดใช้งานระบบเลื่อนจอแล้วค่อยๆ ลอยขึ้นมา (AOS)
AOS.init({ 
    duration: 800, 
    once: true, 
    offset: 50 
});

// 2. ระบบสองภาษา (เนื้อหา)
let currentLang = 'en';
let typedInstance = null;

const translations = {
    en: {
        "nav.home": "Home", "nav.about": "About", "nav.skills": "Skills", "nav.projects": "Projects",
        "hero.hello": "Hi, my name is",
        "hero.desc": "Computer Science student at Sripatum University passionate about building modern web applications, backend systems, and automation technologies.",
        "hero.viewWork": "View Work",
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
        "p1.desc": "A website for organizing personal playlists using questionnaires to categorize songs to match the user's style and mood.",
        "p2.title": "Slide Me", "p2.sub": "Tow truck & roadside assistance app",
        "p2.desc": "A platform matching users experiencing vehicle emergencies with nearby tow truck providers, featuring GPS-based upfront price estimation.",
        "p3.title": "Silky POS", "p3.sub": "Real-time Ramen shop management",
        "p3.desc": "A real-time Point of Sale (POS) web application for ramen shops utilizing WebSocket for instant data updates.",
        "p4.title": "Aqua Bot", "p4.sub": "AI (RAG) platform for fish farming",
        "p4.desc": "An AI Companion and Web App using RAG architecture to provide knowledge and answer questions about farming 5 types of economic freshwater fish and composting.",
        "contact.title": "Get In Touch",
        "contact.desc": "I'm currently looking for an internship opportunity. My inbox is always open."
    },
    th: {
        "nav.home": "หน้าแรก", "nav.about": "เกี่ยวกับ", "nav.skills": "ทักษะ", "nav.projects": "ผลงาน",
        "hero.hello": "สวัสดีครับ ผมชื่อ",
        "hero.desc": "นักศึกษาคณะวิทยาการคอมพิวเตอร์ มหาวิทยาลัยศรีปทุม มีความหลงใหลในการพัฒนาเว็บแอปพลิเคชัน ระบบหลังบ้าน และเทคโนโลยี Automation",
        "hero.viewWork": "ดูผลงานทั้งหมด",
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
        "p1.desc": "เว็บไซต์สำหรับจัดเพลย์ลิสต์ส่วนตัว โดยใช้แบบสอบถามในการจัดหมวดหมู่ของเพลงให้เข้ากับสไตล์และอารมณ์ของผู้ใช้",
        "p2.title": "Slide Me", "p2.sub": "แอปพลิเคชันเรียกรถสไลด์ฉุกเฉิน",
        "p2.desc": "แพลตฟอร์มจับคู่ผู้ใช้รถที่ประสบเหตุฉุกเฉินกับผู้ให้บริการรถสไลด์ในพื้นที่ใกล้เคียง พร้อมประเมินราคาล่วงหน้าตามระยะทางด้วย GPS",
        "p3.title": "Silky POS", "p3.sub": "ระบบจัดการร้านราเม็งแบบเรียลไทม์",
        "p3.desc": "เว็บแอปพลิเคชันจัดการระบบหน้าร้าน (POS) สำหรับร้านราเม็ง ทำงานแบบเรียลไทม์ผ่านเทคโนโลยี WebSocket",
        "p4.title": "Aqua Bot", "p4.sub": "แพลตฟอร์มช่วยเลี้ยงปลาน้ำจืดด้วย AI (RAG)",
        "p4.desc": "ระบบ AI Companion ที่ใช้สถาปัตยกรรม RAG ในการให้ความรู้เรื่องการเลี้ยงปลาน้ำจืดเศรษฐกิจทั้ง 5 ชนิด รวมถึงการทำปุ๋ยหมัก",
        "contact.title": "ช่องทางการติดต่อ",
        "contact.desc": "ผมกำลังมองหาโอกาสในการฝึกงาน สามารถติดต่อมาพูดคุยกันได้ตลอดเวลาครับ"
    }
};

// ข้อมูลสำหรับข้อความพิมพ์เอง (Typed.js)
const typedStrings = {
    en: ['Full Stack Developer Intern', 'Software Engineering Student', 'Tech Enthusiast'],
    th: ['นักศึกษาฝึกงาน Full Stack', 'นักศึกษาวิทยาการคอมพิวเตอร์', 'ผู้หลงใหลในเทคโนโลยี']
};

function initTyped(lang) {
    if(typedInstance) typedInstance.destroy();
    typedInstance = new Typed('#typed-text', {
        strings: typedStrings[lang],
        typeSpeed: 50, 
        backSpeed: 30, 
        backDelay: 2000, 
        loop: true
    });
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'th' : 'en';
    
    // 1. เปลี่ยน Text บนปุ่ม
    document.getElementById('lang-btn').innerText = currentLang === 'en' ? 'TH' : 'EN';
    
    // 2. เปลี่ยนข้อความในเว็บทั้งหมดตาม data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });
    
    // 3. เปลี่ยนข้อความพิมพ์เอง
    initTyped(currentLang);
}

// เริ่มต้นการทำงานด้วยภาษาอังกฤษ
initTyped('en');