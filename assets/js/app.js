fetch("data/projects.json")
.then(res => res.json())
.then(data => {

  const container = document.getElementById("projectContainer");
  const modal = new bootstrap.Modal(document.getElementById("projectModal"));

  const modalTitle = document.getElementById("modalTitle");
  const modalPoints = document.getElementById("modalPoints");

  const count = data.length;
  let colClass = "";

  if (count === 1) colClass = "col-lg-6 col-md-8 mx-auto";
  else if (count === 2) colClass = "col-md-6";
  else if (count === 3) colClass = "col-md-4";
  else if (count === 4) colClass = "col-md-6";
  else colClass = "col-md-4";

  container.innerHTML = "";

  data.forEach((p, index) => {

    container.innerHTML += `
      <div class="${colClass} mb-5 d-flex justify-content-center">
        <div class="project-card h-100">
          <img src="${p.image}" class="img-fluid mb-3 rounded">
          <h5>${p.title}</h5>
          <p>${p.description}</p>

          <a href="${p.github}" class="btn btn-success btn-sm">Github</a>
          <button class="btn btn-primary btn-sm know-btn" data-index="${index}">
            Know More
          </button>

        </div>
      </div>
    `;
  });

  document.querySelectorAll(".know-btn").forEach(btn => {

    btn.addEventListener("click", function(){

      const index = this.getAttribute("data-index");
      const project = data[index];

      modalTitle.innerText = project.title;

      modalPoints.innerHTML = "";

      project.knowMore.forEach(point => {
        modalPoints.innerHTML += `<li class="mb-2">${point}</li>`;
      });

      modal.show();

    });

  });

});