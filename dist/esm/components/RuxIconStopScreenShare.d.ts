import { Components } from '@astrouxds/astro-web-components';
interface RuxIconStopScreenShareProps {
    /** The fill color for the icon */
    color?: Components.RuxIconStopScreenShare["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconStopScreenShare["size"];
}
interface RuxIconStopScreenShareEvents {
}
interface RuxIconStopScreenShareSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconStopScreenShare extends SvelteComponent {
    $$prop_def: RuxIconStopScreenShareProps;
    $$events_def: RuxIconStopScreenShareEvents;
    $$slot_def: RuxIconStopScreenShareSlots;
    $on<K extends keyof RuxIconStopScreenShareEvents>(type: K, callback: (e: RuxIconStopScreenShareEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconStopScreenShareProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconStopScreenShareElement | undefined;
}
export default RuxIconStopScreenShare;
