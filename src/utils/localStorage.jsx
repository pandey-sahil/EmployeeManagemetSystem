const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Complete Project Report",
                "taskDescription": "Finish the quarterly project report.",
                "taskDate": "2024-10-25",
                "category": "Work"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Attend Team Meeting",
                "taskDescription": "Participate in the bi-weekly team sync.",
                "taskDate": "2024-10-20",
                "category": "Meetings"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Submit Time Sheets",
                "taskDescription": "Submit the monthly time sheets to HR.",
                "taskDate": "2024-10-18",
                "category": "Admin"
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare Presentation",
                "taskDescription": "Create slides for client presentation.",
                "taskDate": "2024-10-26",
                "category": "Work"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Review Budget Report",
                "taskDescription": "Analyze and review the latest budget report.",
                "taskDate": "2024-10-22",
                "category": "Finance"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Submit Travel Expenses",
                "taskDescription": "Submit the expense report for last week's travel.",
                "taskDate": "2024-10-19",
                "category": "Finance"
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Organize Workshop",
                "taskDescription": "Arrange logistics for the upcoming training workshop.",
                "taskDate": "2024-11-01",
                "category": "Workshops"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Respond to Client Emails",
                "taskDescription": "Answer all client inquiries from last week.",
                "taskDate": "2024-10-24",
                "category": "Client"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Set Up Equipment",
                "taskDescription": "Set up the equipment for the product launch.",
                "taskDate": "2024-10-21",
                "category": "Work"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "File Contract Paperwork",
                "taskDescription": "Complete the contract paperwork for the new vendor.",
                "taskDate": "2024-10-19",
                "category": "Admin"
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Plan Social Media Campaign",
                "taskDescription": "Develop the strategy for the new product launch campaign.",
                "taskDate": "2024-11-02",
                "category": "Marketing"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Coordinate with PR Agency",
                "taskDescription": "Work with the PR agency to release a press statement.",
                "taskDate": "2024-10-23",
                "category": "Public Relations"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Finalize Design Drafts",
                "taskDescription": "Complete the design drafts for review.",
                "taskDate": "2024-10-18",
                "category": "Design"
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare Financial Forecast",
                "taskDescription": "Create financial forecasts for Q4.",
                "taskDate": "2024-10-28",
                "category": "Finance"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Analyze Competitor Data",
                "taskDescription": "Perform a competitor analysis based on recent market trends.",
                "taskDate": "2024-10-27",
                "category": "Research"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Prepare for Board Meeting",
                "taskDescription": "Organize documents for the quarterly board meeting.",
                "taskDate": "2024-10-20",
                "category": "Meetings"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Send Client Invoice",
                "taskDescription": "Send out the invoice to Client X for the last quarter.",
                "taskDate": "2024-10-17",
                "category": "Finance"
            }
        ]
    }
]

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {
        employees,
        admin
    }
}
