module.exports = function () {
  if (!document) {
    throw 'document object is undefined.';
  }
  
  const elementId = 'root';
  
  const element = document.createElement('div');
  element.setAttribute('id', elementId);
  
  document.body.appendChild(element);
  
  return element;
}
