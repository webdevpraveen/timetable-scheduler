# 📅 Timetable Scheduler

A modern, lightning-fast React + TypeScript + Vite application designed to automatically generate conflict-free academic timetables across various university streams. 



![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

##  Key Features
- **Heuristic Scheduling Engine**: Automatically schedules theory classes and groups lab sessions into contiguous blocks.
- **Multi-Stream Support**: Out-of-the-box data models for BCA, B.Tech, BBA, LLB, M.Tech, MCA, MBA, and BPT.
- **Dynamic Constraints**: Filter by stream, cap maximum daily theory classes, and automatically flag unplaceable subjects.
- **Clean UI & Print-Ready**: Built with Tailwind CSS, featuring a wizard-like interface that exports directly to beautifully formatted, official-looking PDFs.
- **Custom Branding**: Fully adjustable colors, logos, and letterheads to match institutional identity (Defaults to SRMU standards).

## Preview (Screenshot)
<img width="520" height="302" alt="image" src="https://github.com/user-attachments/assets/8e930019-6b34-4ead-a1b1-f64afe8d8410" />
<img width="520" height="249" alt="image" src="https://github.com/user-attachments/assets/c7957775-6382-42bd-a9c2-21fd471322f7" />
<img width="790" height="550" alt="image" src="https://github.com/user-attachments/assets/00569154-960d-483c-8d60-382612e12e68" />



## Tech Stack
- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS + PostCSS

## Scheduler Logic & Rules
The core scheduling engine operates using a specialized heuristic algorithm that mimics real-world academic constraints:
1. **Theory Prioritization & Distribution**: Standard theory subjects are randomly distributed across the available weekly slots (Monday to Friday) to ensure a balanced timetable without heavy clustering.
2. **Daily Theory Limits**: A dynamic constraint ensures that the number of theory classes on any given day does not exceed a set maximum, preventing student burnout.
3. **Contiguous Lab Assignments**: Practical Lab sessions (which require extended time) are strictly allocated to uninterrupted, consecutive 2-period blocks on the same day.
4. **Collision Avoidance**: The generator natively guarantees that no single stream has overlapping classes in the same time slot.
## License
This project is open-source and available for academic and administrative use.

---

