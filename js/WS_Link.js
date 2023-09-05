// 사이트 링크
$WS_BTNLK.addEventListener('click', () => {
    const shareLink = window.location.origin + '/ormi3_project_1_WS.github.io/index.html?data='
    navigator.clipboard.writeText(shareLink)
        .then(() => {
            alert('링크가 클립보드에 복사되었습니다.');
        })
        .catch((err) => {
            console.error('링크 복사 실패:', err);
        });
});