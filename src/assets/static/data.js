import notes from '../images/notes.png'
import notes2 from '../images/sticky-notes-2.png'
import notes3 from '../images/sticky-notes-3.png'
import moneyMate from '../images/mm-budget-analysis2.png'
import moneyMate2 from '../images/mm-budget-view.png'
import moneyMate3 from '../images/mm-transactions.png'
import testingApp415 from '../images/415.png'
import testingApp415_2 from '../images/415-home.png'
import testingApp415_3 from '../images/415-projects.png'
import testingApp415_4 from '../images/415-qualifications.png'
import seApp314 from '../images/314.png'
import seApp314_2 from '../images/314-2.png'
import portfolio from '../images/portfolio.png'
import portfolio2 from '../images/portfolio-2.png'
import portfolio3 from '../images/portfolio-3.png'

export const projects = [
        {
            "img":[moneyMate, moneyMate2, moneyMate3],
            "alt":"finances app",
            "name":"Money Mate",
            "url":"money-mate",
            "short_description":"A fullstack application using that allows the user to track their monthly finances. Uses React, Typescript, Python, and MongoDB.",
            "long_description": 'This application allows the user to budget their personal finances. The user can provide XML data via their personal banking information and create a budget to help them keep track of their finances.',
            "stack": [
                {'tech': 'React','color':'bg-[#61dbf6]'}, 
                {'tech': 'Typescript','color': 'bg-[#234a84]'},
                {'tech': 'Python','color': 'bg-[#4b8bbe]'},
                {'tech': 'MongoDB','color': 'bg-[#4db33d]'},
                {'tech': 'Docker','color': 'bg-[#6495ED]'}
            ],
            "link":"https://github.com/mcucina1/Financial-Budgeting-App"
        },
        {
            "img":[seApp314, seApp314_2],
            "alt":"brewery touring app",
            "name":"Brewery Tours",
            "url":"brewery-tours",
            "short_description": "A fullstack application that allows a user to plan brewery tours, or any other personal tours via a map. Uses React, Java, and MariaDB.",
            "long_description": 'This application was the result of a university course for software engineering. The course was a semester long project, prioritizing agile and scrum based, test-driven, full stack development. Our group of five students collaborated to produce an application that allows users to customly route brewery trips anywhere in the world. It includes features such as file uploading, saving and storing trips, and logical elements that track total distances and optimize routes. Overall, developing this application was a great introduction to collaborative full stack development.',
            "stack": [
                {'tech': 'React','color':'bg-[#61dbf6]'}, 
                {'tech': 'Java','color': 'bg-[#259797]'},
                {'tech': 'Jest','color': 'bg-[#15c213]'},
                {'tech': 'JUnit','color': 'bg-[#c43939]'},
                {'tech': 'SQL','color': 'bg-[#e97b00]'},
                {'tech': 'MariaDB','color': 'bg-[#4e629a]'},
                {'tech': 'JaCoCo','color': 'bg-[#00A36C]'},
                {'tech': 'Postman','color': 'bg-[#ff6c37]'},
                {'tech': 'Docker','color': 'bg-[#6495ED]'}
            ],
            "link":"https://github.com/CSU-CS-314-Spring-2022/t10"
        },
        {
            "img":[testingApp415, testingApp415_2, testingApp415_3, testingApp415_4],
            "alt":"employee manager app",
            "name":"Company Employee Manager",
            "url":"employee-manager",
            "short_description": "A fullstack application that acts as a manager for workers within a mock company. Uses React, Java, and testing tools and frameworks.",
            "long_description": 'This application was the result of a university course for software testing. The course was a semester long project, prioritizing test-driven, full stack development. The focus of the course was to gain knowledge in test driven development, using technologies such as JUnit, Evosuite, JaCoCo, Mockito, Clover, and Spotbugs. Our group of five students developed this application over the course of the semester while prioritizing building test cases first before coding our implementations. The result is a robust application that serves as a company employee manager, providing features such as adding/removing employees from projects, creating/removing projects, and creating/assigning qualifications to employees. This application was a fantastic introduction to practical software testing.',
            "stack": [
                {'tech': 'React','color':'bg-[#61dbf6]'}, 
                {'tech': 'Java','color': 'bg-[#259797]'},
                {'tech': 'JUnit','color': 'bg-[#c43939]'},
                {'tech': 'EvoSuite','color': 'bg-[#0399cd]'},
                {'tech': 'JaCoCo','color': 'bg-[#00A36C]'},
                {'tech': 'Mockito','color': 'bg-[#AFE1AF]'},
                {'tech': 'Clover','color': 'bg-[#702963]'},
                {'tech': 'SpotBugs','color': 'bg-[#D22B2B]'}
            ],
            "link":"https://github.com/CSU-CS-CS415-Spring2023/t18"
        },
        {
            "img":[notes, notes2, notes3],
            "alt":"sticky notes",
            "name":"Sticky Notes",
            "url":"sticky-notes",
            "short_description": "A fullstack application that allows you to create sticky notes. Notes persist by means of a database. Uses React, Node/Express, and MongoDB.",
            "long_description": 'An application that allows the user to create customizable sticky notes in their browser. Note data persists by using a database, allowing for easy addition and removal. Notes can be dragged and dropped in the browser window, as well as customized for personal preference.',
            "stack": [
                {'tech': 'React','color':'bg-[#61dbf6]'}, 
                {'tech': 'Typescript','color': 'bg-[#234a84]'},
                {'tech': 'Node','color': 'bg-[#68a063]'},
                {'tech': 'MongoDB','color': 'bg-[#4db33d]'},
            ],
            "link":"https://github.com/mcucina1/sticky-notes"
        },
        {
            "img":[portfolio, portfolio2, portfolio3],
            "alt":"portfolio",
            "name":"Personal Portfolio",
            "url":"personal-portfolio",
            "short_description": "A simple front-end application that serves as a personal portfolio.",
            "long_description": 'A simple front-end application that serves as a personal portfolio.',
            "stack": [
                {'tech': 'React','color':'bg-[#61dbf6]'}, 
                {'tech': 'Tailwind CSS','color': 'bg-[#0ea4e9]'}
            ],
            "link":"https://github.com/mcucina1/portfolio"
        }
]