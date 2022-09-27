import * as data from '../data/data.js';

data.selectors.toggleBtn.onclick = ()=>{
    data.selectors.hero.attributes[0].value = 'hide';
    data.selectors.menuBar.attributes[0].value = 'show';
}
data.selectors.toggleCancel.onclick = ()=>{
    data.selectors.hero.attributes[0].value = 'show';
    data.selectors.menuBar.attributes[0].value = 'hide';
}