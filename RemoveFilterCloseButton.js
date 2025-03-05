import { LightningElement } from 'lwc';

export default class RemoveFilterCloseButton extends LightningElement {
    connectedCallback() {
        console.log('testing filter');
        if (window.location.href.includes('/lightning/o/Account/list?filterName=NewLastWeek')) {
            this.injectCSS();
        }

        // this.observeDOMChanges(); // Ensures CSS is reapplied if Salesforce updates the UI
    }

    injectCSS() {
        let style = document.createElement('style');
        console.log('Injecting custom CSS');

        style.innerText = `
            /* Hide the close (X) button */
            a.closeX {
                display: none !important;
            }
        `;

        document.head.appendChild(style);
    }

    observeDOMChanges() {
        const observer = new MutationObserver(() => {
            this.injectCSS(); // Reapply CSS if DOM updates
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }
}
