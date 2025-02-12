// Sidebar toggle
const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("main-content");
const hamburger = document.getElementById("hamburger");
const collapseBtn = document.getElementById("collapseBtn");
const logo = document.getElementById("logo");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  if (sidebar.classList.contains("open")) {
    hamburger.innerHTML = '<span id="closeNav">&times;</span>';
  } else {
    hamburger.innerHTML = '<img src="./assets/icons/hamburger.png" alt="" />';
  }
});

collapseBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
  mainContent.style.marginLeft = sidebar.classList.contains("collapsed")
    ? "80px"
    : "250px";
  collapseBtn.innerHTML = sidebar.classList.contains("collapsed")
    ? '<img class="smaller-icon-image" src="./assets/icons/expand.png" alt=""> <span>Expand</span>'
    : '<img class="smaller-icon-image" src="./assets/icons/collapse.png" alt=""> <span>Collapse</span>';
  logo.style.height = sidebar.classList.contains("collapsed") ? "15px" : "30px";
});

// Dark mode toggle
const darkModeToggle = document.getElementById("darkModeToggle");
const html = document.documentElement;
const cardItems = document.getElementsByClassName("summary-item-header-text");
const nav = document.getElementById("sidebar")

const chartId = document.getElementById("eventsChart");
const texts = document.querySelectorAll(
  ".history-header-select, .history-header-bold-text, .history-header-text"
);

darkModeToggle.addEventListener("click", () => {
  html.classList.toggle("dark-mode");
  html.classList.toggle("light-mode");

  if (html.classList.contains("light-mode")) {
    nav.style.color = "#383544"
    nav.style.backgroundColor ="white"
    texts.forEach((element) => {
      element.style.color = "#334155";
    });
    darkModeToggle.innerHTML =
      '<img class="icon-image" src="./assets/icons/switch.png" alt="" /><span>Toggle Dark Mode</span>';
    for (let i = 0; i < cardItems.length; i++) {
      cardItems[i].style.color = "#64748B";
    }
    chartId.style.backgroundColor = "transparent";
    chartId.style.border = "border: 1px solid #F2F2F7";
  } else {
    nav.style.color = "white"
    nav.style.backgroundColor ="#383544"
    texts.forEach((element) => {
      element.style.color = "#fff";
    });
    for (let i = 0; i < cardItems.length; i++) {
      cardItems[i].style.color = "#fff";
    }
    darkModeToggle.innerHTML =
      '<img class="icon-image" src="./assets/icons/light-switch.png" alt="" /><span>Toggle Light Mode</span>';
    chartId.style.backgroundColor = "#484554";
    chartId.style.border = "none";
  }
});

// Chart
const ctx = document.getElementById("registrationChart").getContext("2d");

const registrationChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ], // Shortened month labels
    datasets: [
      {
        label: "Number of Registrations",
        data: [500, 900, 700, 400, 1000, 550, 700, 300, 680, 610, 980, 220], // Example registration numbers
        backgroundColor: "rgb(133, 118, 255)",
      },
    ],
  },
  options: {
    scales: {
      x: {
        ticks: {
          autoSkip: false, // Show all month labels
          rotation: 0, // Keep labels horizontal
        },
        grid: {
          display: false, // Hide grid lines for x-axis
        },
      },
      y: {
        beginAtZero: true,
        min: 0, // Minimum value on y-axis
        max: 1000, // Maximum value on y-axis
        ticks: {
          stepSize: 200, // Set the interval for y-axis labels
        },
        grid: {
          display: true, // Show grid lines for y-axis
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend if you don't want it
      },
    },
  },
});

// Carousel
const carousel = document.getElementById("newsCarousel");
const items = carousel.getElementsByClassName("carousel-item");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;

function showItem(index) {
  items[currentIndex].classList.remove("active");
  currentIndex = (index + items.length) % items.length;
  items[currentIndex].classList.add("active");
}

function showNextItem() {
  showItem(currentIndex + 1);
}

function showPrevItem() {
  showItem(currentIndex - 1);
}

prevBtn.addEventListener("click", showPrevItem);
nextBtn.addEventListener("click", showNextItem);

let autoChangeInterval = setInterval(showNextItem, 10000);

carousel.addEventListener("mouseenter", () => {
  clearInterval(autoChangeInterval);
});

