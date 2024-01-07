const openModal = (courseId) => {
  document.querySelector(".dropdown-container-id-" + courseId).style.display =
    "block";
  document.querySelector(".modal-background").style.display = "block";
};

const closeModal = () => {
  document.querySelector(".dropdown-container").style.display = "none";
  document.querySelector(".modal-background").style.display = "none";
};

const showFileSection = () => {
  document.querySelector(".image-display-section").style.display = "none";
  document.querySelector(".file-section-container").style.display = "block";
};

const showImageSection = () => {
  document.querySelector(".image-display-section").style.display = "block";
  document.querySelector(".file-section-container").style.display = "none";
};

const setDataId = (type,id) => {
  window[type] = id;
}
