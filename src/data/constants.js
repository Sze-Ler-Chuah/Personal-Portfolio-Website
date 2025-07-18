export const Bio = {
    name: "Chuah Sze Ler",
    roles: [
      "COMPUTER SCIENCE GRADUAND",
      "FUTURE SOFTWARE ENGINEER",
      "FUTURE FRONTEND DEVELOPER",
      "FUTURE BACKEND ENGINEER",
      "FUTURE FULLSTACK DEVELOPER"
    ],
    description:
      "Hello There, I am Chuah Sze Ler.",
    github: "https://github.com/Sze-Ler-Chuah",
    resume: "https://drive.google.com/file/d/1qUJn-OF2Daq2MhIXq0ATYFLQ2jerdWaF/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/chuah-sze-ler-0955b2264/",
    instagram: "https://www.instagram.com/sze__ler/?hl=en",
    facebook: "https://www.facebook.com/SZE.LER.0417",
  };
  
  export const skills = [
    { 
      id : 1,
      title: "Languages",
      skills: [
        {
          id : 1,
          name: "Python"
        },
        {
          id : 2,
          name: "Java"
        },
        {
          id : 3,
          name: "Kotlin"
        },
        {
          id : 4,
          name: "SQL"
        },
                {
          id : 5,
          name: "R"
        },
                {
          id : 6,
          name: "HTML"
        },
                {
          id : 7,
          name: "CSS"
        },
        {
          id : 8,
          name: "Typescript"
        },
        {
          name: "JavaScript"
        }
      ],
    },
    { 
      id : 2,
      title: "Frameworks & Tools",
      skills: [
        { 
          id : 1,
          name: "Jetpack Compose"

        },
        { 
          id : 2,
          name: "Retrofit"
        },
        {
          id : 3,
          name : "Room DB "
        },
        {
          id : 4,
          name : "Next.js"
        },
        {
          name: "Vega"
        },
        {
          name: "Vega-Lite"
        }

      ],
    },
    {
      id : 3,
      title : "Software",
      skills : [
        {
          id : 1,
          name : "Github",
        },
        {
          id : 2,
          name : "Android Studio",
        },
        {
          id : 3,
          name : "R Studio",
        },
        {
          id : 4,
          name : "Tableau",
        },
        {
          id : 5,
          name : "Oracle",
        },
        {
          id : 6,
          name : "Jupyter",
        },
      ]
    },
    {
      id : 4,
      title: "Soft Skills",
      skills: [
        {
          id : 1,
          name: "Communication",
        },
        {
          id : 2,
          name: "Teamwork",
        },
        {
          id : 3,
          name: "Leadership",
        },
        {
          name: "Presentation", 
        }
      ],
    }
  ];
  
  export const education = [
    {
      id: 0,
      img: 'https://logowik.com/content/uploads/images/438_monash_university_logo.jpg',
      school: "Monash University",
      date: "July 2022 - July 2025",
      grade: "3.98 CGPA",
      wam : "87.656",
      desc: "I am a recent Computer Science graduand from Monash University, having completed my studies with a CGPA of 3.973 and a WAM of 86.949. My academic focus included algorithm & data structures, data science, object oriented programming, mobile app development, big data and parallel computing.",
      degree: "Bachelor Degree of Computer Science",
    },
    {
      id: 1,
      img: "https://seeklogo.com/images/T/tsun-jin-logo-A200A4CCC7-seeklogo.com.png",
      school: "Tsun Jin High School",
      date: "Jan 2016 - Dec 2021",
      grade : "-",
      wam : "-",
      desc: "Attended Tsun Jin High School, specializing in the Pure Science stream. Gained comprehensive knowledge in core scientific disciplines and developed strong analytical and problem-solving skills.",
    },
  ];
  
  export const experiences = [
      {
      id: 0,
      role: "Business Analyst Intern",
      company: "Juris Technologies",
      date:  "Nov 2024 - Feb 2025",
      desc: "Worked as a Business Analyst Intern at Juris Technologies, contributing to the development and enhancement of a credit management system. Responsibilities included implementing features based on functional specification documents, conducting end-to-end system testing and data validation, executing system modifications, and documenting comprehensive test cases. Ensured all features met user requirements and business objectives.",
      skills: ["SQL","Communication","Presentation"],
    },
    {
      id: 1,
      role: "TeaMWork Virtual Internship Program",
      company: "Monash University, University of Warwick",
      date:  "Jun 2024 - July 2024",
      desc: "A collaborative virtual internship program with students from University of Warwick, Monash University in association with IBM to create a marketing strategy to promote Artificial Intelligence to business student using IBM Skills Build Platform.",
      skills: ["Teamwork","Communication","Presentation","AI"],
    },
    {
      id: 2,
      role: "Competitive Programmer",
      date:  "Apr 2023 - Dec 2023",
      desc: "Throughout my journey as a competitive programmer, I have acheived notable acheivements. This includes Top 10 at Programming League National 2023, Finalist at CodeNection 2023, Top 10 at Monash Coding Leagues 2023 Semester 1 & Semester 2.",
      skills: ["Python"],
    }
  ];


  export const projects = [
    {
      title: "Personal Portfolio",
      date: "Dec 2023 - Jan 2024",
      description:
        "Developed my very first website. This is a portfolio website. ",
      image:
        "https://github.com/Sze-Ler-Chuah/Personal-Portfolio-Website/blob/master/src/Image/Portfolio_Screenshot.png?raw=true",
      tags: ["HTML", "CSS", "JavaScript", "React"],
      category: "web app",
      github: "https://github.com/Sze-Ler-Chuah/Personal-Portfolio-Website",
      webapp: "https://personal-portfolio-website-seven-rosy.vercel.app/"
    },
    {
      title: "Weather WebApp",
      date: "Jan 2024",
      description:
        "Weather WebApp which helps in forecasting weather for countries around the world",
      image: "https://github.com/Sze-Ler-Chuah/Personal-Portfolio-Website/blob/master/src/Image/Picture2.png?raw=true",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "web app",
      github: "https://github.com/SzeLer/What-s-The-Weather",
      webapp : "https://szeler.github.io/SzeLer.github.io-What-s-The-Weather/"
    },
    {
      title: "NutriTrack (Nutrition Tracking App)",
      date: "Mar 2025 - May 2025",
      description:
        "Developed a nutrition tracking app using Android Studio, Jetpack Compose, Retrofit and Room DB. The app allows users to check their diet score, improve their diets, have insights on all user's diet",
      image: "",
      tags: ["Android Studio", "Jetpack Compose", "Retrofit", "Room DB"],
      category: "mobile",
      github: "https://github.com/Sze-Ler-Chuah/Static-Factory"
    },
    {
      title: "Tetris Game",
      date: "Jul 2023 - Sep 2023",
      description:
        "Developed a Tetris game using Java.",
      image: "https://github.com/Sze-Ler-Chuah/Personal-Portfolio-Website/blob/master/src/Image/Tetris_Game.png?raw=true",
      tags: ["Typescript", "HTML", "CSS"],
      category: "web app",
      github: "https://github.com/Sze-Ler-Chuah/Tetris-Game"
    },     
    {
      title: "Static Factory (Rogue Like Game)",
      date: "Mar 2024 - May 2024",
      description:
        "Created a static factory design pattern in Java to create a rogue like game. The game features a player character which can carry items, sell items to earn money, buying special items, picking up items and using them to defeat enemies.",
      image: "https://github.com/Sze-Ler-Chuah/Personal-Portfolio-Website/blob/master/src/Image/Static_Factory.png?raw=true",
      tags: ["Java"],
      category: "oop",
      github: "https://github.com/Sze-Ler-Chuah/Static-Factory"
    },
    {
        title: "The Changing Tide: Malaysia's 15th General Election",
        date: "Sep 2024 - Oct 2024",
        image: "https://github.com/Sze-Ler-Chuah/Personal-Portfolio-Website/blob/master/src/Image/Data_Visualisation_2.png?raw=true",
        description: "Analysis of Malaysia's 15th General Election using HTML, CSS, Vega and Vega-Lite. The project visualizes election data to uncover trends and insights, providing an interactive platform for users to explore the electoral landscape.",
        tags: ["HTML", "CSS", "Vega", "Vega-Lite"],
        category: "web app",
        github: "https://github.com/Sze-Ler-Chuah/FIT3155-A3"
    },
    {
        title: "Biggest Threat To Temperature: Study On The Pollutant With The Highest Emission Value From 2010 To 2020",
        date: "Aug 2024 - Sep 2024",
        image: "https://github.com/Sze-Ler-Chuah/Personal-Portfolio-Website/blob/master/src/Image/Data_Visualisation_1.png?raw=true",
        description: "Designed an interactive Tableau dashboard to analyze the relationship between air pollutants and temperature trends in Malaysia from 2010 to 2020. The visualizations include dual-axis charts, stacked area and bar charts, line charts, dumbbell charts, and donut charts. The dashboard enables interactive exploration through year filtering, tooltip drilldowns, and source-based highlighting, helping identify the pollutant with the highest emission impact on temperature rise.",
        tags: ["Tableau"],
        category: "data",
        github: "https://public.tableau.com/app/profile/sze.ler.chuah/viz/DataVisualisation1_17249838013490/FinalDashboard#1"
    },
    {
      title: "Veterinary Clinic Database Management System",
      date: "Mar 2024 - May 2024",
      description:
        "Created a database management system for a veterinary clinic using SQL. The system allows the clinic to manage patient records, appointments and treatments efficiently.",
      image: "",
      tags: ["SQL"],
      category: "database",
      github: "https://github.com/Sze-Ler-Chuah/Veteriniary-Clinic-Database"
    },
    {
      title: "Prediction on Credit Score",
      date: "Apr 2023 - May 2023",
      description:
        "Developed a credit score classification system using Python. The project involved a full machine learning pipeline, including data auditing, cleaning, outlier treatment using IQR methods, and feature engineering. Visualized distributions with boxplots to support data understanding. Normalized features using standard scaling and implemented a Support Vector Machine (SVM) classifier to predict credit score categories. Evaluated the model’s performance through appropriate metrics, gaining practical experience in predictive analytics and supervised learning workflows. Conducted data preprocessing, engineering, visualisation, building machine learning models and evaluating it using Python. Gained hands-on experience with prediction data pipelines, focussing on classifying credit scores. Applied supervised learning techniques, utilizing data normalisation and Support Vector Machine (SVM) algorithms for model building.",
      image: "",
      tags: ["Python", "Pandas", "Machine Learning", "SVM", "Data Preprocessing"],
      category: "data",
      github: ""
    },
        {
      title: "Borrowing Administration Terminal (BAT) White Box Testing and Code Analysis",
      date: "Apr 2023 - May 2023",
      description:
        "Implement white box testing (unittest & mocking), static code analysis (Using pylint & pycodestyle), automated testing (Using CI/CD) and code coverage (Using coverage.py) on Borrowing Administration Terminal (BAT) using Python. The project focuses on ensuring the reliability and maintainability of the BAT system through comprehensive testing and code quality analysis.",
      image: "",
      tags: ["Python",],
      category: "testing",
      github: "https://github.com/Sze-Ler-Chuah/FIT2107-White-Box-Testing-Code-Analysis"
    },
    {
      title: "TwentyOne Text Based Game",
      date: "Jul 2022 - Aug 2022",
      description:
        "Created a TwentyOne Text Based game using Python. The game is a simple card game where the player has to try to reach 21 points as closely as possible without exceeding it. There are 2 modes in the game, single player and multiplayer. In single player mode, the player plays against the computer. In multiplayer mode, the player can play with another player. To create this game, basic Python concepts such as loop, function, dictionary and conditional statement are used.",
      image: "https://github.com/Sze-Ler-Chuah/Personal-Portfolio-Website/blob/master/src/Image/Twenty_One.png?raw=true",
      tags: ["Python"],
      category: "algorithm",
      github: "https://github.com/Sze-Ler-Chuah/Twenty-One-Text-Based-Game"
    },
    {
      title: "Hearts Text Based Game",
      date: "Aug 2022 - Sep 2022",
      description:
        "Developed a text-based version of the classic card game Hearts using Python, following the rules of the Black Lady variant. The game supports both single-player (against AI) and local multiplayer modes (2 to 4 players). Players aim to avoid penalty cards — Hearts and the Queen of Spades — and keep their score as low as possible, with the game ending once a player reaches 100 points. The implementation includes full game logic: card dealing, trick-taking mechanics, scoring (including 'Shooting the Moon'), and round progression. Built using core Python concepts such as loops, functions, dictionaries, and conditionals.",
      image: "https://github.com/Sze-Ler-Chuah/Personal-Portfolio-Website/blob/master/src/Image/Hearts.png?raw=true",
      tags: ["Python"],
      category: "algorithm",
      github: "https://github.com/Sze-Ler-Chuah/Hearts-Text-Based-Game"
    },
    {
      title: "Global Route Planner for Papa Pierre's Pâtisseries",
      date: "Sep 2022 - Oct 2022",
      description: "Built a Python-based pathfinding system for Papa Pierre's Pâtisseries, a fictional global delivery business. The system supports three unique vehicle types with specialized travel constraints: the CrappyCrepeCar (global but slow), the DiplomacyDonutDinghy (fast via capital cities and intra-country travel), and the TeleportingTarteTrolley (teleports over short distances). The program calculates the most efficient route between cities based on vehicle rules, optimizing for delivery time. Graph algorithms were implemented to manage route computation, country/capital rules, and distance constraints across nearly a thousand global locations.",
      image: "https://github.com/Sze-Ler-Chuah/Personal-Portfolio-Website/blob/master/src/Image/Papa_Pierre.png?raw=true",
      tags: ["Python", "Graph Algorithms", "Pathfinding"],
      category: "algorithm",
      github: "https://github.com/Sze-Ler-Chuah/PapaPierre-RoutePlanner"
    },
    {
        title: "Paint Program",
        date: "Mar 2023 - Apr 2023",
        description: "Developed a command-line Paint Program in Python using custom-built data structures such as stacks, queues, sets, and sorted lists. The application allows users to draw shapes, fill regions, and perform undo/redo operations within a virtual canvas. All core data structures—including stacks, referential arrays, and sorted lists—were implemented from scratch to handle shape history, pixel tracking, and command execution efficiently. This project highlights deep understanding of abstract data types and algorithmic design in a practical graphical context.",
        image: "https://github.com/Sze-Ler-Chuah/Personal-Portfolio-Website/blob/master/src/Image/Paint.png?raw=true",
        tags: ["Python"],
        category: "algorithm",
        github: "https://github.com/Sze-Ler-Chuah/FIT1008_A1"
    },
    {
        title: "Mountain Climber",
        date: "Apr 2023 - May 2023",
        description: "Developed an interactive mountain trail editor using Python and the Arcade library. Users can visually add, edit, and organize mountains and trails, with support for difficulty levels, branching paths, and real-time graph visualization. The system includes features for saving/loading trail data and grouping trails algorithmically by difficulty.",
        image: "",
        tags: ["Python"],
        category: "algorithm",
        github: "https://github.com/Sze-Ler-Chuah/FIT1008-A2"
    },
    {
        title: "Beekeper Game",
        date: "May 2023 - Jun 2023",
        description: "Created a beekeper game using Binary Trees, Binary Search Trees and Heaps",
        image: "",
        tags: ["Python"],
        category: "algorithm",
        github: "https://github.com/Sze-Ler-Chuah/FIT1008-A3"
    },
    {
        title: "Restaurant Maximum Revenue & Fastest Path To Reach The Top Of The Tower",
        date: "Aug 2023 - Sep 2023",
        description: "Uses Dynamic Programming's Knapsack Problem concept together with inclusion exclusion principle to find maximum revenue and the sites selected to open the restaurants which contributes to maximum revenue and each sites must be at least d distance apart from each other. Also, uses Dijkstra's algorithm to find the fastest path to reach the top of the tower.",
        image: "",
        tags: ["Python"],
        category: "algorithm",
        github: "https://github.com/Sze-Ler-Chuah/FIT2004-A1"
    },
    {
        title: "Customised Auto-Complete & A Weekend Getaway",
        date: "Sep 2023 - Oct 2023",
        description: "Implements a custom auto-complete system using a Trie data structure, enabling fast and efficient word searches. Also models a weekend trip allocation problem using Network Flow to assign participants to preferred destinations with car and driver constraints.",
        image: "",
        tags: ["Python"],
        category: "algorithm",
        github: "https://github.com/Sze-Ler-Chuah/FIT2004-A2"
    },
    {
        title: "Reversed Direction Boyer Moore Algorithm & Bitwise Operations Exact Pattern Matching",
        date: "Mar 2024 - Apr 2024",
        description: "Implemented the Reversed Direction Boyer Moore Algorithm for efficient substring searching, enhancing search speed by preprocessing the pattern. Also developed a Bitwise Operations Exact Pattern Matching algorithm, leveraging bitwise operations to achieve fast and memory-efficient pattern matching in strings.",
        image: "",
        tags: ["Python"],
        category: "algorithm",
        github: "https://github.com/Sze-Ler-Chuah/FIT3155-A1"
    },
    {
        title: "Ukkonen Algorithm & Bitwise Operations Exact Pattern Matching",
        date: "Apr 2024 - May 2024",
        description: "Implemented Ukkonen's algorithm for efficient suffix tree construction, enabling fast substring searches and pattern matching. Also developed a Burrows-Wheeler Transform (BWT)-based text compression system that uses Huffman coding for characters and Elias omega coding for run-lengths, along with a decoder to fully reconstruct the original text from the compressed format.",
        image: "",
        tags: ["Python"],
        category: "algorithm",
        github: "https://github.com/Sze-Ler-Chuah/FIT3155-A2"
    },
    {
        title: "Compute Possible Strings Of A Given Length Of A Number Of Alphabet & B-Tree",
        date: "May 2024 - Jun 2024",
        description: "Implemented a combinatorial analysis tool to count distinct cyclic rotations of all strings of given length over a defined alphabet, detecting patterns in string periodicity. Also developed a B-tree construction and manipulation system supporting ASCII-based sorted insertions and deletions, built from an input dictionary and dynamically updated using a command script. Final tree contents are output in sorted order.",
        image: "",
        tags: ["Python"],
        category: "algorithm",
        github: "https://github.com/Sze-Ler-Chuah/FIT3155-A3"
    },
        {
        title: "Library Web App",
        date: "Jul 2025 - Jun 2025",
        description: "Learnt to create a full stack web application using React, Spring Boot and SQL. The web app allows users to search for books, borrow books, return books. The web app is built using React for the frontend, Spring Boot for the backend and SQL for the database. Learn through Udemy course.",
        image: "https://github.com/Sze-Ler-Chuah/Personal-Portfolio-Website/blob/master/src/Image/Library_Web_App.png?raw=true",
        tags: ["HTML", "CSS", "Typescript", "React", "Spring Boot", "SQL"],
        category: "web app",
        github: "https://github.com/Sze-Ler-Chuah/FIT3155-A3"
    },

                              
  ];
