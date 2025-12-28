// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="主页.html"><strong aria-hidden="true">1.</strong> 主页</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="安装教程.html"><strong aria-hidden="true">2.</strong> 安装教程</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="基本系统.html"><strong aria-hidden="true">3.</strong> 基本系统</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="转职.html"><strong aria-hidden="true">4.</strong> 转职</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="纹章士/index.html"><strong aria-hidden="true">5.</strong> 纹章士</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="纹章士/马尔斯.html"><strong aria-hidden="true">5.1.</strong> 马尔斯</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="纹章士/赛莉卡.html"><strong aria-hidden="true">5.2.</strong> 赛莉卡</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="纹章士/西格尔特.html"><strong aria-hidden="true">5.3.</strong> 西格尔特</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="纹章士/米卡雅.html"><strong aria-hidden="true">5.4.</strong> 米卡雅</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="纹章士/罗伊.html"><strong aria-hidden="true">5.5.</strong> 罗伊</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="纹章士/里弗.html"><strong aria-hidden="true">5.6.</strong> 里弗</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="纹章士/露琪娜.html"><strong aria-hidden="true">5.7.</strong> 露琪娜</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="纹章士/琳.html"><strong aria-hidden="true">5.8.</strong> 琳</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="纹章士/琪姬.html"><strong aria-hidden="true">5.9.</strong> 琪姬</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="纹章士/海克托尔.html"><strong aria-hidden="true">5.10.</strong> 海克托尔</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="纹章士/艾克.html"><strong aria-hidden="true">5.11.</strong> 艾克</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="纹章士/贝雷特.html"><strong aria-hidden="true">5.12.</strong> 贝雷特</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="纹章士/库洛武.html"><strong aria-hidden="true">5.13.</strong> 库洛武</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="纹章士/神威.html"><strong aria-hidden="true">5.14.</strong> 神威</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="纹章士/塞涅里欧.html"><strong aria-hidden="true">5.15.</strong> 塞涅里欧</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="纹章士/艾莉可.html"><strong aria-hidden="true">5.16.</strong> 艾莉可</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="纹章士/卡米拉.html"><strong aria-hidden="true">5.17.</strong> 卡米拉</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="纹章士/艾黛尔贾特.html"><strong aria-hidden="true">5.18.</strong> 艾黛尔贾特</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="纹章士/琉尔.html"><strong aria-hidden="true">5.19.</strong> 琉尔</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/index.html"><strong aria-hidden="true">6.</strong> 角色</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/佛贾特.html"><strong aria-hidden="true">6.1.</strong> 佛贾特</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/克萝艾.html"><strong aria-hidden="true">6.2.</strong> 克萝艾</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/凡德雷.html"><strong aria-hidden="true">6.3.</strong> 凡德雷</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/史塔卢克.html"><strong aria-hidden="true">6.4.</strong> 史塔卢克</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/奥尔坦希亚.html"><strong aria-hidden="true">6.5.</strong> 奥尔坦希亚</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/孤雷葛里.html"><strong aria-hidden="true">6.6.</strong> 孤雷葛里</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/安娜.html"><strong aria-hidden="true">6.7.</strong> 安娜</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/安巴.html"><strong aria-hidden="true">6.8.</strong> 安巴</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/尤娜卡.html"><strong aria-hidden="true">6.9.</strong> 尤娜卡</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/布修隆.html"><strong aria-hidden="true">6.10.</strong> 布修隆</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/希特丽妮卡.html"><strong aria-hidden="true">6.11.</strong> 希特丽妮卡</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/帕涅托涅.html"><strong aria-hidden="true">6.12.</strong> 帕涅托涅</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/帝亚曼德.html"><strong aria-hidden="true">6.13.</strong> 帝亚曼德</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/庞德罗.html"><strong aria-hidden="true">6.14.</strong> 庞德罗</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/戈尔德玛莉.html"><strong aria-hidden="true">6.15.</strong> 戈尔德玛莉</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/札菲亚.html"><strong aria-hidden="true">6.16.</strong> 札菲亚</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/杰尔科巴.html"><strong aria-hidden="true">6.17.</strong> 杰尔科巴</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/柯岚.html"><strong aria-hidden="true">6.18.</strong> 柯岚</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/波聂.html"><strong aria-hidden="true">6.19.</strong> 波聂</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/洁德.html"><strong aria-hidden="true">6.20.</strong> 洁德</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/玛德琳.html"><strong aria-hidden="true">6.21.</strong> 玛德琳</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/玫琳.html"><strong aria-hidden="true">6.22.</strong> 玫琳</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/琉尔.html"><strong aria-hidden="true">6.23.</strong> 琉尔</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/罗萨德.html"><strong aria-hidden="true">6.24.</strong> 罗萨德</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/艾媞耶.html"><strong aria-hidden="true">6.25.</strong> 艾媞耶</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/艾比.html"><strong aria-hidden="true">6.26.</strong> 艾比</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/芙岚.html"><strong aria-hidden="true">6.27.</strong> 芙岚</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/花月.html"><strong aria-hidden="true">6.28.</strong> 花月</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/莫布.html"><strong aria-hidden="true">6.29.</strong> 莫布</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/菈琵思.html"><strong aria-hidden="true">6.30.</strong> 菈琵思</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/蜜丝提拉.html"><strong aria-hidden="true">6.31.</strong> 蜜丝提拉</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/贝珥.html"><strong aria-hidden="true">6.32.</strong> 贝珥</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/贾恩.html"><strong aria-hidden="true">6.33.</strong> 贾恩</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/赛勒斯提雅.html"><strong aria-hidden="true">6.34.</strong> 赛勒斯提雅</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/赛安达斯.html"><strong aria-hidden="true">6.35.</strong> 赛安达斯</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/路易.html"><strong aria-hidden="true">6.36.</strong> 路易</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/锡莉奴.html"><strong aria-hidden="true">6.37.</strong> 锡莉奴</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/阿尔弗雷德.html"><strong aria-hidden="true">6.38.</strong> 阿尔弗雷德</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="角色/霖丹.html"><strong aria-hidden="true">6.39.</strong> 霖丹</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="幕后.html"><strong aria-hidden="true">7.</strong> 幕后</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

