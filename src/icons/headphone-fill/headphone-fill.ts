import {html} from "lit";
import {TapIcon} from "../../icon";

export class HeadphoneFillIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C16.3349 2 19.8645 5.44784 19.9962 9.75082L20.0012 10.1714C20.4206 10.3198 20.8033 10.5606 21.1213 10.8787C21.5654 11.3227 21.8605 11.8947 21.9636 12.5512L21.9908 12.7731L22 13V15C22 15.8056 21.6796 16.563 21.1213 17.1213C20.6773 17.5654 20.1053 17.8605 19.4488 17.9636L19.2269 17.9908L19 18L17.8738 18.0006C17.4455 19.6636 15.9747 20.9079 14.1996 20.9951L14 21H13.333L13 21.5H11.5C10.6716 21.5 10 20.8284 10 20C10 19.1716 10.6716 18.5 11.5 18.5H13L13.333 19H14C15.0544 19 15.9182 18.1841 15.9945 17.1493L16 17V10H18C18 6.68629 15.3137 4 12 4C8.7616 4 6.12243 6.56557 6.00414 9.77506L6 10H8V18H5C4.1944 18 3.43701 17.6797 2.87868 17.1213C2.43464 16.6773 2.13954 16.1053 2.03639 15.4488L2.00918 15.2269L2 15V13C2 12.1944 2.32035 11.437 2.87868 10.8787C3.19327 10.5641 3.57207 10.3243 3.99965 10.1745L4 10C4 5.58172 7.58172 2 12 2Z" fill="currentColor"/>
      </svg>
      `);
  }
}