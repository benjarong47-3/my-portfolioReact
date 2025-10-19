// src/data/portfolioData.js

// ===== Category List =====
export const categories = ["All", "AI", "Web", "Mobile"];

// ===== Import Images =====
import PlantAI from "../assets/images/Plant_ai.png";
import WeatherApp from "../assets/images/Weatherapp.png";
import TodoList from "../assets/images/To_do_list.png";
import Chatbot from "../assets/images/Chatbot.png";
import MobileFinance from "../assets/images/Mobile_Finance_Tracker.png";


// ===== Projects Data =====
const portfolioData = [
    {
        id: 1,
        title: "Plant Sound Classification",
        category: "AI",
        description:
            "โมเดล Deep Learning สำหรับจำแนกเสียงพืช (Dry / Water) โดยใช้ CNN + Spectrogram",
        image: PlantAI,
        view: "https://huggingface.co/spaces/NonSittinon/plant_sounds_cnn_ai",
    },
    {
        id: 2,
        title: "Weather App",
        category: "Web",
        description:
            "เว็บแอปแสดงสภาพอากาศแบบเรียลไทม์ พร้อมระบบพยากรณ์อากาศล่วงหน้า 5 วัน",
        image: WeatherApp,
        view: "https://weathernow-part2.netlify.app/",
    },
    {
        id: 3,
        title: "My To-Do List",
        category: "Web",
        description:
            "เว็บไซต์ ช่วยจัดการรายการสิ่งที่ต้องทำ (To-Do) UI เรียบง่าย, แก้ไขรายการ inline, โครงสร้าง Component ชัดเจน",
        image: TodoList,
        view: "https://reactpromini.netlify.app/",
    },
    {
        id: 4,
        title: "AI Chatbot",
        category: "AI",
        description:
            "แชทบอท NLP สำหรับตอบคำถามทั่วไป พัฒนาโดยใช้ PyTorch และ Transformers",
        image: Chatbot,
        view: "https://github.com/username/ai-chatbot",
    },
    {
        id: 5,
        title: "Mobile Finance Tracker",
        category: "Mobile",
        description:
            "แอปพลิเคชันติดตามรายรับรายจ่ายบนมือถือ พัฒนาโดยใช้ React Native",
        image: MobileFinance,
        view: "https://github.com/username/mobile-finance-tracker",
    },
];

export default portfolioData;


// ===== Contact Information =====
export const contactInfo = {
    email: "bankkanthajai@gmail.com.com",
    phone: "093 374 4991",
    address: "123 Coding Lane, Bangkok, Thailand",
};

// ===== Social Media Links =====
export const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/" },
    { name: "GitHub", url: "https://github.com/benjarong47-3" },
    { name: "Twitter", url: "https://twitter.com/" },
];