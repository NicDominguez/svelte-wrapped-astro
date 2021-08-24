import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMenuProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMenu["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMenu["size"];
}
interface RuxIconMenuEvents {
}
interface RuxIconMenuSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMenu extends SvelteComponent {
    $$prop_def: RuxIconMenuProps;
    $$events_def: RuxIconMenuEvents;
    $$slot_def: RuxIconMenuSlots;
    $on<K extends keyof RuxIconMenuEvents>(type: K, callback: (e: RuxIconMenuEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMenuProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMenuElement | undefined;
}
export default RuxIconMenu;
