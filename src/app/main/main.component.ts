import { Component, HostListener } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-main",
  standalone: true,
  imports: [MatIconModule],
  templateUrl: "./main.component.html",
  styleUrl: "./main.component.css",
})
export class MainComponent {
  private prevScrollPos: number = window.pageYOffset;
  private scrollListener = this.onWindowScroll.bind(this);

  ngOnInit(): void {
    this.myAge();
    this.scrollListener = this.onWindowScroll.bind(this);
    window.addEventListener("scroll", this.scrollListener);

    const dropdownButton = document.getElementById("dropdownButton");
    const dropdownMenu = document.getElementById("dropdownMenu");

    if (dropdownButton && dropdownMenu) {
      dropdownButton.addEventListener("click", () => {
        const isExpanded =
          dropdownButton.getAttribute("aria-expanded") === "true";
        dropdownButton.setAttribute("aria-expanded", (!isExpanded).toString());
        if (isExpanded) {
          this.closeDropdown();
        } else {
          this.openDropdown();
        }
      });
    }
  }

  ngOnDestroy() {
    window.removeEventListener("scroll", this.scrollListener);
  }

  scrollToElement(element: string): void {
    const elementID = document.getElementById(element);
    elementID?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  myAge(): void {
    const birthYear = 2002;
    const currentYear = new Date().getFullYear();

    const ageElement = document.getElementById("age");
    if (ageElement) {
      const age = currentYear - birthYear;
      ageElement.innerHTML = age.toString();
    } else {
      console.error("Element not found");
    }
  }

  onWindowScroll() {
    const currentScrollPos = window.pageYOffset;
    const navbar = document.getElementById("navbar");
    if (navbar) {
      if (this.prevScrollPos > currentScrollPos) {
        // User has scrolled up
        navbar.classList.add("show");
      } else {
        // User has scrolled down
        navbar.classList.remove("show");
      }
    }

    const dropdownButton = document.getElementById("dropdownButton");
    const dropdownMenu = document.getElementById("dropdownMenu");

    if (
      dropdownButton &&
      dropdownMenu &&
      dropdownButton.getAttribute("aria-expanded") === "true"
    ) {
      this.closeDropdown();
    }

    // Update previous scroll position
    this.prevScrollPos = currentScrollPos;
  }

  openDropdown() {
    const dropdownButton = document.getElementById("dropdownButton");
    const dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownButton && dropdownMenu) {
      dropdownButton.setAttribute("aria-expanded", "true");
      dropdownMenu.classList.remove("hidden");
    }
  }

  closeDropdown() {
    const dropdownButton = document.getElementById("dropdownButton");
    const dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownButton && dropdownMenu) {
      dropdownButton.setAttribute("aria-expanded", "false");
      dropdownMenu.classList.add("hidden");
    }
  }

  goToPage(page: string): void {
    window.open(page, "_blank");
  }
}