carousel.addEventListener("mouseleave", () => {
  autoChangeInterval = setInterval(showNextItem, 10000);
});

// Events table and modal
const eventsData = [
  {
    name: "Cloud Innovation Summit",
    date: "2024-10-15",
    speaker: "Jane Doe",
    status: "Completed",
    description:
      "A summit focused on the latest cloud technologies and their applications in various industries.",
  },
  {
    name: "Blockchain Revolution Conference",
    date: "2024-11-05",
    speaker: "Dr. Peter Smith",
    status: "In Progress",
    description:
      "Exploring the potential of blockchain technology and its impact on different sectors.",
  },
  {
    name: "AI in Healthcare Symposium",
    date: "2024-12-01",
    speaker: "Dr. Aisha Malik",
    status: "Completed",
    description:
      "Discussing the integration of AI in healthcare and its potential to revolutionize patient care.",
  },
  {
    name: "Future of Fintech Forum",
    date: "2024-10-25",
    speaker: "John Lee",
    status: "Completed",
    description:
      "Examining emerging trends in financial technology and their implications for the finance industry.",
  },
  {
    name: "Data Analytics in Business",
    date: "2024-11-12",
    speaker: "Rachel Moore",
    status: "Completed",
    description:
      "Exploring how businesses can leverage data analytics to drive growth and make informed decisions.",
  },
  {
    name: "Sustainable Energy Expo",
    date: "2024-09-28",
    speaker: "Prof. Alan Green",
    status: "Completed",
    description:
      "Exploring how businesses can leverage data analytics to drive growth and make informed decisions.",
  },
  {
    name: "Web3 Interfaces Workshop",
    date: "2024-10-10",
    speaker: "Kevin Adams",
    status: "In Progress",
    description:
      "Exploring how businesses can leverage data analytics to drive growth and make informed decisions.",
  },
  {
    name: "Cybersecurity for Startups",
    date: "2024-11-19",
    speaker: "Emily Zhang",
    status: "Completed",
    description:
      "Exploring how businesses can leverage data analytics to drive growth and make informed decisions.",
  },
  {
    name: "Cloud Innovation Summit",
    date: "2024-10-15",
    speaker: "Jane Doe",
    status: "Completed",
    description:
      "A summit focused on the latest cloud technologies and their applications in various industries.",
  },
  {
    name: "Blockchain Revolution Conference",
    date: "2024-11-05",
    speaker: "Dr. Peter Smith",
    status: "In Progress",
    description:
      "Exploring the potential of blockchain technology and its impact on different sectors.",
  },
  {
    name: "AI in Healthcare Symposium",
    date: "2024-12-01",
    speaker: "Dr. Aisha Malik",
    status: "Completed",
    description:
      "Discussing the integration of AI in healthcare and its potential to revolutionize patient care.",
  },
  {
    name: "Smart Cities Forum",
    date: "2024-10-18",
    speaker: "Dr. Maria Hernandez",
    status: "In Progress",
    description:
      "Exploring how businesses can leverage data analytics to drive growth and make informed decisions.",
  },
  {
    name: "Tech Safari Mixer",
    date: "2024-09-30",
    speaker: "Guest Panel",
    status: "In Progress",
    description:
      "Exploring how businesses can leverage data analytics to drive growth and make informed decisions.",
  },
  {
    name: "Smart Cities Forum",
    date: "2024-10-18",
    speaker: "Dr. Maria Hernandez",
    status: "In Progress",
    description:
      "Exploring how businesses can leverage data analytics to drive growth and make informed decisions.",
  },
  {
    name: "Tech Safari Mixer",
    date: "2024-09-30",
    speaker: "Guest Panel",
    status: "In Progress",
    description:
      "Exploring how businesses can leverage data analytics to drive growth and make informed decisions.",
  },
  {
    name: "Smart Cities Forum",
    date: "2024-10-18",
    speaker: "Dr. Maria Hernandez",
    status: "In Progress",
    description:
      "Exploring how businesses can leverage data analytics to drive growth and make informed decisions.",
  },
  {
    name: "Tech Safari Mixer",
    date: "2024-09-30",
    speaker: "Guest Panel",
    status: "In Progress",
    description:
      "Exploring how businesses can leverage data analytics to drive growth and make informed decisions.",
  },
];

