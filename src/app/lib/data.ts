type ImageData = {
    src: string;
    alt: string;
};

type Syllabus = {
    id: string;
    subject: string;
    class: {
        name: string;
        link: string;
        image: ImageData;
    }[];
};

let syllabus_data: Syllabus[] = [
    {
        id: "1",
        subject: "Math",
        image: {
            src: "math_ncert_image.jpg",
            alt: "Math (NCERT) Image",
        },
        class: [
            {
                name: "Math (NCERT) - Class 10",
                link: "/syllabus/math/ncert/class-10",
            },{
                name: "Math (NCERT) - Class 10",
                link: "/syllabus/math/ncert/class-10",
            },
            {
                name: "Math (NCERT) - Class 10",
                link: "/syllabus/math/ncert/class-10",
            },
            {
                name: "Math (NCERT) - Class 10",
                link: "/syllabus/math/ncert/class-10",
            },
            {
                name: "Math (NCERT) - Class 10",
                link: "/syllabus/math/ncert/class-10",
            },
            {
                name: "Math (NCERT) - Class 10",
                link: "/syllabus/math/ncert/class-10",
            },
            {
                name: "Math (NCERT) - Class 10",
                link: "/syllabus/math/ncert/class-10",
            },
            
        ],
    },
    {
        id: "2",
        subject: "Science",
        image: {
            src: "science_cbse_image.jpg",
            alt: "Science (CBSE) Image",
        },
        class: [
            {
                name: "Science (CBSE) - Class 8",
                link: "/syllabus/science/cbse/class-8",
            },
            {
                name: "Physics - Class 11",
                link: "/syllabus/science/physics/class-11",
            },
        ],
    },
    {
        id: "3",
        subject: "English",
        image: {
            src: "english_image.jpg",
            alt: "English Image",
        },
        class: [
            {
                name: "English Literature - Class 9",
                link: "/syllabus/english/literature/class-9",
            },
        ],
    },
    {
        id: "4",
        subject: "History",
        image: {
            src: "history_image.jpg",
            alt: "History Image",
        },
        class: [
            {
                name: "World History - Class 11",
                link: "/syllabus/history/world/class-11",
            },
        ],
    },
    {
        id: "5",
        subject: "Geography",
        image: {
            src: "geography_image.jpg",
            alt: "Geography Image",
        },
        class: [
            {
                name: "Physical Geography - Class 10",
                link: "/syllabus/geography/physical/class-10",
            },
        ],
    },
    {
        id: "6",
        subject: "Chemistry",
        image: {
            src: "chemistry_image.jpg",
            alt: "Chemistry Image",
        },
        class: [
            {
                name: "Inorganic Chemistry - Class 12",
                link: "/syllabus/chemistry/inorganic/class-12",
            },
        ],
    },
    {
        id: "7",
        subject: "Biology",
        image: {
            src: "biology_image.jpg",
            alt: "Biology Image",
        },
        class: [
            {
                name: "Human Anatomy - Class 11",
                link: "/syllabus/biology/anatomy/class-11",
            },
            {
                name: "Human Anatomy - Class 11",
                link: "/syllabus/biology/anatomy/class-11",
            },
            {
                name: "Human Anatomy - Class 11",
                link: "/syllabus/biology/anatomy/class-11",
            },
            {
                name: "Human Anatomy - Class 11",
                link: "/syllabus/biology/anatomy/class-11",
            },

        ],
    },
    {
        id: "8",
        subject: "Computer Science",
        image: {
            src: "computer_science_image.jpg",
            alt: "Computer Science Image",
        },
        class: [
            {
                name: "Programming Basics - Class 9",
                link: "/syllabus/computer_science/programming/class-9",
            },
        ],
    },
    {
        id: "9",
        subject: "Economics",
        image: {
            src: "economics_image.jpg",
            alt: "Economics Image",
        },
        class: [
            {
                name: "Microeconomics - Class 12",
                link: "/syllabus/economics/microeconomics/class-12",
            },
        ],
    },
    {
        id: "10",
        subject: "Physical Education",
        image: {
            src: "physical_education_image.jpg",
            alt: "Physical Education Image",
        },
        class: [
            {
                name: "Sports Training - Class 10",
                link: "/syllabus/physical_education/sports/class-10",
            },
        ],
    },
    // Add more dummy entries as needed
];


export const getSyllabus = () => syllabus_data;
