import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCenterFocusStrongProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCenterFocusStrong["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCenterFocusStrong["size"];
}
interface RuxIconCenterFocusStrongEvents {
}
interface RuxIconCenterFocusStrongSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCenterFocusStrong extends SvelteComponent {
    $$prop_def: RuxIconCenterFocusStrongProps;
    $$events_def: RuxIconCenterFocusStrongEvents;
    $$slot_def: RuxIconCenterFocusStrongSlots;
    $on<K extends keyof RuxIconCenterFocusStrongEvents>(type: K, callback: (e: RuxIconCenterFocusStrongEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCenterFocusStrongProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCenterFocusStrongElement | undefined;
}
export default RuxIconCenterFocusStrong;
