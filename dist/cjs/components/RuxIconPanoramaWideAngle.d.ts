import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPanoramaWideAngleProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPanoramaWideAngle["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPanoramaWideAngle["size"];
}
interface RuxIconPanoramaWideAngleEvents {
}
interface RuxIconPanoramaWideAngleSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPanoramaWideAngle extends SvelteComponent {
    $$prop_def: RuxIconPanoramaWideAngleProps;
    $$events_def: RuxIconPanoramaWideAngleEvents;
    $$slot_def: RuxIconPanoramaWideAngleSlots;
    $on<K extends keyof RuxIconPanoramaWideAngleEvents>(type: K, callback: (e: RuxIconPanoramaWideAngleEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPanoramaWideAngleProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPanoramaWideAngleElement | undefined;
}
export default RuxIconPanoramaWideAngle;
