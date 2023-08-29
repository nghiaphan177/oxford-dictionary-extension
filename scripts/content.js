chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        title: "Search on Oxford Dictionary",
        contexts: ['selection'],
        id: 'selection',
        type: 'normal'
    },
    );
});

// Open a new search tab when the user clicks context menu
chrome.contextMenus.onClicked.addListener((item, tab) => {
    let word = `${item.selectionText}`.toLowerCase().trim().replace(/[^a-z]/g, '');
    const url = new URL(`https://www.oxfordlearnersdictionaries.com/definition/english/${word}`);
    chrome.tabs.create({ url: url.href, index: tab.index + 1 });
});