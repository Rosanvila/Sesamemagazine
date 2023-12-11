let playOnce400 = true;
let playOnce1100 = true;

window.addEventListener("scroll", () => {
  const scrollValue = window.scrollY;

  if (scrollValue > 400 && playOnce400) {
    document.querySelector("#maree").style.opacity = "1";
    document.querySelector("#maree").style.transform = "initial";
    document.querySelector("#partieDroite").style.opacity = "1";
    document.querySelector("#partieDroite").style.transform = "initial";
    playOnce400 = false;
  }

  if (scrollValue > 1100 && playOnce1100) {
    document.querySelector("#champ").style.opacity = "1";
    document.querySelector("#champ").style.transform = "initial";
    document.querySelector(".partieGauche").style.opacity = "1";
    document.querySelector(".partieGauche").style.transform = "initial";
    playOnce1100 = false;
  }
});

/*---------------------PARTIE COMPTE--------------------*/

const showDetails = (type) => {
  // Masquer tous les détails
  document.querySelectorAll(".details").forEach((detail) => {
    detail.style.display = "none";
  });

  // Afficher les détails spécifiques
  const specificDetails = document.getElementById(type + "Details");
  if (specificDetails) {
    specificDetails.style.display = "block";
  }

  // Mettre à jour la classe "clicked" pour les liens
  const liElements = document.querySelectorAll(".compteLeft li");
  liElements.forEach((li) => {
    li.classList.remove("clicked");
  });

  const clickedLi = document.querySelector(
    `li[onclick="showDetails('${type}')"]`
  );
  if (clickedLi) {
    clickedLi.classList.add("clicked");
  }

  // Mettre à jour la couleur de fond de la partie droite (CompteRight) si c'est "MonCompteDetails"
  const compteRight = document.querySelector(".CompteRight");
  if (type === "MonCompte") {
    compteRight.style.backgroundColor = "#732741";
  } else {
    // Rétablir la couleur par défaut si ce n'est pas "MonCompteDetails"
    compteRight.style.backgroundColor = "#ded7ea";
  }
};

/**************MAGAZINE1********************/
function redirectMagazine1(chemin) {
  window.location.href = chemin;
}

/**************NOIX********************/
function redirectNoix(chemin) {
  window.location.href = chemin;
}

/*********SESAME VOIR PRODUIT INTO MAGAZINE*************/

function redirectMagazine(chemin) {
  window.location.href = chemin;
}

/**********NAVBAR SESAME***************/

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("myVideo");
  const nav = document.querySelector("nav");

  // Obtient la hauteur de la barre de navigation
  const navHeight = nav.offsetHeight;

  window.addEventListener("scroll", () => {
    // Obtenir la position de la vidéo par rapport à la fenêtre
    const videoRect = video.getBoundingClientRect();

    // Si la vidéo n'est plus visible
    if (videoRect.bottom <= 0) {
      // Fixer la barre de navigation en haut de la page
      nav.style.position = "fixed";
      nav.style.top = "0";
      nav.style.width = "100%";
    } else {
      // Annuler la fixation si la vidéo est encore visible
      nav.style.position = "static";
    }
  });
});
