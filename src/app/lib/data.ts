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
      class: [
        {
          name: "Math (NCERT) - Class 10",
          link: "/syllabus/math/ncert/class-10",
          image: {
            src: "math_ncert_image.jpg",
            alt: "Math (NCERT) Image",
          },
        },
        {
          name: "Math Foundations - Class 9",
          link: "/syllabus/math/foundations/class-9",
          image: {
            src: "math_foundations_image.jpg",
            alt: "Math Foundations Image",
          },
        },
      ],
    },
    {
      id: "2",
      subject: "Science",
      class: [
        {
          name: "Science (CBSE) - Class 8",
          link: "/syllabus/science/cbse/class-8",
          image: {
            src: "science_cbse_image.jpg",
            alt: "Science (CBSE) Image",
          },
        },
        {
          name: "Physics - Class 11",
          link: "/syllabus/science/physics/class-11",
          image: {
            src: "physics_image.jpg",
            alt: "Physics Image",
          },
        },
      ],
    },
    // Add more syllabuses as needed
  ];
  
  export const getSyllabus = () => syllabus_data;
  