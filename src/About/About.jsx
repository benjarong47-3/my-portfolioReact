import { useEffect, useState } from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';
import './About.css';
import profileImg from '../../assets/profile1.png';

function About() {
    const skills = [
        { name: 'Frontend Development', icon: <Code size={24} />, color: '#3b82f6' },
        { name: 'UI/UX Design', icon: <Palette size={24} />, color: '#10b981' },
        { name: 'Performance Optimization', icon: <Zap size={24} />, color: '#f59e0b' },
        { name: 'Problem Solving', icon: <Heart size={24} />, color: '#ef4444' }
    ];

    // ข้อความ About
    const textLines = [
        "Hello! I'm a passionate web developer with a love for creating beautiful and functional user experiences. I enjoy turning complex problems into simple, elegant solutions.",
        "When I'm not coding, you can find me exploring new technologies, reading tech blogs, or working on personal projects that challenge my creativity and technical skills."
    ];

    const [displayedText, setDisplayedText] = useState(['', '']); // เก็บข้อความพิมพ์แล้ว

    useEffect(() => {
        textLines.forEach((line, index) => {
            let i = 0;
            const interval = setInterval(() => {
                setDisplayedText(prev => {
                    const newArr = [...prev];
                    newArr[index] = line.slice(0, i + 1);
                    return newArr;
                });
                i++;
                if (i === line.length) clearInterval(interval);
            }, 30); // ปรับความเร็วพิมพ์ (ms ต่ออักษร)
        });
    }, []);

    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2 className="section-title">About Me</h2>

                        {displayedText.map((line, idx) => (
                            <p key={idx} className="about-description">{line}</p>
                        ))}

                        {/* Skills */}
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-item">
                                    <div
                                        className="skill-icon"
                                        style={{ backgroundColor: skill.color + '20', color: skill.color }}
                                    >
                                        {skill.icon}
                                    </div>
                                    <span className="skill-name">{skill.name}</span>
                                </div>
                            ))}
                        </div>

                        {/* ปุ่ม Resume + Contact */}
                        <div className="about-actions">
                            <a href="/resume.pdf" className="btn-primary" download>
                                Download Resume
                            </a>
                            <button
                                className="btn-secondary"
                                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            >
                                Get In Touch
                            </button>
                        </div>
                    </div>

                    {/* รูปโปรไฟล์ */}
                    <div className="about-image">
                        <img
                            src={profileImg}
                            alt="Profile"
                            className="profile-img"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;