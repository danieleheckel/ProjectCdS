function openTab(tabId) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.style.display = 'none';
    });

    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    const selectedTabContent = document.getElementById(tabId);
    const selectedTabButton = document.querySelector(`[onclick="openTab('${tabId}')"]`);
    selectedTabContent.style.display = 'block';
    selectedTabButton.classList.add('active');
}
