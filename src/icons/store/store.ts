import {html} from "lit";
import {TapIcon} from "../../icon";

export class StoreIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_24_737)">
          <path d="M20.958 11.05V19C20.958 19.55 20.763 20.0208 20.3732 20.4125C19.9834 20.8042 19.5147 21 18.9673 21H5.0327C4.48527 21 4.01664 20.8042 3.6268 20.4125C3.23697 20.0208 3.04205 19.55 3.04205 19V11.05C2.66051 10.7 2.36605 10.25 2.15869 9.7C1.95133 9.15 1.94719 8.55 2.14625 7.9L3.19135 4.5C3.32406 4.06667 3.56045 3.70833 3.90052 3.425C4.24059 3.14167 4.63457 3 5.08247 3H18.9175C19.3654 3 19.7553 3.1375 20.087 3.4125C20.4188 3.6875 20.6594 4.05 20.8087 4.5L21.8537 7.9C22.0528 8.55 22.0487 9.14167 21.8413 9.675C21.6339 10.2083 21.3395 10.6667 20.958 11.05ZM14.1897 10C14.6376 10 14.9777 9.84583 15.2099 9.5375C15.4422 9.22917 15.5334 8.88333 15.4836 8.5L14.9362 5H12.9953V8.7C12.9953 9.05 13.1115 9.35417 13.3437 9.6125C13.5759 9.87083 13.8579 10 14.1897 10ZM9.71075 10C10.0923 10 10.4033 9.87083 10.6439 9.6125C10.8844 9.35417 11.0047 9.05 11.0047 8.7V5H9.06378L8.51635 8.5C8.45 8.9 8.53709 9.25 8.77763 9.55C9.01816 9.85 9.3292 10 9.71075 10ZM5.28154 10C5.58013 10 5.84141 9.89167 6.06536 9.675C6.28931 9.45833 6.42616 9.18333 6.47593 8.85L7.02336 5H5.08247L4.08714 8.35C3.98761 8.68333 4.04152 9.04167 4.24888 9.425C4.45624 9.80833 4.80046 10 5.28154 10ZM18.7185 10C19.1995 10 19.5479 9.80833 19.7636 9.425C19.9792 9.04167 20.029 8.68333 19.9129 8.35L18.8678 5H16.9766L17.5241 8.85C17.5738 9.18333 17.7107 9.45833 17.9346 9.675C18.1586 9.89167 18.4199 10 18.7185 10ZM5.0327 19H18.9673V11.95C18.8844 11.9833 18.8304 12 18.8056 12H18.7185C18.2706 12 17.8766 11.925 17.5365 11.775C17.1964 11.625 16.8605 11.3833 16.5287 11.05C16.2301 11.35 15.8901 11.5833 15.5085 11.75C15.127 11.9167 14.7206 12 14.2893 12C13.8414 12 13.4225 11.9167 13.0327 11.75C12.6428 11.5833 12.2986 11.35 12 11.05C11.718 11.35 11.3904 11.5833 11.0171 11.75C10.6439 11.9167 10.2416 12 9.81028 12C9.3292 12 8.89375 11.9167 8.50391 11.75C8.11407 11.5833 7.76986 11.35 7.47126 11.05C7.12289 11.4 6.77868 11.6458 6.4386 11.7875C6.09853 11.9292 5.71284 12 5.28154 12H5.16956C5.12809 12 5.08247 11.9833 5.0327 11.95V19Z" fill="currentColor"/>
        </g>
        <defs>
          <clipPath id="clip0_24_737">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      `);
  }
}