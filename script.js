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
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
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
