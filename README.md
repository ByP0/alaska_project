# alaska_project

project-root/
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   │   ├── health.py
│   │   │   └── log.py
│   │   ├── core/
│   │   │   └── config.py
│   │   ├── db/
│   │   │   └── mongo.py
│   │   └── models/
│   │       └── log.py
│   ├── main.py
│   ├── Dockerfile
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── images/
│   │   │   ├── cassette.png
│   │   │   ├── logo.png
│   │   │   ├── phone2.svg
│   │   │   └── poster.png
│   │   ├── pages/
│   │   │   ├── enterPage/
│   │   │   │   ├── enterPage.css
│   │   │   │   └── enterPage.jsx
│   │   │   └── mainPage/
│   │   │       ├── mainPage.css
│   │   │       └── mainPage.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── Dockerfile
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
│
├── migrator/
│   ├── migrate.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── .env
├── .gitignore
├── docker-compose.yml
└── README.md