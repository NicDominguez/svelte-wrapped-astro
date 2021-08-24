import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRoundedCornerProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRoundedCorner["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRoundedCorner["size"];
}
interface RuxIconRoundedCornerEvents {
}
interface RuxIconRoundedCornerSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRoundedCorner extends SvelteComponent {
    $$prop_def: RuxIconRoundedCornerProps;
    $$events_def: RuxIconRoundedCornerEvents;
    $$slot_def: RuxIconRoundedCornerSlots;
    $on<K extends keyof RuxIconRoundedCornerEvents>(type: K, callback: (e: RuxIconRoundedCornerEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRoundedCornerProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRoundedCornerElement | undefined;
}
export default RuxIconRoundedCorner;
