document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll helper function
    function smoothScrollTo(selector) {
        const element = document.querySelector(selector);
        if(element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    // Map buttons to sections or actions
    const getStartedBtns = document.querySelectorAll(".btn-primary, .get-started");
    const gatherVendorsBtns = document.querySelectorAll(".btn-secondary, nav ul li a[href='#']:nth-child(2)");
    const signInLink = document.querySelector("nav ul li a.sign-in");
    const talkExpertBtn = document.querySelector(".call-to-action .btn-secondary");

    // Assuming the sections exist with these IDs/classes or update accordingly:
    // "Vendors" section scroll target
    const vendorsSection = ".vendors";
    // "How It Works" or Call to Action section for "Get Started"
    const howItWorksSection = ".how-it-works";
    const callToActionSection = ".call-to-action";

    // Smooth scroll on "Get Started" buttons
    getStartedBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            // Scroll to How It Works or Call to Action
            smoothScrollTo(callToActionSection);
        });
    });

    // Smooth scroll on "Gather Vendors" button - scroll to vendors section
    gatherVendorsBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            smoothScrollTo(vendorsSection);
        });
    });

    // Modal popup creation helper
    function createModal(contentHtml) {
        // Create overlay
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = "10000";

        // Create modal box
        const modalBox = document.createElement("div");
        modalBox.style.backgroundColor = "white";
        modalBox.style.padding = "30px";
        modalBox.style.borderRadius = "8px";
        modalBox.style.maxWidth = "400px";
        modalBox.style.width = "90%";
        modalBox.style.position = "relative";
        modalBox.innerHTML = contentHtml;

        // Close button
        const closeBtn = document.createElement("button");
        closeBtn.textContent = "Close";
        closeBtn.style.position = "absolute";
        closeBtn.style.top = "10px";
        closeBtn.style.right = "10px";
        closeBtn.style.background = "none";
        closeBtn.style.border = "none";
        closeBtn.style.fontSize = "1rem";
        closeBtn.style.cursor = "pointer";

        closeBtn.addEventListener("click", () => {
            document.body.removeChild(overlay);
        });

        modalBox.appendChild(closeBtn);
        overlay.appendChild(modalBox);
        document.body.appendChild(overlay);

        overlay.addEventListener("click", e => {
            if (e.target === overlay) {
                document.body.removeChild(overlay);
            }
        });
    }

    // Sign In modal popup
    if(signInLink) {
        signInLink.addEventListener("click", (e) => {
            e.preventDefault();
            const signInHtml = `
                <h2>Sign In</h2>
                <form id="signInForm">
                    <label for="email">Email:</label><br/>
                    <input type="email" id="email" name="email" required style="width: 100%; padding: 8px; margin-bottom: 15px"/><br/>
                    <label for="password">Password:</label><br/>
                    <input type="password" id="password" name="password" required style="width: 100%; padding: 8px; margin-bottom: 20px"/><br/>
                    <button type="submit" style="background-color: var(--color-primary); color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor:pointer;">Sign In</button>
                </form>
            `;
            createModal(signInHtml);

            // Add form submission handler for demo
            const signInForm = document.getElementById("signInForm");
            signInForm.addEventListener("submit", (ev) => {
                ev.preventDefault();
                alert("Sign In feature is not implemented yet.");
            });
        });
    }

    // Talk to an expert modal popup
    if(talkExpertBtn) {
        talkExpertBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const expertHtml = `
                <h2>Talk to an Expert</h2>
                <form id="expertForm">
                    <label for="name">Name:</label><br/>
                    <input type="text" id="name" name="name" required style="width: 100%; padding: 8px; margin-bottom: 15px"/><br/>
                    <label for="emailExp">Email:</label><br/>
                    <input type="email" id="emailExp" name="emailExp" required style="width: 100%; padding: 8px; margin-bottom: 15px"/><br/>
                    <label for="message">Message:</label><br/>
                    <textarea id="message" name="message" rows="4" style="width: 100%; padding: 8px; margin-bottom: 20px"></textarea><br/>
                    <button type="submit" style="background-color: var(--color-primary); color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor:pointer;">Send Message</button>
                </form>
            `;
            createModal(expertHtml);

            // Form submit handler for demo
            const expertForm = document.getElementById("expertForm");
            expertForm.addEventListener("submit", (ev) => {
                ev.preventDefault();
                alert("Thanks for your message! We will get back to you shortly.");
            });
        });
    }

    // Additional: handle nav links clicking other than Sign In and Get Started / Vendors
    // Scroll to corresponding sections if nav links have href="#"
    document.querySelectorAll("nav ul li a").forEach(link => {
        const href = link.getAttribute("href");
        if(href && href.startsWith("#") && href.length > 1) {
            link.addEventListener("click", e => {
                e.preventDefault();
                smoothScrollTo(href);
            });
        }
    });
});