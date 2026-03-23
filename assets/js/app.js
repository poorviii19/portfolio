fetch("data/projects.json")
  .then(res => res.json())
  .then(data => {

    const container = document.getElementById("projectContainer");
    const count = data.length;

    let colClass = "";

    // Decide layout based on number of projects
    if (count === 1) {
      colClass = "col-lg-6 col-md-8 mx-auto";
    } 
    else if (count === 2) {
      colClass = "col-md-6";
    } 
    else if (count === 3) {
      colClass = "col-md-4";
    } 
    else if (count === 4) {
      colClass = "col-md-6";
    } 
    else {
      colClass = "col-md-4";
    }

    container.innerHTML = "";

    data.forEach(p => {
      container.innerHTML += `
        <div class="${colClass} mb-5 d-flex justify-content-center">
          <div class="project-card h-100">
            <img src="${p.image}" class="img-fluid mb-3 rounded">
            <h5>${p.title}</h5>
            <p>${p.description}</p>
            <a href="${p.github}" class="btn btn-success btn-sm">Github</a>
          </div>
        </div>
      `;
    });

  });