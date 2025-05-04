// Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
    alert("Button Clicked!");
  });
  
  document.getElementById("hoverBox").addEventListener("mouseover", () => {
    document.getElementById("hoverBox").style.backgroundColor = "#c0e4fc";
  });
  document.getElementById("hoverBox").addEventListener("mouseout", () => {
    document.getElementById("hoverBox").style.backgroundColor = "#ddd";
  });
  
  document.getElementById("keyInput").addEventListener("keypress", (e) => {
    console.log(`You pressed: ${e.key}`);
  });
  
  document.getElementById("secretBtn").addEventListener("dblclick", () => {
    alert("🎉 Secret double-click detected!");
  });
  
  // Interactive Elements
  document.getElementById("changeTextBtn").addEventListener("click", (e) => {
    e.target.textContent = "Changed!";
    e.target.style.backgroundColor = "#28a745";
  });
  
  // Slideshow from Pexels
  const images = [
    "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
    "https://images.pexels.com/photos/210205/pexels-photo-210205.jpeg",
    "https://images.pexels.com/photos/34950/pexels-photo.jpg"
  ];
  let currentImg = 0;
  const slideshowImg = document.getElementById("slideshowImg");
  slideshowImg.src = images[currentImg];
  
  document.getElementById("nextBtn").addEventListener("click", () => {
    currentImg = (currentImg + 1) % images.length;
    slideshowImg.src = images[currentImg];
  });
  
  document.getElementById("prevBtn").addEventListener("click", () => {
    currentImg = (currentImg - 1 + images.length) % images.length;
    slideshowImg.src = images[currentImg];
  });
  
  // Tabs
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");
  
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const tabId = tab.dataset.tab;
      tabContents.forEach(tc => tc.classList.remove("active"));
      document.getElementById(`tab-${tabId}`).classList.add("active");
    });
  });
  
  // Form Validation
  document.getElementById("password").addEventListener("input", (e) => {
    const msg = document.getElementById("passwordMsg");
    msg.textContent = e.target.value.length < 8 ? "❌ Too short" : "✅ Good password";
    msg.style.color = e.target.value.length < 8 ? "red" : "green";
  });
  
  document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!name || !email || !password) {
      alert("Please fill all fields.");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email.");
      return;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }
  
    alert("Form submitted successfully!");
  });
  