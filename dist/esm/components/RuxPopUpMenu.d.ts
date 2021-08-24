import { Components, JSX } from '@astrouxds/astro-web-components';
interface RuxPopUpMenuProps {
    /** Optional element to trigger opening and closing of the menu.
  If none is supplied the element where aria-controls === menu id will be assigned */
    triggerEl?: Components.RuxPopUpMenu["triggerEl"];
    /** Element to anchor the menu to. If none is given the menu will anchor
  to the trigger element where aria-controls === menu id */
    anchorEl?: Components.RuxPopUpMenu["anchorEl"];
    /** Boolean which controls when to show the menu */
    open?: Components.RuxPopUpMenu["open"];
}
interface RuxPopUpMenuEvents {
    /** Emitted when the menu is about to open. */
    "rux-menu-will-open": Parameters<JSX.RuxPopUpMenu["onRux-menu-will-open"]>[0];
    /** Emitted when the menu is about to close */
    "rux-menu-will-close": Parameters<JSX.RuxPopUpMenu["onRux-menu-will-close"]>[0];
    /** Emitted when the menu is open. */
    "rux-menu-did-open": Parameters<JSX.RuxPopUpMenu["onRux-menu-did-open"]>[0];
    /** Emitted when the menu is closed. */
    "rux-menu-did-close": Parameters<JSX.RuxPopUpMenu["onRux-menu-did-close"]>[0];
}
interface RuxPopUpMenuSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxPopUpMenu extends SvelteComponent {
    $$prop_def: RuxPopUpMenuProps;
    $$events_def: RuxPopUpMenuEvents;
    $$slot_def: RuxPopUpMenuSlots;
    $on<K extends keyof RuxPopUpMenuEvents>(type: K, callback: (e: RuxPopUpMenuEvents[K]) => any): () => void;
    $set($$props: Partial<RuxPopUpMenuProps>): void;
    constructor(options: any);
    get triggerEl(): any;
    set triggerEl(triggerEl: any);
    get anchorEl(): any;
    set anchorEl(anchorEl: any);
    get open(): any;
    set open(open: any);
    /** Returns 'true' if the menu is open, 'false' if it is not. */
    get isOpen(): Components.RuxPopUpMenu["isOpen"];
    /** Opens the menu. If the menu is already open it returns 'false'. */
    get show(): Components.RuxPopUpMenu["show"];
    /** Closes the menu. If the menu is already closed it returns 'false'. */
    get close(): Components.RuxPopUpMenu["close"];
    /** Toggles the menu open or close. Will return 'true' on menu open and 'false' on menu close */
    get toggle(): Components.RuxPopUpMenu["toggle"];
    get getWebComponent(): HTMLRuxPopUpMenuElement | undefined;
}
export default RuxPopUpMenu;
