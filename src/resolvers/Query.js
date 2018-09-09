const frameworks = [
  {
    id: 1,
    title: "React",
    git: "https://github.com/facebook/react/",
    stars: 104170
  },
  {
    id: 2,
    title: "Vue",
    git: "https://github.com/vuejs/vue/",
    stars: 104483
  }
];

function getFrameworks(){
  return frameworks;
}

function getFrameworkById(root, args){
  return frameworks.find(fr => args.id == fr.id);
}

module.exports ={
  getFrameworks,
  getFrameworkById
}

