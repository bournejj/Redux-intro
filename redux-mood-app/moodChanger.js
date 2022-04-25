const happy = document.querySelector('#happy');
const sad = document.querySelector('#sad');
const angry = document.querySelector('#angry');
const confused = document.querySelector('#confused');
const display = document.querySelector('#display');



happy.addEventListener('click', function (e) {
    store.dispatch({type: 'HAPPY', payload: 'ʘ‿ʘ'});
    const state = store.getState();
    display.innerText = state.mood;
   
})
sad.addEventListener('click', function (e) {
    store.dispatch({type: 'SAD', payload: '●︿●'});
    const state = store.getState();
    display.innerText = state.mood;
   
})
angry.addEventListener('click', function (e) {
    store.dispatch({type: 'ANGRY', payload: 'ಠ_ಠ'});
    const state = store.getState();
    display.innerText = state.mood;
   
})
confused.addEventListener('click', function (e) {
    store.dispatch({type: 'CONFUSED', payload: '◔_◔'});
    const state = store.getState();
    display.innerText = state.mood;
   
})