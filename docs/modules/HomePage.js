import { CHeader, FOOTER } from './Components.js';
// Homepage - Index of project with links
// use <main> for dominant content
var pageData = {
    title: "HomePage",
    footer: 'some footer data'
};
var CHomepage = function (pageData) {
    var pageContainer = document.createElement('div');
    pageContainer.className = 'pageContainer-container';
    pageContainer.appendChild(CHeader(pageData.title));
    pageContainer.appendChild(FOOTER('footer for ' + pageData.title));
    return pageContainer;
};
export default CHomepage(pageData);
