/**
 * Class representing a single DOM element.
 * Provides utility methods to manipulate the element, similar to jQuery.
 */
class DomElement {
  el: Element | null;

  /**
   * Initializes the DomElement instance using a selector string.
   * Only the first matched element will be handled.
   * @param selector - A CSS selector string.
   */
  constructor(selector: string) {
    this.el = document.querySelector(selector);
  }

  /**
   * Sets the inner HTML content of the element.
   * @param content - The HTML string to set.
   * @returns The current instance for method chaining.
   */
  html(content: string) {
    if (this.el instanceof HTMLElement) {
      this.el.innerHTML = content;
    }
    return this;
  }

  /**
   * Sets the text content of the element.
   * @param content - The plain text to set.
   * @returns The current instance for method chaining.
   */
  text(content: string) {
    if (this.el instanceof HTMLElement) {
      this.el.textContent = content;
    }
    return this;
  }

  /**
   * Sets or gets the value of an input element.
   * @param value - The value to set. If omitted, returns the current value.
   * @returns The input value or the current instance for chaining.
   */
  val(value?: string): string | void {
    if (!(this.el instanceof HTMLInputElement)) return;
    return value !== undefined ? (this.el.value = value) : this.el.value;
  }

  /**
   * Adds a CSS class to the element.
   * @param className - The class to add.
   * @returns The current instance for method chaining.
   */
  addClass(className: string) {
    this.el?.classList.add(className);
    return this;
  }

  /**
   * Removes a CSS class from the element.
   * @param className - The class to remove.
   * @returns The current instance for method chaining.
   */
  removeClass(className: string) {
    this.el?.classList.remove(className);
    return this;
  }

  /**
   * Toggles a CSS class on the element.
   * @param className - The class to toggle.
   * @returns The current instance for method chaining.
   */
  toggleClass(className: string) {
    this.el?.classList.toggle(className);
    return this;
  }

  /**
   * Attaches an event listener to the element.
   * @param event - The event name (e.g., 'click').
   * @param handler - The callback function to execute.
   * @returns The current instance for method chaining.
   */
  on(event: string, handler: EventListener) {
    this.el?.addEventListener(event, handler);
    return this;
  }

  /**
   * Makes the element visible (removes display: none).
   * @returns The current instance for method chaining.
   */
  show() {
    if (this.el instanceof HTMLElement) {
      this.el.style.display = "";
    }
    return this;
  }

  /**
   * Hides the element by setting display: none.
   * @returns The current instance for method chaining.
   */
  hide() {
    if (this.el instanceof HTMLElement) {
      this.el.style.display = "none";
    }
    return this;
  }

  /**
   * Gradually makes the element visible by animating its opacity from 0 to 1.
   * @param duration - Animation duration in milliseconds (default is 400ms).
   * @returns The current instance for method chaining.
   */
  fadeIn(duration = 400) {
    if (!(this.el instanceof HTMLElement)) return this;

    const el = this.el as HTMLElement;
    el.style.opacity = "0";
    el.style.display = "";

    let last = performance.now();

    const tick = () => {
      const now = performance.now();
      const delta = (now - last) / duration;
      const opacity = parseFloat(el.style.opacity);
      el.style.opacity = String(Math.min(opacity + delta, 1));
      last = now;

      if (parseFloat(el.style.opacity) < 1) {
        requestAnimationFrame(tick);
      }
    };

    tick();
    return this;
  }

  /**
   * Gradually hides the element by animating its opacity from 1 to 0.
   * Once invisible, sets display to none.
   * @param duration - Animation duration in milliseconds (default is 400ms).
   * @returns The current instance for method chaining.
   */
  fadeOut(duration = 400) {
    if (!(this.el instanceof HTMLElement)) return this;

    const el = this.el as HTMLElement;
    el.style.opacity = "1";

    let last = performance.now();

    const tick = () => {
      const now = performance.now();
      const delta = (now - last) / duration;
      const opacity = parseFloat(el.style.opacity);
      el.style.opacity = String(Math.max(opacity - delta, 0));
      last = now;

      if (parseFloat(el.style.opacity) > 0) {
        requestAnimationFrame(tick);
      } else {
        el.style.display = "none";
      }
    };

    tick();
    return this;
  }
}

/**
 * Class representing a collection of DOM elements.
 * Enables batch manipulation of all matched elements.
 */
class DomCollection {
  elements: NodeListOf<Element>;

  /**
   * Initializes the DomCollection instance with a CSS selector.
   * @param selector - A string to match elements.
   */
  constructor(selector: string) {
    this.elements = document.querySelectorAll(selector);
  }

  html(content: string) {
    this.elements.forEach(el => {
      if (el instanceof HTMLElement) el.innerHTML = content;
    });
    return this;
  }

  text(content: string) {
    this.elements.forEach(el => {
      if (el instanceof HTMLElement) el.textContent = content;
    });
    return this;
  }

  addClass(className: string) {
    this.elements.forEach(el => el.classList.add(className));
    return this;
  }

  removeClass(className: string) {
    this.elements.forEach(el => el.classList.remove(className));
    return this;
  }

  toggleClass(className: string) {
    this.elements.forEach(el => el.classList.toggle(className));
    return this;
  }

  on(event: string, handler: EventListener) {
    this.elements.forEach(el => el.addEventListener(event, handler));
    return this;
  }

  show() {
    this.elements.forEach(el => {
      if (el instanceof HTMLElement) el.style.display = "";
    });
    return this;
  }

  hide() {
    this.elements.forEach(el => {
      if (el instanceof HTMLElement) el.style.display = "none";
    });
    return this;
  }

  fadeIn(duration = 400) {
    this.elements.forEach(el => {
      if (!(el instanceof HTMLElement)) return;

      el.style.opacity = "0";
      el.style.display = "";

      let last = performance.now();

      const tick = () => {
        const now = performance.now();
        const delta = (now - last) / duration;
        const opacity = parseFloat(el.style.opacity);
        el.style.opacity = String(Math.min(opacity + delta, 1));
        last = now;

        if (parseFloat(el.style.opacity) < 1) {
          requestAnimationFrame(tick);
        }
      };

      tick();
    });

    return this;
  }

  fadeOut(duration = 400) {
    this.elements.forEach(el => {
      if (!(el instanceof HTMLElement)) return;

      el.style.opacity = "1";

      let last = performance.now();

      const tick = () => {
        const now = performance.now();
        const delta = (now - last) / duration;
        const opacity = parseFloat(el.style.opacity);
        el.style.opacity = String(Math.max(opacity - delta, 0));
        last = now;

        if (parseFloat(el.style.opacity) > 0) {
          requestAnimationFrame(tick);
        } else {
          el.style.display = "none";
        }
      };

      tick();
    });

    return this;
  }
}

/**
 * Factory function to create a wrapper for a single DOM element.
 * @param selector - A CSS selector string.
 * @returns A DomElement instance.
 */
function $(selector: string): DomElement {
  return new DomElement(selector);
}

/**
 * Factory function to create a wrapper for a collection of DOM elements.
 * @param selector - A CSS selector string.
 * @returns A DomCollection instance.
 */
function $all(selector: string): DomCollection {
  return new DomCollection(selector);
}

// ES6 exports
export { DomElement, DomCollection, $, $all };
