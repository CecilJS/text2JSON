chrome.runtime.onMessage.addListener( // this is the message listener
    function(request, sender, sendResponse) {
        if (request.message === "messageCopyTableAsJSON")
            copyToTheClipboard(convertToTable(window.getSelection().toString()));
    }
);

async function copyToTheClipboard(textToCopy) {
    const el = document.createElement('textarea');
    el.value = textToCopy;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

function convertToTable(text) {
    const tokens = text.split(/\r?\n/).filter(token => token.trim().length > 0)
    const result = []
    for (let i = 0; i < tokens.length; i += 2) {
        result.push({ label: tokens[i]?.trim(), value: tokens[i + 1]?.trim()})
    }
    return JSON.stringify(result, null, 2)
}