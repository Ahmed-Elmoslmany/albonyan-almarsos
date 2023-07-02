class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._tooltopContainer;
    this._tooltipText = "Some dummy tooltip text";
  }

  connectedCallback() {
    if (this.hasAttribute("text"))
      this._tooltipText = this.getAttribute("text");
    const tooltipIcon = document.createElement("span");
    tooltipIcon.textContent = " (?)";
    tooltipIcon.addEventListener("mouseenter", this._showToolTip.bind(this));
    tooltipIcon.addEventListener("mouseleave", this._hideToolTip.bind(this));
    this.appendChild(tooltipIcon);
    this.style.position = "relative";
  }

  _showToolTip() {
    this._tooltopContainer = document.createElement("div");
    this._tooltopContainer.textContent = "this is the tooltip";
    this._tooltopContainer.style.backgroundColor = "black";
    this._tooltopContainer.style.color = "white";
    this._tooltopContainer.style.position = "absolute";
    this.appendChild(this._tooltopContainer);
  }

  _hideToolTip() {
    this.removeChild(this._tooltopContainer);
  }
}

customElements.define("uc-tooltip", Tooltip);


