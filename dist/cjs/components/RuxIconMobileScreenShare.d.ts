import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMobileScreenShareProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMobileScreenShare["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMobileScreenShare["size"];
}
interface RuxIconMobileScreenShareEvents {
}
interface RuxIconMobileScreenShareSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMobileScreenShare extends SvelteComponent {
    $$prop_def: RuxIconMobileScreenShareProps;
    $$events_def: RuxIconMobileScreenShareEvents;
    $$slot_def: RuxIconMobileScreenShareSlots;
    $on<K extends keyof RuxIconMobileScreenShareEvents>(type: K, callback: (e: RuxIconMobileScreenShareEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMobileScreenShareProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMobileScreenShareElement | undefined;
}
export default RuxIconMobileScreenShare;
