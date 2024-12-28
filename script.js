document.getElementById("calculate").addEventListener("click", function () {
    const floorLength = document.getElementById("floor-length").value;
    const floorWidth = document.getElementById("floor-width").value;
    const wallHeight = document.getElementById("wall-height").value;

    if (floorLength && floorWidth && wallHeight) {
        const floorArea = floorLength * floorWidth;
        const wallArea = wallHeight * floorWidth;

        const totalArea = floorArea + wallArea;

        document.getElementById("result").innerHTML = `Total Tile Area: ${totalArea} square feet`;
    } else {
        alert("Please enter all the dimensions!");
    }
});

// Adding active class to room type and surface type links
const roomOptions = document.querySelectorAll(".room-option");
const surfaceButtons = document.querySelectorAll(".surface-button");

roomOptions.forEach(option => {
    option.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        roomOptions.forEach(opt => opt.classList.remove("active"));
        this.classList.add("active");
    });
});

surfaceButtons.forEach(button => {
    button.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        surfaceButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
    });
});




