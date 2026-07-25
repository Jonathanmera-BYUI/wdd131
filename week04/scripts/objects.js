// Course Object
let aCourse = {
  code: "WDD131",
  title: "Dynamic Web Fundamentals",
  credits: 2,
  sections: [
    { section: "001", enrolled: 95, instructor: "Roberto Diaz Rodriguez" },
    { section: "002", enrolled: 80, instructor: "Sarah Gobble" }
  ]
};

// Function to set course title and code
function setCourseInformation(course) {
  const courseElement = document.querySelector("#courseName");
  courseElement.innerHTML = `${course.code} – ${course.title}`;
}

// Function to render section rows into the table
function renderSections(course) {
  const tbody = document.querySelector("#sections tbody");
  let rows = "";

  for (const section of course.sections) {
    rows += `<tr>
      <td>${section.section}</td>
      <td>${section.enrolled}</td>
      <td>${section.instructor}</td>
    </tr>`;
  }

  tbody.innerHTML = rows;
}

// Execute functions
setCourseInformation(aCourse);
renderSections(aCourse);