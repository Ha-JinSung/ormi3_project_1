document.getElementById("WS_create_Page").addEventListener("click", function() {
    window.location.href = "index.html";
});
document.getElementById("WS_Saved_Page").addEventListener("click", function() {
    window.location.href = "about.html";
});

const $saved_WS_Container = document.getElementById('saved_WS');
let $saved_WS = JSON.parse(localStorage.getItem('saved_WS') || '[]');
const $clear_Button = document.getElementById('clear_Button');
const $WS_BTNLK = document.getElementById('WS_BTNLK');
const $DW_BTN = document.getElementById('DW_BTN');

function render_WS() {
    if ($saved_WS.length === 0) {
        $saved_WS_Container.style.display = 'none';
    } else {
        $saved_WS_Container.style.display = 'block';
    }
    $saved_WS_Container.innerHTML = '';
    $saved_WS.forEach((WS_word, index) => {
        const $WS_Element = document.createElement('div');
        const $contentElement = document.createElement('p');
        $contentElement.textContent = WS_word;
        $WS_Element.appendChild($contentElement);

        const $deleteButton = document.createElement('button');
        $deleteButton.textContent = 'X';
        $deleteButton.className = 'WS_listBtnDel';

        const $buttonWrapper = document.createElement('div');
        $buttonWrapper.appendChild($deleteButton);


        $deleteButton.addEventListener('click', () => {
            deleteWSFromStorage(index);
        });
        $WS_Element.appendChild($buttonWrapper);
        $saved_WS_Container.appendChild($WS_Element);
    });
}

render_WS();

function deleteWSFromStorage(index) {
    $saved_WS.splice(index, 1);
    localStorage.setItem('saved_WS', JSON.stringify($saved_WS));
    render_WS();
}

$clear_Button.addEventListener('click', () => {
    localStorage.removeItem('saved_WS');
    $saved_WS = [];
    render_WS();
});