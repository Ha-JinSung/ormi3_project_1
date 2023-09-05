document.getElementById("WS_create_Page").addEventListener("click", function() {
    window.location.href = "index.html";
});
document.getElementById("WS_Saved_Page").addEventListener("click", function() {
    window.location.href = "about.html";
});

const $input = document.querySelector('input');
const $button = document.querySelector('button');
const $answer = document.querySelector('.answer');
const saved_WS_Form = document.getElementById('saved_WS_Form');

const data = []
data.push({
    "role": "system",
    "content": "assistant는 한국어 명언 만들어 준다",
    "content": "assistant는 주제 있어도, 없어도 무조건 명언을 만들어 준다",
    "content": "assistant는 한국어 30글자 이내로만 만들어 준다",
    "content": "assistant는 명언을 만들때 한가지만 만들어 준다."
})

const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`

$button.addEventListener('click', e => {
    e.preventDefault();
    const contents = $input.value;
    data.push({
        "role": "user",
        "content": contents
    });
    $input.value = '';

    chatGPTAPI();
});

saved_WS_Form.addEventListener('submit', function(e) {
    e.preventDefault();
    const contents = $input.value;
    data.push({
        "role": "user",
        "content": contents
    });
    $input.value = '';

    chatGPTAPI();
});

function chatGPTAPI() {
    fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(res => {
            console.log(res);

            const answerContent = res.choices[0].message.content;
            $answer.innerHTML = `<p>${answerContent}</p>`;

            const $saved_WS = localStorage.getItem('saved_WS') || '[]';

            const saved_WS = JSON.parse($saved_WS);
            saved_WS.push(answerContent);
            localStorage.setItem('saved_WS', JSON.stringify(saved_WS));
            $answer.style.display = 'block';
        })
}