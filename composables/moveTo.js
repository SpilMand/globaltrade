export default (path) => {
  const rect = document.querySelector(path).getBoundingClientRect();
  const offset = document.querySelector('.s-header').getBoundingClientRect().height;
  const newPos = rect.y + window.scrollY - offset;
  window.scrollTo({
    top: newPos,
    left: 0,
  });
};
