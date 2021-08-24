import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFilterCenterFocusProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFilterCenterFocus["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFilterCenterFocus["size"];
}
interface RuxIconFilterCenterFocusEvents {
}
interface RuxIconFilterCenterFocusSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFilterCenterFocus extends SvelteComponent {
    $$prop_def: RuxIconFilterCenterFocusProps;
    $$events_def: RuxIconFilterCenterFocusEvents;
    $$slot_def: RuxIconFilterCenterFocusSlots;
    $on<K extends keyof RuxIconFilterCenterFocusEvents>(type: K, callback: (e: RuxIconFilterCenterFocusEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFilterCenterFocusProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFilterCenterFocusElement | undefined;
}
export default RuxIconFilterCenterFocus;