const eventsTable = document.getElementById("eventsTable");
const modal = document.getElementById("eventModal");
const closeBtn = document.getElementsByClassName("close")[0];
const closeBtn2 = document.getElementById("closeButton");
const itemsPerPage = 5; // Set number of items per page
let currentPage = 1;

// Function to render the table based on the current page
function renderTable(page) {
  // Clear the table
  eventsTable.innerHTML = "";

  // Calculate start and end indices for slicing the data
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, eventsData.length);

  // Slice the data for the current page
  const paginatedData = eventsData.slice(startIndex, endIndex);

  // Populate the table with the paginated data
  paginatedData.forEach((event, index) => {
    const row = eventsTable.insertRow();
    row.insertCell(0).textContent = event.name;
    row.insertCell(1).textContent = event.date;
    row.insertCell(2).textContent = event.speaker;
    row.insertCell(3).innerHTML =
      event.status === "Completed"
        ? `<span style="display: flex; gap:4px; align-items: center; background-color: #D1FAE5; padding: 4px 8px; border-radius: 100px; width: fit-content;"><span style="background-color: #10B981; height: 6px; width: 6px; border-radius: 100px;"></span><p style="font-weight: 400; font-size: 12px; color: #10B981;">${event.status}</p></span>`
        : `<span style="display: flex; gap:4px; align-items: center; background-color: #DBEAFE; padding: 4px 8px; border-radius: 100px; width: fit-content;"><span style="background-color: #3B82F6; height: 6px; width: 6px; border-radius: 100px;"></span><p style="font-weight: 400; font-size: 12px; color: #3B82F6;">${event.status}</p></span>`;

    row.addEventListener("click", () => showEventDetails(startIndex + index));
  });
}

// Function to update pagination controls
function updatePaginationControls() {
  const totalPages = Math.ceil(eventsData.length / itemsPerPage);
  const pagination = document.getElementById("pagination");

  // Clear existing pagination controls
  pagination.innerHTML = "";

  // Create Previous button
  const prevButton = document.createElement("button");
  prevButton.style.border = "1px solid #E2E8F0";
  prevButton.style.height = "36px";
  prevButton.style.width = "36px";
  prevButton.style.borderRadius = "2px";
  prevButton.style.padding = "8px";
  prevButton.style.backgroundColor = "#E2E8F0";
  prevButton.style.fontWeight = 400;
  prevButton.style.fontSize = "14px";
  prevButton.textContent = "<";
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener("click", () => {
    currentPage--;
    renderTable(currentPage);
    updatePaginationControls();
  });
  pagination.appendChild(prevButton);

  // Create page numbers
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.style.backgroundColor =
      i === currentPage ? "#8576FF" : "transparent";
    pageButton.style.fontWeight = 400;
    pageButton.style.fontSize = "14px";
    pageButton.style.color = i === currentPage ? "white" : "#334155";
    pageButton.style.height = "24px";
    pageButton.style.width = "24px";
    pageButton.style.border = "none";
    pageButton.style.margin = "5px";
    pageButton.style.borderRadius = "100px";
    pageButton.textContent = i;
    pageButton.disabled = i === currentPage;
    pageButton.addEventListener("click", () => {
      currentPage = i;
      renderTable(currentPage);
      updatePaginationControls();
    });
    pagination.appendChild(pageButton);
  }

  // Create Next button
  const nextButton = document.createElement("button");
  nextButton.style.border = "1px solid #E2E8F0";
  nextButton.style.height = "36px";
  nextButton.style.width = "36px";
  nextButton.style.borderRadius = "2px";
  nextButton.style.padding = "8px";
  nextButton.style.backgroundColor = "white";
  nextButton.style.fontWeight = 400;
  nextButton.style.fontSize = "14px";
  nextButton.textContent = ">";
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener("click", () => {
    currentPage++;
    renderTable(currentPage);
    updatePaginationControls();
  });
  pagination.appendChild(nextButton);
}

// Initial render
renderTable(currentPage);
updatePaginationControls();

function showEventDetails(index) {
  const event = eventsData[index];

  document.getElementById("modalEventName").textContent = event.name;
  document.getElementById("modalEventDate").textContent = event.date;
  document.getElementById("modalEventDescription").textContent =
    event.description;

  modal.style.display = "block";
}

closeBtn.onclick = function () {
  modal.style.display = "none";
};

closeButton.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
