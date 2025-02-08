import "./Button.css";

export const Button = (icon, text, link) => `
<button class="my-btn">
    <a href="${link}" target="_blank">
        <img src=${icon} alt='${text} icon'/>
        <h4>${text}</h4>
    </a>
</button>
`;