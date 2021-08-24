import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCenterFocusWeakProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCenterFocusWeak["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCenterFocusWeak["size"];
}
interface RuxIconCenterFocusWeakEvents {
}
interface RuxIconCenterFocusWeakSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCenterFocusWeak extends SvelteComponent {
    $$prop_def: RuxIconCenterFocusWeakProps;
    $$events_def: RuxIconCenterFocusWeakEvents;
    $$slot_def: RuxIconCenterFocusWeakSlots;
    $on<K extends keyof RuxIconCenterFocusWeakEvents>(type: K, callback: (e: RuxIconCenterFocusWeakEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCenterFocusWeakProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCenterFocusWeakElement | undefined;
}
export default RuxIconCenterFocusWeak;
